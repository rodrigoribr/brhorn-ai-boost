import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import {
  EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEFONE_EXIBICAO,
  whatsappLink,
} from "@/lib/contato";

const Footer = () => (
  <footer className="border-t border-border bg-background py-14 text-muted-foreground">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link to="/" aria-label="brhorn, página inicial" className="inline-block">
            <Logo className="h-8 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Agentes de IA nas rotinas da empresa e agente pessoal para o empresário, com método de engenharia.
          </p>
          <div className="mt-6 flex gap-3">
            {LINKEDIN_URL && (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-foreground">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 shrink-0" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                WhatsApp {TELEFONE_EXIBICAO}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Minas Gerais, Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} brhorn</p>
        <nav aria-label="Documentos legais" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/politica-privacidade" className="hover:text-foreground">
            Política de Privacidade
          </Link>
          <Link to="/termos-uso" className="hover:text-foreground">
            Termos de Uso
          </Link>
          <Link to="/exclusao-dados" className="hover:text-foreground">
            Exclusão de Dados
          </Link>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
