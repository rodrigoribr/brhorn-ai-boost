
-- Botão de call: email deixa de ser obrigatório (o botão só pede nome+telefone)
ALTER TABLE public.contact_leads ALTER COLUMN email DROP NOT NULL;

-- Coluna para distinguir a origem do lead (form completo vs botão de call)
ALTER TABLE public.contact_leads ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'contact_form';
