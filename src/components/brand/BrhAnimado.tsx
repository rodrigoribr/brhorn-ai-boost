import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/utils";
import { BRH, BrhMask, BrhShapes } from "./Logo";

// Assinatura do cabeçalho (versão A2, aprovada em 2026-11-05; estudo em ~/brhorn/brhorn_page/quadro-logo-degrade.html).
//
// Uma faixa de luz em degradê corre da esquerda para a direita, no sentido da leitura: a primeira passada acende
// b → r → h, a segunda o → r → n. A frente da faixa é definida e atrás fica um rastro, então uma letra acende
// enquanto a anterior some atrás dela. Durante o movimento o monograma fica quase apagado (BASE_MOVIMENTO).
//
// Ao carregar, a faixa percorre as seis letras uma vez. Depois, com `acompanhaRolagem`, quem move é o scroll:
// para baixo avança, para cima volta (e o rastro troca de lado). O logo NÃO segue a posição do scroll: tem
// velocidade própria, que persegue a do scroll com suavidade e nunca passa de VEL_MAX. Quando a tela para, ele
// freia e o monograma inteiro reacende junto, num fade único (REACENDER_MS).
// Sem JavaScript, ou com prefers-reduced-motion, fica a pose inteira, parada.

const PX_POR_LETRA = 90; // scroll lento: cada letra vale ~90 px de rolagem
const VEL_MAX = 4; // letras por segundo, mesmo com o scroll no máximo
const VEL_ABERTURA = 6 / 3.6; // a apresentação ao carregar dura 3,6 s
const TAU_SCROLL = 0.12; // s: suaviza a leitura da velocidade do scroll
const TAU_LOGO = 0.3; // s: quanto o logo demora para alcançar a velocidade do scroll enquanto ele rola
const TAU_FREIO = 0.12; // s: freio curto quando a tela para
const SEM_SCROLL_MS = 100; // sem evento de scroll por este tempo = a tela parou
const REACENDER_MS = 450; // o monograma inteiro volta junto
const BASE_MOVIMENTO = 0.13;

// A faixa, em unidades do desenho: largura e trajeto (sai da esquerda, passa da direita).
const LARG = 160;
const INI = -LARG;
const FIM = 250;
// Cada passada cobre um trecho de pos (0–6), com uma pequena sobreposição entre elas.
const PASSADAS: [number, number][] = [
  [0, 3.4],
  [2.6, 6],
];

const limitar = (x: number, a: number, b: number) => Math.min(b, Math.max(a, x));
const menosMovimento = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface BrhAnimadoProps {
  className?: string;
  /** Classes do <svg> (tamanho). */
  svgClassName?: string;
  /** Rótulo acessível; vazio = decorativo (quando o link em volta já tem nome). */
  title?: string;
  /** Depois da apresentação, a faixa de luz segue o scroll (para frente ou para trás). */
  acompanhaRolagem?: boolean;
}

const ROTULO = "Monograma brh: dentro dele estão as letras b, r, h, o, r e n, o nome brhorn";

export const BrhAnimado = ({ className, svgClassName = "h-auto w-full", title = ROTULO, acompanhaRolagem = false }: BrhAnimadoProps) => {
  const k = `brh${useId().replace(/:/g, "")}`;
  const mask = `${k}-m`;
  const base = useRef<SVGGElement>(null);
  const passadas = useRef<(SVGGElement | null)[]>([]);
  const faixas = useRef<(SVGLinearGradientElement | null)[]>([]);

  useEffect(() => {
    if (menosMovimento()) return;

    let pos = 0; // em letras; mod 6
    let vel = 0; // letras/s
    let velScroll = 0; // px/s, suavizada
    let abertura = true; // a apresentação ao carregar
    let ultimoY = window.scrollY;
    let ultimoT = 0;
    let ultimaRolagem = -Infinity;
    let quadro = 0;
    let apagar: ReturnType<typeof setTimeout> | undefined;
    let emMovimento = false;

    const entrar = () => {
      if (emMovimento) return;
      emMovimento = true;
      clearTimeout(apagar);
      if (base.current) {
        base.current.style.transition = "opacity 200ms ease";
        base.current.style.opacity = String(BASE_MOVIMENTO);
      }
    };

    const desenhar = () => {
      const p = ((pos % 6) + 6) % 6;
      PASSADAS.forEach(([a, b], i) => {
        const g = passadas.current[i];
        const f = faixas.current[i];
        if (!g || !f) return;
        const ativa = p >= a && p <= b;
        g.style.opacity = ativa ? "1" : "0";
        if (!ativa) return;
        const frente = INI + ((p - a) / (b - a)) * (FIM - INI) + LARG;
        // o rastro fica atrás de quem anda: à esquerda indo para frente, à direita voltando
        const [x1, x2] = vel >= 0 ? [frente - LARG, frente] : [frente, frente - LARG];
        f.setAttribute("x1", String(x1));
        f.setAttribute("x2", String(x2));
      });
    };

    // A tela parou: o monograma inteiro reacende junto. As camadas de luz têm a mesma cor da base,
    // então só saem depois que a base chegou a 1, sem nenhuma letra piscar.
    const reacender = () => {
      emMovimento = false;
      if (base.current) {
        base.current.style.transition = `opacity ${REACENDER_MS}ms ease`;
        base.current.style.opacity = "1";
      }
      apagar = setTimeout(() => passadas.current.forEach((g) => g && (g.style.opacity = "0")), REACENDER_MS);
    };

    const passo = (t: number) => {
      const dt = ultimoT ? Math.min((t - ultimoT) / 1000, 0.05) : 1 / 60;
      ultimoT = t;

      if (abertura) {
        vel = VEL_ABERTURA;
        pos += vel * dt;
        if (pos >= 6) {
          pos = 0;
          vel = 0;
          abertura = false;
          quadro = 0;
          ultimoT = 0;
          reacender();
          return;
        }
        desenhar();
        quadro = requestAnimationFrame(passo);
        return;
      }

      const y = window.scrollY;
      const bruta = (y - ultimoY) / dt;
      ultimoY = y;
      const rolando = performance.now() - ultimaRolagem < SEM_SCROLL_MS;
      velScroll = rolando ? velScroll + (bruta - velScroll) * (1 - Math.exp(-dt / TAU_SCROLL)) : 0;
      const alvo = limitar(velScroll / PX_POR_LETRA, -VEL_MAX, VEL_MAX);
      vel += (alvo - vel) * (1 - Math.exp(-dt / (rolando ? TAU_LOGO : TAU_FREIO)));
      pos += vel * dt;
      desenhar();

      if (!rolando && Math.abs(vel) < 0.3) {
        vel = 0;
        velScroll = 0;
        quadro = 0;
        ultimoT = 0;
        reacender();
        return;
      }
      quadro = requestAnimationFrame(passo);
    };

    const aoRolar = () => {
      ultimaRolagem = performance.now();
      if (abertura) {
        // o scroll interrompe a apresentação e assume dali
        abertura = false;
        vel = 0;
      }
      entrar();
      if (!quadro) {
        ultimoY = window.scrollY;
        quadro = requestAnimationFrame(passo);
      }
    };

    entrar();
    quadro = requestAnimationFrame(passo);
    if (acompanhaRolagem) window.addEventListener("scroll", aoRolar, { passive: true });
    return () => {
      window.removeEventListener("scroll", aoRolar);
      cancelAnimationFrame(quadro);
      clearTimeout(apagar);
    };
  }, [acompanhaRolagem]);

  // A faixa: degradê de máscara, rastro longo atrás e frente curta. x1/x2 mudam a cada quadro.
  const faixa = (i: number) => (
    <linearGradient
      key={i}
      id={`${k}-f${i}`}
      ref={(el) => {
        faixas.current[i] = el;
      }}
      gradientUnits="userSpaceOnUse"
      x1={INI}
      y1="0"
      x2={INI + LARG}
      y2="0"
    >
      <stop offset="0" stopColor="#000" />
      <stop offset="0.6" stopColor="#fff" />
      <stop offset="0.82" stopColor="#fff" />
      <stop offset="1" stopColor="#000" />
    </linearGradient>
  );
  const recorte = (i: number) => (
    <mask key={i} id={`${k}-k${i}`} maskUnits="userSpaceOnUse" x="-40" y="-20" width="320" height="260">
      <rect x="-40" y="-20" width="320" height="260" fill={`url(#${k}-f${i})`} />
    </mask>
  );
  const camada = (i: number, conteudo: React.ReactNode) => (
    <g
      ref={(el) => {
        passadas.current[i] = el;
      }}
      mask={`url(#${k}-k${i})`}
      style={{ opacity: 0 }}
    >
      {conteudo}
    </g>
  );

  return (
    <figure className={cn("m-0", className)}>
      <svg
        viewBox={BRH.view}
        className={svgClassName}
        role={title ? "img" : undefined}
        aria-label={title || undefined}
        aria-hidden={title ? undefined : true}
      >
        <defs>
          <BrhMask id={mask} />
          {faixa(0)}
          {faixa(1)}
          {recorte(0)}
          {recorte(1)}
        </defs>
        <g ref={base}>
          <BrhShapes tone="light" maskId={mask} />
        </g>
        {/* Passada 1: b → r → h (o monograma inteiro) */}
        {camada(0, <BrhShapes tone="light" maskId={mask} />)}
        {/* Passada 2: o (o bojo) → r → n (arco e perna do h, mais a parte baixa da haste) */}
        {camada(
          1,
          <>
            <g mask={`url(#${mask})`}>
              <circle {...BRH.bowl} fill="none" stroke="var(--color-mark-b)" strokeWidth={BRH.w} />
            </g>
            <polygon points={BRH.rLeg} fill="var(--color-mark-r)" />
            <path d={BRH.rArc} fill="none" stroke="var(--color-mark-r)" strokeWidth={BRH.w} />
            <polygon points={BRH.nLeg} fill="var(--color-mark-b)" />
            <path d={BRH.hArc} fill="none" stroke="var(--color-mark-b)" strokeWidth={BRH.w} />
            <polygon points={BRH.hLeg} fill="var(--color-mark-b)" />
          </>,
        )}
      </svg>
    </figure>
  );
};
