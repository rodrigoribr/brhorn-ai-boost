import { useId } from "react";
import { cn } from "@/lib/utils";
import { BRH, BrhMask, BrhShapes } from "./Logo";

// Assinatura do hero: o monograma brh acende, uma por vez, as letras que ele contém
// (b · r · h · o · r · n) e termina na pose parada. Só opacidade; com
// prefers-reduced-motion o base.css leva direto ao quadro final.

const T = 5.6; // duração total, em segundos
const INICIO = 0.3;
const PASSO = 0.75;
const FIM = INICIO + PASSO * 6; // 4,8 s: começa o quadro final
const LETRAS = ["b", "r", "h", "o", "r", "n"] as const;

const p = (s: number) => `${((s / T) * 100).toFixed(2)}%`;

const keyframes = (k: string) => {
  const linhas: string[] = [];
  LETRAS.forEach((_, i) => {
    const a = INICIO + PASSO * i;
    const b = a + PASSO;
    linhas.push(
      `@keyframes ${k}-c${i}{0%,${p(a)}{opacity:0}${p(a + 0.12)},${p(b - 0.12)}{opacity:1}${p(b)},100%{opacity:0}}`,
      `@keyframes ${k}-l${i}{0%,${p(a)}{opacity:.28}${p(a + 0.12)},${p(b - 0.12)}{opacity:1}${p(b)},${p(FIM)}{opacity:.28}${p(FIM + 0.6)},100%{opacity:1}}`,
    );
  });
  linhas.push(`@keyframes ${k}-base{0%,${p(FIM)}{opacity:.16}${p(FIM + 0.6)},100%{opacity:1}}`);
  return linhas.join("");
};

const anim = (nome: string) => ({ animation: `${nome} ${T}s linear both` });

interface BrhAnimadoProps {
  className?: string;
  /** Classes do <svg> (tamanho). */
  svgClassName?: string;
  /** Legenda "b r h o r n" embaixo, acompanhando as letras. */
  legenda?: boolean;
  /** Rótulo acessível; vazio = decorativo (quando o link em volta já tem nome). */
  title?: string;
}

const ROTULO = "Monograma brh: dentro dele estão as letras b, r, h, o, r e n, o nome brhorn";

export const BrhAnimado = ({ className, svgClassName = "h-auto w-full", legenda = true, title = ROTULO }: BrhAnimadoProps) => {
  const k = `brh${useId().replace(/:/g, "")}`;
  const mask = `${k}-m`;

  const camadas = [
    // b
    <g key="b" mask={`url(#${mask})`}>
      <polygon points={BRH.bStem} fill="var(--color-mark-b)" />
      <circle {...BRH.bowl} fill="none" stroke="var(--color-mark-b)" strokeWidth={BRH.w} />
    </g>,
    // r
    <g key="r1">
      <polygon points={BRH.rLeg} fill="var(--color-mark-r)" />
      <path d={BRH.rArc} fill="none" stroke="var(--color-mark-r)" strokeWidth={BRH.w} />
    </g>,
    // h
    <g key="h">
      <polygon points={BRH.hStem} fill="var(--color-mark-b)" />
      <path d={BRH.hArc} fill="none" stroke="var(--color-mark-b)" strokeWidth={BRH.w} />
      <polygon points={BRH.hLeg} fill="var(--color-mark-b)" />
    </g>,
    // o: o bojo sozinho
    <g key="o" mask={`url(#${mask})`}>
      <circle {...BRH.bowl} fill="none" stroke="var(--color-mark-b)" strokeWidth={BRH.w} />
    </g>,
    // r de novo
    <g key="r2">
      <polygon points={BRH.rLeg} fill="var(--color-mark-r)" />
      <path d={BRH.rArc} fill="none" stroke="var(--color-mark-r)" strokeWidth={BRH.w} />
    </g>,
    // n: arco e perna do h, mais a parte baixa da haste
    <g key="n">
      <polygon points={BRH.nLeg} fill="var(--color-mark-b)" />
      <path d={BRH.hArc} fill="none" stroke="var(--color-mark-b)" strokeWidth={BRH.w} />
      <polygon points={BRH.hLeg} fill="var(--color-mark-b)" />
    </g>,
  ];

  return (
    <figure className={cn("m-0", className)}>
      <style>{keyframes(k)}</style>
      <svg
        viewBox={BRH.view}
        className={svgClassName}
        role={title ? "img" : undefined}
        aria-label={title || undefined}
        aria-hidden={title ? undefined : true}
      >
        <defs>
          <BrhMask id={mask} />
        </defs>
        <g style={anim(`${k}-base`)}>
          <BrhShapes tone="light" maskId={mask} />
        </g>
        {camadas.map((c, i) => (
          <g key={i} style={anim(`${k}-c${i}`)}>
            {c}
          </g>
        ))}
      </svg>
      {legenda && (
      <figcaption
        aria-hidden="true"
        className="mt-[var(--space-lg)] flex justify-between px-[4%] font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-none text-t-ink"
      >
        {LETRAS.map((l, i) => (
          <span key={i} style={anim(`${k}-l${i}`)}>
            {l}
          </span>
        ))}
      </figcaption>
      )}
    </figure>
  );
};
