import { ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/home/Titulos";
import { LIMITES_LINHA, OPCAO_LOCAL, SEGURANCA } from "@/content/consultoriaAgentes";

export const SegurancaSection = () => (
  <section id="seguranca" className="scroll-mt-20 bg-nanquim py-20 text-papel lg:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Eyebrow className="text-projeto-claro">Segurança</Eyebrow>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-normal leading-tight sm:text-5xl">
        Os dados da empresa continuam da empresa.
      </h2>

      <div className="mt-12 grid gap-px overflow-hidden rounded border border-papel/15 bg-papel/15 sm:grid-cols-2 lg:grid-cols-4">
        {SEGURANCA.map((s) => (
          <article key={s.titulo} className="bg-nanquim p-7">
            <ShieldCheck className="h-5 w-5 text-projeto-claro" aria-hidden="true" />
            <h3 className="mt-5 font-semibold">{s.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-papel/70">{s.texto}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 max-w-3xl space-y-4 leading-relaxed text-papel/70">
        <p>{OPCAO_LOCAL}</p>
        <p>
          <strong className="font-medium text-papel">O agente prepara, uma pessoa decide.</strong> {LIMITES_LINHA}
        </p>
      </div>
    </div>
  </section>
);
