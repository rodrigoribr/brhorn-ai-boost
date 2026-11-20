import { useEffect, useRef } from "react";

// Cenas em loop geradas no Remotion (~/brhorn/ferramentas/remotion-brhorn, pasta src/site).
// Sem autoPlay no HTML: só toca enquanto está na tela e se a pessoa não pediu menos movimento;
// nos outros casos fica o pôster, que mostra a mesma cena parada.
interface CenaVideoProps {
  src: string;
  poster: string;
  descricao: string;
  className?: string;
}

export function CenaVideo({ src, poster, descricao, className }: CenaVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visivel = false;
    const aplicar = () => {
      if (visivel && !menosMovimento.matches) video.play().catch(() => {});
      else video.pause();
    };
    const observador = new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting;
      aplicar();
    });
    observador.observe(video);
    menosMovimento.addEventListener("change", aplicar);
    return () => {
      observador.disconnect();
      menosMovimento.removeEventListener("change", aplicar);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={1200}
      height={800}
      muted
      loop
      playsInline
      preload="metadata"
      role="img"
      aria-label={descricao}
      className={className}
    />
  );
}
