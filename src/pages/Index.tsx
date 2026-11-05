import { SiteHeader } from "@/components/home/SiteHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemasSection } from "@/components/home/ProblemasSection";
import { AreasSection } from "@/components/home/AreasSection";
import { FasesSection } from "@/components/home/FasesSection";
import { SegurancaSection } from "@/components/home/SegurancaSection";
import { CasosSection } from "@/components/home/CasosSection";
import { AgentePessoalSection } from "@/components/home/AgentePessoalSection";
import { QuemFazSection } from "@/components/home/QuemFazSection";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { useContactIntent } from "@/hooks/use-contact-intent";

const Index = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, openCall, trackWhatsapp } =
    useContactIntent();

  return (
    <div className="min-h-screen bg-t-paper font-sans text-t-ink">
      <SiteHeader />
      <main>
        <HeroSection
          onCallClick={openCall}
          onFormClick={() => openContact("hero_form_link")}
        />
        <CasosSection />
        <ProblemasSection />
        <AreasSection />
        <FasesSection />
        <SegurancaSection />
        <QuemFazSection />
        <AgentePessoalSection />
      </main>
      <Footer>
        <FechoCarta
          titulo="Qual rotina da sua empresa você tiraria da mão da equipe primeiro?"
          texto="Conte em poucas linhas. A primeira conversa é sem compromisso, e você sai dela sabendo se um agente resolve, quanto trabalho dá e por onde começar."
          mensagemWhatsapp="Olá! Vim pelo site da brhorn e quero conversar sobre agentes de IA para a minha empresa."
          onWhatsappClick={() => trackWhatsapp("final_whatsapp")}
          onFormClick={() => openContact("final_form_button")}
        />
      </Footer>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default Index;
