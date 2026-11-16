import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { aplicarSeo } from "@/lib/seo";

// Atualiza descrição, canonical e Open Graph a cada troca de rota (ver src/lib/seo.ts).
const SeoDaRota = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    aplicarSeo(pathname);
  }, [pathname]);
  return null;
};

export default SeoDaRota;
