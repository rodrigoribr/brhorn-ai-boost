import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Formulário "Descreva o seu caso" do site. Mesmo padrão do call-request: grava em contact_leads
// com a service role, então o site não depende da policy pública de INSERT.
// Não guarda IP nem user agent: a política de privacidade promete só os campos do formulário.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

// Corta o texto e devolve null se vier vazio, para não gravar "" no banco.
const texto = (v: unknown, max: number) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json();
    const name = texto(body.name, 200);
    const email = texto(body.email, 200);
    const phone = texto(body.phone, 40);
    const sector = texto(body.sector, 200);

    if (!name || !email || !phone || !sector) {
      return json({ error: "name, email, phone e sector são obrigatórios" }, 400);
    }

    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    const { error } = await supabase.from("contact_leads").insert({
      name,
      email,
      phone,
      sector,
      company: texto(body.company, 200),
      message: texto(body.message, 5000),
      source: "contact_form",
    });

    if (error) throw error;

    return json({ success: true }, 200);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erro desconhecido";
    return json({ error: message }, 500);
  }
});
