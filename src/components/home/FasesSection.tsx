import { Cabeca, Secao } from "@/components/home/Titulos";
import { FASES } from "@/content/consultoriaAgentes";
import { MetodoDesenho } from "@/components/brand/MetodoDesenho";

// Feature Stack: o título fica preso à esquerda enquanto as quatro fases passam à direita.
// Abaixo de 60rem vira coluna única, título em cima.
export const FasesSection = () => (
  <Secao id="como-funciona">
    <div className="grid gap-[var(--space-2xl)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-[var(--gap-columns)]">
      <div className="lg:sticky lg:top-[calc(var(--nav-height)+var(--space-xl))] lg:self-start">
        <Cabeca
          id="como-funciona"
          titulo="Quatro fases, e cada uma termina com uma entrega."
          texto="A empresa decide no fim de cada fase se segue para a próxima. Nada de projeto grande no escuro."
        />
      </div>

      <div className="min-w-0">
        <MetodoDesenho className="mx-auto max-w-[340px] md:max-w-none" />

        <ol className="mt-[var(--space-2xl)]">
          {FASES.map((f) => (
            <li
              key={f.numero}
              className="grid gap-[var(--space-md)] border-t border-t-rule py-[var(--space-xl)] sm:grid-cols-[4.5rem_minmax(0,1fr)] lg:min-h-[30vh] lg:last:min-h-0"
            >
              <span className="num font-display text-[length:var(--text-display-s)] leading-none text-t-accent">
                {f.numero}
              </span>
              <div>
                <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">{f.nome}</h3>
                <p className="mt-[var(--space-sm)] max-w-[56ch] text-t-muted">{f.texto}</p>
                <p className="mt-[var(--space-lg)] max-w-[56ch] border-l-2 border-t-accent pl-[var(--space-md)] text-t-ink">
                  <span className="block text-sm text-t-muted">Entrega</span>
                  {f.entrega}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Secao>
);
