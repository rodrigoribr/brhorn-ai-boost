import { SiteHeader } from "@/components/home/SiteHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicosSection } from "@/components/home/ServicosSection";
import { ProjetosSection } from "@/components/home/ProjetosSection";
import { ComoTrabalhoSection } from "@/components/home/ComoTrabalhoSection";
import { QuemFazSection } from "@/components/home/QuemFazSection";
import { ContatoSection } from "@/components/home/ContatoSection";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer from "@/components/Footer";
import { useContactIntent } from "@/hooks/use-contact-intent";

const Index = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, openCall, trackWhatsapp } =
    useContactIntent();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-projeto/20">
      <SiteHeader />
      <main>
        <HeroSection
          onWhatsappClick={() => trackWhatsapp("hero_whatsapp")}
          onCallClick={openCall}
          onFormClick={() => openContact("hero_form_link")}
        />
        <ServicosSection />
        <ProjetosSection />
        <ComoTrabalhoSection />
        <QuemFazSection />
        <ContatoSection
          onWhatsappClick={() => trackWhatsapp("final_whatsapp")}
          onFormClick={() => openContact("final_form_button")}
        />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default Index;
