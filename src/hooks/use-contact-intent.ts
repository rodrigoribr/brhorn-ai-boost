import { useRef, useState } from "react";

const WEBHOOK_URL = "https://n8nwebhooks01.brhorn.com/webhook/5572cf97-cc95-4241-949a-02082b1b6ead";

// Estado dos modais de contato + aviso ao n8n na primeira intenção de contato da visita.
export const useContactIntent = () => {
  const notified = useRef(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);

  const notify = async (source = "website_contact_intent") => {
    if (notified.current) return;
    notified.current = true;

    try {
      const credentials = import.meta.env.VITE_WEBHOOK_CREDENTIALS;
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (credentials) {
        headers.Authorization = `Basic ${credentials.includes(":") ? btoa(credentials) : credentials}`;
      }

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
          event_type: "contact_button_click",
          timestamp: new Date().toISOString(),
          source,
          page_url: window.location.href,
          user_agent: navigator.userAgent,
          message: "Visitante demonstrou interesse nos produtos brhorn",
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar notificação webhook:", error);
    }
  };

  return {
    isContactOpen,
    isCallOpen,
    closeContact: () => setIsContactOpen(false),
    closeCall: () => setIsCallOpen(false),
    openContact: (source: string) => {
      void notify(source);
      setIsContactOpen(true);
    },
    openCall: () => setIsCallOpen(true),
    trackWhatsapp: (source: string) => {
      void notify(source);
      window.fbq?.("track", "Contact");
    },
  };
};
