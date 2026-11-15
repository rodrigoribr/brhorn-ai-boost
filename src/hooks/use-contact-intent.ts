import { useState } from "react";
import { registrarContato } from "@/lib/consentimento";

// Estado dos modais de contato + evento do Meta Pixel no clique do WhatsApp.
// O aviso ao n8n (webhook CTA_site_brhorn) saiu em 2026-10-20: o fluxo estava desativado e gravava IP.
export const useContactIntent = () => {
  const [contactSource, setContactSource] = useState<string | null>(null);
  const [isCallOpen, setIsCallOpen] = useState(false);

  return {
    isContactOpen: contactSource !== null,
    contactSource,
    isCallOpen,
    closeContact: () => setContactSource(null),
    closeCall: () => setIsCallOpen(false),
    openContact: (source: string) => setContactSource(source),
    openCall: () => setIsCallOpen(true),
    trackWhatsapp: (source: string) => registrarContato("Contact", source, "whatsapp"),
  };
};
