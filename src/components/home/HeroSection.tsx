import { PhoneCall } from "lucide-react";
import { BrDrawing } from "@/components/brand/BrDrawing";
import { BotaoDiagnostico, CLASSE_BOTAO_PRIMARIO, ConteudoBotao } from "@/components/diagnostico/BotaoDiagnostico";
import { ABERTURA } from "@/content/consultoriaAgentes";

interface HeroSectionProps {
  onCallClick: () => void;
  onFormClick: () => void;
}

export const HeroSection = ({ onCallClick, onFormClick }: HeroSectionProps) => (
  <section className="relative overflow-hidden bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:pb-28">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-projeto">{ABERTURA.rotulo}</p>

        <h1 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.08] tracking-[-0.01em] text-nanquim sm:text-6xl">
          Agentes de IA na rotina da sua empresa, <span className="text-projeto">com método de engenharia</span>.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{ABERTURA.subtitulo}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <BotaoDiagnostico origem="hero" className={CLASSE_BOTAO_PRIMARIO}>
            <ConteudoBotao />
          </BotaoDiagnostico>
          <button
            type="button"
            onClick={onCallClick}
            className="inline-flex h-12 items-center justify-center rounded border border-nanquim px-6 font-medium text-nanquim transition-colors hover:bg-nanquim hover:text-papel"
          >
            <PhoneCall className="mr-2 h-4 w-4" />
            Prefiro que me liguem
          </button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Ou{" "}
          <button type="button" onClick={onFormClick} className="underline underline-offset-4 hover:text-nanquim">
            descreva o seu caso por escrito
          </button>
          . Respondo em até 1 dia útil.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none">
        <BrDrawing className="h-auto w-full" />
      </div>
    </div>
  </section>
);
