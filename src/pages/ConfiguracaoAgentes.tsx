import { ArrowDown, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { AgentesDemo } from "@/components/produto/AgentesDemo";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";
import "./agentes.css";

const MSG_WHATSAPP = "Olá! Vim pela página de configuração de agentes da brhorn e quero conversar sobre uma rotina que gostaria de automatizar.";

const ConfiguracaoAgentes = () => {
  const { isContactOpen, contactSource, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();

  usePageTitle("Agente de IA para sua rotina ou equipe · brhorn");

  return (
    <div className="agentes-page min-h-screen bg-t-paper font-sans text-t-ink">
      <a
        href="#conteudo-agentes"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-t-paper focus:px-4 focus:py-3 focus:text-t-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-agentes" tabIndex={-1}>
        <section className="agentes-hero py-8 lg:py-16" aria-labelledby="agentes-titulo">
          <div className="agentes-container agentes-hero-grid grid gap-6">
            <div className="agentes-hero-copy">
              <h1 id="agentes-titulo" className="max-w-[16ch] text-[length:var(--text-display-hero)] leading-[1.04]">
                Agentes de IA <span className="text-t-accent">para a sua rotina.</span>
              </h1>
              <p className="mt-4 max-w-[37ch] text-lg text-t-muted">
                Delegue o trabalho repetitivo. A brhorn configura o agente de acordo com a sua rotina e as regras da sua equipe.
              </p>
            </div>
            <figure className="agentes-hero-foto">
              <img
                src="/projetos/agentes/conferencia-de-documentos.webp"
                srcSet="/projetos/agentes/conferencia-de-documentos-640.webp 640w, /projetos/agentes/conferencia-de-documentos.webp 1200w"
                sizes="(min-width: 1400px) 720px, (min-width: 960px) 54vw, 100vw"
                width={1200}
                height={800}
                alt="Escritório com documentos conferidos no monitor e uma pendência destacada para revisão. Ao fundo, duas pessoas conversam."
                fetchPriority="high"
              />
            </figure>
            <div className="agentes-hero-acoes flex flex-wrap items-center gap-x-6 gap-y-1">
              <a
                href={whatsappLink(MSG_WHATSAPP)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsapp("agentes_hero_whatsapp")}
                className={`${CLASSE_BOTAO_PRIMARIO} gap-2 px-3 sm:px-6`}
              >
                Conversar sobre minha rotina <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#delegar" className={`${CLASSE_LINK_TEXTO} min-h-11`}>
                Ver um exemplo <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <AgentesDemo />

        <Secao id="como-funciona" className="agentes-secao">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <Cabeca
              id="como-funciona"
              titulo="Começamos pela sua rotina."
              texto="Você conta como o trabalho acontece hoje. A gente define com você o que vale delegar e configura o agente nas ferramentas que fizerem sentido."
            />
            <p id="seguranca" className="max-w-[42ch] text-t-muted">
              O agente recebe só os acessos necessários. Você decide quais ações precisam de aprovação.
            </p>
          </div>
        </Secao>
      </main>
      <Footer>
        <FechoCarta
          titulo="Qual tarefa você gostaria de delegar?"
          texto="Pode ser uma tarefa sua ou um processo que passa por várias pessoas."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("agentes_final_whatsapp")}
          onFormClick={() => openContact("agentes_final_form")}
        />
      </Footer>
      <ContactModal isOpen={isContactOpen} source={contactSource} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default ConfiguracaoAgentes;
