import { ArrowRight } from "lucide-react";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { AREAS } from "@/content/consultoriaAgentes";

const LINHA = "grid gap-[var(--space-md)] border-t border-t-rule py-[var(--space-lg)] md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[var(--gap-columns)]";

// Lista pautada: a área à esquerda, os exemplos à direita, uma régua entre as áreas.
export const AreasSection = () => (
  <Secao id="areas">
    <Cabeca
      id="areas"
      titulo="Nas rotinas que se repetem toda semana."
      texto="Alguns exemplos, não um cardápio fechado. O diagnóstico mostra quais valem a pena na sua empresa."
    />

    <div className="mt-[var(--space-2xl)] border-b border-t-rule">
      {AREAS.map((a) => (
        <div key={a.area} className={LINHA}>
          <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">{a.area}</h3>
          <ul className="grid gap-[var(--space-xs)] text-t-muted">
            {a.exemplos.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Responde "e a minha rotina?" */}
      <div className={LINHA}>
        <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">
          A sua rotina não está aqui?
        </h3>
        <div>
          <p className="max-w-[60ch] text-t-muted">
            Se ela se repete, tem regra e consome horas da equipe, provavelmente cabe um agente. O diagnóstico confirma
            antes de qualquer investimento.
          </p>
          <a href="#contato" className={`${CLASSE_LINK_TEXTO} mt-[var(--space-md)]`}>
            Contar a minha rotina
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </Secao>
);
