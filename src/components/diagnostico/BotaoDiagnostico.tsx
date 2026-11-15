import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useAvisoAberto } from "@/components/AvisoCookies";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { CONTATO_ROTINA_WHATSAPP, whatsappLink } from "@/lib/contato";
import { cn } from "@/lib/utils";
import { registrarContato } from "@/lib/consentimento";
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
  mensagemWhatsapp?: string;
  descricao?: string;
}

export const BotaoDiagnostico = ({ origem, className, children, mensagemWhatsapp = MSG_WHATSAPP, descricao }: Props) => {
  if (CHAT_ATIVO) {
    return (
      <button type="button" data-origem={origem} aria-describedby={descricao} onClick={() => abrirDiagnostico(origem)} className={className}>
        {children}
      </button>
    );
  }
  return (
    <a
      href={whatsappLink(mensagemWhatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      data-origem={origem}
      aria-describedby={descricao}
      onClick={() => registrarContato("Contact", origem, "whatsapp")}
      className={className}
    >
      {children}
    </a>
  );
};

export const CLASSE_BOTAO_PRIMARIO =
  "inline-flex h-12 items-center justify-center rounded-[var(--radius-control)] bg-t-accent px-6 font-medium text-t-accentink transition-colors duration-micro hover:bg-t-accenthover active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)] disabled:opacity-60";

export const ConteudoBotao = ({ children = "Fazer diagnóstico" }: { children?: ReactNode }) => (
  <>
    {children}
    <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
  </>
);

// Páginas legais ficam sem o botão fixo.
const SEM_BOTAO_FIXO = ["/politica-privacidade", "/termos-uso", "/exclusao-dados"];

export const BotaoDiagnosticoFixo = () => {
  const { pathname } = useLocation();
  const avisoAberto = useAvisoAberto();
  if (SEM_BOTAO_FIXO.includes(pathname) || avisoAberto) return null;
  const naHome = pathname === "/";
  return (
    <div className={cn(
      "pointer-events-none fixed inset-x-0 bottom-0 z-40 justify-end px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6",
      naHome ? "hidden [@media(min-width:64rem)_and_(pointer:fine)]:flex" : "flex",
    )}>
      <BotaoDiagnostico
        origem="botao_fixo"
        mensagemWhatsapp={naHome ? CONTATO_ROTINA_WHATSAPP.mensagem : undefined}
        className="pointer-events-auto inline-flex h-12 items-center rounded-full border border-t-rule bg-t-accent pl-4 pr-5 font-medium text-t-accentink shadow-[var(--shadow-float)] transition-colors duration-micro hover:bg-t-accenthover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
      >
        <MessageSquareText className="mr-2 h-4 w-4" aria-hidden="true" />
        {naHome ? (CHAT_ATIVO ? "Conversar pelo chat" : "Conversar no WhatsApp") : "Fazer diagnóstico"}
      </BotaoDiagnostico>
    </div>
  );
};
