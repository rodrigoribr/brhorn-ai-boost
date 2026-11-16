import { ArrowDown, Check, Plus } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { AgentesDemo } from "@/components/produto/AgentesDemo";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_BOTAO_SECUNDARIO, CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { Lado, Linhas, Passos } from "@/components/paginas/Blocos";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";
import { EXEMPLOS, FAQ, PACOTES, SEGURANCA } from "@/content/configuracaoAgentes";
import "./agentes.css";

const MSG_WHATSAPP = "Olá! Vim pela página de configuração de agentes da brhorn e quero conversar sobre uma rotina que gostaria de automatizar.";

const COMO_FUNCIONA = [
  { titulo: "Diagnóstico", texto: "Uma conversa sobre a sua rotina: onde vai o seu tempo e o que dá para delegar." },
  { titulo: "Desenho", texto: "Escolho a ferramenta e desenho as rotinas, os acessos e os limites do agente." },
  { titulo: "Configuração", texto: "Instalo e conecto tudo nas suas contas, com os cuidados de segurança." },
  { titulo: "Uso e ajuste", texto: "Treino você, acompanho o uso nas primeiras semanas e ajusto o que for preciso." },
];

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

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
              <p className="mb-3 font-mono font-semibold text-t-accent">Configuração de agentes</p>
              <h1 id="agentes-titulo" className="max-w-[16ch] text-[length:var(--text-display-hero)] leading-[1.04]">
                Agentes de IA <span className="text-t-accent">para a sua rotina.</span>
              </h1>
              <p className="mt-4 max-w-[37ch] text-lg text-t-muted">
                O agente confere documentos, organiza tarefas e prepara respostas nas ferramentas que você e sua equipe já usam.
              </p>
            </div>
            <figure className="agentes-hero-foto">
              <img
                src="/projetos/agentes/rotina-automatizada.webp"
                srcSet="/projetos/agentes/rotina-automatizada-640.webp 640w, /projetos/agentes/rotina-automatizada.webp 1200w"
                sizes="(min-width: 1400px) 720px, (min-width: 960px) 54vw, 100vw"
                width={1200}
                height={800}
                alt="Uma cadeira vazia ao lado de formulários que flutuam até uma pilha organizada. Na borda da mesa, um relógio se curva."
                fetchPriority="high"
              />
            </figure>
            <div className="agentes-hero-acoes flex flex-wrap items-center gap-x-6 gap-y-1">
              <a href="#delegar" className={`${CLASSE_BOTAO_PRIMARIO} gap-2`}>
                Ver uma rotina em ação <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a
                href={whatsappLink(MSG_WHATSAPP)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsapp("agentes_hero_whatsapp")}
                className={`${CLASSE_LINK_TEXTO} min-h-11`}
              >
                Conversar sobre minha rotina
              </a>
            </div>
          </div>
        </section>

        <AgentesDemo />

        <div className="agentes-container py-6">
          <details className="group">
            <summary className={`flex min-h-11 w-fit cursor-pointer list-none items-center gap-3 rounded py-2 font-medium hover:text-t-accent [&::-webkit-details-marker]:hidden ${FOCO}`}>
              Outras tarefas que um agente pode assumir
              <Plus size={16} className="shrink-0 group-open:rotate-45" aria-hidden="true" />
            </summary>
            <ul className="mt-4 grid gap-x-8 gap-y-4 pb-4 sm:grid-cols-2 lg:grid-cols-3">
              {EXEMPLOS.map(({ titulo, texto }) => (
                <li key={titulo}><strong className="font-medium">{titulo}</strong><p className="text-sm text-t-muted">{texto}</p></li>
              ))}
            </ul>
          </details>
        </div>

        <Secao id="pacotes" tom="papel2" className="agentes-secao">
          <Cabeca
            id="pacotes"
            titulo="Escolha por onde começar."
            texto="Todo pacote começa com um diagnóstico sem custo para entender se um agente pode ajudar na sua rotina."
          />

          <div className="mt-[var(--space-2xl)] grid gap-x-[var(--gap-columns)] gap-y-[var(--space-2xl)] lg:grid-cols-3">
            {PACOTES.map((p) => (
              <article
                key={p.id}
                className={`flex flex-col border-t-2 pt-[var(--space-lg)] ${p.destaque ? "border-t-accent" : "border-t-ink"}`}
              >
                <h3 className="font-display text-[length:var(--text-2xl)] font-normal leading-[1.15] text-t-ink">{p.nome}</h3>
                {p.destaque && <p className="mt-[var(--space-xs)] text-sm font-medium text-t-accent">Bom para começar</p>}
                <p className="mt-[var(--space-sm)] text-t-muted">{p.paraQuem}</p>

                <div className="mt-[var(--space-lg)] border-y border-t-rule py-[var(--space-md)]">
                  <p className="font-display text-[length:var(--text-xl)] text-t-ink">{p.preco || "Valor definido no diagnóstico"}</p>
                  <p className="mt-1 text-sm text-t-muted">{p.cobranca}</p>
                </div>

                <ul className="mt-[var(--space-lg)] flex-1 space-y-[var(--space-sm)]">
                  {p.inclui.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-t-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-t-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Olá! Tenho interesse no pacote ${p.nome} da brhorn.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsapp(`agentes_pacote_${p.id}`)}
                  className={`mt-[var(--space-xl)] ${p.destaque ? CLASSE_BOTAO_PRIMARIO : CLASSE_BOTAO_SECUNDARIO}`}
                >
                  Conversar sobre este pacote
                </a>
              </article>
            ))}
          </div>

          <p className="mt-[var(--space-2xl)] max-w-[72ch] text-sm leading-relaxed text-t-muted">
            <strong className="font-medium text-t-ink">Custos claros:</strong> a assinatura da ferramenta de IA
            (ChatGPT, Claude ou outra) é paga direto por você ao fornecedor. A brhorn cobra a configuração e, se você
            quiser, a manutenção. Sem taxa escondida sobre o uso.
          </p>
        </Secao>

        <Secao id="seguranca" tom="noite" className="agentes-secao">
          <Cabeca
            id="seguranca"
            titulo="Você controla o acesso e as aprovações."
            noite
          />
          <Linhas itens={SEGURANCA} noite />
        </Secao>

        <Secao id="como-funciona" className="agentes-secao">
          <Cabeca id="como-funciona" titulo="Da conversa ao agente rodando." />
          <Passos itens={COMO_FUNCIONA} />
        </Secao>

        <Secao id="perguntas" tom="papel2" className="agentes-secao">
          <Lado cabeca={<Cabeca id="perguntas" titulo="Perguntas frequentes." />}>
            <div className="border-b border-t-rule">
              {FAQ.map((f) => (
                <details key={f.p} className="group border-t border-t-rule">
                  <summary
                    className={`flex cursor-pointer list-none items-start justify-between gap-[var(--space-md)] rounded-[var(--radius-control)] py-[var(--space-md)] font-medium text-t-ink hover:text-t-accent [&::-webkit-details-marker]:hidden ${FOCO}`}
                  >
                    {f.p}
                    <Plus
                      className="mt-1 h-4 w-4 shrink-0 transition-transform duration-short group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-[60ch] pb-[var(--space-lg)] text-t-muted">{f.r}</p>
                </details>
              ))}
            </div>
          </Lado>
        </Secao>
      </main>
      <Footer>
        <FechoCarta
          titulo="Qual tarefa sua equipe repete toda semana?"
          texto="Conte como ela funciona hoje. A gente conversa sobre o que um agente pode assumir e o que fica com a equipe."
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
