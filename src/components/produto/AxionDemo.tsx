import { useState, type ReactNode } from "react";
import {
  ArrowDown,
  Camera,
  Check,
  CircleCheck,
  ClipboardList,
  FileText,
  MapPin,
  MessageCircle,
  Package,
} from "lucide-react";

const ETAPAS = [
  {
    id: "problema",
    nome: "WhatsApp",
    titulo: "O pedido chega do jeito que o cliente escreve.",
    texto: "O revendedor usa o WhatsApp que já conhece. Pode mandar uma mensagem, a foto da lista ou um PDF.",
  },
  {
    id: "entende",
    nome: "Conferência",
    titulo: "O Axion confere o pedido com as regras da empresa.",
    texto: "Consulta catálogo e preços, converte caixas em unidades e identifica o dia de entrega da região.",
  },
  {
    id: "confirmacao",
    nome: "Confirmação",
    titulo: "O revendedor confere antes de confirmar.",
    texto: "O Axion devolve um resumo da compra e da entrega para o revendedor conferir ali mesmo, na conversa.",
  },
  {
    id: "registro",
    nome: "Painel",
    titulo: "O pedido aparece no painel.",
    texto: "A equipe vê o que foi pedido, quando sai para entrega e o que ficou combinado com o cliente.",
  },
] as const;

const ITENS = [
  { nome: "Café", caixas: 3, unidades: 36 },
  { nome: "Leite", caixas: 6, unidades: 72 },
];
const TOTAL_CAIXAS = ITENS.reduce((total, item) => total + item.caixas, 0);
const TOTAL_UNIDADES = ITENS.reduce((total, item) => total + item.unidades, 0);

const FICHA = "Pedido #024";
const CLIENTE = "Mercado do bairro";
const ROTA = "Rota Sul";
const ENTREGA = "Quinta-feira";
const MENSAGEM = "Bom dia! Manda 3 caixas de café e 6 de leite pra quinta?";

function Folha({ titulo, detalhe, children }: { titulo: string; detalhe?: string; children: ReactNode }) {
  return (
    <div className="axion-sheet">
      <div className="axion-sheet-header">
        <strong>{titulo}</strong>
        {detalhe && <span>{detalhe}</span>}
      </div>
      <div className="axion-sheet-body">{children}</div>
    </div>
  );
}

function ItensPedido() {
  return (
    <ul className="axion-items">
      {ITENS.map(({ nome, caixas, unidades }) => (
        <li key={nome}>
          <div><strong>{nome}</strong><span>{caixas} caixas</span></div>
          <span>{unidades} un.</span>
        </li>
      ))}
    </ul>
  );
}

function Entrega() {
  return (
    <div className="axion-route">
      <MapPin size={19} aria-hidden="true" />
      <div><strong>{ROTA}</strong><span>Entrega na quinta-feira</span></div>
    </div>
  );
}

const CENAS = [
  <Folha titulo={CLIENTE} detalhe="WhatsApp">
    <div className="axion-message axion-message-client">{MENSAGEM}</div>
    <ul className="axion-formats" aria-label="Formatos aceitos">
      <li><MessageCircle size={16} aria-hidden="true" /> Mensagem</li>
      <li><Camera size={16} aria-hidden="true" /> Foto</li>
      <li><FileText size={16} aria-hidden="true" /> PDF</li>
    </ul>
  </Folha>,
  <Folha titulo="Catálogo e entrega" detalhe={FICHA}>
    <ItensPedido />
    <Entrega />
  </Folha>,
  <Folha titulo={CLIENTE} detalhe="WhatsApp">
    <div className="axion-message">
      Separei 3 caixas de café e 6 de leite. Sua rota entrega na quinta. Posso confirmar?
    </div>
    <div className="axion-message axion-message-client">Pode confirmar!</div>
  </Folha>,
  <Folha titulo={FICHA} detalhe="Painel do Axion">
    <div className="axion-confirmed"><CircleCheck size={19} aria-hidden="true" /> Pedido registrado</div>
    <dl className="axion-order">
      <div><dt>Cliente</dt><dd>{CLIENTE}</dd></div>
      <div><dt>Itens</dt><dd>{TOTAL_CAIXAS} caixas · {TOTAL_UNIDADES} unidades</dd></div>
      <div><dt>Entrega</dt><dd>{ROTA} · {ENTREGA}</dd></div>
    </dl>
  </Folha>,
];

export function AxionDemo() {
  return (
    <section id="como-funciona" className="axion-flow" aria-labelledby="axion-flow-title">
      <div className="axion-wrap">
        <div className="axion-section-heading">
          <div>
            <h2 id="axion-flow-title">Da conversa<br /> ao pedido.</h2>
            <p>Acompanhe um pedido do início ao fim.</p>
          </div>
          <span className="axion-label">Exemplo ilustrativo</span>
        </div>
        <div className="axion-folders">
          {ETAPAS.map(({ id, nome, titulo, texto }, indice) => (
            <article id={id} className="axion-folder" key={id} aria-labelledby={`axion-${id}-title`}>
              <div className="axion-folder-tab"><span>0{indice + 1}</span>{nome}</div>
              <div className="axion-folder-page">
                <div className="axion-folder-copy">
                  <div className="axion-step-meter" aria-hidden="true">
                    {ETAPAS.map((etapa, posicao) => <span key={etapa.id} data-completa={posicao <= indice} />)}
                  </div>
                  <h3 id={`axion-${id}-title`}>{titulo}</h3>
                  <p>{texto}</p>
                  <a
                    href={`#${ETAPAS[indice + 1]?.id ?? "painel"}`}
                    className="axion-next"
                    aria-label={indice === ETAPAS.length - 1 ? "Explorar o painel" : `Próxima etapa: ${ETAPAS[indice + 1].nome}`}
                  >
                    <ArrowDown size={18} aria-hidden="true" />
                  </a>
                </div>
                <div className="axion-folder-visual">{CENAS[indice]}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PAINEL = [
  {
    id: "pedido",
    nome: "Pedido",
    icone: ClipboardList,
    texto: "Confira os itens e o status do pedido.",
    corpo: <><div className="axion-confirmed"><Check size={16} aria-hidden="true" /> Registrado</div><ItensPedido /></>,
  },
  {
    id: "rota",
    nome: "Rota",
    icone: MapPin,
    texto: "Veja qual rota atende o cliente e quando a entrega acontece.",
    corpo: <><Entrega /><div className="axion-package"><Package size={18} aria-hidden="true" /> {TOTAL_CAIXAS} caixas para entrega</div></>,
  },
  {
    id: "historico",
    nome: "Histórico",
    icone: MessageCircle,
    texto: "Volte à conversa para conferir o que foi combinado.",
    corpo: <><div className="axion-message">{MENSAGEM}</div><div className="axion-message axion-message-client">Pode confirmar!</div></>,
  },
] as const;

export function AxionPainel() {
  const [selecionado, selecionar] = useState<(typeof PAINEL)[number]["id"]>("pedido");
  const [previa, mostrarPrevia] = useState<typeof selecionado | null>(null);
  const atual = PAINEL.find(({ id }) => id === (previa ?? selecionado)) ?? PAINEL[0];

  return (
    <section id="painel" className="axion-panel-section" aria-labelledby="axion-panel-title">
      <div className="axion-wrap axion-panel-grid">
        <div className="axion-panel-copy">
          <h2 id="axion-panel-title">A equipe vê o que aconteceu.</h2>
          <p id="supervisao">Se um atendimento pede uma decisão humana, a equipe pode pausar o agente para aquele cliente e assumir a conversa.</p>
          <div className="axion-panel-controls" role="group" aria-label="Explorar detalhes do painel">
            {PAINEL.map(({ id, nome, icone: Icone }) => (
              <button
                type="button"
                key={id}
                aria-controls="axion-panel-detail"
                aria-pressed={selecionado === id}
                data-active={atual.id === id}
                onPointerEnter={evento => {
                  if (evento.pointerType === "mouse") mostrarPrevia(id);
                }}
                onPointerLeave={() => mostrarPrevia(null)}
                onClick={() => {
                  mostrarPrevia(null);
                  selecionar(id);
                }}
              >
                <Icone size={17} aria-hidden="true" /> {nome}
              </button>
            ))}
          </div>
        </div>
        <figure className="axion-panel-figure">
          <div className="axion-panel-top">
            <span><ClipboardList size={17} aria-hidden="true" /> {FICHA} <span className="axion-panel-client">/ {CLIENTE}</span></span>
          </div>
          <div id="axion-panel-detail" className="axion-panel-detail" role="region" aria-label="Detalhe selecionado do painel">
            <div key={atual.id} className="axion-panel-content">
              <h3>{atual.nome}</h3>
              <p>{atual.texto}</p>
              {atual.corpo}
            </div>
          </div>
          <figcaption className="axion-panel-caption">
            Demonstração do painel
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
