import { useEffect, useRef, useState } from "react";
import { FASES } from "@/content/consultoriaAgentes";

// DEV-0005: o método (diagnóstico → projeto → piloto → escala) desenhado a nanquim e azul.
// Entre as fases, o losango azul é a decisão da empresa de seguir ou parar.
// O traço se desenha quando entra na tela; com prefers-reduced-motion aparece pronto (index.css).
// Os rótulos curtos vêm das entregas aprovadas em FASES.
const ROTULOS = ["mapa de oportunidades", "especificação por escrito", "30 a 60 dias, medido", "agentes em produção"];

const useVisivel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visivel };
};

const Losango = ({ x, y }: { x: number; y: number }) => (
  <rect
    x={x - 7}
    y={y - 7}
    width={14}
    height={14}
    transform={`rotate(45 ${x} ${y})`}
    className="metodo-ponto fill-t-paper stroke-t-accent"
    strokeWidth={1.5}
  />
);

const Estacao = ({ x, y, i }: { x: number; y: number; i: number }) => (
  <g className="metodo-ponto" style={{ transitionDelay: `${300 + i * 350}ms` }}>
    <circle cx={x} cy={y} r={26} className="fill-t-paper stroke-t-ink" strokeWidth={1.5} />
    <circle cx={x} cy={y} r={20} className="fill-none stroke-linha" strokeWidth={1} />
    <text x={x} y={y + 5} textAnchor="middle" className="fill-t-accent font-sans text-[14px]">
      {FASES[i].numero}
    </text>
  </g>
);

const Horizontal = () => {
  const xs = [110, 350, 590, 830];
  const y = 92;
  return (
    <svg viewBox="0 0 940 190" className="hidden h-auto w-full md:block" aria-hidden="true">
      {/* linha de chamada e cotas das pontas */}
      <path d={`M40 ${y}H900`} pathLength={1} className="metodo-traco fill-none stroke-t-ink" strokeWidth={1.5} />
      <path d={`M40 ${y - 10}V${y + 10}M900 ${y - 10}V${y + 10}`} className="metodo-ponto stroke-t-ink" strokeWidth={1} />
      {xs.slice(0, 3).map((x, i) => (
        <g key={`d${i}`} style={{ transitionDelay: `${480 + i * 350}ms` }} className="metodo-ponto">
          <Losango x={x + 120} y={y} />
          <text x={x + 120} y={y + 30} textAnchor="middle" className="fill-t-accent font-sans text-[13px]">
            decisão
          </text>
        </g>
      ))}
      {xs.map((x, i) => (
        <g key={x}>
          <Estacao x={x} y={y} i={i} />
          <g className="metodo-ponto" style={{ transitionDelay: `${380 + i * 350}ms` }}>
            <text x={x} y={y - 44} textAnchor="middle" className="fill-t-ink font-display text-[22px]">
              {FASES[i].nome}
            </text>
            <text x={x} y={y + 52} textAnchor="middle" className="fill-t-muted font-sans text-[13px]">
              {ROTULOS[i]}
            </text>
          </g>
        </g>
      ))}
    </svg>
  );
};

const Vertical = () => {
  const ys = [56, 206, 356, 506];
  const x = 52;
  return (
    <svg viewBox="0 0 320 560" className="h-auto w-full md:hidden" aria-hidden="true">
      <path d={`M${x} 16V546`} pathLength={1} className="metodo-traco fill-none stroke-t-ink" strokeWidth={1.5} />
      {ys.slice(0, 3).map((y, i) => (
        <g key={`d${i}`} style={{ transitionDelay: `${480 + i * 350}ms` }} className="metodo-ponto">
          <Losango x={x} y={y + 75} />
          <text x={x + 26} y={y + 79} className="fill-t-accent font-sans text-[13px]">
            decisão
          </text>
        </g>
      ))}
      {ys.map((y, i) => (
        <g key={y}>
          <Estacao x={x} y={y} i={i} />
          <g className="metodo-ponto" style={{ transitionDelay: `${380 + i * 350}ms` }}>
            <text x={x + 44} y={y + 2} className="fill-t-ink font-display text-[22px]">
              {FASES[i].nome}
            </text>
            <text x={x + 44} y={y + 22} className="fill-t-muted font-sans text-[13px]">
              {ROTULOS[i]}
            </text>
          </g>
        </g>
      ))}
    </svg>
  );
};

export const MetodoDesenho = ({ className = "" }: { className?: string }) => {
  const { ref, visivel } = useVisivel();
  return (
    <div
      ref={ref}
      role="img"
      aria-label="O método em quatro fases: diagnóstico, projeto, piloto e escala, com uma decisão da empresa entre cada fase."
      className={`metodo ${visivel ? "visivel" : ""} ${className}`}
    >
      <Horizontal />
      <Vertical />
    </div>
  );
};
