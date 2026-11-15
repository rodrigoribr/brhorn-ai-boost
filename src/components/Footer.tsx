import type { ReactNode } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { registrarContato } from "@/lib/consentimento";
import { BrhMark } from "@/components/brand/Logo";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_BRHORN_URL, LINKEDIN_URL, whatsappLink } from "@/lib/contato";

const LINK = "inline-flex min-h-11 items-center gap-1.5 rounded-[var(--radius-control)] hover:text-t-accent hover:underline";

const REDES = [
  { nome: "LinkedIn da brhorn", url: LINKEDIN_BRHORN_URL, Icone: Linkedin },
  { nome: "LinkedIn pessoal", url: LINKEDIN_URL, Icone: Linkedin },
  { nome: "Instagram", url: INSTAGRAM_URL, Icone: Instagram },
  { nome: "Facebook", url: FACEBOOK_URL, Icone: Facebook },
];

interface FechoCartaProps {
  titulo: string;
  texto: string;
  mensagemWhatsapp?: string;
  rotuloWhatsapp?: string;
  origemWhatsapp?: string;
  onWhatsappClick: () => void;
  onFormClick: () => void;
}

export const FechoCarta = ({
  titulo,
  texto,
  mensagemWhatsapp,
  rotuloWhatsapp = "Conversar no WhatsApp",
  origemWhatsapp,
  onWhatsappClick,
  onFormClick,
}: FechoCartaProps) => (
  <section id="contato" aria-labelledby="contato-titulo"
    className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-b border-t-rule py-8 md:py-10">
    <div className="max-w-[52ch]">
      <h2 id="contato-titulo"
        className="max-w-none font-display text-[length:var(--text-title)] font-normal leading-tight text-t-ink">
        {titulo}
      </h2>
      <p className="mt-2 text-t-muted">{texto}</p>
    </div>
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap">
      <a
        href={whatsappLink(mensagemWhatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onWhatsappClick}
        data-origem={origemWhatsapp}
        className={`${CLASSE_BOTAO_PRIMARIO} px-3 text-sm sm:px-6`}
      >
        {rotuloWhatsapp}
        <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
      </a>
      <button type="button" onClick={onFormClick} className={`${CLASSE_BOTAO_SECUNDARIO} text-sm`}>
        Descrever por escrito
      </button>
    </div>
  </section>
);

const Footer = ({ children }: { children?: ReactNode }) => (
  <footer id="rodape" className="border-t border-t-rule bg-t-paper pb-28 text-t-muted sm:pb-14">
    <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
      {children}

      <div className="flex flex-wrap items-center justify-between gap-x-6 py-3">
        <a href="/" aria-label="brhorn, página inicial" className={`${LINK} shrink-0 font-medium text-t-ink`}>
          <BrhMark className="h-8 w-auto" title="" />
          <span>brhorn.com</span>
        </a>
        <nav aria-label="Contato e redes sociais" className="flex min-w-0 flex-wrap gap-x-4 text-sm">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
            onClick={() => registrarContato("Contact", "rodape_whatsapp", "whatsapp")} className={LINK}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className={LINK}>
            <Mail className="h-4 w-4" aria-hidden="true" /> E-mail
          </a>
          {REDES.map(({ nome, url, Icone }) => (
            <a key={nome} href={url} target="_blank" rel="noopener noreferrer" className={LINK}>
              <Icone className="h-4 w-4" aria-hidden="true" /> {nome}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-5 border-t border-t-rule pt-2 text-xs">
        <p className="py-2">© {new Date().getFullYear()} brhorn · CNPJ 64.680.803/0001-17</p>
        <nav aria-label="Documentos legais" className="flex flex-wrap gap-x-4">
          <Link to="/politica-privacidade" className={LINK}>Política de Privacidade</Link>
          <Link to="/termos-uso" className={LINK}>Termos de Uso</Link>
          <Link to="/exclusao-dados" className={LINK}>Exclusão de Dados</Link>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
