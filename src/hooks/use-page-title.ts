import { useEffect } from "react";

// Título da aba por página; devolve o anterior ao sair.
export const usePageTitle = (titulo: string) => {
  useEffect(() => {
    const anterior = document.title;
    document.title = titulo;
    return () => {
      document.title = anterior;
    };
  }, [titulo]);
};
