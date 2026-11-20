import { CenaVideo } from "@/components/CenaVideo";
import { Cabeca, Secao } from "@/components/home/Titulos";

export const RotinaDemo = () => (
  <Secao id="rotina" className="py-9 md:py-12">
    <div id="areas" className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-x-[var(--gap-columns)]">
      <div id="problemas">
        <Cabeca
          id="rotina"
          titulo={<>A rotina anda.<br /><span className="text-t-accent">Você decide.</span></>}
          texto="O agente confere o que chega por e-mail, WhatsApp ou planilha. O que não bate vai para você."
        />
      </div>
      {/* em lg, mesma altura do bloco de "Comece com uma rotina" (285 px a 1536 px de largura), centralizada na coluna */}
      <figure className="relative min-w-0 lg:w-[min(100%,26.75rem)] lg:justify-self-center">
        <CenaVideo
          src="/imagens/rotina-anda.mp4"
          poster="/imagens/rotina-anda-poster.webp"
          descricao="Animação: uma nota fiscal, um pedido e um relatório chegam por e-mail, WhatsApp e planilha. O agente confere cada um. A nota e o relatório vão para Feito; o pedido com quantidade divergente vai para Você decide, onde a pessoa aprova."
          className="block h-auto w-full rounded-xl border border-t-rule"
        />
        <figcaption className="mt-2 font-mono text-xs text-t-muted lg:absolute lg:left-3 lg:top-2 lg:mt-0">Exemplo ilustrativo</figcaption>
      </figure>
    </div>
  </Secao>
);
