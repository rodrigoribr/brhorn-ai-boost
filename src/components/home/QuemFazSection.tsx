import { Linkedin } from "lucide-react";
import { BrMark } from "@/components/brand/Logo";
import { LINKEDIN_URL } from "@/lib/contato";

export const QuemFazSection = () => (
  <section id="quem-faz" className="scroll-mt-20 border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[260px_1fr] lg:gap-16">
      {/* TODO(Rodrigo): trocar pelo retrato (foto quadrada, fundo neutro). */}
      <div className="mx-auto flex aspect-square w-full max-w-[260px] items-center justify-center rounded border border-linha bg-card">
        <BrMark className="w-1/2" />
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-projeto">Quem faz</p>
        <h2 className="mt-4 font-display text-4xl font-normal leading-tight text-nanquim sm:text-5xl">
          Rodrigo Brasil, engenheiro.
        </h2>
        <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
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
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-nanquim underline-offset-4 hover:underline"
          >
            <Linkedin className="h-4 w-4" />
            Ver perfil no LinkedIn
          </a>
        )}
      </div>
    </div>
  </section>
);
