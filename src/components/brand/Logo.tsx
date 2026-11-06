import { useId } from "react";
import { cn } from "@/lib/utils";

// Monograma brh híbrido (2026-11-04). Fonte: Logos/vetor/brh-hibrido/gera_brh.py no QG.
// Traço constante 26, chanfros paralelos, b → r → h em escada. Lê b·r·h·o·r·n.
export const BRH = {
  view: "-21 4 268 203",
  bStem: "-13,12 13,32 13,170 -13,170",
  bowl: { cx: 42, cy: 118, r: 42 },
  rLeg: "71,117 97,117 97,199 71,180",
  rArc: "M84 118A42 42 0 0 1 126 76",
  hStem: "129,30 155,51 155,188 129,188",
  hArc: "M142 136A42 42 0 0 1 226 136",
  hLeg: "213,135 239,135 239,188 213,169",
  // perna esquerda do n: a parte baixa da haste do h
  nLeg: "129,136 155,136 155,188 129,188",
  w: 26,
} as const;

type Tone = "light" | "dark" | "mono";

const CORES: Record<Tone, { b: string; r: string }> = {
  light: { b: "var(--color-mark-b)", r: "var(--color-mark-r)" },
  dark: { b: "var(--color-mark-b-dark)", r: "var(--color-mark-r-dark)" },
  mono: { b: "currentColor", r: "currentColor" },
};

/** Máscara do respiro (1 unidade) que o r abre no bojo do b. */
export const BrhMask = ({ id }: { id: string }) => (
  <mask id={id} maskUnits="userSpaceOnUse" x="-40" y="-20" width="320" height="260">
    <rect x="-40" y="-20" width="320" height="260" fill="#fff" />
    <polygon points={BRH.rLeg} fill="#000" stroke="#000" strokeWidth="2" />
    <path d={BRH.rArc} fill="none" stroke="#000" strokeWidth={BRH.w + 2} />
  </mask>
);

/** As três letras. `gap` liga o respiro (desligado em tamanhos de favicon). */
export const BrhShapes = ({ tone = "light", maskId }: { tone?: Tone; maskId?: string }) => {
  const c = CORES[tone];
  return (
    <>
      <g mask={maskId ? `url(#${maskId})` : undefined}>
        <polygon points={BRH.bStem} fill={c.b} />
        <circle {...BRH.bowl} fill="none" stroke={c.b} strokeWidth={BRH.w} />
      </g>
      <polygon points={BRH.rLeg} fill={c.r} />
      <path d={BRH.rArc} fill="none" stroke={c.r} strokeWidth={BRH.w} />
      <polygon points={BRH.hStem} fill={c.b} />
      <path d={BRH.hArc} fill="none" stroke={c.b} strokeWidth={BRH.w} />
      <polygon points={BRH.hLeg} fill={c.b} />
    </>
  );
};

interface MarkProps {
  className?: string;
  tone?: Tone;
  title?: string;
  /** Respiro entre o r e o bojo; desligue abaixo de ~48 px. */
  gap?: boolean;
}

/** Só o monograma brh. */
export const BrhMark = ({ className, tone = "light", title = "brhorn", gap = true }: MarkProps) => {
  const id = `brh-${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox={BRH.view}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      {gap && (
        <defs>
          <BrhMask id={id} />
        </defs>
      )}
      <BrhShapes tone={tone} maskId={gap ? id : undefined} />
    </svg>
  );
};

/** Compatibilidade: chamadas antigas do monograma. */
export const BrMark = BrhMark;

/** Assinatura: o brh e o nome escrito por inteiro. 🚫 Não usar no site (decisão de 2026-11-05: o monograma
 *  já é a palavra brhorn; o nome escrito só aparece em textos e contratos). Fica para materiais fora do site. */
export const Logo = ({ className, tone = "light", title = "brhorn" }: Omit<MarkProps, "gap">) => (
  <svg
    viewBox="-21 4 572 203"
    className={cn("w-auto", className)}
    role={title ? "img" : undefined}
    aria-label={title || undefined}
    aria-hidden={title ? undefined : true}
  >
    <BrhShapes tone={tone} />
    <text
      x="272"
      y="188"
      textLength="272"
      lengthAdjust="spacing"
      fontSize="96"
      style={{ fontFamily: "var(--font-display)", fill: tone === "dark" ? "var(--color-night-ink)" : "var(--color-ink)" }}
    >
      brhorn
    </text>
  </svg>
);
