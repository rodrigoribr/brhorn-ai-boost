import { Eyebrow, H2 } from "@/components/home/Titulos";
import { PROBLEMAS } from "@/content/consultoriaAgentes";

export const ProblemasSection = () => (
  <section className="border-t border-linha bg-papel py-20 lg:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Eyebrow>O ponto de partida</Eyebrow>
      <H2>A IA já chegou na empresa. O resultado, quase nunca.</H2>

      <div className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha md:grid-cols-3">
        {PROBLEMAS.map((p, i) => (
          <article key={p.titulo} className="bg-card p-7">
            <span className="font-mono text-sm text-projeto">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-5 text-lg font-semibold text-nanquim">{p.titulo}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{p.texto}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
