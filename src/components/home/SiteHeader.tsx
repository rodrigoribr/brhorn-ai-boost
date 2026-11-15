import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { registrarContato } from "@/lib/consentimento";
import { BrhAnimado } from "@/components/brand/BrhAnimado";
import { CONTATO_ROTINA_WHATSAPP, whatsappLink } from "@/lib/contato";
import { cn } from "@/lib/utils";

// Links absolutos para funcionarem também fora da home.
const links = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#casos", label: "Casos" },
  { href: "/configuracao-de-agentes", label: "Agente de IA" },
  { href: "/#contato", label: "Contato" },
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
export const SiteHeader = ({ inicio = false }: { inicio?: boolean }) => {
  const [rodada, setRodada] = useState(0);
  const [menuAberto, setMenuAberto] = useState(false);
  const menuId = useId();
  const botaoMenu = useRef<HTMLButtonElement>(null);
  const ultima = useRef(Date.now()); // a primeira apresentação começa ao carregar
  const repetir = () => {
    // não reinicia no meio de uma apresentação (dura 3,6 s, mais o reacender)
    const agora = Date.now();
    if (agora - ultima.current < 4200) return;
    ultima.current = agora;
    setRodada((r) => r + 1);
  };

  return (
    <header
      className="sticky top-0 z-[var(--z-sticky-nav)] border-b border-t-rule bg-t-paper"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !menuAberto) return;
        setMenuAberto(false);
        botaoMenu.current?.focus();
      }}
    >
      <div className="mx-auto flex h-[var(--nav-height)] max-w-[var(--container)] items-center justify-between gap-3 px-[var(--gutter)] md:gap-6">
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            ref={botaoMenu}
            aria-expanded={menuAberto}
            aria-controls={menuId}
            onClick={() => setMenuAberto((aberto) => !aberto)}
            className={`${CLASSE_LINK} h-11 px-3 text-sm font-medium md:hidden`}
          >
            Menu
          </button>
          <a
            href={whatsappLink(inicio ? CONTATO_ROTINA_WHATSAPP.mensagem : undefined)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={inicio ? "Conversar no WhatsApp" : undefined}
            data-origem={inicio ? "header_whatsapp" : undefined}
            onClick={() => registrarContato("Contact", "header_whatsapp", "whatsapp")}
            className={cn(CLASSE_CONVERSAR, inicio && "px-3 sm:px-5")}
          >
            {inicio ? "WhatsApp" : "Conversar"}
          </a>
        </div>
      </div>
      <nav
        id={menuId}
        aria-label="Seções"
        hidden={!menuAberto}
        className="absolute inset-x-0 top-full grid border-y border-t-rule bg-t-paper px-[var(--gutter)] py-2 shadow-[var(--shadow-float)] md:hidden"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} className={`${CLASSE_LINK} flex min-h-11 items-center`} onClick={() => setMenuAberto(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
