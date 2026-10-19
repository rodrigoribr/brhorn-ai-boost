import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Download,
  FileCheck2,
  Gauge,
  KeyRound,
  MessageCircle,
  MousePointerClick,
  RefreshCw,
  Search,
  Trash2,
  UsersRound,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ContatoSection } from "@/components/home/ContatoSection";
import { Eyebrow, H2 } from "@/components/home/Titulos";
import { ViaSerraDemo } from "@/components/produto/ViaSerraDemo";
import { Revelar } from "@/components/produto/Revelar";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer from "@/components/Footer";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";

const MSG_WHATSAPP = "Olá! Vi o ViaSerra no site da brhorn e quero conversar sobre a gestão da minha pousada.";

const MODULOS = [
  { icon: CalendarDays, titulo: "Calendário de reservas", texto: "Quartos em linhas, dias em colunas. Check-in, check-out e status num olhar." },
  { icon: BedDouble, titulo: "Quartos e tarifas", texto: "Tipo, capacidade, leitos, comodidades e preço por pessoa e noite." },
  { icon: UsersRound, titulo: "Hóspedes", texto: "Cadastro com contato, documento e histórico de hospedagens." },
  { icon: Gauge, titulo: "Painel do dia", texto: "Ocupação, quem está na casa, receita do mês, próximas chegadas e origem das reservas." },
];

const ROTINA = [
  {
    icon: MousePointerClick,
    titulo: "Arrastar para mudar",
    texto: "Hóspede trocou de quarto ou de data? Arraste a reserva no calendário. Sem refazer cadastro.",
  },
  {
    icon: RefreshCw,
    titulo: "Ao vivo em todos os aparelhos",
    texto: "A reserva lançada na recepção aparece na hora no celular de quem está fora. Ninguém trabalha com versão velha.",
  },
  {
    icon: Search,
    titulo: "Achar o hóspede em segundos",
    texto: "Busca por nome direto no cadastro, mesmo com o cadastro grande.",
  },
];

const PRIVACIDADE = [
  { icon: KeyRound, titulo: "Login com verificação em duas etapas", texto: "Senha forte e código no celular para quem quiser mais proteção." },
  { icon: FileCheck2, titulo: "Aceite de termos e LGPD", texto: "Termos de uso e política de privacidade aceitos e registrados por versão." },
  { icon: Download, titulo: "Exportação dos dados", texto: "Os dados são seus: dá para baixar tudo quando quiser." },
  { icon: Trash2, titulo: "Exclusão de verdade", texto: "Pedido de exclusão apaga os dados, como a LGPD exige." },
];

const ViaSerraPage = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();
  usePageTitle("ViaSerra · gestão de pousadas sem planilha · brhorn");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-projeto/20">
      <SiteHeader />
      <main>
        {/* Abertura */}
        <section className="border-b border-linha bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Produto brhorn · ViaSerra</Eyebrow>
                <span className="rounded-full border border-projeto/30 bg-projeto/5 px-2.5 py-0.5 font-mono text-[11px] text-projeto">
                  Em uso
                </span>
              </div>
              <h1 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.08] tracking-[-0.01em] text-nanquim sm:text-6xl">
                Sua pousada organizada, <span className="text-projeto">sem planilha</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                O sistema de gestão para pousadas pequenas: reservas, quartos e hóspedes num calendário só, atualizado
                ao vivo no computador da recepção e no seu celular.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(MSG_WHATSAPP)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsapp("viaserra_hero_whatsapp")}
                  className="inline-flex h-12 items-center justify-center rounded bg-projeto px-6 font-medium text-papel transition-colors hover:bg-[#1a5fcc]"
                >
                  Conversar sobre o ViaSerra
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#modulos"
                  className="inline-flex h-12 items-center justify-center rounded border border-nanquim px-6 font-medium text-nanquim transition-colors hover:bg-nanquim hover:text-papel"
                >
                  Ver o que tem
                </a>
              </div>
              <p className="mt-6 font-mono text-xs text-muted-foreground">Em uso diário por uma pousada.</p>
            </div>
            <ViaSerraDemo />
          </div>
        </section>

        {/* Módulos */}
        <section id="modulos" className="scroll-mt-20 bg-papel py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar>
              <Eyebrow>O que tem</Eyebrow>
              <H2>Tudo o que a recepção precisa, nada do que ela não usa.</H2>
            </Revelar>
            <div className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-4">
              {MODULOS.map((m) => (
                <article key={m.titulo} className="group bg-card p-7 transition-colors hover:bg-papel">
                  <m.icon className="h-6 w-6 text-projeto transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-semibold text-nanquim">{m.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{m.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Na rotina */}
        <section className="border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Revelar>
              <Eyebrow>Na rotina</Eyebrow>
              <H2>Pensado para quem atende, limpa e cobra no mesmo dia.</H2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Pousada pequena não tem gente sobrando para alimentar sistema. Cada tela foi feita para resolver em
                poucos cliques.
              </p>
            </Revelar>
            <ol className="divide-y divide-linha border-y border-linha">
              {ROTINA.map((r, i) => (
                <li key={r.titulo}>
                  <Revelar atraso={i * 90} className="flex gap-5 py-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-linha bg-card">
                      <r.icon className="h-5 w-5 text-projeto" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-nanquim">{r.titulo}</h3>
                      <p className="mt-1.5 leading-relaxed text-muted-foreground">{r.texto}</p>
                    </div>
                  </Revelar>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Privacidade */}
        <section className="bg-nanquim py-20 text-papel lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar>
              <Eyebrow className="text-projeto-claro">Privacidade e segurança</Eyebrow>
              <H2 className="text-papel">Dado de hóspede é coisa séria.</H2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-papel/70">
                Nome, documento e telefone de quem se hospeda na sua casa. O ViaSerra trata isso com os cuidados que a
                LGPD pede, desde o primeiro acesso.
              </p>
            </Revelar>
            <div className="mt-12 grid gap-px overflow-hidden rounded border border-papel/15 bg-papel/15 sm:grid-cols-2 lg:grid-cols-4">
              {PRIVACIDADE.map((p) => (
                <article key={p.titulo} className="bg-nanquim p-7">
                  <p.icon className="h-5 w-5 text-projeto-claro" aria-hidden="true" />
                  <h3 className="mt-5 font-semibold">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-papel/70">{p.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Próximo passo do produto */}
        <section className="bg-papel py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Revelar className="grid items-center gap-10 rounded border border-linha bg-card p-8 sm:p-10 lg:grid-cols-[auto_1fr]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-projeto/10">
                <MessageCircle className="h-6 w-6 text-projeto" aria-hidden="true" />
              </span>
              <div>
                <Eyebrow>Em desenvolvimento</Eyebrow>
                <h2 className="mt-3 font-display text-3xl text-nanquim sm:text-4xl">
                  Um agente que responde o hóspede no WhatsApp.
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  Consulta a disponibilidade no calendário, informa valores e deixa a reserva pré-lançada para você
                  confirmar. É a próxima peça do ViaSerra. Se você quer acompanhar de perto, fale comigo.
                </p>
              </div>
            </Revelar>
          </div>
        </section>

        <ContatoSection
          titulo="Sua pousada ainda vive na planilha?"
          texto="Conte como você controla as reservas hoje. Em uma conversa a gente vê se o ViaSerra serve para a sua casa."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("viaserra_final_whatsapp")}
          onFormClick={() => openContact("viaserra_final_form")}
        />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default ViaSerraPage;
