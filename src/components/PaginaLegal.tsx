import type { ReactNode } from "react";
import { SiteHeader } from "@/components/home/SiteHeader";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { Link } from "react-router-dom";
import { EMAIL } from "@/lib/contato";

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

export const LinkEmail = () => (
  <a
    href={`mailto:${EMAIL}`}
    className={`rounded-[var(--radius-control)] text-t-ink underline underline-offset-4 transition-colors duration-micro hover:text-t-accent ${FOCO}`}
  >
    {EMAIL}
  </a>
);

/** Link para outra página do site, no mesmo estilo do e-mail. */
export const LinkPagina = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className={`rounded-[var(--radius-control)] text-t-ink underline underline-offset-4 transition-colors duration-micro hover:text-t-accent ${FOCO}`}
  >
    {children}
  </Link>
);

type Secao = { titulo?: string; texto: ReactNode };

type Props = {
  titulo: string;
  resumo?: ReactNode;
  secoes: Secao[];
  atualizacao?: string;
};

// Documento legal no sistema do redesign: abertura como nas páginas internas e, embaixo,
// a ficha técnica com o título da seção à esquerda (4 colunas) e o texto à direita (8).
export const PaginaLegal = ({ titulo, resumo, secoes, atualizacao }: Props) => {
  usePageTitle(`${titulo} · brhorn`);

  return (
    <div className="min-h-screen bg-t-paper text-t-ink">
      <SiteHeader />
      <main>
        <section aria-labelledby="legal-titulo" className="bg-t-paper">
          <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] pb-[var(--space-2xl)] pt-[var(--space-xl)] lg:pt-[var(--space-2xl)]">
            <h1
              id="legal-titulo"
              className="max-w-[18ch] font-display text-[length:var(--text-display-s)] font-normal leading-[1.06] tracking-[var(--tracking-display)] text-t-ink"
            >
              {titulo}
            </h1>
            {resumo && <p className="lead mt-[var(--space-lg)] text-t-muted">{resumo}</p>}
            {atualizacao && (
              <p className="num mt-[var(--space-md)] text-sm text-t-muted">Última atualização: {atualizacao}</p>
            )}
          </div>
        </section>

        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] pb-[var(--section-gap-s)]">
          {secoes.map((s, i) => (
            <section
              key={i}
              className="grid gap-[var(--space-sm)] border-t border-t-rule py-[var(--space-xl)] md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[var(--gap-columns)]"
            >
              {s.titulo ? (
                <h2 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">
                  {s.titulo}
                </h2>
              ) : (
                <span aria-hidden="true" className="hidden md:block" />
              )}
              <div className="max-w-[65ch] text-t-muted">{s.texto}</div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
