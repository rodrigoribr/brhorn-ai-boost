import { PhoneCall } from "lucide-react";
import { BotaoDiagnostico, CLASSE_BOTAO_PRIMARIO, ConteudoBotao } from "@/components/diagnostico/BotaoDiagnostico";
import { ABERTURA } from "@/content/consultoriaAgentes";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";

interface HeroSectionProps {
  onCallClick: () => void;
  onFormClick: () => void;
}

// Hero Banner: uma coluna, cerca de metade da tela; a primeira seção aparece embaixo.
export const HeroSection = ({ onCallClick, onFormClick }: HeroSectionProps) => (
  <section aria-labelledby="hero-titulo" className="bg-t-paper">
    <div className="mx-auto flex max-w-[var(--container)] flex-col justify-center px-[var(--gutter)] pb-[var(--space-2xl)] pt-[var(--space-xl)] lg:min-h-[52vh] lg:py-[var(--space-2xl)]">
      <div className="min-w-0">
        <h1
          id="hero-titulo"
          className="max-w-[14ch] font-display text-[length:var(--text-display)] font-normal leading-[1.04] tracking-[var(--tracking-display)] text-t-ink"
        >
          {ABERTURA.titulo}
        </h1>

        <p className="lead mt-[var(--space-lg)] text-t-muted">{ABERTURA.frase}</p>

        <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-sm)] sm:flex-row">
          <BotaoDiagnostico origem="hero" className={CLASSE_BOTAO_PRIMARIO}>
            <ConteudoBotao />
          </BotaoDiagnostico>
          <button type="button" onClick={onCallClick} className={CLASSE_BOTAO_SECUNDARIO}>
            <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
            Prefiro que me liguem
          </button>
        </div>

        <p className="mt-[var(--space-md)] text-sm text-t-muted">
          Ou{" "}
          <button
            type="button"
            onClick={onFormClick}
            className="whitespace-nowrap rounded-[var(--radius-control)] text-t-ink underline underline-offset-4 hover:text-t-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
          >
            descreva o seu caso por escrito
          </button>
          . Respondo em até 1 dia útil.
        </p>
      </div>
    </div>
  </section>
);
