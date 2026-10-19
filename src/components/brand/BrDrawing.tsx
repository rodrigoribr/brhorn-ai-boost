import { useId, useMemo } from "react";

// O br como desenho técnico: círculos de construção, cotas e o rastro da biela
// parado no instante da tangência (θ = 0), quando o pino sai da órbita do b e vira o r.
// Na etapa 2 este desenho passa a ser animado pelo scroll.

const ROD = 96; // comprimento da biela
const CLIP_R = 38; // o rastro fica dentro do bojo

const rodSegment = (thetaDeg: number): string | null => {
  const t = (thetaDeg * Math.PI) / 180;
  const px = 42 + 42 * Math.cos(t);
  const py = 118 - 42 * Math.sin(t);
  const sy = py - Math.sqrt(ROD * ROD - px * px);
  const dx = px;
  const dy = py - sy;
  const fx = -42;
  const fy = sy - 118;
  const a = dx * dx + dy * dy;
  const b = 2 * (fx * dx + fy * dy);
  const c = fx * fx + fy * fy - CLIP_R * CLIP_R;
  const disc = b * b - 4 * a * c;
  if (disc <= 0) return null;
  const q = Math.sqrt(disc);
  const u1 = Math.max((-b - q) / (2 * a), 0);
  const u2 = Math.min((-b + q) / (2 * a), 1);
  if (u2 <= u1) return null;
  const f = (n: number) => n.toFixed(2);
  return `M${f(u1 * dx)} ${f(sy + u1 * dy)}L${f(u2 * dx)} ${f(sy + u2 * dy)}`;
};

export const BrDrawing = ({ className }: { className?: string }) => {
  const id = `brd-${useId().replace(/:/g, "")}`;
  const trail = useMemo(() => {
    const n = 44;
    return Array.from({ length: n }, (_, i) => ({
      d: rodSegment(360 - 4 * i),
      opacity: 0.55 * Math.pow(1 - i / n, 1.6) + 0.03,
    })).filter((s) => s.d);
  }, []);

  return (
    <svg viewBox="-30 -10 190 196" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="24" y1="0" x2="132" y2="0">
          <stop offset="0" stopColor="#161a3a" />
          <stop offset="0.55" stopColor="#1a3b9c" />
          <stop offset="1" stopColor="#1f6feb" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="#1f6feb" strokeWidth={0.35} strokeDasharray="1.2 2.4" opacity={0.55}>
        <rect x="0" y="76" width="84" height="84" />
        <circle cx="126" cy="118" r="42" />
        <path d="M-24 118H172M42 64V176M126 64V176" />
      </g>
      <g fill="none">
        {trail.map((s, i) => (
          <path key={i} d={s.d!} stroke={`url(#${id})`} strokeWidth={0.7} strokeOpacity={s.opacity} />
        ))}
      </g>
      <g fill="none" stroke={`url(#${id})`} strokeWidth={7} strokeLinecap="round">
        <path d="M0 12V160" />
        <circle cx="42" cy="118" r="42" />
        <path d="M84 160V118A42 42 0 0 1 126 76" />
      </g>
      <circle cx="84" cy="118" r="1.6" fill="#1f6feb" />
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="4.2" fill="#5b5f73" letterSpacing="0.3">
        <text x="44" y="70">r 42</text>
        <text x="130" y="70">r 42</text>
        <text x="88" y="114">tangência</text>
      </g>
    </svg>
  );
};
