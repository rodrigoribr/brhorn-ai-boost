import type { ReactNode } from "react";
import { SiteHeader } from "@/components/home/SiteHeader";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

export const EMAIL_SUPORTE = "suporte@brhorn.com";

export const LinkSuporte = () => (
  <a href={`mailto:${EMAIL_SUPORTE}`} className="text-nanquim underline underline-offset-4 hover:text-projeto">
    {EMAIL_SUPORTE}
  </a>
);

type Secao = { titulo?: string; texto: ReactNode };

type Props = {
  titulo: string;
  resumo?: ReactNode;
  secoes: Secao[];
  atualizacao?: string;
};

// Documento legal como ficha técnica: título da seção à esquerda, texto à direita.
export const PaginaLegal = ({ titulo, resumo, secoes, atualizacao }: Props) => {
  usePageTitle(`${titulo} · brhorn`);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-projeto/20">
      <SiteHeader />
      <main>
        <section className="border-b border-linha bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 md:pt-20">
            <h1 className="max-w-3xl font-display text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] text-nanquim sm:text-5xl">
              {titulo}
            </h1>
            {resumo && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{resumo}</p>}
            {atualizacao && (
              <p className="mt-6 font-mono text-xs text-muted-foreground">Última atualização: {atualizacao}</p>
            )}
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          {secoes.map((s, i) => (
            <section
              key={i}
              className="grid gap-2 border-t border-linha py-8 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12"
            >
              {s.titulo ? (
                <h2 className="font-display text-xl font-normal text-nanquim">{s.titulo}</h2>
              ) : (
                <span aria-hidden="true" className="hidden md:block" />
              )}
              <div className="max-w-[65ch] leading-relaxed text-muted-foreground">{s.texto}</div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
