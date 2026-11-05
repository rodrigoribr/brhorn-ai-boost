import type { ReactNode } from "react";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";
import {
  EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEFONE_EXIBICAO,
  whatsappLink,
} from "@/lib/contato";

const FOCO =
  "rounded-[var(--radius-control)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";
const LINK = `${FOCO} transition-colors duration-micro hover:text-t-ink`;
const ICONE = `${FOCO} flex h-10 w-10 items-center justify-center border border-t-rule transition-colors duration-micro hover:border-t-ink hover:text-t-ink`;

/** O fecho em forma de carta (só na home): absorve a antiga seção de Contato. */
export interface Carta {
  titulo: string;
  texto: string;
  mensagemWhatsapp?: string;
  onWhatsappClick: () => void;
  onFormClick: () => void;
}

export const FechoCarta = ({ titulo, texto, mensagemWhatsapp, onWhatsappClick, onFormClick }: Carta) => (
  <section id="contato" aria-labelledby="contato-titulo" className="pb-[var(--section-gap-s)] pt-[var(--section-gap-s)]">
    <h2
      id="contato-titulo"
      className="max-w-[24ch] font-display text-[length:var(--text-section)] font-normal leading-[1.08] tracking-[var(--tracking-display)] text-t-ink"
    >
      {titulo}
    </h2>
    <p className="lead mt-[var(--space-lg)] text-t-muted">{texto}</p>
    <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-sm)] sm:flex-row">
      <a
        href={whatsappLink(mensagemWhatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onWhatsappClick}
        className={CLASSE_BOTAO_PRIMARIO}
      >
        Conversar no WhatsApp
        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </a>
      <button type="button" onClick={onFormClick} className={CLASSE_BOTAO_SECUNDARIO}>
        Descrever por escrito
      </button>
    </div>
    <p className="mt-[var(--space-2xl)] font-display text-[length:var(--text-title)] text-t-ink">Rodrigo Brasil</p>
    <p className="text-sm text-t-muted">Engenheiro, brhorn</p>
  </section>
);

/** `children` = o fecho em carta (só a home passa). */
const Footer = ({ children }: { children?: ReactNode }) => (
  <footer className="border-t border-t-rule bg-t-paper pb-28 text-t-muted sm:pb-[var(--space-2xl)]">
    <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
      {children}

      <div
        className={`grid gap-[var(--space-xl)] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-x-[var(--gap-columns)] ${
          children ? "border-t border-t-rule pt-[var(--space-xl)]" : "pt-[var(--space-2xl)]"
        }`}
      >
        <div>
          <Link to="/" aria-label="brhorn, página inicial" className={`inline-block ${FOCO}`}>
            <Logo className="h-8" title="" />
          </Link>
          <p className="mt-[var(--space-md)] max-w-[44ch] text-sm">
            Agentes de IA nas rotinas da empresa e agente pessoal para o empresário, com método de engenharia.
          </p>
          <div className="mt-[var(--space-lg)] flex gap-[var(--space-sm)]">
            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={ICONE}>
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={ICONE}>
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-sm font-medium text-t-ink">Contato</h2>
          <ul className="mt-[var(--space-md)] space-y-[var(--space-sm)] text-sm">
            <li className="flex items-center gap-[var(--space-sm)]">
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={LINK}>
                WhatsApp {TELEFONE_EXIBICAO}
              </a>
            </li>
            <li className="flex items-center gap-[var(--space-sm)]">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${EMAIL}`} className={LINK}>
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-[var(--space-sm)]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Minas Gerais, Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[var(--space-xl)] flex flex-col items-start justify-between gap-[var(--space-md)] border-t border-t-rule pt-[var(--space-lg)] text-xs md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} brhorn</p>
        <nav aria-label="Documentos legais" className="flex flex-wrap gap-x-[var(--space-lg)] gap-y-[var(--space-xs)]">
          <Link to="/politica-privacidade" className={LINK}>
            Política de Privacidade
          </Link>
          <Link to="/termos-uso" className={LINK}>
            Termos de Uso
          </Link>
          <Link to="/exclusao-dados" className={LINK}>
            Exclusão de Dados
          </Link>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
