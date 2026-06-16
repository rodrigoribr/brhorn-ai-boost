import logo from "../assets/logo-original.png";
import { ArrowRight, Bot, CalendarDays, MessageSquareText, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" aria-label="brhorn" className="flex items-center">
            <img src={logo} alt="brhorn" className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <button onClick={scrollToProducts} className="transition-colors hover:text-white">
              Produtos
            </button>
            <Link to="/axion" className="transition-colors hover:text-white">
              Axion
            </Link>
            <Link to="/viaserra" className="transition-colors hover:text-white">
              ViaSerra
            </Link>
            <button onClick={onContactClick} className="transition-colors hover:text-white">
              Contato
            </button>
          </nav>

          <Button
            onClick={onContactClick}
            className="hidden rounded-sm bg-accent px-5 py-2.5 text-sm font-bold text-black hover:bg-amber-400 md:inline-flex"
          >
            Falar com a brhorn
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.12),transparent_30%),radial-gradient(circle_at_80%_5%,rgba(19,164,236,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:pt-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 border-l-4 border-l-accent bg-white/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-zinc-300">
            <Sparkles className="h-4 w-4 text-accent" />
            brhorn product studio
          </div>

          <h1 className="font-brand text-6xl leading-[0.9] tracking-tight text-white md:text-8xl lg:text-9xl">
            Produtos de IA e gestão para operações reais.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Criamos sistemas que atendem clientes, registram pedidos, organizam reservas e dão controle para equipes
            pequenas operarem com mais velocidade.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={scrollToProducts}
              className="h-14 rounded-sm bg-white px-8 text-base font-bold text-black hover:bg-zinc-200"
            >
              Conhecer produtos
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              onClick={onContactClick}
              variant="outline"
              className="h-14 rounded-sm border-white/15 bg-transparent px-8 text-base font-bold text-white hover:bg-white hover:text-black"
            >
              Falar com a brhorn
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Axion", "WhatsApp B2B em produção"],
              ["ViaSerra", "Gestão de pousadas em uso"],
              ["Sob medida", "Automação operacional"],
            ].map(([title, label]) => (
              <div key={title} className="border-l border-white/15 pl-4">
                <p className="font-brand text-2xl text-white">{title}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-zinc-950/80 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">brhorn cockpit</p>
                <p className="mt-1 text-sm text-zinc-300">Produtos ativos</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              <div className="bg-zinc-950 p-6">
                <Bot className="mb-8 h-7 w-7 text-accent" />
                <p className="font-brand text-4xl text-white">Axion</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Agente de IA para pedidos B2B, campanhas e atendimento via WhatsApp.
                </p>
                <div className="mt-8 space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-3">
                    <MessageSquareText className="h-4 w-4 text-zinc-500" />
                    Evolution API + backend próprio
                  </div>
                  <div className="h-2 w-3/4 rounded-full bg-accent" />
                  <div className="h-2 w-1/2 rounded-full bg-white/15" />
                </div>
              </div>

              <div className="bg-zinc-950 p-6">
                <CalendarDays className="mb-8 h-7 w-7 text-brand" />
                <p className="font-brand text-4xl text-white">ViaSerra</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Gestão de reservas, quartos e hóspedes para pousadas pequenas.
                </p>
                <div className="mt-8 grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 28 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-7 rounded-sm ${index % 9 === 0 ? "bg-accent" : index % 5 === 0 ? "bg-brand" : "bg-white/10"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px bg-white/10">
              {[
                ["R$ 20k+", "vendas/mês acompanhadas"],
                ["24/7", "atendimento automatizado"],
                ["2", "produtos ativos"],
              ].map(([value, label]) => (
                <div key={label} className="bg-zinc-950 px-5 py-6">
                  <p className="font-brand text-3xl text-accent">{value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
