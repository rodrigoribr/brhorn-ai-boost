import { useState } from "react";
import Hero from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { ValueProp } from "@/components/ValueProp";
import { AxionSection } from "@/components/AxionSection";
import { ViaSerraSection } from "@/components/ViaSerraSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [hasClickedContact, setHasClickedContact] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const sendWebhookNotification = async (source = "website_contact_intent") => {
    if (hasClickedContact) return;
    setHasClickedContact(true);

    try {
      const webhookUrl = "https://n8nwebhooks01.brhorn.com/webhook/5572cf97-cc95-4241-949a-02082b1b6ead";
      const credentials = import.meta.env.VITE_WEBHOOK_CREDENTIALS;

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (credentials) {
        const encodedCredentials = credentials.includes(":") ? btoa(credentials) : credentials;
        headers.Authorization = `Basic ${encodedCredentials}`;
      }

      await fetch(webhookUrl, {
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

  const openContact = (source?: string) => {
    void sendWebhookNotification(source);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-black">
      <Hero onContactClick={() => openContact("hero_contact_button")} />
      <PainPoints />
      <AxionSection onContactClick={() => openContact("axion_section_button")} />
      <ViaSerraSection onContactClick={() => openContact("viaserra_section_button")} />
      <ValueProp />
      <LeadFormSection onContactClick={() => openContact("final_cta_button")} />
      <Footer />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Index;
