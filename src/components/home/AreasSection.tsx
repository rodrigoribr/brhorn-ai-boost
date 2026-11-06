import { ArrowRight } from "lucide-react";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { TAREFAS } from "@/content/consultoriaAgentes";

// Rotinas por tipo de trabalho (2026-11-05): grade de 3x2, cada tipo sob uma régua, com um exemplo.
// O sexto lugar responde "e a minha rotina?".
export const AreasSection = () => (
  <Secao id="areas">
    <Cabeca
      id="areas"
      titulo="Nas rotinas que se repetem toda semana."
      texto="Não importa a área: se o trabalho se repete e segue regras, provavelmente cabe um agente. O diagnóstico mostra quais valem a pena na sua empresa."
    />

    <ul className="mt-[var(--space-2xl)] grid gap-x-[var(--gap-columns)] gap-y-[var(--space-xl)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[var(--space-2xl)]">
      {TAREFAS.map((t, i) => (
        <li key={t.titulo} className="flex flex-col border-t border-t-rulestrong pt-[var(--space-md)]">
          <span className="num text-sm text-t-accent">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-[var(--space-sm)] font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">
            {t.titulo}
          </h3>
          <p className="mt-[var(--space-sm)] max-w-[44ch] text-t-muted">{t.texto}</p>
          <p className="mt-[var(--space-md)] max-w-[44ch] border-l-2 border-t-rulestrong pl-[var(--space-sm)] text-sm text-t-ink">
            <span className="text-t-muted">Por exemplo: </span>
            {t.exemplo}
          </p>
        </li>
      ))}

      {/* Responde "e a minha rotina?" */}
      <li className="flex flex-col rounded-[var(--radius-card)] bg-t-paper2 p-[var(--space-lg)]">
        <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">
          A sua rotina não está aqui?
        </h3>
        <p className="mt-[var(--space-sm)] max-w-[44ch] text-t-muted">
          Se ela se repete, tem regra e consome horas da equipe, provavelmente cabe um agente. O diagnóstico confirma
          antes de qualquer investimento.
        </p>
        <a href="#contato" className={`${CLASSE_LINK_TEXTO} mt-auto self-start pt-[var(--space-lg)]`}>
          Contar a minha rotina
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </Secao>
);
