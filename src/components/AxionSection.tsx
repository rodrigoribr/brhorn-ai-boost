import { ArrowRight, Bot, Megaphone, MessageSquareText, PackageCheck, Settings2, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface AxionSectionProps {
  onContactClick?: () => void;
}

export const AxionSection = ({ onContactClick }: AxionSectionProps) => {
  const features = [
    { icon: MessageSquareText, text: "Atendimento e coleta de pedidos pelo WhatsApp" },
    { icon: PackageCheck, text: "Catálogo com SKUs, preços, unidades e disponibilidade" },
    { icon: ShoppingCart, text: "Pedidos, clientes, campanhas e histórico em um painel" },
    { icon: Settings2, text: "Prompt Studio para ajustar tom, regras e comportamento" },
  ];
  const modules = [
    { label: "Campanhas", icon: Megaphone },
    { label: "Catálogo", icon: PackageCheck },
    { label: "Histórico", icon: MessageSquareText },
    { label: "Regras do bot", icon: Settings2 },
  ];

  return (
    <section id="produtos" className="relative overflow-hidden bg-background py-28">
      <div className="absolute right-0 top-20 h-96 w-96 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-accent">Produto 01</p>
          <h2 className="font-brand text-6xl leading-none text-white md:text-8xl">Axion</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-zinc-400">
            Agente de IA para vendas B2B via WhatsApp. Ele entende pedidos recorrentes, aplica regras do negócio e
            organiza a operação em um painel de controle.
          </p>

          <div className="mt-10 grid gap-4">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-start gap-4 border-l border-white/10 pl-4">
                <feature.icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-zinc-300">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/axion">
              <Button className="h-14 rounded-sm bg-accent px-8 font-bold text-black hover:bg-amber-400">
                Conhecer Axion
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Button
              onClick={onContactClick}
              variant="outline"
              className="h-14 rounded-sm border-white/15 bg-transparent px-8 font-bold text-white hover:bg-white hover:text-black"
            >
              Pedir demonstração
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-white/10 bg-zinc-950 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-accent" />
              <span className="font-brand text-2xl text-white">Axiøn dashboard</span>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-300">
              em produção
            </span>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-4">
            {[
              ["284", "pedidos"],
              ["147", "clientes ativos"],
              ["R$ 20k+", "caso real/mês"],
              ["24h", "operação assistida"],
            ].map(([value, label]) => (
              <div key={label} className="bg-zinc-950 p-5">
                <p className="font-brand text-4xl text-white">{value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-px bg-white/10 lg:grid-cols-[1fr_0.8fr]">
            <div className="bg-zinc-950 p-6">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">pedidos por dia</p>
                  <p className="mt-1 text-sm text-zinc-300">Últimos 7 dias</p>
                </div>
                <p className="font-brand text-3xl text-accent">42</p>
              </div>
              <div className="flex h-44 items-end gap-3 border-b border-white/10 pb-3">
                {[38, 62, 48, 78, 70, 92, 55].map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-sm ${index === 5 ? "bg-accent" : "bg-white/15"}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-zinc-600">
                <span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span>
              </div>
            </div>

            <div className="bg-zinc-950 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">módulos</p>
              <div className="mt-6 space-y-4">
                {modules.map((module) => (
                  <div key={module.label} className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-sm text-zinc-300">{module.label}</span>
                    <module.icon className="h-4 w-4 text-zinc-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-l-4 border-l-accent bg-accent-light/10 px-5 py-4">
            <p className="text-sm font-semibold text-white">Caso real em distribuição de alimentos</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">
              Atendimento de revendedores, pedidos via WhatsApp e acompanhamento de vendas recorrentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
