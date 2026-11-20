import { useEffect, useRef } from "react";

// Cena do mascote conferindo e-mails (gerada no Remotion: ~/brhorn/ferramentas/remotion-brhorn,
// composição AgenteConfere). Sem autoPlay no HTML: só toca se a pessoa não pediu menos movimento;
// nesse caso fica o pôster, que mostra o mesmo exemplo parado.
export function AgenteConfereVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => {
      if (menosMovimento.matches) video.pause();
      else video.play().catch(() => {});
    };
    aplicar();
    menosMovimento.addEventListener("change", aplicar);
    return () => menosMovimento.removeEventListener("change", aplicar);
  }, []);

  return (
    <video
      ref={ref}
      src="/projetos/agentes/agente-confere.mp4"
      poster="/projetos/agentes/agente-confere-poster.webp"
      width={1200}
      height={800}
      muted
      loop
      playsInline
      preload="auto"
      role="img"
      aria-label="Animação: e-mails chegam, o agente confere quantidade, valor e prazo de cada um. Os completos vão para Pronto; a cotação sem prazo vai para Para você revisar."
    />
  );
}
