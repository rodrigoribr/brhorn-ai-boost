import { Eyebrow, H2 } from "@/components/home/Titulos";
import { FASES } from "@/content/consultoriaAgentes";

export const FasesSection = () => (
  <section id="como-funciona" className="scroll-mt-20 border-t border-linha bg-papel py-20 lg:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Eyebrow>Como funciona</Eyebrow>
      <H2>Quatro fases, e cada uma termina com uma entrega.</H2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        A empresa decide no fim de cada fase se segue para a próxima. Nada de projeto grande no escuro.
      </p>

      <ol className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha md:grid-cols-2 lg:grid-cols-4">
        {FASES.map((f) => (
          <li key={f.numero} className="flex flex-col bg-card p-6">
            <span className="font-mono text-sm text-projeto">{f.numero}</span>
            <h3 className="mt-5 text-lg font-semibold text-nanquim">{f.nome}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
            <p className="mt-6 border-t border-linha pt-4 text-sm leading-relaxed text-nanquim">
              <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                Entrega
              </span>
              {f.entrega}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
