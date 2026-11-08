import { useEffect, useRef, useState } from "react";

/** true a partir da primeira vez que o elemento cruza a linha da tela (padrão: 70% da altura). Não volta a false. */
export const useNaTela = <T extends Element>(linha = "0px 0px -30% 0px") => {
  const ref = useRef<T>(null);
  const [visto, setVisto] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisto(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisto(true);
          obs.disconnect();
        }
      },
      { rootMargin: linha },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [linha]);
  return [ref, visto] as const;
};
