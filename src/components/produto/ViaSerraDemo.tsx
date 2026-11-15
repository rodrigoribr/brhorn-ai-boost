import { useState, type ReactNode } from "react";
import { ArrowDown, CalendarDays, KeyRound, UsersRound } from "lucide-react";

const RESERVA = {
  hospede: "Marina Costa",
  quarto: "Quarto 03",
  chegada: "18 de setembro",
  saida: "20 de setembro",
  diarias: "2 noites",
};

const ETAPAS = [
  {
    id: "reserva",
    aba: "Reserva",
    titulo: "A recepção registra a reserva.",
    texto: "A equipe escolhe o quarto, informa as datas e vincula o cadastro da hóspede.",
  },
  {
    id: "rotina",
    aba: "Calendário",
    titulo: "A reserva aparece no calendário.",
    texto: "Veja os quartos livres e ocupados por dia. Se a data ou o quarto mudar, ajuste a reserva no próprio calendário.",
  },
  {
    id: "recepcao",
    aba: "Recepção",
    titulo: "A equipe sabe quem chega hoje.",
    texto: "O painel reúne as próximas chegadas e mostra como está a ocupação da pousada.",
  },
] as const;

function Folha({ titulo, detalhe, children }: { titulo: string; detalhe: string; children: ReactNode }) {
  return (
    <div className="viaserra-sheet">
      <div className="viaserra-sheet-header">
        <strong>{titulo}</strong>
        <span>{detalhe}</span>
      </div>
      <div className="viaserra-sheet-body">{children}</div>
    </div>
  );
}

function Reserva() {
  return (
    <Folha titulo="Ficha da reserva" detalhe="Confirmada">
      <dl className="viaserra-fields">
        <div><dt>Hóspede</dt><dd>{RESERVA.hospede}</dd></div>
        <div><dt>Quarto</dt><dd>{RESERVA.quarto}</dd></div>
        <div><dt>Entrada</dt><dd>{RESERVA.chegada}</dd></div>
        <div><dt>Saída</dt><dd>{RESERVA.saida}</dd></div>
      </dl>
    </Folha>
  );
}

const DIAS = [16, 17, 18, 19, 20, 21];
const QUARTOS = ["Quarto 01", "Quarto 02", RESERVA.quarto, "Quarto 04", "Quarto 05"];

function Calendario() {
  return (
    <Folha titulo="Calendário de reservas" detalhe="Setembro">
      <table className="viaserra-calendar" aria-label="Ocupação de 16 a 21 de setembro">
        <thead>
          <tr>
            <th scope="col">Quartos</th>
            {DIAS.map(dia => <th key={dia} scope="col" data-hoje={dia === 18}>{dia}</th>)}
          </tr>
        </thead>
        <tbody>
          {QUARTOS.map((quarto, indice) => (
            <tr key={quarto}>
              <th scope="row">{quarto}</th>
              {DIAS.map(dia => {
                if (quarto === RESERVA.quarto && dia === 18) {
                  return <td key={dia} colSpan={2} className="viaserra-booking">Marina<span className="sr-only">, reserva confirmada de 18 a 20 de setembro</span></td>;
                }
                if (quarto === RESERVA.quarto && dia === 19) return null;
                const ocupado = indice === 0 && dia < 20;
                return <td key={dia} data-ocupado={ocupado}><span className="sr-only">{ocupado ? "Ocupado" : "Livre"}</span></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Folha>
  );
}

const PAINEL = [
  { id: "chegadas", titulo: "Chegadas", icone: KeyRound },
  { id: "ocupacao", titulo: "Ocupação", icone: UsersRound },
] as const;

function Painel() {
  const [selecionada, selecionar] = useState<(typeof PAINEL)[number]["id"]>("chegadas");
  const [previa, mostrarPrevia] = useState<typeof selecionada | null>(null);
  const ativa = previa ?? selecionada;

  return (
    <Folha titulo="Painel da recepção" detalhe="18 de setembro">
      <div className="viaserra-controls" role="group" aria-label="Explorar o painel da recepção">
        {PAINEL.map(({ id, titulo, icone: Icone }) => (
          <button
            key={id}
            type="button"
            aria-pressed={selecionada === id}
            aria-controls="viaserra-panel-content"
            data-ativa={ativa === id}
            onPointerEnter={evento => {
              if (evento.pointerType === "mouse") mostrarPrevia(id);
            }}
            onPointerLeave={() => mostrarPrevia(null)}
            onClick={() => {
              selecionar(id);
              mostrarPrevia(null);
            }}
          >
            <Icone size={16} aria-hidden="true" /> {titulo}
          </button>
        ))}
      </div>
      <div id="viaserra-panel-content" className="viaserra-panel-content" role="region" aria-label="Detalhes da recepção">
        {ativa === "chegadas" ? (
          <div className="viaserra-arrival">
            <CalendarDays size={19} aria-hidden="true" />
            <div><strong>{RESERVA.hospede}</strong><span>{RESERVA.quarto} · {RESERVA.diarias}</span></div>
            <span>Check-in hoje</span>
          </div>
        ) : (
          <div className="viaserra-occupation">
            <p><strong>2 de 5 quartos</strong> ocupados na noite de 18/09</p>
            <div aria-hidden="true">
              {QUARTOS.map((quarto, indice) => <span key={quarto} data-ocupado={indice < 2} />)}
            </div>
          </div>
        )}
      </div>
    </Folha>
  );
}

const CENAS = [Reserva, Calendario, Painel];

export function ViaSerraDemo() {
  return (
    <section id="modulos" className="viaserra-flow" aria-labelledby="viaserra-flow-title">
      <div className="viaserra-wrap">
        <header className="viaserra-flow-heading">
          <h2 id="viaserra-flow-title">Da reserva à chegada.</h2>
          <span>Exemplo ilustrativo</span>
        </header>
        <div className="viaserra-folders">
          {ETAPAS.map(({ id, aba, titulo, texto }, indice) => {
            const Cena = CENAS[indice];
            const proxima = ETAPAS[indice + 1];
            return (
              <article key={id} id={id} className="viaserra-folder" aria-labelledby={`viaserra-${id}-titulo`}>
                <div className="viaserra-folder-tab">{aba}</div>
                <div className="viaserra-folder-body">
                  <div>
                    <h3 id={`viaserra-${id}-titulo`}>{titulo}</h3>
                    <p>{texto}</p>
                    {proxima && (
                      <a className="viaserra-next" href={`#${proxima.id}`} aria-label={`Próxima etapa: ${proxima.aba}`}>
                        <ArrowDown size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <div className="viaserra-folder-visual"><Cena /></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
