import { BotaoDiagnostico, CHAT_ATIVO, CLASSE_BOTAO_PRIMARIO, ConteudoBotao } from "@/components/diagnostico/BotaoDiagnostico";
import { ABERTURA } from "@/content/consultoriaAgentes";
import { HeroEscritorio } from "@/components/home/HeroEscritorio";
import { CONTATO_ROTINA_WHATSAPP } from "@/lib/contato";

export const HeroSection = () => (
  <section aria-labelledby="hero-titulo" className="bg-t-paper">
    <div className="mx-auto grid max-w-[var(--container)] items-center gap-y-4 px-[var(--gutter)] pb-5 pt-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:py-5">
      <div className="hero-escritorio-texto relative z-10 min-w-0">
        <h1
          id="hero-titulo"
          className="max-w-[18ch] font-display text-[length:var(--text-display-hero)] font-normal leading-[1.04] tracking-[var(--tracking-display)] text-t-ink"
        >
          {ABERTURA.titulo[0]} <span className="text-t-accent block">{ABERTURA.titulo[1]}</span>
        </h1>

        <p className="lead mt-5 text-t-muted">{ABERTURA.frase}</p>

        <div className="mt-6 flex flex-col items-stretch sm:items-start">
          <BotaoDiagnostico
            origem="hero"
            className={`${CLASSE_BOTAO_PRIMARIO} px-3 text-sm sm:px-6 sm:text-base`}
            mensagemWhatsapp={CONTATO_ROTINA_WHATSAPP.mensagem}
            descricao="primeira-conversa"
          >
            <ConteudoBotao>{CHAT_ATIVO ? "Conversar pelo chat" : CONTATO_ROTINA_WHATSAPP.rotulo}</ConteudoBotao>
          </BotaoDiagnostico>
        </div>

        <p id="primeira-conversa" className="mt-[var(--space-sm)] max-w-[52ch] text-sm text-t-muted">
          {ABERTURA.primeiraConversa}
        </p>
      </div>

      <HeroEscritorio />
    </div>
  </section>
);
