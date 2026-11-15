import { useEffect, useRef, useState } from "react";

export const HeroEscritorio = () => {
  const fotoRef = useRef<HTMLImageElement>(null);
  const telaRef = useRef<HTMLDivElement>(null);
  const [mostrarFluxo, setMostrarFluxo] = useState(false);

  useEffect(() => {
    const foto = fotoRef.current;
    const tela = telaRef.current;
    if (!foto || !tela || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelado = false;
    let monitorVisivel = false;
    // Observa a própria tela para que o movimento também possa ser visto no celular.
    const observador = new IntersectionObserver(([entrada]) => {
      monitorVisivel = entrada.isIntersecting;
      if (!monitorVisivel) return;
      void foto.decode().then(() => {
        if (!cancelado && monitorVisivel) {
          setMostrarFluxo(true);
          observador.disconnect();
        }
      }).catch(() => {});
    });
    observador.observe(tela);
    return () => {
      cancelado = true;
      observador.disconnect();
    };
  }, []);

  return (
    <div className="hero-escritorio" data-fluxo={mostrarFluxo || undefined}>
      <picture>
        <source
          media="(min-width: 64rem)"
          srcSet="/imagens/escritorio-panoramico-1200.webp 1200w, /imagens/escritorio-panoramico-1983.webp 1983w"
          sizes="(min-width: 1440px) 1440px, 100vw"
          width={1983}
          height={793}
        />
        <img
          ref={fotoRef}
          src="/imagens/escritorio-brhorn-639.webp"
          srcSet="/imagens/escritorio-brhorn-639.webp 639w, /imagens/escritorio-brhorn-1122.webp 1122w, /imagens/escritorio-brhorn-1536.webp 1536w"
          sizes="(min-width: 672px) 672px, 100vw"
          width={1536}
          height={1024}
          {...{ fetchpriority: "high" }}
          alt="Uma sequência de mesas vazias leva a um monitor com um fluxo de trabalho ativo."
        />
      </picture>
      <div ref={telaRef} className="hero-monitor" aria-hidden="true">
        <span className="hero-monitor-dado hero-monitor-dado-superior" />
        <span className="hero-monitor-dado hero-monitor-dado-central" />
        <span className="hero-monitor-dado hero-monitor-dado-inferior" />
        <span className="hero-monitor-concluido hero-monitor-concluido-primeiro" />
        <span className="hero-monitor-concluido hero-monitor-concluido-segundo" />
      </div>
    </div>
  );
};
