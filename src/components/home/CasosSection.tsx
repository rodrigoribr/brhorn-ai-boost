import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { PROJETOS, type Projeto } from "@/content/portfolio";
import { cn } from "@/lib/utils";

// Portfólio em cards (2026-11-05): substitui as linhas longas de Casos e a seção Agente pessoal.
// Com vídeo: toca ao passar o mouse e no toque/teclado pelo botão. Sem vídeo: mostra o roteiro em três quadros.

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

const menosMovimento = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Enquanto o vídeo não existe: o que ele vai mostrar, em três quadros numerados. */
// Os passos acendem em sequência (CSS em base.css, `.roteiro`), como a faixa de luz do logo.
const Roteiro = ({ passos }: { passos: Projeto["roteiro"] }) => (
  <div className="flex h-full flex-col justify-center p-[var(--space-lg)]">
    <ol className="roteiro">
      {passos.map((p, i) => (
        <li key={p} className="flex flex-col gap-[var(--space-sm)]">
          <span className="roteiro-ponto" aria-hidden="true" />
          <span className="roteiro-num num text-xs font-medium">{String(i + 1).padStart(2, "0")}</span>
          <span className="roteiro-texto text-sm leading-snug">{p}</span>
        </li>
      ))}
    </ol>
  </div>
);

const Midia = ({ projeto, tocando, alternar, video }: {
  projeto: Projeto;
  tocando: boolean;
  alternar: () => void;
  video: React.RefObject<HTMLVideoElement>;
}) => {
  if (!projeto.video) return <Roteiro passos={projeto.roteiro} />;
  return (
    <>
      <video
        ref={video}
        src={projeto.video}
        poster={projeto.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`Vídeo: ${projeto.roteiro.join(", ")}`}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={alternar}
        aria-pressed={tocando}
        aria-label={tocando ? `Pausar o vídeo do ${projeto.nome}` : `Ver o vídeo do ${projeto.nome}`}
        className={cn(
          "absolute bottom-[var(--space-sm)] left-[var(--space-sm)] inline-flex h-11 items-center gap-2 rounded-[var(--radius-pill)] bg-t-ink px-4 text-sm font-medium text-t-paper transition-opacity duration-short",
          tocando && "opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
          FOCO,
        )}
      >
        {tocando ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
        {tocando ? "Pausar" : "Ver funcionando"}
      </button>
    </>
  );
};

// Cor de cada trabalho sobre a faixa escura. O azul da marca fica com o agente pessoal, que vem primeiro.
const VISUAL: Record<string, { cor: string; vivo?: boolean }> = {
  "agente-pessoal": { cor: "var(--color-night-accent)", vivo: true },
  axion: { cor: "#4fd1a0" },
  viaserra: { cor: "#f2b35b", vivo: true },
  documentos: { cor: "#a99bff" },
};

const Card = ({ projeto, indice }: { projeto: Projeto; indice: number }) => {
  const visual = VISUAL[projeto.id] ?? { cor: "var(--color-night-accent)" };
  const video = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);

  const tocar = () => {
    const v = video.current;
    if (!v) return;
    void v.play().then(() => setTocando(true)).catch(() => setTocando(false));
  };
  const parar = (voltar = false) => {
    const v = video.current;
    if (!v) return;
    v.pause();
    if (voltar) v.currentTime = 0;
    setTocando(false);
  };

  return (
    <article
      aria-labelledby={`projeto-${projeto.id}`}
      onMouseEnter={() => projeto.video && !menosMovimento() && tocar()}
      onMouseLeave={() => projeto.video && parar(true)}
      style={{ "--cor": visual.cor, "--atraso": `${indice * 0.7}s` } as React.CSSProperties}
      className="caso group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--radius-card)] border border-t-nightrule bg-t-night2 sm:w-[calc((100%-var(--gap-columns))/1.6)] lg:w-[calc((100%-2*var(--gap-columns))/3.25)]"
    >
      <div className="caso-barra" aria-hidden="true" />
      <div className={cn("caso-midia border-b border-t-nightrule", projeto.video ? "aspect-[16/10]" : "h-40 sm:h-44")}>
        <Midia projeto={projeto} tocando={tocando} alternar={() => (tocando ? parar() : tocar())} video={video} />
      </div>

      <div className="flex flex-1 flex-col p-[var(--space-lg)]">
        <h3
          id={`projeto-${projeto.id}`}
          className="font-display text-[length:var(--text-2xl)] font-normal leading-[1.1] tracking-[var(--tracking-display)] text-t-nightink"
        >
          {projeto.nome}
        </h3>
        <p className="mt-[var(--space-2xs)] text-sm text-t-nightmuted">{projeto.tipo}</p>
        <p className="mt-[var(--space-sm)] inline-flex items-center gap-2 self-start rounded-[var(--radius-pill)] border border-t-nightrule px-3 py-1 text-xs font-medium text-t-nightink">
          <span className={cn("caso-situacao-ponto", visual.vivo && "vivo")} aria-hidden="true" />
          <span className="sr-only">Situação: </span>
          {projeto.situacao}
        </p>
        <p className="mt-[var(--space-md)] text-t-nightmuted">{projeto.texto}</p>
        {projeto.link && (
          <Link
            to={projeto.link.to}
            className={`${FOCO} mt-auto inline-flex items-center gap-2 self-start rounded-[var(--radius-control)] pt-[var(--space-lg)] font-medium text-t-nightink underline underline-offset-4 transition-colors duration-micro hover:text-[color:var(--cor)]`}
          >
            {projeto.link.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-short group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
};

const Seta = ({ lado, ativa, onClick }: { lado: "antes" | "depois"; ativa: boolean; onClick: () => void }) => {
  const Icone = lado === "antes" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!ativa}
      aria-label={lado === "antes" ? "Ver o trabalho anterior" : "Ver o próximo trabalho"}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-pill)] border border-t-nightrule text-t-nightink transition-colors duration-short hover:border-t-nightink disabled:cursor-default disabled:opacity-35 disabled:hover:border-t-nightrule",
        FOCO,
      )}
    >
      <Icone className="h-4 w-4" aria-hidden="true" />
    </button>
  );
};

// Faixa com rolagem lateral (2026-11-07): uma fileira só no desktop e no celular. O próximo card aparece cortado
// na borda para mostrar que há mais; as setas existem porque a rodinha do mouse não rola para o lado.
// Sem rolagem automática: o vídeo toca ao passar o mouse e o texto precisa ser lido.
export const CasosSection = () => {
  const projetos = PROJETOS.filter((p) => p.publicado);
  const faixa = useRef<HTMLDivElement>(null);
  const [limites, setLimites] = useState({ inicio: true, fim: false });
  const [naTela, setNaTela] = useState(false);

  const medir = useCallback(() => {
    const el = faixa.current;
    if (!el) return;
    setLimites({ inicio: el.scrollLeft <= 4, fim: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, [medir]);

  // A animação dos roteiros só roda com a faixa visível.
  useEffect(() => {
    const el = faixa.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(([e]) => setNaTela(e.isIntersecting), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const andar = (sentido: 1 | -1) => {
    const el = faixa.current;
    const card = el?.querySelector("article");
    if (!el || !card) return;
    const passo = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || "0");
    el.scrollBy({ left: sentido * passo, behavior: menosMovimento() ? "auto" : "smooth" });
  };

  return (
    <Secao id="casos" tom="noite">
      <div className="flex items-end justify-between gap-[var(--space-lg)]">
        <Cabeca
          id="casos"
          noite
          titulo="O que a brhorn já construiu."
          texto="O agente pessoal, sistemas em uso com clientes reais e uma demonstração, cada um com a situação dita às claras. Não são produtos de prateleira: mostram o tipo de trabalho que o método entrega."
        />
        <div className="hidden shrink-0 gap-[var(--space-xs)] sm:flex">
          <Seta lado="antes" ativa={!limites.inicio} onClick={() => andar(-1)} />
          <Seta lado="depois" ativa={!limites.fim} onClick={() => andar(1)} />
        </div>
      </div>
      <div
        ref={faixa}
        onScroll={medir}
        role="region"
        aria-label="Trabalhos da brhorn, role para o lado para ver todos"
        tabIndex={0}
        className={cn(
          "faixa-rolagem -mb-2 mt-[var(--space-2xl)] flex snap-x snap-mandatory gap-[var(--gap-columns)] overflow-x-auto overscroll-x-contain pb-2 pt-3",
          naTela && "rodando",
          FOCO,
        )}
      >
        {projetos.map((p, i) => (
          <Card key={p.id} projeto={p} indice={i} />
        ))}
      </div>
    </Secao>
  );
};
