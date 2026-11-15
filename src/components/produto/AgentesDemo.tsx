import { useState, type ReactNode } from "react";
import { ArrowDown, ClipboardCheck, FileText, Paperclip } from "lucide-react";

const ETAPAS = [
  {
    id: "receber-cotacao",
    aba: "Receber",
    titulo: "A cotação chega por e-mail.",
    texto: "O agente identifica a cotação e reúne os dados do anexo para a conferência.",
  },
  {
    id: "conferir-cotacao",
    aba: "Conferir",
    titulo: "O agente confere as regras da equipe.",
    texto: "Neste exemplo, toda cotação precisa ter quantidade, valor e prazo de entrega. O agente marca o que está faltando.",
  },
  {
    id: "revisar-cotacao",
    aba: "Preparar",
    titulo: "Você recebe a pendência e o rascunho.",
    texto: "O agente prepara a resposta para você revisar e enviar.",
  },
] as const;

function Documento({ titulo, status, children }: { titulo: string; status: string; children: ReactNode }) {
  return (
    <div className="agentes-documento overflow-hidden rounded-xl border border-t-rule bg-t-paper text-sm text-t-ink">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-t-rule px-4 py-3">
        <strong>{titulo}</strong>
        <span className="font-mono text-xs text-t-muted">{status}</span>
      </div>
      <div className="p-4 min-[420px]:p-6">{children}</div>
    </div>
  );
}

function Entrada() {
  return (
    <Documento titulo="Cotação de material de escritório" status="E-mail recebido">
      <p>Olá, segue a cotação dos 24 kits de escritório solicitados.</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-t-rule bg-t-paper2 px-3 py-2">
        <Paperclip size={16} aria-hidden="true" /> cotação.pdf
      </p>
    </Documento>
  );
}

function Conferencia() {
  return (
    <Documento titulo="Conferência da cotação" status="1 pendência">
      <dl className="divide-y divide-t-rule">
        <div className="flex justify-between gap-3 py-2"><dt>Quantidade</dt><dd>24 kits</dd></div>
        <div className="flex justify-between gap-3 py-2"><dt>Valor total</dt><dd>R$ 1.440,00</dd></div>
        <div className="flex justify-between gap-3 py-2"><dt>Prazo de entrega</dt><dd className="font-medium text-t-accent">Não informado</dd></div>
      </dl>
    </Documento>
  );
}

const VISTAS = [
  { id: "rascunho", titulo: "Rascunho", icone: FileText },
  { id: "pendencia", titulo: "Pendência", icone: ClipboardCheck },
] as const;

function Revisao() {
  const [selecionada, selecionar] = useState<(typeof VISTAS)[number]["id"]>("rascunho");
  const [previa, mostrarPrevia] = useState<typeof selecionada | null>(null);
  const ativa = previa ?? selecionada;

  return (
    <Documento titulo="Resposta ao fornecedor" status="Aguardando revisão">
      <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Explorar a tarefa preparada pelo agente">
        {VISTAS.map(({ id, titulo, icone: Icone }) => (
          <button
            key={id}
            type="button"
            aria-pressed={selecionada === id}
            aria-controls="agentes-demo-revisao"
            className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-3 py-2 font-medium ${ativa === id ? "border-t-accent bg-[#e3ecff] text-t-ink" : "border-t-rule text-t-muted"}`}
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
      <div id="agentes-demo-revisao" className="min-h-20 rounded-md bg-t-paper2 p-3" role="region" aria-label="Detalhe da revisão">
        {ativa === "rascunho" ? (
          <p>Olá, obrigado pela cotação dos 24 kits. Você consegue confirmar o prazo de entrega?</p>
        ) : (
          <p><strong>Prazo de entrega</strong><br />A cotação informa quantidade e valor. Falta confirmar quando os kits chegam.</p>
        )}
      </div>
    </Documento>
  );
}

const CENAS = [Entrada, Conferencia, Revisao];

export function AgentesDemo() {
  return (
    <section id="delegar" className="agentes-fluxo border-y border-t-rule bg-t-paper2 py-12 lg:py-24" aria-labelledby="delegar-titulo">
      <div className="agentes-container">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="delegar-titulo" className="text-[length:var(--text-section)]">Da cotação à sua revisão.</h2>
          <span className="font-mono text-xs text-t-muted">Exemplo ilustrativo</span>
        </header>
        <div className="agentes-pastas grid gap-8">
          {ETAPAS.map(({ id, aba, titulo, texto }, indice) => {
            const Cena = CENAS[indice];
            const proxima = ETAPAS[indice + 1];
            return (
              <article key={id} id={id} className="agentes-pasta" aria-labelledby={`${id}-titulo`}>
                <div className="agentes-aba w-fit min-w-36 rounded-t-xl px-4 py-3 font-mono text-sm">{aba}</div>
                <div className="agentes-pasta-corpo grid items-center gap-6 overflow-clip p-4 sm:p-8 md:grid-cols-2 lg:gap-12 lg:p-16">
                  <div>
                    <h3 id={`${id}-titulo`} className="max-w-[18ch] text-3xl lg:text-5xl">{titulo}</h3>
                    <p className="mt-3 max-w-[35ch]">{texto}</p>
                    {proxima && (
                      <a
                        href={`#${proxima.id}`}
                        className="mt-4 inline-grid h-11 w-11 place-items-center rounded-full border border-current hover:bg-white/50"
                        aria-label={`Próxima etapa: ${proxima.aba}`}
                      >
                        <ArrowDown size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <div className="agentes-pasta-visual min-w-0"><Cena /></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
