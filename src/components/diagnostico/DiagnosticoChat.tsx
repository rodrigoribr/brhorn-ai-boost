import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { LIMITE_TEXTO } from "./api";
import { useDiagnostico } from "./useDiagnostico";
import { EVENTO_ABRIR } from "./abrir";

// DEV-0004: chat de diagnóstico. Abre por abrirDiagnostico() (o botão "Fazer diagnóstico"
// é da DEV-0005) ou, até lá, só com ?diagnostico=1 na URL, para o teste da Fase 1.

const GRADE =
  "bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]";

const BOTAO_PRIMARIO =
  "inline-flex h-12 items-center justify-center rounded bg-projeto px-6 text-base font-semibold text-papel transition-colors hover:bg-[#1a5fcc] disabled:opacity-60";
const BOTAO_SECUNDARIO =
  "inline-flex h-12 items-center justify-center rounded border border-linha bg-card px-6 text-base font-semibold text-nanquim transition-colors hover:bg-secondary disabled:opacity-60";

function Progresso({ etapa, total }: { etapa: number; total: number }) {
  const pct = total ? Math.round((Math.min(etapa, total) / total) * 100) : 0;
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>
          Etapa {Math.min(etapa, total)} de {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div
        className="mt-2 h-1 w-full overflow-hidden rounded-full bg-linha"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={etapa}
      >
        <div className="h-full bg-projeto transition-[width] duration-300" style={{ width: `${pct}%` }} />
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
      <DialogContent className="flex h-[100dvh] max-w-none flex-col gap-0 overflow-hidden rounded-none border-linha bg-card p-0 text-foreground sm:h-[min(44rem,90vh)] sm:max-w-lg sm:rounded">
        <header className="border-b border-linha px-5 pb-4 pt-5 pr-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-projeto">Diagnóstico inicial</p>
          <DialogTitle className="mt-1 font-display text-2xl font-normal tracking-tight text-nanquim">
            A rotina que mais toma tempo
          </DialogTitle>
          <DialogDescription className="sr-only">
            Conversa com o agente de IA da brhorn, uma pergunta por vez.
          </DialogDescription>
          {(d.fase === "conversa" || d.fase === "fim") && <Progresso etapa={d.etapa} total={d.total} />}
        </header>

        <div className={`flex-1 overflow-y-auto px-5 py-5 ${GRADE}`}>
          {d.fase === "carregando" && (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" aria-label="Carregando" />
            </div>
          )}

          {d.fase === "aceite" && d.inicio && (
            <div className="rounded border border-linha bg-card p-5">
              <p className="text-base leading-relaxed text-nanquim [text-wrap:pretty]">{d.inicio.saudacao}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground [text-wrap:pretty]">
                {d.inicio.texto_aceite}{" "}
                <a
                  href="/politica-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-projeto underline underline-offset-2"
                >
                  Ler a política de privacidade
                </a>
                .
              </p>
              {d.erro && <p className="mt-4 text-sm text-destructive">{d.erro}</p>}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
            <ol className="flex flex-col gap-3" aria-live="polite">
              {d.mensagens.map((m) => (
                <li
                  key={m.id}
                  className={
                    m.autor === "agente"
                      ? "max-w-[88%] self-start whitespace-pre-line rounded border border-linha bg-card px-4 py-3 text-base leading-relaxed text-nanquim"
                      : "max-w-[88%] self-end whitespace-pre-line rounded bg-projeto px-4 py-3 text-base leading-relaxed text-papel"
                  }
                >
                  {m.texto}
                </li>
              ))}
              {d.enviando && (
                <li className="self-start rounded border border-linha bg-card px-4 py-3 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" aria-label="Escrevendo" />
                </li>
              )}
            </ol>
          )}

          {d.fase === "erro" && (
            <div className="rounded border border-linha bg-card p-5">
              <p className="text-base text-nanquim">{d.erro}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
          <footer className="border-t border-linha bg-card px-4 pb-4 pt-3">
            {d.opcoes && d.opcoes.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {d.opcoes.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => void enviar(o)}
                    disabled={d.enviando}
                    className="rounded border border-projeto/40 bg-papel px-3 py-2 text-sm font-medium text-projeto transition-colors hover:bg-projeto hover:text-papel disabled:opacity-60"
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}
            {d.erro && <p className="mb-2 text-sm text-destructive">{d.erro}</p>}
            <form onSubmit={aoSubmeter} className="flex items-end gap-2">
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
                className="max-h-32 min-h-12 flex-1 resize-none rounded border border-input bg-papel px-3 py-3 text-base text-nanquim placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={d.enviando || !texto.trim()}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded bg-projeto text-papel transition-colors hover:bg-[#1a5fcc] disabled:opacity-50"
                aria-label="Enviar"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </form>
            <p className="mt-1 text-right font-mono text-xs text-muted-foreground">
              {texto.length}/{LIMITE_TEXTO}
            </p>
          </footer>
        )}

        {d.fase === "fim" && (
          <footer className="border-t border-linha bg-card px-4 py-4">
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
