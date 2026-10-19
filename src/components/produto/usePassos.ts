import { useEffect, useState } from "react";

const prefereMenosMovimento = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Avança por passos com a duração de cada um e recomeça. Com menos movimento, fica parado no último passo.
export const usePassos = (duracoes: number[]) => {
  const parado = prefereMenosMovimento();
  const [passo, setPasso] = useState(parado ? duracoes.length - 1 : 0);

  useEffect(() => {
    if (parado) return;
    const t = window.setTimeout(() => setPasso((p) => (p + 1) % duracoes.length), duracoes[passo]);
    return () => window.clearTimeout(t);
  }, [passo, parado, duracoes]);

  return passo;
};
