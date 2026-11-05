import { usePassos } from "./usePassos";

// Calendário ilustrativo: as reservas entram uma a uma e, no fim, chega uma nova.
// Não são dados de pousada real.
const QUARTOS = ["Quarto 01", "Quarto 02", "Quarto 03", "Quarto 04", "Quarto 05"];
const DIAS = 14;
const SEMANA = ["S", "T", "Q", "Q", "S", "S", "D"];

type Status = "hospedado" | "confirmada" | "pendente";
const RESERVAS: { quarto: number; inicio: number; noites: number; status: Status; nome: string }[] = [
  { quarto: 0, inicio: 0, noites: 3, status: "hospedado", nome: "Ana" },
  { quarto: 1, inicio: 1, noites: 4, status: "hospedado", nome: "Marcos" },
  { quarto: 3, inicio: 0, noites: 2, status: "hospedado", nome: "Júlia" },
  { quarto: 0, inicio: 4, noites: 2, status: "confirmada", nome: "Paulo" },
  { quarto: 2, inicio: 3, noites: 5, status: "confirmada", nome: "Carla" },
  { quarto: 4, inicio: 4, noites: 3, status: "pendente", nome: "Bruno" },
  { quarto: 3, inicio: 5, noites: 4, status: "confirmada", nome: "Lia" },
  { quarto: 1, inicio: 8, noites: 3, status: "confirmada", nome: "Rafa" },
  { quarto: 0, inicio: 9, noites: 4, status: "pendente", nome: "Teo" },
];
// A última reserva é a que "chega ao vivo".
const NOVA = { quarto: 4, inicio: 9, noites: 3, status: "confirmada" as Status, nome: "Nova" };

const COR: Record<Status, string> = {
  hospedado: "bg-t-ink text-t-paper",
  confirmada: "bg-t-accent text-t-accentink",
  pendente: "border border-dashed border-t-accent bg-t-paper text-t-accent",
};

const DURACOES = [...RESERVAS.map(() => 380), 1400, 4200];

export const ViaSerraDemo = () => {
  const passo = usePassos(DURACOES);
  const visiveis = RESERVAS.slice(0, passo + 1);
  const chegouNova = passo >= RESERVAS.length;

  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] border border-t-rule bg-t-paper">
      <figcaption className="flex items-center justify-between border-b border-t-rule px-5 py-3">
        <span className="text-sm text-t-muted">Exemplo: calendário de ocupação</span>
      </figcaption>

      <div className="overflow-x-auto px-4 py-4 sm:px-5">
        <div className="min-w-[440px]">
          <div className="grid grid-cols-[72px_1fr] gap-2">
            <span />
            <div className="grid" style={{ gridTemplateColumns: `repeat(${DIAS}, minmax(0, 1fr))` }}>
              {Array.from({ length: DIAS }).map((_, d) => (
                <span key={d} className="text-center text-[11px] text-t-muted">
                  {SEMANA[d % 7]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 space-y-1.5">
            {QUARTOS.map((q, qi) => (
              <div key={q} className="grid grid-cols-[72px_1fr] items-center gap-2">
                <span className="text-[11px] font-medium text-t-ink">{q}</span>
                <div
                  className="grid h-8 gap-px"
                  style={{ gridTemplateColumns: `repeat(${DIAS}, minmax(0, 1fr))` }}
                >
                  {Array.from({ length: DIAS }).map((_, d) => (
                    <span key={d} className="bg-t-paper2" style={{ gridColumn: d + 1, gridRow: 1 }} />
                  ))}
                  {[...visiveis, ...(chegouNova ? [NOVA] : [])]
                    .filter((r) => r.quarto === qi)
                    .map((r) => (
                      <span
                        key={`${r.nome}-${r.inicio}`}
                        className={`animate-crescer z-[1] mx-px flex items-center overflow-hidden px-2 text-[11px] font-medium ${COR[r.status]} ${
                          r === NOVA ? "outline outline-2 outline-offset-1 outline-[color:var(--color-accent)]" : ""
                        }`}
                        style={{ gridColumn: `${r.inicio + 1} / span ${r.noites}`, gridRow: 1 }}
                      >
                        {r.nome}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-t-rule px-5 py-3">
        <div className="flex gap-4 text-xs text-t-muted">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 bg-t-ink" aria-hidden="true" />Hospedado</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 bg-t-accent" aria-hidden="true" />Confirmada</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 border border-dashed border-t-accent" aria-hidden="true" />Pendente</span>
        </div>
        {chegouNova && (
          <span className="animate-surgir text-xs text-t-accent">Nova reserva: Quarto 05, 3 noites</span>
        )}
      </div>
    </figure>
  );
};
