import { useState } from "react";

// Estado dos modais de contato + evento do Meta Pixel no clique do WhatsApp.
// O aviso ao n8n (webhook CTA_site_brhorn) saiu em 2026-10-20: o fluxo estava desativado e gravava IP.
export const useContactIntent = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);

  return {
    isContactOpen,
    isCallOpen,
    closeContact: () => setIsContactOpen(false),
    closeCall: () => setIsCallOpen(false),
    // A origem segue no parâmetro para quando o rastreio por botão voltar.
    openContact: (_source: string) => setIsContactOpen(true),
    openCall: () => setIsCallOpen(true),
    trackWhatsapp: (_source: string) => {
      window.fbq?.("track", "Contact");
    },
  };
};
