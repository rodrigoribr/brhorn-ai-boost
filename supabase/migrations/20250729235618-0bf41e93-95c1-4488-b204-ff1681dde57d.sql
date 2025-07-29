-- Create a table for contact leads from the landing page
CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  sector TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserting new contact leads (public access)
CREATE POLICY "Anyone can insert contact leads" 
ON public.contact_leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all leads (you can restrict this later)
CREATE POLICY "Allow reading contact leads" 
ON public.contact_leads 
FOR SELECT 
USING (true);

-- Create index for email searches
CREATE INDEX idx_contact_leads_email ON public.contact_leads(email);

-- Create index for created_at for time-based queries
CREATE INDEX idx_contact_leads_created_at ON public.contact_leads(created_at DESC);