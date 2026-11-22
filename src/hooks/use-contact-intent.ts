import { registrarContato } from "@/lib/consentimento";

// Evento do Meta Pixel no clique do WhatsApp. Os formulários (descrever por escrito e pedir ligação)
// saíram em 2026-11-22: o site fala só por WhatsApp e pelo chat de diagnóstico.
export const useContactIntent = () => ({
  trackWhatsapp: (source: string) => registrarContato("Contact", source, "whatsapp"),
});
