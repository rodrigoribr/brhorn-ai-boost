import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ContatoSection } from "@/components/home/ContatoSection";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer from "@/components/Footer";
import { Eyebrow, H2 } from "@/components/home/Titulos";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";
import { EXEMPLOS, FAQ, PACOTES, SEGURANCA } from "@/content/configuracaoAgentes";

const MSG_WHATSAPP = "Olá! Vim pela página de configuração de agentes da brhorn e quero um agente pessoal.";

// Exemplo ilustrativo de uma rotina, não é conversa real de cliente.
const ExemploConversa = () => (
  <figure className="rounded border border-linha bg-card p-5 shadow-[0_20px_60px_-30px_rgba(22,26,58,0.35)]">
    <figcaption className="flex items-center justify-between border-b border-linha pb-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
        Exemplo · resumo da manhã
      </span>
      <span className="font-mono text-[11px] text-projeto">7:30</span>
    </figcaption>
    <div className="mt-4 space-y-3 text-sm leading-relaxed">
      <p className="max-w-[90%] rounded-lg rounded-tl-none bg-secondary px-4 py-3 text-nanquim">
        Bom dia! Hoje você tem 3 reuniões. A das 10h é com um fornecedor novo: deixei o histórico e os 2 pontos a
        negociar no documento da reunião.
      </p>
      <p className="max-w-[90%] rounded-lg rounded-tl-none bg-secondary px-4 py-3 text-nanquim">
        Dos 41 e-mails de ontem, 4 pedem resposta sua. Já deixei os rascunhos prontos para você revisar.
      </p>
      <p className="ml-auto max-w-[70%] rounded-lg rounded-tr-none bg-projeto px-4 py-3 text-papel">
        Manda o resumo do fornecedor em 3 linhas.
      </p>
    </div>
  </figure>
);

const ConfiguracaoAgentes = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();

  usePageTitle("Agente de IA pessoal, configurado por engenheiro · brhorn");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-projeto/20">
      <SiteHeader />
      <main>
        {/* Abertura */}
        <section className="border-b border-linha bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Eyebrow>Configuração de agentes · pessoas e empresas</Eyebrow>
              <h1 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.08] tracking-[-0.01em] text-nanquim sm:text-6xl">
                Seu agente de IA pessoal, <span className="text-projeto">configurado por engenheiro</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Um assistente que conhece a sua rotina, lê seus e-mails, prepara suas reuniões e cuida do que é
                repetitivo. Instalado com segurança, nas suas contas, e ensinado a trabalhar do seu jeito.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(MSG_WHATSAPP)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsapp("agentes_hero_whatsapp")}
                  className="inline-flex h-12 items-center justify-center rounded bg-projeto px-6 font-medium text-papel transition-colors hover:bg-[#1a5fcc]"
                >
                  Quero meu agente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#pacotes"
                  className="inline-flex h-12 items-center justify-center rounded border border-nanquim px-6 font-medium text-nanquim transition-colors hover:bg-nanquim hover:text-papel"
                >
                  Ver os pacotes
                </a>
              </div>
            </div>
            <ExemploConversa />
          </div>
        </section>

        {/* O que dá para delegar */}
        <section className="bg-papel py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Eyebrow>O que dá para delegar</Eyebrow>
            <H2>O trabalho que come a sua semana e não precisa de você.</H2>
            <div className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-3">
              {EXEMPLOS.map((e, i) => (
                <article key={e.titulo} className="bg-card p-7">
                  <span className="font-mono text-sm text-projeto">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-lg font-semibold text-nanquim">{e.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{e.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pacotes */}
        <section id="pacotes" className="scroll-mt-20 border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Eyebrow>Pacotes</Eyebrow>
            <H2>Escolha por onde começar.</H2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Todo pacote começa com uma conversa de diagnóstico, sem custo. Se um agente não resolver o seu caso, eu
              te digo isso nela.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {PACOTES.map((p) => (
                <article
                  key={p.id}
                  className={`flex flex-col rounded border bg-card p-7 ${
                    p.destaque ? "border-projeto shadow-[0_0_0_1px_hsl(var(--primary))]" : "border-linha"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-3xl text-nanquim">{p.nome}</h3>
                    {p.destaque && (
                      <span className="mt-1 shrink-0 rounded-full bg-projeto px-2.5 py-0.5 font-mono text-[11px] text-papel">
                        Bom para começar
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.paraQuem}</p>

                  <div className="mt-6 border-y border-linha py-4">
                    <p className="font-display text-2xl text-nanquim">{p.preco || "Valor definido no diagnóstico"}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {p.cobranca}
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {p.inclui.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-nanquim">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-projeto" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Olá! Tenho interesse no pacote ${p.nome} da brhorn.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsapp(`agentes_pacote_${p.id}`)}
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded px-5 text-sm font-medium transition-colors ${
                      p.destaque
                        ? "bg-projeto text-papel hover:bg-[#1a5fcc]"
                        : "border border-nanquim text-nanquim hover:bg-nanquim hover:text-papel"
                    }`}
                  >
                    Conversar sobre este pacote
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <strong className="font-medium text-nanquim">Custos claros:</strong> a assinatura da ferramenta de IA
              (ChatGPT, Claude ou outra) é paga direto por você ao fornecedor. A brhorn cobra a configuração e, se você
              quiser, a manutenção. Sem taxa escondida sobre o uso.
            </p>
          </div>
        </section>

        {/* Segurança */}
        <section className="bg-nanquim py-20 text-papel lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Eyebrow className="text-projeto-claro">Segurança e privacidade</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-normal leading-tight sm:text-5xl">
              Um agente que mexe no seu e-mail precisa ser instalado como peça crítica.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-papel/70">
              Assistentes de IA mal configurados já vazaram senhas e documentos por instruções escondidas em e-mails e
              por extensões maliciosas. Aqui a segurança vem antes da conveniência.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded border border-papel/15 bg-papel/15 sm:grid-cols-2 lg:grid-cols-3">
              {SEGURANCA.map((s) => (
                <article key={s.titulo} className="bg-nanquim p-7">
                  <ShieldCheck className="h-5 w-5 text-projeto-claro" aria-hidden="true" />
                  <h3 className="mt-5 font-semibold">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-papel/70">{s.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="bg-papel py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Eyebrow>Como funciona</Eyebrow>
            <H2>Da conversa ao agente rodando.</H2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha md:grid-cols-4">
              {[
                ["Diagnóstico", "Uma conversa sobre a sua rotina: onde vai o seu tempo e o que dá para delegar."],
                ["Desenho", "Escolho a ferramenta e desenho as rotinas, os acessos e os limites do agente."],
                ["Configuração", "Instalo e conecto tudo nas suas contas, com os cuidados de segurança."],
                ["Uso e ajuste", "Treino você, acompanho o uso nas primeiras semanas e ajusto o que for preciso."],
              ].map(([t, d], i) => (
                <li key={t} className="bg-card p-6">
                  <span className="font-mono text-sm text-projeto">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-semibold text-nanquim">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section className="border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <H2>Antes de você perguntar.</H2>
            <Accordion type="single" collapsible className="mt-10 border-t border-linha">
              {FAQ.map((f) => (
                <AccordionItem key={f.p} value={f.p} className="border-linha">
                  <AccordionTrigger className="text-left text-base font-medium text-nanquim hover:no-underline">
                    {f.p}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.r}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ContatoSection
          titulo="Quanto do seu dia um agente devolve?"
          texto="Em uma conversa a gente descobre. Sem compromisso: se não fizer sentido para você, eu digo."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("agentes_final_whatsapp")}
          onFormClick={() => openContact("agentes_final_form")}
        />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default ConfiguracaoAgentes;
