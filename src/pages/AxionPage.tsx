import { ArrowDown } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { AxionDemo, AxionPainel } from "@/components/produto/AxionDemo";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { BotaoDiagnostico, CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import "./axion.css";

const MSG_WHATSAPP = "Olá! Vi o Axion no site da brhorn e quero saber como usá-lo para receber pedidos dos meus revendedores.";

const AxionPage = () => {
  const { isContactOpen, contactSource, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();
  usePageTitle("Axion · Pedidos de revendedores pelo WhatsApp · brhorn");

  return (
    <div className="axion-page min-h-screen bg-t-paper font-sans text-t-ink">
      <a
        href="#conteudo-axion"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-t-paper focus:px-4 focus:py-3 focus:text-t-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-axion" tabIndex={-1}>
        <section className="axion-hero" aria-labelledby="axion-title">
          <div className="axion-wrap axion-hero-grid">
            <div className="axion-hero-copy">
              <p className="axion-label axion-wordmark">Axion</p>
              <h1 id="axion-title">Pedidos de revendedores <span>pelo WhatsApp.</span></h1>
              <p>O Axion confere o que chegou na conversa, confirma com o cliente e registra o pedido no painel.</p>
            </div>
            <figure className="axion-hero-figure">
              <img
                src="/projetos/axion/quadro-de-pedidos.webp"
                srcSet="/projetos/axion/quadro-de-pedidos-640.webp 640w, /projetos/axion/quadro-de-pedidos.webp 1200w"
                sizes="(min-width: 1400px) 720px, (min-width: 960px) 54vw, 100vw"
                alt="Pedidos anotados à mão em fichas de papel, presas por clipes em um quadro antigo de madeira."
                width={1200}
                height={800}
                fetchPriority="high"
              />
            </figure>
            <div className="axion-hero-actions">
              <a href="#como-funciona" className={`${CLASSE_BOTAO_PRIMARIO} gap-2`}>
                Ver o pedido acontecer <ArrowDown size={18} aria-hidden="true" />
              </a>
              <BotaoDiagnostico origem="axion_hero" className={`${CLASSE_LINK_TEXTO} min-h-11`} mensagemWhatsapp={MSG_WHATSAPP}>
                Conversar sobre o Axion
              </BotaoDiagnostico>
            </div>
          </div>
        </section>

        <AxionDemo />
        <AxionPainel />

      </main>
      <Footer>
        <FechoCarta
          titulo="Como chegam os pedidos dos seus revendedores?"
          texto="Conte como sua equipe recebe os pedidos hoje e veja como o Axion pode entrar nessa rotina."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("axion_final_whatsapp")}
          onFormClick={() => openContact("axion_final_form")}
        />
      </Footer>
      <ContactModal isOpen={isContactOpen} source={contactSource} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default AxionPage;
