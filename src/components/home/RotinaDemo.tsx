import { useEffect, useState } from "react";
import { ArrowRight, Check, FileText, Play, ScanSearch, UserRound } from "lucide-react";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";

const ETAPAS = [
  { titulo: "Receber", inicial: "Pedido #024", resultado: "Pedido recebido", Icone: FileText },
  { titulo: "Conferir", inicial: "Pedido × planilha", resultado: "Quantidade divergente", Icone: ScanSearch },
  { titulo: "Encaminhar", inicial: "Revisão humana", resultado: "Enviada para revisão", Icone: UserRound },
];

export const RotinaDemo = () => {
  const [concluidas, setConcluidas] = useState(0);
  const [emExecucao, setEmExecucao] = useState(false);
  const terminou = concluidas === ETAPAS.length;

  useEffect(() => {
    if (!emExecucao) return;
    const timers = ETAPAS.map((_, indice) => window.setTimeout(() => {
      const prontas = indice + 1;
      setConcluidas(prontas);
      if (prontas === ETAPAS.length) setEmExecucao(false);
    }, 220 + indice * 650));
    return () => timers.forEach(window.clearTimeout);
  }, [emExecucao]);

  const reproduzir = () => {
    if (emExecucao) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setConcluidas(ETAPAS.length);
      return;
    }
    setConcluidas(0);
    setEmExecucao(true);
  };

  return (
    <Secao id="rotina" className="py-9 md:py-12">
      <div id="areas" className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-x-[var(--gap-columns)]">
        <div id="problemas">
          <Cabeca id="rotina" titulo={<>A rotina anda.<br /><span className="text-t-accent">Você decide.</span></>} />
          <button
            type="button"
            aria-controls="rotina-etapas"
            aria-disabled={emExecucao}
            onClick={reproduzir}
            className={`${CLASSE_BOTAO_SECUNDARIO} mt-4 gap-2 text-sm aria-disabled:opacity-65`}
          >
            <Play size={15} aria-hidden="true" />
            {emExecucao ? "Conferindo o pedido…" : terminou ? "Rever o exemplo" : "Ver o agente em ação"}
          </button>
        </div>
        <div>
          <p className="font-mono text-xs text-t-muted">Exemplo · Conferência de pedido</p>
          <ol id="rotina-etapas" className="rotina-etapas mt-3 grid grid-cols-3 gap-2 sm:gap-4">
            {ETAPAS.map(({ titulo, inicial, resultado, Icone }, indice) => {
              const pronta = indice < concluidas;
              return (
                <li key={titulo} data-concluida={pronta || undefined} className="rotina-etapa relative min-w-0 border-t border-t-rule pt-3">
                  <div className="flex h-7 items-center gap-1.5 text-t-accent" aria-hidden="true">
                    {pronta ? <Check size={19} /> : <Icone size={19} />}
                    {indice < ETAPAS.length - 1 && <ArrowRight size={13} className="ml-auto text-t-muted" />}
                  </div>
                  <h3 className="mt-1 font-display text-base font-medium sm:text-lg">{titulo}</h3>
                  <p className="mt-1 text-xs leading-snug text-t-muted sm:text-sm">{pronta ? resultado : inicial}</p>
                </li>
              );
            })}
          </ol>
          <p className="sr-only" role="status">
            {terminou ? "O agente encontrou uma divergência na quantidade e a encaminhou para revisão humana." : ""}
          </p>
        </div>
      </div>
    </Secao>
  );
};
