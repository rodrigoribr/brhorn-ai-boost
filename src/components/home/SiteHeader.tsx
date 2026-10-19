import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { whatsappLink } from "@/lib/contato";

// Links absolutos para funcionarem também fora da home.
const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/configuracao-de-agentes", label: "Agente pessoal" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#quem-faz", label: "Quem faz" },
];

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-linha/70 bg-papel/85 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
      <Link to="/" aria-label="brhorn, página inicial" className="shrink-0">
        <Logo className="h-7 w-auto" />
      </Link>

      <nav aria-label="Seções" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-nanquim">
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center rounded border border-nanquim px-4 text-sm font-medium text-nanquim transition-colors hover:bg-nanquim hover:text-papel"
      >
        Conversar
      </a>
    </div>
  </header>
);
