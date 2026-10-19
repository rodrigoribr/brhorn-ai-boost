import { useId } from "react";
import { HORN_END_X, HORN_PATH } from "./hornPath";

type Tone = "light" | "dark";

// Marca v3: haste + bojo (r=42) + r tangente ao bojo em (84,118).
// Degradê horizontal nanquim → azul; no fundo escuro, papel → azul claro.
const STOPS: Record<Tone, [string, string, string]> = {
  light: ["#161a3a", "#1a3b9c", "#1f6feb"],
  dark: ["#f7f6f2", "#b9d3f5", "#6ea8ff"],
};

const MonogramPaths = ({ stroke, width }: { stroke: string; width: number }) => (
  <g fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round">
    <path d="M0 12V160" />
    <circle cx="42" cy="118" r="42" />
    <path d="M84 160V118A42 42 0 0 1 126 76" />
  </g>
);

const Gradient = ({ id, tone }: { id: string; tone: Tone }) => {
  const [a, m, b] = STOPS[tone];
  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="24" y1="0" x2="132" y2="0">
      <stop offset="0" stopColor={a} />
      <stop offset="0.55" stopColor={m} />
      <stop offset="1" stopColor={b} />
    </linearGradient>
  );
};

interface MarkProps {
  className?: string;
  tone?: Tone;
  title?: string;
}

/** Só o monograma br. */
export const BrMark = ({ className, tone = "light", title = "brhorn" }: MarkProps) => {
  const id = `brg-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="-8 4 146 164" className={className} role="img" aria-label={title}>
      <defs>
        <Gradient id={id} tone={tone} />
      </defs>
      <MonogramPaths stroke={`url(#${id})`} width={10} />
    </svg>
  );
};

/** Assinatura completa: br + horn. */
export const Logo = ({ className, tone = "light", title = "brhorn" }: MarkProps) => {
  const id = `brg-${useId().replace(/:/g, "")}`;
  const ink = tone === "light" ? "#161a3a" : "#f7f6f2";
  return (
    <svg viewBox={`-8 4 ${HORN_END_X + 16} 164`} className={className} role="img" aria-label={title}>
      <defs>
        <Gradient id={id} tone={tone} />
      </defs>
      <MonogramPaths stroke={`url(#${id})`} width={10} />
      <path d={HORN_PATH} fill={ink} />
    </svg>
  );
};
