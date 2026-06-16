import { Database, GitBranch, Search, Settings2, TrendingUp } from "lucide-react";

export const ValueProp = () => {
  const steps = [
    {
      icon: Search,
      title: "Entender a operação",
      description: "Mapeamos o processo real: clientes, regras, exceções, canais e decisões que hoje dependem de pessoas.",
    },
    {
      icon: Database,
      title: "Organizar dados e regras",
      description: "Transformamos conhecimento solto em cadastro, catálogo, prompt, status, permissões e histórico auditável.",
    },
    {
      icon: Settings2,
      title: "Construir produto ou automação",
      description: "Escolhemos entre Axion, ViaSerra, adaptação ou uma automação sob medida, sem encaixar tudo à força.",
    },
    {
      icon: GitBranch,
      title: "Integrar com a rotina",
      description: "Conectamos WhatsApp, Supabase, painéis, formulários e fluxos internos conforme a operação pede.",
    },
    {
      icon: TrendingUp,
      title: "Medir e evoluir",
      description: "Depois do go-live, ajustamos regras, mensagens, telas e indicadores com base no uso real.",
    },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-accent">Como trabalhamos</p>
          <h2 className="font-brand text-5xl leading-none text-white md:text-7xl">
            Engenharia aplicada antes de promessa de IA.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            A brhorn começa pela operação. IA entra quando ajuda a decidir, responder ou executar melhor, não como
            enfeite no topo de um processo quebrado.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="bg-zinc-950 p-7">
              <div className="mb-10 flex items-center justify-between">
                <step.icon className="h-6 w-6 text-accent" />
                <span className="font-brand text-3xl text-white/20">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
