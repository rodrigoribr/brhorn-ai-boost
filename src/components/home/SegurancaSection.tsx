import { Cabeca, Secao } from "@/components/home/Titulos";
import { LIMITES_LINHA, OPCAO_LOCAL, SEGURANCA } from "@/content/consultoriaAgentes";

// Faixa escura (a outra é Casos). As garantias são linhas de uma tabela: o compromisso à esquerda, o como à direita.
export const SegurancaSection = () => (
  <Secao id="seguranca" tom="noite">
    <Cabeca id="seguranca" titulo="Os dados da empresa continuam da empresa." noite />

    <dl className="mt-[var(--space-2xl)] border-b border-t-nightrule">
      {SEGURANCA.map((s) => (
        <div
          key={s.titulo}
          className="grid gap-[var(--space-xs)] border-t border-t-nightrule py-[var(--space-lg)] md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[var(--gap-columns)]"
        >
          <dt className="font-display text-[length:var(--text-title)] leading-[1.2] text-t-nightink">{s.titulo}</dt>
          <dd className="max-w-[60ch] text-t-nightmuted">{s.texto}</dd>
        </div>
      ))}
    </dl>

    <div className="mt-[var(--space-xl)] grid gap-[var(--space-md)] md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[var(--gap-columns)]">
      <div aria-hidden="true" />
      <div className="max-w-[60ch] space-y-[var(--space-md)] text-t-nightmuted">
        <p>{OPCAO_LOCAL}</p>
        <p>
          <strong className="font-medium text-t-nightink">O agente prepara, uma pessoa decide.</strong> {LIMITES_LINHA}
        </p>
      </div>
    </div>
  </Secao>
);
