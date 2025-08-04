import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Clinicas from "./pages/Clinicas";
import Imobiliarias from "./pages/Imobiliarias";
import ProfissionaisLiberais from "./pages/ProfissionaisLiberais";
import Marketing from "./pages/Marketing";
import Contabilidade from "./pages/Contabilidade";
import Pousadas from "./pages/Pousadas";
import Restaurantes from "./pages/Restaurantes";
import Ecommerce from "./pages/Ecommerce";
import AutomacoesPersonalizadas from "./pages/AutomacoesPersonalizadas";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import ExclusaoDados from "./pages/ExclusaoDados";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clinicas" element={<Clinicas />} />
          <Route path="/imobiliarias" element={<Imobiliarias />} />
          <Route path="/profissionais-liberais" element={<ProfissionaisLiberais />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contabilidade" element={<Contabilidade />} />
          <Route path="/pousadas" element={<Pousadas />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/automacoes-personalizadas" element={<AutomacoesPersonalizadas />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/exclusao-dados" element={<ExclusaoDados />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
