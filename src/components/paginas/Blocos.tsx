import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Peças das páginas internas (/axion, /viaserra, /configuracao-de-agentes), no mesmo sistema da home:
// tokens, régua no topo das seções, título à esquerda, sem rótulo antes do título e sem ícone decorativo.

const COLUNAS = "md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[var(--gap-columns)]";

interface AberturaProps {
  titulo: ReactNode;
  texto: ReactNode;
  acoes: ReactNode;
  /** A coisa real ao lado: a demonstração do sistema ou o exemplo. */
  figura: ReactNode;
  nota?: ReactNode;
}

/** Abertura das páginas internas: o texto à esquerda, o produto à direita. */
export const Abertura = ({ titulo, texto, acoes, figura, nota }: AberturaProps) => (
  <section aria-labelledby="abertura-titulo" className="bg-t-paper">
    <div className="mx-auto grid max-w-[var(--container)] items-center gap-[var(--space-2xl)] px-[var(--gutter)] pb-[var(--space-2xl)] pt-[var(--space-xl)] lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-x-[var(--gap-columns)] lg:py-[var(--space-2xl)]">
      <div className="min-w-0">
        <h1
          id="abertura-titulo"
          className="max-w-[18ch] font-display text-[length:var(--text-display-s)] font-normal leading-[1.06] tracking-[var(--tracking-display)] text-t-ink"
        >
          {titulo}
        </h1>
        <p className="lead mt-[var(--space-lg)] text-t-muted">{texto}</p>
        <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-sm)] sm:flex-row sm:flex-wrap [&>*]:whitespace-nowrap">{acoes}</div>
        {nota && <p className="mt-[var(--space-md)] text-sm text-t-muted">{nota}</p>}
      </div>
      <div className="min-w-0">{figura}</div>
    </div>
  </section>
);

interface Item {
  titulo: string;
  texto: string;
}

/** Itens em colunas, cada um sob uma régua. */
export const Grade = ({ itens, colunas = 3, numerar }: { itens: Item[]; colunas?: 2 | 3 | 4; numerar?: boolean }) => (
  <ul
    className={cn(
      "mt-[var(--space-2xl)] grid gap-x-[var(--gap-columns)] gap-y-[var(--space-xl)] sm:grid-cols-2",
      colunas === 3 && "lg:grid-cols-3",
      colunas === 4 && "lg:grid-cols-4",
    )}
  >
    {itens.map((e, i) => (
      <li key={e.titulo} className="border-t border-t-rulestrong pt-[var(--space-md)]">
        {numerar && <span className="num block text-sm text-t-accent">{String(i + 1).padStart(2, "0")}</span>}
        <h3 className={cn("font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink", numerar && "mt-[var(--space-sm)]")}>
          {e.titulo}
        </h3>
        <p className="mt-[var(--space-sm)] max-w-[44ch] text-t-muted">{e.texto}</p>
      </li>
    ))}
  </ul>
);

/** Tabela de duas colunas: o item à esquerda, o como à direita. `noite` para a faixa escura. */
export const Linhas = ({ itens, noite }: { itens: Item[]; noite?: boolean }) => (
  <dl className={cn("mt-[var(--space-2xl)] border-b", noite ? "border-t-nightrule" : "border-t-rule")}>
    {itens.map((s) => (
      <div
        key={s.titulo}
        className={cn("grid gap-[var(--space-xs)] border-t py-[var(--space-lg)]", COLUNAS, noite ? "border-t-nightrule" : "border-t-rule")}
      >
        <dt className={cn("font-display text-[length:var(--text-title)] leading-[1.2]", noite ? "text-t-nightink" : "text-t-ink")}>
          {s.titulo}
        </dt>
        <dd className={cn("max-w-[60ch]", noite ? "text-t-nightmuted" : "text-t-muted")}>{s.texto}</dd>
      </div>
    ))}
  </dl>
);

/** Passos em sequência: o número grande em azul, o nome e o texto. Em linha a partir de 60rem. */
export const Passos = ({ itens }: { itens: Item[] }) => (
  <ol className="mt-[var(--space-2xl)] grid gap-x-[var(--gap-columns)] gap-y-[var(--space-xl)] sm:grid-cols-2 lg:grid-cols-4">
    {itens.map((p, i) => (
      <li key={p.titulo} className="border-t-2 border-t-ink pt-[var(--space-md)]">
        <span className="num block font-display text-[length:var(--text-display-s)] leading-none text-t-accent">{i + 1}</span>
        <h3 className="mt-[var(--space-md)] font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">
          {p.titulo}
        </h3>
        <p className="mt-[var(--space-sm)] max-w-[40ch] text-t-muted">{p.texto}</p>
      </li>
    ))}
  </ol>
);

/** Título preso à esquerda, conteúdo à direita (Feature Stack, como as Fases da home). */
export const Lado = ({ cabeca, children }: { cabeca: ReactNode; children: ReactNode }) => (
  <div className="grid gap-[var(--space-2xl)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-[var(--gap-columns)]">
    <div className="lg:sticky lg:top-[calc(var(--nav-height)+var(--space-xl))] lg:self-start">{cabeca}</div>
    <div className="min-w-0">{children}</div>
  </div>
);

/** Lista com número à esquerda, régua entre as linhas. */
export const ListaNumerada = ({ itens }: { itens: string[] }) => (
  <ol className="border-b border-t-rule">
    {itens.map((p, i) => (
      <li key={p} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-[var(--space-md)] border-t border-t-rule py-[var(--space-md)]">
        <span className="num text-t-accent">{String(i + 1).padStart(2, "0")}</span>
        <span className="text-t-ink">{p}</span>
      </li>
    ))}
  </ol>
);

/** Etapas na vertical, como as Fases da home: número grande à esquerda, o nome e o texto à direita. */
export const Etapas = ({ itens, numerar = true }: { itens: Item[]; numerar?: boolean }) => (
  <ol className="border-b border-t-rule">
    {itens.map((f, i) => (
      <li key={f.titulo} className={`grid gap-[var(--space-md)] border-t border-t-rule py-[var(--space-xl)] ${numerar ? "sm:grid-cols-[4.5rem_minmax(0,1fr)]" : ""}`}>
        {numerar && <span className="num font-display text-[length:var(--text-display-s)] leading-none text-t-accent">{i + 1}</span>}
        <div>
          <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">{f.titulo}</h3>
          <p className="mt-[var(--space-sm)] max-w-[56ch] text-t-muted">{f.texto}</p>
        </div>
      </li>
    ))}
  </ol>
);
