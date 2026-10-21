import { ArrowRight, Check } from "lucide-react";
import { Eyebrow, H2 } from "@/components/home/Titulos";
import { AREAS } from "@/content/consultoriaAgentes";

export const AreasSection = () => (
  <section id="areas" className="scroll-mt-20 border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Eyebrow>Onde o agente entra</Eyebrow>
      <H2>Nas rotinas que se repetem toda semana.</H2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Alguns exemplos, não um cardápio fechado. O diagnóstico mostra quais valem a pena na sua empresa.
      </p>

      <div className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a) => (
          <article key={a.area} className="bg-card p-7">
            <h3 className="text-lg font-semibold text-nanquim">{a.area}</h3>
            <ul className="mt-4 space-y-3">
              {a.exemplos.map((e) => (
                <li key={e} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-projeto" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </article>
        ))}
        {/* Fecha a grade de 3 colunas e responde "e a minha rotina?" */}
        <article className="flex flex-col justify-between bg-papel p-7">
          <h3 className="text-lg font-semibold text-nanquim">A sua rotina não está aqui?</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Se ela se repete, tem regra e consome horas da equipe, provavelmente cabe um agente. O diagnóstico confirma
            antes de qualquer investimento.
          </p>
          <a
            href="#contato"
            className="mt-6 inline-flex items-center text-sm font-medium text-projeto underline-offset-4 hover:underline"
          >
            Contar a minha rotina
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </a>
        </article>
      </div>
    </div>
  </section>
);
