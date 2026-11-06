import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { LIMITE_TEXTO } from "./api";
import { useDiagnostico } from "./useDiagnostico";
import { EVENTO_ABRIR } from "./abrir";
import { CLASSE_BOTAO_PRIMARIO } from "./BotaoDiagnostico";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";

// DEV-0004: chat de diagnóstico. Abre por abrirDiagnostico() (o botão "Fazer diagnóstico"
// é da DEV-0005) ou, até lá, só com ?diagnostico=1 na URL, para o teste da Fase 1.

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";
const BOTAO_PRIMARIO = CLASSE_BOTAO_PRIMARIO;
const BOTAO_SECUNDARIO = CLASSE_BOTAO_SECUNDARIO;

function Progresso({ etapa, total }: { etapa: number; total: number }) {
  const pct = total ? Math.round((Math.min(etapa, total) / total) * 100) : 0;
  return (
    <div className="mt-3">
      <div className="num flex items-center justify-between text-sm text-t-muted">
        <span>
          Etapa {Math.min(etapa, total)} de {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div
        className="mt-[var(--space-xs)] h-1 w-full overflow-hidden rounded-full bg-t-rule"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={etapa}
      >
        <div className="h-full bg-t-accent transition-[width] duration-short" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

const DiagnosticoChat = () => {
  const [aberto, setAberto] = useState(false);
  const [texto, setTexto] = useState("");
  const d = useDiagnostico();
  const fimDaLista = useRef<HTMLDivElement>(null);
  const campo = useRef<HTMLTextAreaElement>(null);

  // Abertura: evento global e, no teste da Fase 1, ?diagnostico=1.
  useEffect(() => {
    const abrir = () => setAberto(true);
    window.addEventListener(EVENTO_ABRIR, abrir);
    if (new URLSearchParams(window.location.search).get("diagnostico") === "1") abrir();
    return () => window.removeEventListener(EVENTO_ABRIR, abrir);
  }, []);

  const { abrir } = d;
  useEffect(() => {
    if (aberto) {
      setTexto("");
      void abrir();
    }
  }, [aberto, abrir]);

  useEffect(() => {
    fimDaLista.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [d.mensagens.length, d.opcoes]);

  useEffect(() => {
    if (d.fase === "conversa" && !d.enviando) campo.current?.focus();
  }, [d.fase, d.enviando]);

  const enviar = async (valor: string) => {
    if (d.enviando) return;
    if (await d.enviar(valor)) setTexto("");
  };

  const aoSubmeter = (e: FormEvent) => {
    e.preventDefault();
    void enviar(texto);
  };

  const aoTeclar = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void enviar(texto);
    }
  };

  return (
    <Dialog open={aberto} onOpenChange={setAberto}>
      <DialogContent className="flex h-[100dvh] max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-[min(44rem,90vh)] sm:max-w-lg sm:rounded-[var(--radius-card)]">
        <header className="border-b border-t-rule px-[var(--space-lg)] pb-[var(--space-md)] pr-14 pt-[var(--space-lg)]">
          <DialogTitle className="text-[length:var(--text-xl)]">A rotina que mais toma tempo</DialogTitle>
          <DialogDescription className="mt-[var(--space-2xs)] text-sm">
            Diagnóstico inicial com o agente de IA da brhorn, uma pergunta por vez.
          </DialogDescription>
          {(d.fase === "conversa" || d.fase === "fim") && <Progresso etapa={d.etapa} total={d.total} />}
        </header>

        <div className="flex-1 overflow-y-auto bg-t-paper2 px-[var(--space-lg)] py-[var(--space-lg)]">
          {d.fase === "carregando" && (
            <div className="flex h-full items-center justify-center text-t-muted">
              <Loader2 className="h-5 w-5 animate-spin" aria-label="Carregando" />
            </div>
          )}

          {d.fase === "aceite" && d.inicio && (
            <div className="rounded-[var(--radius-card)] border border-t-rule bg-t-paper p-[var(--space-lg)]">
              <p className="text-t-ink">{d.inicio.saudacao}</p>
              <p className="mt-[var(--space-md)] text-sm text-t-muted">
                {d.inicio.texto_aceite}{" "}
                <a
                  href="/politica-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-[var(--radius-control)] font-medium text-t-ink underline underline-offset-4 hover:text-t-accent ${FOCO}`}
                >
                  Ler a política de privacidade
                </a>
                .
              </p>
              {d.erro && <p className="mt-[var(--space-md)] text-sm text-[color:var(--color-error)]">{d.erro}</p>}
              <div className="mt-[var(--space-lg)] flex flex-col gap-[var(--space-sm)] sm:flex-row">
                <button type="button" className={BOTAO_PRIMARIO} onClick={() => void d.aceitar()} disabled={d.enviando}>
                  {d.enviando ? <Loader2 className="h-4 w-4 animate-spin" /> : "Concordo e quero começar"}
                </button>
                <button type="button" className={BOTAO_SECUNDARIO} onClick={() => setAberto(false)} disabled={d.enviando}>
                  Agora não
                </button>
              </div>
            </div>
          )}

          {(d.fase === "conversa" || d.fase === "fim") && (
            <ol className="flex flex-col gap-[var(--space-sm)]" aria-live="polite">
              {d.mensagens.map((m) => (
                <li
                  key={m.id}
                  className={
                    m.autor === "agente"
                      ? "max-w-[88%] self-start whitespace-pre-line rounded-[var(--radius-card)] border border-t-rule bg-t-paper px-4 py-3 text-t-ink"
                      : "max-w-[88%] self-end whitespace-pre-line rounded-[var(--radius-card)] bg-t-ink px-4 py-3 text-t-paper"
                  }
                >
                  {m.texto}
                </li>
              ))}
              {d.enviando && (
                <li className="self-start rounded-[var(--radius-card)] border border-t-rule bg-t-paper px-4 py-3 text-t-muted">
                  <Loader2 className="h-4 w-4 animate-spin" aria-label="Escrevendo" />
                </li>
              )}
            </ol>
          )}

          {d.fase === "erro" && (
            <div className="rounded-[var(--radius-card)] border border-t-rule bg-t-paper p-[var(--space-lg)]">
              <p className="text-t-ink">{d.erro}</p>
              <div className="mt-[var(--space-lg)] flex flex-col gap-[var(--space-sm)] sm:flex-row">
                <button type="button" className={BOTAO_PRIMARIO} onClick={() => void d.abrir()}>
                  Começar de novo
                </button>
                <button type="button" className={BOTAO_SECUNDARIO} onClick={() => setAberto(false)}>
                  Fechar
                </button>
              </div>
            </div>
          )}
          <div ref={fimDaLista} />
        </div>

        {d.fase === "conversa" && (
          <footer className="border-t border-t-rule bg-t-paper px-[var(--space-md)] pb-[var(--space-md)] pt-[var(--space-sm)]">
            {d.opcoes && d.opcoes.length > 0 && (
              <div className="mb-[var(--space-sm)] flex flex-wrap gap-[var(--space-xs)]">
                {d.opcoes.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => void enviar(o)}
                    disabled={d.enviando}
                    className={`min-h-11 rounded-[var(--radius-control)] border border-t-rulestrong bg-t-paper px-3 py-2 text-left text-sm font-medium text-t-ink transition-colors duration-micro hover:border-t-ink hover:bg-t-ink hover:text-t-paper disabled:opacity-60 ${FOCO}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}
            {d.erro && <p className="mb-[var(--space-xs)] text-sm text-[color:var(--color-error)]">{d.erro}</p>}
            <form onSubmit={aoSubmeter} className="flex items-end gap-[var(--space-xs)]">
              <label htmlFor="diagnostico-texto" className="sr-only">
                Sua resposta
              </label>
              <textarea
                id="diagnostico-texto"
                ref={campo}
                rows={1}
                value={texto}
                maxLength={LIMITE_TEXTO}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={aoTeclar}
                disabled={d.enviando}
                placeholder="Escreva a sua resposta"
                className={`max-h-32 min-h-12 flex-1 resize-none rounded-[var(--radius-control)] border border-t-rulestrong bg-t-paper px-3 py-3 text-t-ink placeholder:text-t-muted transition-colors duration-micro hover:border-t-ink ${FOCO}`}
              />
              <button
                type="submit"
                disabled={d.enviando || !texto.trim()}
                className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-t-accent text-t-accentink transition-colors duration-micro hover:bg-t-accenthover disabled:opacity-60 ${FOCO}`}
                aria-label="Enviar"
              >
                <ArrowUp className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
            <p className="num mt-[var(--space-2xs)] text-right text-xs text-t-muted">
              {texto.length}/{LIMITE_TEXTO}
            </p>
          </footer>
        )}

        {d.fase === "fim" && (
          <footer className="border-t border-t-rule bg-t-paper px-[var(--space-md)] py-[var(--space-md)]">
            <button type="button" className={`${BOTAO_PRIMARIO} w-full`} onClick={() => setAberto(false)}>
              Fechar
            </button>
          </footer>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticoChat;
