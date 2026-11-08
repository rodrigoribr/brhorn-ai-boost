import { ArrowRight, CornerDownRight } from "lucide-react";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { useNaTela } from "@/components/home/useNaTela";
import { TAREFAS, type Tarefa } from "@/content/consultoriaAgentes";

// Rotinas por tipo de trabalho (2026-11-05): grade de 3x2, cada tipo sob uma régua, com um exemplo.
// 2026-11-08: o card entra ao aparecer; o exemplo abre por linha, ao passar do meio da tela (uma vez).
// O texto do exemplo está sempre no HTML; só a altura anima. O sexto lugar responde "e a minha rotina?".

const Rotina = ({ tarefa, indice }: { tarefa: Tarefa; indice: number }) => {
  // O card aparece assim que entra na tela; o exemplo só abre quando a linha de cards chega perto do meio
  // (no desktop, 1-2-3 juntos e depois 4-5, porque os cards da mesma linha cruzam a marca ao mesmo tempo).
  const [ref, visto] = useNaTela<HTMLLIElement>("0px 0px -8% 0px");
  const [refMeio, aberto] = useNaTela<HTMLDivElement>("0px 0px -45% 0px");
  return (
    <li
      ref={ref}
      style={{ "--atraso": `${(indice % 3) * 120}ms` } as React.CSSProperties}
      data-visto={visto || undefined}
      data-aberto={aberto || undefined}
      className="rotina entra group relative flex flex-col pt-[var(--space-md)]"
    >
      <span aria-hidden="true" className="regua-desenha absolute inset-x-0 top-0 h-px bg-t-rulestrong" />
      <span className="rotina-num num font-display text-[length:var(--text-2xl)] leading-none text-t-accent">
        {String(indice + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-[var(--space-sm)] font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">
        {tarefa.titulo}
      </h3>
      <p className="mt-[var(--space-sm)] max-w-[44ch] text-t-muted">{tarefa.texto}</p>
      <div ref={refMeio} className="rotina-exemplo">
        <div className="min-h-0 overflow-hidden">
          <p className="mt-[var(--space-md)] flex max-w-[44ch] gap-[var(--space-xs)] rounded-[var(--radius-control)] border-l-2 border-t-accent bg-t-paper2 px-[var(--space-sm)] py-[var(--space-xs)] text-sm text-t-ink">
            <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-t-accent" aria-hidden="true" />
            <span>
              <span className="text-t-muted">Por exemplo: </span>
              {tarefa.exemplo}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};

export const AreasSection = () => (
  <Secao id="areas">
    <Cabeca
      id="areas"
      titulo="Nas rotinas que se repetem toda semana."
      texto="Não importa a área: se o trabalho se repete e segue regras, provavelmente cabe um agente. O diagnóstico mostra quais valem a pena na sua empresa."
    />

    <ul className="mt-[var(--space-2xl)] grid gap-x-[var(--gap-columns)] gap-y-[var(--space-xl)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[var(--space-2xl)]">
      {TAREFAS.map((t, i) => (
        <Rotina key={t.titulo} tarefa={t} indice={i} />
      ))}

      {/* Responde "e a minha rotina?" */}
      <li className="flex flex-col rounded-[var(--radius-card)] bg-t-night p-[var(--space-lg)] text-t-nightink">
        <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-nightink">
          A sua rotina não está aqui?
        </h3>
        <p className="mt-[var(--space-sm)] max-w-[44ch] text-t-nightmuted">
          Se ela se repete, tem regra e consome horas da equipe, provavelmente cabe um agente. O diagnóstico confirma
          antes de qualquer investimento.
        </p>
        <a
          href="#contato"
          className={`${CLASSE_LINK_TEXTO} group mt-auto self-start pt-[var(--space-lg)] !text-t-nightink hover:!text-t-nightaccent`}
        >
          Contar a minha rotina
          <ArrowRight className="h-4 w-4 transition-transform duration-short group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </Secao>
);
