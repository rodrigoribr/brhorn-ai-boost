import { SiteHeader } from "@/components/home/SiteHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { FasesSection } from "@/components/home/FasesSection";
import { CasosSection } from "@/components/home/CasosSection";
import { RotinaDemo } from "@/components/home/RotinaDemo";
import Footer, { FechoCarta } from "@/components/Footer";
import { FECHO } from "@/content/consultoriaAgentes";
import { CONTATO_ROTINA_WHATSAPP } from "@/lib/contato";
import { useContactIntent } from "@/hooks/use-contact-intent";

const Index = () => {
  const { trackWhatsapp } = useContactIntent();

  return (
    <div className="min-h-screen bg-t-paper font-sans text-t-ink">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-t-paper focus:px-4 focus:py-3 focus:text-t-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader inicio />
      <main id="conteudo" tabIndex={-1}>
        <HeroSection />
        <CasosSection />
        <RotinaDemo />
        <FasesSection />
      </main>
      <Footer>
        <FechoCarta
          titulo={FECHO.titulo}
          texto={FECHO.texto}
          mensagemWhatsapp={CONTATO_ROTINA_WHATSAPP.mensagem}
          rotuloWhatsapp={CONTATO_ROTINA_WHATSAPP.rotulo}
          origemWhatsapp="final_whatsapp"
          onWhatsappClick={() => trackWhatsapp("final_whatsapp")}
        />
      </Footer>
    </div>
  );
};

export default Index;
