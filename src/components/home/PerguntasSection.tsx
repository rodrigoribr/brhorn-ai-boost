import { Plus } from "lucide-react";
import { FAQ } from "@/content/consultoriaAgentes";

export const PerguntasSection = () => (
  <section id="perguntas" aria-labelledby="perguntas-titulo">
    <h3 id="perguntas-titulo" className="mb-2 font-display text-xl font-normal">Antes de começar</h3>
    <div className="border-b border-t-rule">
      {FAQ.map(({ id, pergunta, resposta }) => (
        <details id={id} key={pergunta} className="group border-t border-t-rule">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[var(--radius-control)] py-2 font-medium text-t-ink hover:text-t-accent [&::-webkit-details-marker]:hidden">
            <Plus aria-hidden="true" className="h-4 w-4 shrink-0 text-t-accent transition-transform duration-short group-open:rotate-45" />
            {pergunta}
          </summary>
          <p className="max-w-[60ch] pb-3 pl-6 text-sm text-t-muted">{resposta}</p>
        </details>
      ))}
    </div>
  </section>
);
