import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { whatsappLink } from "@/lib/contato";
import { abrirDiagnostico } from "./abrir";

// DEV-0005: o botão "Fazer diagnóstico". Com VITE_DIAGNOSTICO_ATIVO=1 (chat da DEV-0004 no ar)
// ele abre o widget; sem a variável, é um link para o WhatsApp da empresa (decisão de 2026-11-04).
export const CHAT_ATIVO = import.meta.env.VITE_DIAGNOSTICO_ATIVO === "1";

const MSG_WHATSAPP =
  "Olá! Vim pelo site da brhorn e quero fazer um diagnóstico de agentes de IA para a minha empresa.";

interface Props {
  origem: string;
  className: string;
  children: ReactNode;
}

export const BotaoDiagnostico = ({ origem, className, children }: Props) => {
  if (CHAT_ATIVO) {
    return (
      <button type="button" data-origem={origem} onClick={() => abrirDiagnostico()} className={className}>
        {children}
      </button>
    );
  }
  return (
    <a
      href={whatsappLink(MSG_WHATSAPP)}
      target="_blank"
      rel="noopener noreferrer"
      data-origem={origem}
      onClick={() => window.fbq?.("track", "Contact")}
      className={className}
    >
      {children}
    </a>
  );
};

export const CLASSE_BOTAO_PRIMARIO =
  "inline-flex h-12 items-center justify-center rounded bg-projeto px-6 font-medium text-papel transition-colors hover:bg-[#1a5fcc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-projeto focus-visible:ring-offset-2 focus-visible:ring-offset-papel";

export const ConteudoBotao = () => (
  <>
    Fazer diagnóstico
    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
  </>
);

// Páginas legais ficam sem o botão fixo.
const SEM_BOTAO_FIXO = ["/politica-privacidade", "/termos-uso", "/exclusao-dados"];

export const BotaoDiagnosticoFixo = () => {
  const { pathname } = useLocation();
  if (SEM_BOTAO_FIXO.includes(pathname)) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6">
      <BotaoDiagnostico
        origem="botao_fixo"
        className="pointer-events-auto inline-flex h-12 items-center rounded-full border border-nanquim/10 bg-projeto pl-4 pr-5 font-medium text-papel shadow-[0_6px_20px_-6px_rgba(22,26,58,0.45)] transition-colors hover:bg-[#1a5fcc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-projeto focus-visible:ring-offset-2 focus-visible:ring-offset-papel"
      >
        <MessageSquareText className="mr-2 h-4 w-4" aria-hidden="true" />
        Fazer diagnóstico
      </BotaoDiagnostico>
    </div>
  );
};
