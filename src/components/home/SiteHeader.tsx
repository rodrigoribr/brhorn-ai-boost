import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BrhAnimado } from "@/components/brand/BrhAnimado";
import { whatsappLink } from "@/lib/contato";
import { cn } from "@/lib/utils";

// Links absolutos para funcionarem também fora da home.
const links = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#casos", label: "Casos" },
  { href: "/configuracao-de-agentes", label: "Agente pessoal" },
  { href: "/#quem-faz", label: "Quem faz" },
];

const CLASSE_LINK =
  "rounded-[var(--radius-control)] py-2 text-t-muted transition-colors duration-micro hover:text-t-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

const CLASSE_CONVERSAR =
  "inline-flex h-11 items-center rounded-[var(--radius-control)] border border-t-ink px-5 text-sm font-medium text-t-ink transition-colors duration-micro hover:bg-t-ink hover:text-t-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

/**
 * Cabeçalho fixo de altura constante. Só o monograma, sem o nome escrito: ao carregar, uma faixa de luz
 * percorre b → r → h → o → r → n e ele para na pose inteira. Passar o mouse ou focar o logo repete. Ao rolar a página, as
 * letras acompanham o scroll (para frente ou para trás) e voltam à pose inteira quando ele para.
 */
export const SiteHeader = () => {
  const [rodada, setRodada] = useState(0);
  const ultima = useRef(Date.now()); // a primeira apresentação começa ao carregar
  const repetir = () => {
    // não reinicia no meio de uma apresentação (dura 3,6 s, mais o reacender)
    const agora = Date.now();
    if (agora - ultima.current < 4200) return;
    ultima.current = agora;
    setRodada((r) => r + 1);
  };

  return (
    <header className="sticky top-0 z-[var(--z-sticky-nav)] border-b border-t-rule bg-t-paper">
      <div className="mx-auto flex h-[var(--nav-height)] max-w-[var(--container)] items-center justify-between gap-6 px-[var(--gutter)]">
        <Link
          to="/"
          aria-label="brhorn, página inicial"
          onMouseEnter={repetir}
          onFocus={repetir}
          className={cn("shrink-0", CLASSE_LINK, "text-t-ink")}
        >
          <BrhAnimado key={rodada} title="" svgClassName="block h-11 w-auto" acompanhaRolagem />
        </Link>

        <nav aria-label="Seções" className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={CLASSE_LINK}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={CLASSE_CONVERSAR}>
          Conversar
        </a>
      </div>
    </header>
  );
};
