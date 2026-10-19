import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarClock,
  Eye,
  FileText,
  Hand,
  History,
  Image,
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
import { whatsappLink } from "@/lib/contato";

const MSG_WHATSAPP = "Olá! Vi o Axion no site da brhorn e quero saber sobre o piloto para a minha distribuidora.";

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
  { icon: ShieldCheck, titulo: "Regras", texto: "Aplica catálogo, preço, rota e horário de corte da sua empresa." },
  { icon: ListChecks, titulo: "Registro", texto: "Confirma com o cliente e lança o pedido no painel." },
];

const ENTENDE = [
  { icon: MessageSquare, titulo: "Mensagem picada", texto: "Espera o cliente terminar de escrever antes de responder, como uma pessoa faria." },
  { icon: Image, titulo: "Foto da lista", texto: "O revendedor fotografa o papel do pedido e o agente lê os itens." },
  { icon: FileText, titulo: "PDF", texto: "Lista ou cotação em PDF vira pedido sem ninguém digitar." },
  { icon: Ruler, titulo: "Unidades e apelidos", texto: "Caixa, fardo, unidade e o nome que o cliente dá ao produto, tudo convertido." },
  { icon: Truck, titulo: "Rota e horário de corte", texto: "Sabe o dia de entrega de cada região e avisa quando o pedido fecha." },
  { icon: CalendarClock, titulo: "Lembretes e campanhas", texto: "Lembra quem ainda não pediu e envia listas e ofertas na hora certa." },
];

const PAINEL = [
  { icon: LayoutDashboard, titulo: "Visão geral", texto: "Clientes ativos, pedidos do ciclo e atividade recente." },
  { icon: Users, titulo: "Clientes", texto: "Cadastro, classificação e agente ligado por cliente." },
  { icon: Package, titulo: "Catálogo", texto: "Produtos, preços, conversão de unidades e sinônimos." },
  { icon: ShoppingCart, titulo: "Pedidos", texto: "Status, edição, validação e histórico." },
  { icon: Truck, titulo: "Logística", texto: "Rotas por região, frequência de entrega e janelas de corte." },
  { icon: Bot, titulo: "Estúdio do agente", texto: "Tom de voz, regras de negócio e o que o agente pode fazer." },
  { icon: CalendarClock, titulo: "Comunicação", texto: "Campanhas, envio de listas e lembretes de fechamento." },
  { icon: History, titulo: "Conversas", texto: "Todas as conversas, auditáveis, com opção de assumir." },
];

const CONTROLE = [
  { icon: Eye, titulo: "Tudo registrado", texto: "Cada conversa e cada decisão do agente fica no histórico, para conferir quando quiser." },
  { icon: Hand, titulo: "Você assume quando quiser", texto: "Um atendimento fora do comum? O seu time entra na conversa e o agente sai." },
  { icon: ShieldCheck, titulo: "Regras escritas, não adivinhadas", texto: "Preço, prazo e limite vêm do seu cadastro. O agente não inventa condição comercial." },
  { icon: BarChart3, titulo: "Envio com limite", texto: "Campanhas saem espaçadas e com teto por hora, para não parecer disparo em massa." },
];

const AxionPage = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();
  usePageTitle("Axion · agente que tira pedido pelo WhatsApp · brhorn");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-projeto/20">
      <SiteHeader />
      <main>
        {/* Abertura */}
        <section className="border-b border-linha bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Produto brhorn · Axion</Eyebrow>
                <span className="rounded-full border border-projeto/30 bg-projeto/5 px-2.5 py-0.5 font-mono text-[11px] text-projeto">
                  Aberto para piloto
                </span>
              </div>
              <h1 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.08] tracking-[-0.01em] text-nanquim sm:text-6xl">
                O agente que <span className="text-projeto">tira pedido de revendedor</span> pelo WhatsApp.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Para distribuidoras e atacadistas. O revendedor manda mensagem, foto ou PDF da lista; o Axion entende,
                aplica as suas regras comerciais e registra o pedido no painel. O seu time fica com as exceções.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(MSG_WHATSAPP)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsapp("axion_hero_whatsapp")}
                  className="inline-flex h-12 items-center justify-center rounded bg-projeto px-6 font-medium text-papel transition-colors hover:bg-[#1a5fcc]"
                >
                  Quero ser piloto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
              <H2>Hoje o pedido chega de todo jeito.</H2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                E alguém da sua equipe passa o dia traduzindo conversa em pedido. Não escala, e o erro aparece na
                entrega.
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
              <Eyebrow>Piloto</Eyebrow>
              <H2>Começa pequeno, com acompanhamento de perto.</H2>
            </Revelar>
            <ol className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha md:grid-cols-3">
              {[
                ["Diagnóstico", "Entendo como os pedidos chegam hoje, o catálogo, as rotas e as regras comerciais."],
                ["Grupo piloto", "O Axion começa atendendo um grupo de revendedores, com o seu time acompanhando cada conversa."],
                ["Ajuste e decisão", "Ajustamos com base nas conversas reais. Se fizer sentido, ampliamos para a carteira."],
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
          titulo="Sua distribuidora pode ser uma das primeiras."
          texto="O Axion está pronto e procurando as primeiras empresas para piloto. Conte como os pedidos chegam hoje e eu digo se ele resolve."
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
