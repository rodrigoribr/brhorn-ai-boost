import type { ReactNode } from "react";
import { usePassos } from "./usePassos";

// Exemplo ilustrativo do fluxo do Axion, não é conversa real de cliente.
// Passos: 0 vazio · 1 pedido · 2 digitando · 3 resumo · 4 confirma · 5 registrado · 6 painel
const DURACOES = [700, 1600, 1300, 2600, 1300, 1200, 4200];

const Balao = ({ lado, children }: { lado: "cliente" | "agente"; children: ReactNode }) => (
  <p
    className={`animate-surgir max-w-[86%] rounded-lg px-3.5 py-2.5 text-[13px] leading-relaxed ${
      lado === "cliente"
        ? "ml-auto rounded-tr-none bg-projeto text-papel"
        : "rounded-tl-none bg-secondary text-nanquim"
    }`}
  >
    {children}
  </p>
);

export const AxionDemo = () => {
  const passo = usePassos(DURACOES);
  const registrado = passo >= 5;

  return (
    <figure className="overflow-hidden rounded border border-linha bg-card shadow-[0_24px_70px_-32px_rgba(22,26,58,0.4)]">
      <figcaption className="flex items-center justify-between border-b border-linha px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          Exemplo · WhatsApp do distribuidor
        </span>
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-mono text-[11px] text-projeto">
          <span className="h-1.5 w-1.5 rounded-full bg-projeto" /> Axion ativo
        </span>
      </figcaption>

      <div className="flex h-[340px] flex-col justify-end overflow-hidden gap-2.5 bg-[linear-gradient(#efece4_1px,transparent_1px),linear-gradient(90deg,#efece4_1px,transparent_1px)] bg-[size:20px_20px] px-5 py-5">
        {passo >= 1 && (
          <Balao lado="cliente">Bom dia! Manda 10 cx de água 500 e 6 fardo de refri lata pra quinta</Balao>
        )}
        {passo === 2 && (
          <p className="flex w-14 gap-1 rounded-lg rounded-tl-none bg-secondary px-3.5 py-3" aria-label="Axion digitando">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="animate-digitando h-1.5 w-1.5 rounded-full bg-nanquim"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </p>
        )}
        {passo >= 3 && (
          <Balao lado="agente">
            Bom dia! Anotei:
            <br />• 10 cx Água 500 ml (120 un)
            <br />• 6 fd Refrigerante lata (72 un)
            <br />
            Sua rota entrega quinta e o pedido fecha quarta às 17h. Posso confirmar?
          </Balao>
        )}
        {passo >= 4 && <Balao lado="cliente">Pode</Balao>}
        {passo >= 5 && <Balao lado="agente">Pedido registrado. Até quinta!</Balao>}
      </div>

      {/* Painel: a mesma conversa vira linha de pedido */}
      <div className="border-t border-linha px-5 py-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Painel · pedidos do ciclo</p>
        <div className="mt-3 grid grid-cols-[1fr_auto] items-center gap-3 rounded border border-linha px-3.5 py-2.5 text-[13px]">
          <div>
            <p className="font-medium text-nanquim">Mercado do bairro · Rota Sul</p>
            <p className="text-xs text-muted-foreground">2 itens · entrega quinta</p>
          </div>
          <span
            key={registrado ? "ok" : "conversa"}
            className={`animate-surgir rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
              registrado ? "bg-projeto text-papel" : "border border-linha text-muted-foreground"
            }`}
          >
            {registrado ? "Registrado" : passo >= 1 ? "Em conversa" : "Aguardando"}
          </span>
        </div>
      </div>
    </figure>
  );
};
