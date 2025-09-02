-- Remove the public read policy that exposes customer data
DROP POLICY IF EXISTS "Allow reading contact leads" ON public.contact_leads;

-- Create a new policy that only allows administrators to read contact leads
CREATE POLICY "Only admins can read contact leads" 
ON public.contact_leads 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));