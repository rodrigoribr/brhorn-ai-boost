import { CheckCircle2, ServerCog, ShieldCheck, Workflow } from "lucide-react";

export const PainPoints = () => {
  const proofs = [
    {
      icon: CheckCircle2,
      title: "Produto em produção",
      description: "O Axion já operou por meses em atendimento B2B via WhatsApp, acompanhando mais de R$ 20.000/mês em vendas e entregas.",
    },
    {
      icon: ServerCog,
      title: "Stack própria",
      description: "Backend Fastify, Supabase, Vercel, Evolution API e Docker Swarm trabalhando como uma base operacional coerente.",
    },
    {
      icon: ShieldCheck,
      title: "Gestão real",
      description: "O ViaSerra organiza reservas, quartos, hóspedes e indicadores para uma pousada em uso pelo cliente.",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-accent">Prova antes de promessa</p>
            <h2 className="font-brand text-5xl leading-none text-white md:text-7xl">
              A brhorn não vende só ideia bonita.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            O site antigo falava como uma consultoria genérica de IA. A brhorn atual tem produto, código, operação e clientes
            usando sistemas reais.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
          {proofs.map((item) => (
            <article key={item.title} className="bg-background p-8">
              <item.icon className="mb-10 h-7 w-7 text-accent" />
              <h3 className="font-brand text-3xl text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-l-4 border-l-accent bg-accent-light/10 px-6 py-5">
          <div className="flex flex-col gap-3 text-sm text-zinc-300 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Workflow className="h-5 w-5 text-accent" />
              {"WhatsApp -> Evolution API -> axion-backend -> Supabase"}
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              arquitetura em produção
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
