import { Linkedin } from "lucide-react";
import { BrhMark } from "@/components/brand/Logo";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { LINKEDIN_URL } from "@/lib/contato";

export const QuemFazSection = () => (
  <Secao id="quem-faz">
    <div className="grid items-start gap-[var(--space-xl)] md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[var(--gap-columns)]">
      {/* Espaço do retrato: a foto (quadrada, fundo neutro) entra como <img> aqui dentro e esconde o monograma. */}
      <div
        data-slot="retrato"
        className="mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center rounded-[var(--radius-card)] md:mx-0"
      >
        <BrhMark className="w-2/5" title="" />
      </div>

      <div>
        <Cabeca id="quem-faz" titulo="Rodrigo Brasil, engenheiro." />
        <div className="mt-[var(--space-lg)] max-w-[60ch] space-y-[var(--space-md)] text-[length:var(--text-lead)] leading-[1.5] text-t-muted">
          <p>
            Me formei em engenharia estudando motores e trabalhei como projetista, desenhando peças que
            precisavam funcionar na primeira vez. Hoje aplico o mesmo método a agentes de IA: entender o mecanismo,
            medir, testar e só então colocar para rodar.
          </p>
          <p>
            Na brhorn você fala direto com quem projeta e constrói. Sem intermediário e sem promessa que não dá para
            medir.
          </p>
        </div>
        {LINKEDIN_URL && (
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={`${CLASSE_LINK_TEXTO} mt-[var(--space-lg)]`}>
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            Ver perfil no LinkedIn
          </a>
        )}
      </div>
    </div>
  </Secao>
);
