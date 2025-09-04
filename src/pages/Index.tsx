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
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      const credentials = import.meta.env.VITE_WEBHOOK_CREDENTIALS;

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        },
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
