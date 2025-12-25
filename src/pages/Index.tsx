import { useState } from "react";
import Hero from "@/components/Hero";
import SectorBenefits from "@/components/SectorBenefits";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hasClickedContact, setHasClickedContact] = useState(false);

  const sendWebhookNotification = async () => {
    if (hasClickedContact) return; // Evita múltiplas notificações na mesma sessão

    setHasClickedContact(true);

    try {
      const webhookUrl = 'https://n8nwebhooks01.brhorn.com/webhook/5572cf97-cc95-4241-949a-02082b1b6ead';
      const credentials = import.meta.env.VITE_WEBHOOK_CREDENTIALS;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (credentials) {
        const encodedCredentials = credentials.includes(':') ? btoa(credentials) : credentials;
        headers['Authorization'] = `Basic ${encodedCredentials}`;
      }

      await fetch(webhookUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          event_type: 'contact_button_click',
          timestamp: new Date().toISOString(),
          source: 'website_contact_button',
          page_url: window.location.href,
          user_agent: navigator.userAgent,
          message: 'Usuário clicou em "Fale com um Especialista" mas não preencheu o formulário'
        })
      });
    } catch (error) {
      console.error('Erro ao enviar notificação webhook:', error);
    }
  };

  const handleFormSubmit = () => {
    // Reset o flag quando o formulário é enviado
    setHasClickedContact(false);
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Hero onContactClick={sendWebhookNotification} />
      <SectorBenefits />
      <Technology onContactClick={sendWebhookNotification} />

      <CTASection
        onOpenContact={() => setIsContactModalOpen(true)}
        onContactClick={sendWebhookNotification}
      />
      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Index;
