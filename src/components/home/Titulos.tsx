import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// ——— Home redesenhada ———

interface SecaoProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** "noite" = a única faixa escura da página. */
  tom?: "papel" | "papel2" | "noite";
}

const FUNDO = { papel: "bg-t-paper", papel2: "bg-t-paper2", noite: "bg-t-night text-t-nightink" } as const;

/** Faixa de seção: régua no topo, container e ritmo vertical únicos para a página toda. */
export const Secao = ({ id, children, className, tom = "papel" }: SecaoProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-titulo`}
    className={cn(
      "py-[var(--section-gap-s)]",
      tom === "noite" ? "" : "border-t border-t-rule",
      FUNDO[tom],
      className,
    )}
  >
    <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">{children}</div>
  </section>
);

interface CabecaProps {
  id: string;
  titulo: ReactNode;
  texto?: ReactNode;
  noite?: boolean;
  className?: string;
}

/** Título da seção (h2) e uma frase, alinhados à esquerda. Sem rótulo antes do título. */
export const Cabeca = ({ id, titulo, texto, noite, className }: CabecaProps) => (
  <div className={className}>
    <h2
      id={`${id}-titulo`}
      className={cn(
        "max-w-[22ch] font-display text-[length:var(--text-section)] font-normal leading-[1.08] tracking-[var(--tracking-display)]",
        noite ? "text-t-nightink" : "text-t-ink",
      )}
    >
      {titulo}
    </h2>
    {texto && <p className={cn("lead mt-[var(--space-md)]", noite ? "text-t-nightmuted" : "text-t-muted")}>{texto}</p>}
  </div>
);
