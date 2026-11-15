import { ArrowDown } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ViaSerraDemo } from "@/components/produto/ViaSerraDemo";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";
import "./viaserra.css";

const MSG_WHATSAPP = "Olá! Vi o ViaSerra no site da brhorn e quero conversar sobre a gestão da minha pousada.";

const ViaSerraPage = () => {
  const { isContactOpen, contactSource, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();
  usePageTitle("ViaSerra · reservas e gestão de pousadas · brhorn");

  return (
    <div className="viaserra-page min-h-screen bg-t-paper font-sans text-t-ink">
      <a
        href="#conteudo-viaserra"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-t-paper focus:px-4 focus:py-3 focus:text-t-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-viaserra" tabIndex={-1}>
        <section className="viaserra-hero" aria-labelledby="viaserra-title">
          <div className="viaserra-wrap viaserra-hero-grid">
            <div className="viaserra-hero-copy">
              <p className="viaserra-wordmark">ViaSerra</p>
              <h1 id="viaserra-title">As reservas da pousada <span>em um calendário.</span></h1>
              <p>Controle quartos, hóspedes e chegadas pelo computador da recepção ou pelo celular.</p>
            </div>
            <figure className="viaserra-hero-image">
              <img
                src="/projetos/viaserra/chaveiro-da-recepcao.webp"
                srcSet="/projetos/viaserra/chaveiro-da-recepcao-640.webp 640w, /projetos/viaserra/chaveiro-da-recepcao.webp 1200w"
                sizes="(min-width: 1400px) 720px, (min-width: 960px) 54vw, 100vw"
                width={1200}
                height={800}
                alt="Chaves de quartos com plaquinhas numeradas penduradas num chaveiro de madeira na recepção."
                fetchPriority="high"
              />
            </figure>
            <div className="viaserra-hero-actions">
              <a href="#modulos" className={`${CLASSE_BOTAO_PRIMARIO} gap-2`}>
                Acompanhar uma reserva <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a
                href={whatsappLink(MSG_WHATSAPP)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsapp("viaserra_hero_whatsapp")}
                className={`${CLASSE_LINK_TEXTO} min-h-11`}
              >
                Conversar sobre o ViaSerra
              </a>
            </div>
          </div>
        </section>

        <ViaSerraDemo />

        <div className="viaserra-wrap">
          <details id="privacidade" className="viaserra-privacy">
            <summary>Como o ViaSerra protege os dados dos hóspedes?</summary>
            <p>O acesso é por login, com verificação em duas etapas disponível. A pousada pode exportar os dados da sua conta ou solicitar a exclusão.</p>
          </details>
        </div>
      </main>
      <Footer>
        <FechoCarta
          titulo="Como você controla as reservas da sua pousada?"
          texto="Conte como a recepção se organiza hoje e veja como o ViaSerra pode ajudar no dia a dia."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("viaserra_final_whatsapp")}
          onFormClick={() => openContact("viaserra_final_form")}
        />
      </Footer>
      <ContactModal isOpen={isContactOpen} source={contactSource} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default ViaSerraPage;
