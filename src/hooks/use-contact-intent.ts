import { track } from "@vercel/analytics";
import { registrarContato, registrarInicioTeste } from "@/lib/consentimento";

// Evento do Meta Pixel no clique do WhatsApp. Os formulários (descrever por escrito e pedir ligação)
// saíram em 2026-11-22: o site fala só por WhatsApp e pelo chat de diagnóstico.
export const useContactIntent = () => ({
  trackWhatsapp: (source: string) => registrarContato("Contact", source, "whatsapp"),
  // DEV-0066: "Testar grátis" do ViaSerra. Pixel só com aceite; o Vercel Analytics não usa cookie.
  // O site vai para o Cloudflare Pages: sem a Vercel, o track() vira no-op e sobra o Pixel.
  trackTesteViaSerra: (source: string) => {
    registrarInicioTeste(source);
    track("viaserra_testar_gratis", { origem: source });
  },
});
