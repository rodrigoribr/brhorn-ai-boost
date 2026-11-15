import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ScanSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { PROJETOS, type Projeto } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const FOCO = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-t-nightaccent";

const Capa = ({ projeto }: { projeto: Projeto }) => {
  if (projeto.video) {
    return (
      <video controls muted playsInline preload="none" poster={projeto.poster}
        src={projeto.video} aria-label={projeto.roteiro.join(", ")} className="h-full w-full object-contain" />
    );
  }

  if (projeto.capa) {
    return (
      <img src={projeto.capa.src} alt={projeto.capa.alt} loading="lazy" decoding="async"
        className="absolute inset-0 h-full w-full object-cover" />
    );
  }

  return null;
};

const Card = ({ projeto, indice, total }: { projeto: Projeto; indice: number; total: number }) => {
  const [detalheAberto, setDetalheAberto] = useState(false);
  const detalhe = projeto.video ? undefined : projeto.detalhe;

  return (
    <div role="group" aria-roledescription="cartão" aria-label={`${indice + 1} de ${total}`} className="caso-slide">
      <article aria-labelledby={`projeto-${projeto.id}`} className="flex h-full flex-col rounded-[var(--radius-card)] border border-t-nightrule bg-t-night2">
        <figure
          data-detalhe={detalheAberto || undefined}
          className="projeto-figura relative grid aspect-[16/9] place-items-center overflow-hidden rounded-t-[var(--radius-card)] bg-t-night"
        >
          <div className="projeto-midia">
            <div className="projeto-quadro grid place-items-center">
              <Capa projeto={projeto} />
              {detalhe && (
                <span aria-hidden="true" className="projeto-destaque" style={{
                  left: `${detalhe.area[0]}%`, top: `${detalhe.area[1]}%`,
                  width: `${detalhe.area[2]}%`, height: `${detalhe.area[3]}%`,
                }} />
              )}
            </div>
          </div>
          {!projeto.video && (
            <figcaption className="absolute left-2 top-2 rounded bg-t-night px-2 py-0.5 text-xs text-t-nightink">
              {projeto.capa && !projeto.capa.ilustracao ? "Demo" : "Ilustração"}
            </figcaption>
          )}
          {detalhe && (
            <>
              <button type="button" aria-label={`Detalhe de ${projeto.nome}`}
                aria-expanded={detalheAberto} aria-controls={`detalhe-${projeto.id}`}
                onClick={() => setDetalheAberto(aberto => !aberto)}
                className={`${FOCO} absolute bottom-0 right-0 grid h-11 w-11 place-items-center text-t-nightink focus-visible:-outline-offset-2`}>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-t-nightrule bg-t-night">
                  <ScanSearch aria-hidden="true" size={16} />
                </span>
              </button>
              <p id={`detalhe-${projeto.id}`} hidden={!detalheAberto}
                className="absolute right-2 top-2 max-w-[calc(100%-5.25rem)] rounded bg-t-night px-2 py-1 text-xs leading-snug text-t-nightink">
                {detalhe.texto}
              </p>
            </>
          )}
        </figure>
        <div className="flex flex-1 flex-col px-4 pb-3 pt-3">
          <span className="text-xs text-t-nightaccent">{projeto.situacao}</span>
          <h3 id={`projeto-${projeto.id}`} className="mt-1 text-xl font-normal text-t-nightink">{projeto.nome}</h3>
          <p className="mt-1 text-sm leading-snug text-t-nightmuted">{projeto.tipo}</p>
          {projeto.destaque && <p className="mt-1 text-sm font-medium text-t-nightink">{projeto.destaque}</p>}
          {projeto.link && (
            <Link to={projeto.link.to} aria-label={`${projeto.link.label}: ${projeto.nome}`} className={`${FOCO} mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded text-sm text-t-nightink underline underline-offset-4 hover:text-t-nightaccent`}>
              {projeto.link.label}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          )}
        </div>
      </article>
    </div>
  );
};

const projetos = PROJETOS.filter((projeto) => projeto.publicado);
const ultimo = projetos.length - 1;

export const CasosSection = () => {
  const faixa = useRef<HTMLDivElement>(null);
  const [atual, setAtual] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const track = faixa.current;
    if (!track) return;
    let timer: number;
    let anterior = 0;
    const atualizar = () => {
      const esquerda = track.getBoundingClientRect().left;
      const primeiro = Array.from(track.children).findIndex((slide) =>
        slide.getBoundingClientRect().right - slide.clientWidth / 2 > esquerda,
      );
      const selecionado = Math.max(0, primeiro);
      setAtual(selecionado);
      if (selecionado !== anterior) {
        setStatus(`${projetos[selecionado].nome}, ${selecionado + 1} de ${projetos.length}`);
        anterior = selecionado;
      }
    };
    const aguardar = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(atualizar, 140);
    };
    const evento = "onscrollend" in track ? "scrollend" : "scroll";
    const listener = evento === "scrollend" ? atualizar : aguardar;
    track.addEventListener(evento, listener);
    window.addEventListener("resize", atualizar);
    return () => {
      window.clearTimeout(timer);
      track.removeEventListener(evento, listener);
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  const mostrar = (indice: number) => {
    const track = faixa.current;
    const slide = track?.children[indice];
    if (!track || !slide) return;
    track.scrollBy({ left: slide.getBoundingClientRect().left - track.getBoundingClientRect().left });
  };

  return (
    <Secao id="casos" tom="noite" className="casos-secao py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3">
          <Cabeca id="casos" noite titulo="Projetos da brhorn" />
          <div className="flex shrink-0 gap-2 lg:hidden">
            {[
              { delta: -1, Icone: ArrowLeft, rotulo: "Projeto anterior" },
              { delta: 1, Icone: ArrowRight, rotulo: "Próximo projeto" },
            ].map(({ delta, Icone, rotulo }) => {
              const destino = atual + delta;
              const indisponivel = destino < 0 || destino > ultimo;
              return (
                <button key={rotulo} type="button" aria-label={rotulo} aria-controls="faixa-casos" aria-disabled={indisponivel}
                  onClick={indisponivel ? undefined : () => mostrar(destino)}
                  className={`${FOCO} grid h-11 w-11 place-items-center rounded-full border border-t-nightmuted aria-disabled:opacity-40`}>
                  <Icone className="h-4 w-4" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>
        <div ref={faixa} id="faixa-casos" role="region" aria-label="Projetos" aria-roledescription="carrossel"
          tabIndex={0} className={`${FOCO} casos-faixa mt-4 rounded`}>
          {projetos.map((projeto, indice) => (
            <Card key={projeto.id} projeto={projeto} indice={indice} total={projetos.length} />
          ))}
        </div>
        <div className="flex justify-center lg:hidden" role="group" aria-label="Selecionar projeto">
          {projetos.map((projeto, indice) => (
            <button key={projeto.id} type="button" aria-label={projeto.nome}
              aria-controls="faixa-casos" aria-current={indice === atual ? "true" : undefined}
              onClick={() => mostrar(indice)} className={`${FOCO} grid h-11 w-11 place-items-center rounded-full`}>
              <span aria-hidden="true" className={cn("h-2 rounded-full", indice === atual ? "w-5 bg-t-nightaccent" : "w-2 bg-t-nightmuted")} />
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">{status}</p>
      </div>
    </Secao>
  );
};
