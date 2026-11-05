import { ArrowRight, Check, Plus } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { Abertura, Grade, Lado, Linhas, Passos } from "@/components/paginas/Blocos";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";
import { EXEMPLOS, FAQ, PACOTES, SEGURANCA } from "@/content/configuracaoAgentes";

const MSG_WHATSAPP = "Olá! Vim pela página de configuração de agentes da brhorn e quero um agente pessoal.";

const COMO_FUNCIONA = [
  { titulo: "Diagnóstico", texto: "Uma conversa sobre a sua rotina: onde vai o seu tempo e o que dá para delegar." },
  { titulo: "Desenho", texto: "Escolho a ferramenta e desenho as rotinas, os acessos e os limites do agente." },
  { titulo: "Configuração", texto: "Instalo e conecto tudo nas suas contas, com os cuidados de segurança." },
  { titulo: "Uso e ajuste", texto: "Treino você, acompanho o uso nas primeiras semanas e ajusto o que for preciso." },
];

// Exemplo ilustrativo de uma rotina, não é conversa real de cliente.
const ExemploConversa = () => (
  <figure className="m-0 rounded-[var(--radius-card)] border border-t-rule bg-t-paper2 p-[var(--space-lg)]">
    <figcaption className="flex items-center justify-between border-b border-t-rule pb-[var(--space-sm)] text-sm text-t-muted">
      <span>Exemplo: resumo da manhã</span>
      <span className="num">7:30</span>
    </figcaption>
    <div className="mt-[var(--space-md)] space-y-[var(--space-sm)] text-sm leading-relaxed">
      <p className="max-w-[90%] rounded-[var(--radius-card)] rounded-tl-none bg-t-paper px-4 py-3 text-t-ink">
        Bom dia! Hoje você tem 3 reuniões. A das 10h é com um fornecedor novo: deixei o histórico e os 2 pontos a
        negociar no documento da reunião.
      </p>
      <p className="max-w-[90%] rounded-[var(--radius-card)] rounded-tl-none bg-t-paper px-4 py-3 text-t-ink">
        Dos 41 e-mails de ontem, 4 pedem resposta sua. Já deixei os rascunhos prontos para você revisar.
      </p>
      <p className="ml-auto max-w-[70%] rounded-[var(--radius-card)] rounded-tr-none bg-t-accent px-4 py-3 text-t-accentink">
        Manda o resumo do fornecedor em 3 linhas.
      </p>
    </div>
  </figure>
);

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

const ConfiguracaoAgentes = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();

  usePageTitle("Agente de IA pessoal, configurado por engenheiro · brhorn");

  return (
    <div className="min-h-screen bg-t-paper font-sans text-t-ink">
      <SiteHeader />
      <main>
        <Abertura
          titulo="Seu agente de IA pessoal, configurado por engenheiro."
          texto="Um assistente que conhece a sua rotina, lê seus e-mails, prepara suas reuniões e cuida do que é repetitivo. Instalado com segurança, nas suas contas, e ensinado a trabalhar do seu jeito."
          acoes={
            <>
              <a
                href={whatsappLink(MSG_WHATSAPP)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsapp("agentes_hero_whatsapp")}
                className={CLASSE_BOTAO_PRIMARIO}
              >
                Quero meu agente
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#pacotes" className={CLASSE_BOTAO_SECUNDARIO}>
                Ver os pacotes
              </a>
            </>
          }
          figura={<ExemploConversa />}
        />

        <Secao id="delegar">
          <Cabeca id="delegar" titulo="O trabalho que come a sua semana e não precisa de você." />
          <Grade itens={EXEMPLOS} numerar />
        </Secao>

        <Secao id="pacotes" tom="papel2" className="scroll-mt-[var(--nav-height)]">
          <Cabeca
            id="pacotes"
            titulo="Escolha por onde começar."
            texto="Todo pacote começa com uma conversa de diagnóstico, sem custo. Se um agente não resolver o seu caso, eu te digo isso nela."
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

        <Secao id="seguranca" tom="noite">
          <Cabeca
            id="seguranca"
            titulo="Um agente que mexe no seu e-mail precisa ser instalado como peça crítica."
            texto="Assistentes de IA mal configurados já vazaram senhas e documentos por instruções escondidas em e-mails e por extensões maliciosas. Aqui a segurança vem antes da conveniência."
            noite
          />
          <Linhas itens={SEGURANCA} noite />
        </Secao>

        <Secao id="como-funciona">
          <Cabeca id="como-funciona" titulo="Da conversa ao agente rodando." />
          <Passos itens={COMO_FUNCIONA} />
        </Secao>

        <Secao id="perguntas" tom="papel2">
          <Lado cabeca={<Cabeca id="perguntas" titulo="Antes de você perguntar." />}>
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
          titulo="Quanto do seu dia um agente devolve?"
          texto="Em uma conversa a gente descobre. Sem compromisso: se não fizer sentido para você, eu digo."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("agentes_final_whatsapp")}
          onFormClick={() => openContact("agentes_final_form")}
        />
      </Footer>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default ConfiguracaoAgentes;
