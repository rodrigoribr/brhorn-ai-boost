import { useEffect, useRef, useState, type ReactNode } from "react";

// Entra suavemente quando aparece na tela (uma vez). Sem movimento se o sistema pedir menos animação (CSS).
export const Revelar = ({ children, className = "", atraso = 0 }: { children: ReactNode; className?: string; atraso?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`revelar ${visivel ? "visivel" : ""} ${className}`} style={{ transitionDelay: `${atraso}ms` }}>
      {children}
    </div>
  );
};
