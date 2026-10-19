import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Clinicas from "./pages/Clinicas";
import Imobiliarias from "./pages/Imobiliarias";
import ProfissionaisLiberais from "./pages/ProfissionaisLiberais";
import Marketing from "./pages/Marketing";
import Contabilidade from "./pages/Contabilidade";
import Restaurantes from "./pages/Restaurantes";
import Ecommerce from "./pages/Ecommerce";
import AutomacoesPersonalizadas from "./pages/AutomacoesPersonalizadas";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import ExclusaoDados from "./pages/ExclusaoDados";
import AxionPage from "./pages/AxionPage";
import ViaSerraPage from "./pages/ViaSerraPage";
import ConfiguracaoAgentes from "./pages/ConfiguracaoAgentes";

const queryClient = new QueryClient();

// Páginas ainda no visual antigo (escuro). Saem daqui conforme forem redesenhadas.
const Legacy = ({ children }: { children: ReactNode }) => (
  <div className="legacy-dark min-h-screen">{children}</div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/configuracao-de-agentes" element={<ConfiguracaoAgentes />} />
          <Route path="/axion" element={<AxionPage />} />
          <Route path="/viaserra" element={<ViaSerraPage />} />
          <Route path="/clinicas" element={<Legacy><Clinicas /></Legacy>} />
          <Route path="/imobiliarias" element={<Legacy><Imobiliarias /></Legacy>} />
          <Route path="/profissionais-liberais" element={<Legacy><ProfissionaisLiberais /></Legacy>} />
          <Route path="/marketing" element={<Legacy><Marketing /></Legacy>} />
          <Route path="/contabilidade" element={<Legacy><Contabilidade /></Legacy>} />
          <Route path="/pousadas" element={<ViaSerraPage />} />
          <Route path="/restaurantes" element={<Legacy><Restaurantes /></Legacy>} />
          <Route path="/ecommerce" element={<Legacy><Ecommerce /></Legacy>} />
          <Route path="/automacoes-personalizadas" element={<Legacy><AutomacoesPersonalizadas /></Legacy>} />
          <Route path="/politica-privacidade" element={<Legacy><PoliticaPrivacidade /></Legacy>} />
          <Route path="/termos-uso" element={<Legacy><TermosUso /></Legacy>} />
          <Route path="/exclusao-dados" element={<Legacy><ExclusaoDados /></Legacy>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
