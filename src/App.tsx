import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import ExclusaoDados from "./pages/ExclusaoDados";
import AxionPage from "./pages/AxionPage";
import ViaSerraPage from "./pages/ViaSerraPage";
import ConfiguracaoAgentes from "./pages/ConfiguracaoAgentes";
import DiagnosticoChat from "@/components/diagnostico/DiagnosticoChat";
import { BotaoDiagnosticoFixo } from "@/components/diagnostico/BotaoDiagnostico";
import AvisoCookies from "@/components/AvisoCookies";

const queryClient = new QueryClient();

// Páginas de setor da fase anterior. Os endereços viraram a consultoria de agentes;
// o 301 de verdade está no vercel.json, isto cobre dev e GitHub Pages.
const SETORES_ANTIGOS = [
  "clinicas",
  "imobiliarias",
  "profissionais-liberais",
  "marketing",
  "contabilidade",
  "restaurantes",
  "ecommerce",
  "automacoes-personalizadas",
];

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
          <Route path="/pousadas" element={<ViaSerraPage />} />
          {SETORES_ANTIGOS.map((s) => (
            <Route key={s} path={`/${s}`} element={<Navigate to="/configuracao-de-agentes" replace />} />
          ))}
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/exclusao-dados" element={<ExclusaoDados />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* DEV-0004: chat de diagnóstico, montado uma vez; abre por abrirDiagnostico() ou ?diagnostico=1 */}
        <DiagnosticoChat />
        {/* DEV-0005: botão fixo "Fazer diagnóstico" (WhatsApp até o chat ir ao ar) */}
        <BotaoDiagnosticoFixo />
        {/* Consentimento do Meta Pixel; enquanto aberto, o botão fixo some para não sobrepor */}
        <AvisoCookies />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
