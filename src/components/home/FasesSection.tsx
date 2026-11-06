import { Cabeca, Secao } from "@/components/home/Titulos";
import { Revelar } from "@/components/produto/Revelar";
import { FASES } from "@/content/consultoriaAgentes";
import { cn } from "@/lib/utils";

// Cronograma (2026-11-05): as quatro fases num trilho, como um cronograma de projeto. O círculo é a fase,
// o losango azul entre elas é a decisão da empresa de seguir ou parar, e a entrega é uma folha carimbada.
// Desktop: trilho horizontal, quatro colunas. Celular: trilho vertical à esquerda.

const Losango = ({ className }: { className?: string }) => (
  <span aria-hidden="true" className={cn("block h-2.5 w-2.5 rotate-45 bg-t-accent", className)} />
);

export const FasesSection = () => (
  <Secao id="como-funciona">
    <Cabeca
      id="como-funciona"
      titulo="Quatro fases, e cada uma termina com uma entrega."
      texto="A empresa decide no fim de cada fase se segue para a próxima. Nada de projeto grande no escuro."
    />

    <Revelar className="mt-[var(--space-2xl)]">
      <ol className="grid gap-y-[var(--space-xl)] lg:grid-cols-4 lg:gap-x-[var(--gap-columns)]">
        {FASES.map((f, i) => {
          const ultima = i === FASES.length - 1;
          return (
            <li key={f.numero} className="relative flex flex-col pl-14 lg:pl-0 lg:pt-16">
              {/* Trilho até a próxima fase */}
              {!ultima && (
                <span
                  aria-hidden="true"
                  style={{ transitionDelay: `${i * 250}ms` }}
                  className="fase-trilho absolute bottom-[calc(-1*var(--space-xl))] left-[19px] top-0 w-px bg-t-rulestrong lg:bottom-auto lg:left-0 lg:right-[calc(-1*var(--gap-columns))] lg:top-[19px] lg:h-px lg:w-auto"
                />
              )}
              {/* Decisão entre esta fase e a próxima */}
              {!ultima && (
                <Losango className="absolute bottom-[calc(-1*var(--space-xl)/2-5px)] left-[15px] lg:bottom-auto lg:left-auto lg:right-[calc(-1*var(--gap-columns)/2-5px)] lg:top-[15px]" />
              )}
              {/* A fase */}
              <span className="num absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-t-accent bg-t-paper text-sm text-t-accent">
                {f.numero}
              </span>

              <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">{f.nome}</h3>
              <p className="mt-[var(--space-sm)] max-w-[52ch] text-t-muted lg:flex-1">{f.texto}</p>

              {/* A entrega: folha com o canto dobrado e o carimbo */}
              <div className="relative mt-[var(--space-lg)] max-w-[52ch] rounded-[var(--radius-card)] border border-t-rulestrong bg-[linear-gradient(225deg,var(--color-paper-3)_14px,var(--color-paper)_14px)] p-[var(--space-md)] pt-[var(--space-lg)]">
                <span className="absolute -top-3 left-[var(--space-md)] -rotate-2 rounded-[2px] border border-t-accent bg-t-paper px-2 py-0.5 text-xs font-medium text-t-accent">
                  Entrega {f.numero}
                </span>
                <p className="text-t-ink">{f.entrega}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-[var(--space-xl)] flex items-center gap-[var(--space-sm)] text-sm text-t-muted">
        <Losango className="shrink-0" />
        Ponto de decisão: a empresa segue para a próxima fase ou para ali, com a entrega na mão.
      </p>
    </Revelar>
  </Secao>
);
