import {
  BarChart3,
  Bot,
  CalendarClock,
  Eye,
  Camera,
  FileText,
  Hand,
  History,
  LayoutDashboard,
  ListChecks,
  MessageSquare,
  Package,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ContatoSection } from "@/components/home/ContatoSection";
import { Eyebrow, H2 } from "@/components/home/Titulos";
import { AxionDemo } from "@/components/produto/AxionDemo";
import { Revelar } from "@/components/produto/Revelar";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer from "@/components/Footer";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { BotaoDiagnostico, CLASSE_BOTAO_PRIMARIO, ConteudoBotao } from "@/components/diagnostico/BotaoDiagnostico";

// DEV-0005: a página é um CASO (prova do método), não produto à venda. Só função conferida no código
// do axion-backend em 2026-11-05 (foto e PDF confirmados pelo Rodrigo no piloto). Sem número além do piloto.
const MSG_WHATSAPP = "Olá! Vi o caso do Axion no site da brhorn e quero conversar sobre uma rotina da minha empresa.";

const PROBLEMAS = [
  "Pedido chega por mensagem, áudio, foto e ligação, cada um de um jeito",
  "Alguém passa o dia copiando pedido do WhatsApp para o sistema",
  "O horário de corte passa e o pedido fica para a próxima rota",
  "As mesmas perguntas sobre preço e prazo, todo dia",
  "Revendedor que esqueceu de pedir só aparece quando falta produto",
  "Sem histórico: ninguém sabe o que foi combinado com quem",
];

const PASSOS = [
  { icon: MessageSquare, titulo: "Contato", texto: "O revendedor chama no WhatsApp que ele já usa. Nada para instalar." },
  { icon: Bot, titulo: "Interpretação", texto: "O agente entende o pedido, mesmo escrito do jeito do cliente." },
  { icon: ShieldCheck, titulo: "Regras", texto: "Aplica o catálogo, os preços, as unidades e a rota de entrega da empresa." },
  { icon: ListChecks, titulo: "Registro", texto: "Confirma com o cliente e lança o pedido no painel." },
];

const ENTENDE = [
  { icon: MessageSquare, titulo: "Mensagem picada", texto: "Espera o cliente terminar de escrever antes de responder, como uma pessoa faria." },
  { icon: Camera, titulo: "Foto da lista", texto: "O revendedor fotografa o pedido no papel e o agente lê os itens." },
  { icon: FileText, titulo: "PDF", texto: "Lista ou cotação em PDF vira pedido sem ninguém digitar." },
  { icon: Ruler, titulo: "Unidades", texto: "Caixa, fardo ou unidade: a quantidade é convertida pela regra de cada produto." },
  { icon: Truck, titulo: "Rota de entrega", texto: "Sabe o dia de entrega de cada região e informa ao revendedor." },
  { icon: CalendarClock, titulo: "Lembretes e campanhas", texto: "Lembra quem ainda não pediu antes do fechamento e envia listas e ofertas na hora marcada." },
];

const PAINEL = [
  { icon: LayoutDashboard, titulo: "Visão geral", texto: "Clientes ativos, pedidos do ciclo e atividade recente." },
  { icon: Users, titulo: "Clientes", texto: "Cadastro, classificação e agente ligado por cliente." },
  { icon: Package, titulo: "Catálogo", texto: "Produtos, preços e conversão de unidades." },
  { icon: ShoppingCart, titulo: "Pedidos", texto: "Status, edição, validação e histórico." },
  { icon: Truck, titulo: "Logística", texto: "Rotas por região e frequência de entrega." },
  { icon: Bot, titulo: "Estúdio do agente", texto: "Tom de voz, regras de negócio e o que o agente pode fazer." },
  { icon: CalendarClock, titulo: "Comunicação", texto: "Campanhas, envio de listas e lembretes de fechamento." },
  { icon: History, titulo: "Conversas", texto: "Todas as conversas, para conferir o que foi combinado." },
];

const CONTROLE = [
  { icon: Eye, titulo: "Tudo registrado", texto: "Cada conversa e cada decisão do agente fica no histórico, para conferir quando quiser." },
  { icon: Hand, titulo: "Você assume quando quiser", texto: "Um atendimento fora do comum? Desliga o agente para aquele cliente e o time conversa direto." },
  { icon: ShieldCheck, titulo: "Regras escritas, não adivinhadas", texto: "Preço e condição vêm do cadastro da empresa. O agente não inventa condição comercial." },
  { icon: BarChart3, titulo: "Envio com limite", texto: "Campanhas saem espaçadas e com teto por hora, para não parecer disparo em massa." },
];

const AxionPage = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();
  usePageTitle("Caso Axion · agente que tira pedido pelo WhatsApp · brhorn");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-projeto/20">
      <SiteHeader />
      <main>
        {/* Abertura */}
        <section className="border-b border-linha bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Caso · Axion</Eyebrow>
                <span className="rounded-full border border-projeto/30 bg-projeto/5 px-2.5 py-0.5 font-mono text-[11px] text-projeto">
                  Piloto de 6 meses
                </span>
              </div>
              <h1 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.08] tracking-[-0.01em] text-nanquim sm:text-6xl">
                O agente que <span className="text-projeto">tira pedido de revendedor</span> pelo WhatsApp.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Construído para um produtor de queijos, atendeu 50 revendedores num piloto de 6 meses, de novembro de
                2025 a maio de 2026. O revendedor mandava mensagem, foto ou PDF da lista; o Axion entendia, aplicava as
                regras comerciais e registrava o pedido no painel. O time ficava com as exceções.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <BotaoDiagnostico origem="axion_hero" className={CLASSE_BOTAO_PRIMARIO}>
                  <ConteudoBotao />
                </BotaoDiagnostico>
                <a
                  href="#como-funciona"
                  className="inline-flex h-12 items-center justify-center rounded border border-nanquim px-6 font-medium text-nanquim transition-colors hover:bg-nanquim hover:text-papel"
                >
                  Ver como funciona
                </a>
              </div>
            </div>
            <AxionDemo />
          </div>
        </section>

        {/* Problema */}
        <section className="bg-papel py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Revelar>
              <Eyebrow>O problema</Eyebrow>
              <H2>O pedido chegava de todo jeito.</H2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                É assim na maioria das distribuidoras: alguém passa o dia traduzindo conversa em pedido. Não escala, e o
                erro aparece na entrega.
              </p>
            </Revelar>
            <ol className="divide-y divide-linha border-y border-linha">
              {PROBLEMAS.map((p, i) => (
                <li key={p}>
                  <Revelar atraso={i * 70} className="flex gap-5 py-4">
                    <span className="font-mono text-sm text-projeto">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-nanquim">{p}</span>
                  </Revelar>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="scroll-mt-20 border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar>
              <Eyebrow>Como funciona</Eyebrow>
              <H2>Da mensagem ao pedido, sem ninguém digitar.</H2>
            </Revelar>
            <div className="relative mt-14">
              {/* Linha do fluxo com o pino percorrendo, como na marca */}
              <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-linha md:block" aria-hidden="true">
                <span className="animate-percorrer absolute -top-[3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-projeto" />
              </div>
              <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
                {PASSOS.map((p, i) => (
                  <li key={p.titulo}>
                    <Revelar atraso={i * 120} className="text-center">
                      <span className="relative z-[1] mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-linha bg-card">
                        <p.icon className="h-5 w-5 text-projeto" aria-hidden="true" />
                      </span>
                      <p className="mt-5 font-mono text-xs text-projeto">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-1 text-lg font-semibold text-nanquim">{p.titulo}</h3>
                      <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                    </Revelar>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* O que ele entende */}
        <section className="bg-papel py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar>
              <Eyebrow>O que ele entende</Eyebrow>
              <H2>Feito para o jeito que o revendedor realmente pede.</H2>
            </Revelar>
            <div className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-3">
              {ENTENDE.map((e) => (
                <article key={e.titulo} className="group bg-card p-7 transition-colors hover:bg-papel">
                  <e.icon className="h-6 w-6 text-projeto transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-nanquim">{e.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{e.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Painel */}
        <section className="border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar>
              <Eyebrow>O painel</Eyebrow>
              <H2>O controle fica com você.</H2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                O agente trabalha no WhatsApp; a gestão acontece num painel web, com tudo o que ele precisa saber da sua
                operação.
              </p>
            </Revelar>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PAINEL.map((f, i) => (
                <Revelar key={f.titulo} atraso={(i % 4) * 80}>
                  <article className="h-full rounded border border-linha bg-card p-6 transition-colors hover:border-projeto/40">
                    <f.icon className="h-5 w-5 text-projeto" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold text-nanquim">{f.titulo}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
                  </article>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Controle e segurança */}
        <section className="bg-nanquim py-20 text-papel lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar>
              <Eyebrow className="text-projeto-claro">Agente com supervisão</Eyebrow>
              <H2 className="text-papel">Automático no que é rotina. Humano no que é exceção.</H2>
            </Revelar>
            <div className="mt-12 grid gap-px overflow-hidden rounded border border-papel/15 bg-papel/15 sm:grid-cols-2">
              {CONTROLE.map((c) => (
                <article key={c.titulo} className="bg-nanquim p-7">
                  <c.icon className="h-5 w-5 text-projeto-claro" aria-hidden="true" />
                  <h3 className="mt-5 font-semibold">{c.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-papel/70">{c.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Piloto */}
        <section className="bg-papel py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar>
              <Eyebrow>O piloto</Eyebrow>
              <H2>Seis meses com um cliente real.</H2>
            </Revelar>
            <ol className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha md:grid-cols-3">
              {[
                ["Diagnóstico", "Antes de construir: como os pedidos chegavam, o catálogo, as rotas e as regras comerciais."],
                ["Piloto", "50 revendedores do produtor de queijos pedindo pelo WhatsApp, de novembro de 2025 a maio de 2026."],
                ["Ajuste", "Prompt e modelo ajustados toda semana, a partir das conversas reais e do funcionamento da operação."],
              ].map(([t, d], i) => (
                <li key={t} className="bg-card p-7">
                  <span className="font-mono text-sm text-projeto">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-lg font-semibold text-nanquim">{t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContatoSection
          titulo="Tem uma rotina parecida na sua empresa?"
          texto="Pedido, cadastro, cobrança: o método é o mesmo do Axion. Conte onde o trabalho manual trava e eu digo se um agente resolve."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("axion_final_whatsapp")}
          onFormClick={() => openContact("axion_final_form")}
        />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default AxionPage;
