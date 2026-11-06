import { useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { PROJETOS, type Projeto } from "@/content/portfolio";
import { cn } from "@/lib/utils";

// Portfólio em cards (2026-11-05): substitui as linhas longas de Casos e a seção Agente pessoal.
// Com vídeo: toca ao passar o mouse e no toque/teclado pelo botão. Sem vídeo: mostra o roteiro em três quadros.

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

const menosMovimento = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Enquanto o vídeo não existe: o que ele vai mostrar, em três quadros numerados. */
const Roteiro = ({ passos }: { passos: Projeto["roteiro"] }) => (
  <ol className="grid h-full grid-cols-3 gap-px bg-t-rule">
    {passos.map((p, i) => (
      <li key={p} className="flex flex-col justify-between bg-t-paper2 p-[var(--space-md)]">
        <span className="num text-sm text-t-accent">{String(i + 1).padStart(2, "0")}</span>
        <span className="text-sm leading-snug text-t-ink">{p}</span>
      </li>
    ))}
  </ol>
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

const Card = ({ projeto }: { projeto: Projeto }) => {
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
      className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-t-rule bg-t-paper transition-colors duration-short hover:border-t-rulestrong"
    >
      <div className={cn("relative border-b border-t-rule bg-t-paper2", projeto.video ? "aspect-[16/10]" : "h-36 sm:h-44")}>
        <Midia projeto={projeto} tocando={tocando} alternar={() => (tocando ? parar() : tocar())} video={video} />
      </div>

      <div className="flex flex-1 flex-col p-[var(--space-lg)]">
        <h3
          id={`projeto-${projeto.id}`}
          className="font-display text-[length:var(--text-2xl)] font-normal leading-[1.1] tracking-[var(--tracking-display)] text-t-ink"
        >
          {projeto.nome}
        </h3>
        <dl className="mt-[var(--space-sm)] grid grid-cols-[auto_1fr] gap-x-[var(--space-md)] gap-y-[var(--space-2xs)] text-sm">
          <dt className="text-t-muted">O quê</dt>
          <dd className="text-t-ink">{projeto.tipo}</dd>
          <dt className="text-t-muted">Situação</dt>
          <dd className="text-t-ink">{projeto.situacao}</dd>
        </dl>
        <p className="mt-[var(--space-md)] text-t-muted">{projeto.texto}</p>
        {projeto.link && (
          <Link to={projeto.link.to} className={`${CLASSE_LINK_TEXTO} mt-auto self-start pt-[var(--space-lg)]`}>
            {projeto.link.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
};

export const CasosSection = () => {
  const projetos = PROJETOS.filter((p) => p.publicado);
  return (
    <Secao id="casos">
      <Cabeca
        id="casos"
        titulo="O que a brhorn já construiu."
        texto="Sistemas em uso com clientes reais, uma demonstração e o agente pessoal, cada um com a situação dita às claras. Não são produtos de prateleira: mostram o tipo de trabalho que o método entrega."
      />
      <div
        className={cn(
          "mt-[var(--space-2xl)] grid gap-[var(--gap-columns)] md:grid-cols-2",
          projetos.length === 3 && "lg:grid-cols-3",
        )}
      >
        {projetos.map((p) => (
          <Card key={p.id} projeto={p} />
        ))}
      </div>
    </Secao>
  );
};
