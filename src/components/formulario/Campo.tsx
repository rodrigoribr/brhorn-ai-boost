import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

// Formulários das janelas (ContactModal, CallModal) no sistema do redesign: tokens, campos nativos,
// rótulo acima do campo, foco visível e o mesmo par de botões da home.

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

/** Input, select e textarea: fundo papel, régua forte, 48 px de altura. */
export const CLASSE_CAMPO = `mt-[var(--space-xs)] block w-full rounded-[var(--radius-control)] border border-t-rulestrong bg-t-paper px-3 text-t-ink placeholder:text-t-muted transition-colors duration-micro hover:border-t-ink ${FOCO}`;

interface CampoProps {
  id: string;
  rotulo: string;
  obrigatorio?: boolean;
  children: ReactNode;
}

/** Rótulo e campo. O asterisco é visual; o campo leva `required`. */
export const Campo = ({ id, rotulo, obrigatorio, children }: CampoProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-t-ink">
      {rotulo}
      {obrigatorio && (
        <span aria-hidden="true" className="text-t-muted">
          {" "}
          *
        </span>
      )}
    </label>
    {children}
  </div>
);

/** Conteúdo do botão de envio: o texto, ou o giro com "Enviando…". */
export const TextoEnvio = ({ enviando, children }: { enviando: boolean; children: ReactNode }) =>
  enviando ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      Enviando…
    </>
  ) : (
    <>{children}</>
  );

/** Rodapé das janelas de contato: para que servem os dados. */
export const NotaPrivacidade = ({ onClose }: { onClose: () => void }) => (
  <p className="border-t border-t-rule pt-[var(--space-md)] text-sm text-t-muted">
    Seus dados são usados só para responder este contato. Veja a{" "}
    <Link
      to="/politica-privacidade"
      onClick={onClose}
      className={`rounded-[var(--radius-control)] text-t-ink underline underline-offset-4 hover:text-t-accent ${FOCO}`}
    >
      Política de Privacidade
    </Link>
    .
  </p>
);
