-- Drop all existing policies on contact_leads
DROP POLICY IF EXISTS "Allow reading contact leads" ON public.contact_leads;
DROP POLICY IF EXISTS "Only admins can read contact leads" ON public.contact_leads;
DROP POLICY IF EXISTS "Anyone can insert contact leads" ON public.contact_leads;

-- Recreate secure policies
-- Only administrators can read contact leads (fixes security vulnerability)
CREATE POLICY "Only admins can read contact leads" 
ON public.contact_leads 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Keep the insert policy for public contact form submissions
CREATE POLICY "Anyone can insert contact leads" 
ON public.contact_leads 
FOR INSERT 
WITH CHECK (true);