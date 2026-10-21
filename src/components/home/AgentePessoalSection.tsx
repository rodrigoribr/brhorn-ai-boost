import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, H2 } from "@/components/home/Titulos";

const exemplos = [
  "Resumo da manhã com agenda, e-mails que pedem resposta e pendências",
  "Preparação de reuniões com o histórico do cliente ou do fornecedor",
  "Rascunhos de respostas e documentos para você só revisar",
];

export const AgentePessoalSection = () => (
  <section id="agente-pessoal" className="scroll-mt-20 border-t border-linha bg-papel py-20 lg:py-28">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <Eyebrow>Para o empresário</Eyebrow>
        <H2>E um agente só seu, para a sua própria rotina.</H2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Antes de levar agentes para a equipe, muito dono de empresa começa por si. Configuro um assistente nas suas
          contas, com os seus documentos e com os mesmos cuidados de segurança.
        </p>
        <Link
          to="/configuracao-de-agentes"
          className="mt-8 inline-flex h-12 items-center justify-center rounded border border-nanquim px-6 font-medium text-nanquim transition-colors hover:bg-nanquim hover:text-papel"
        >
          Conhecer o agente pessoal
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <ul className="grid gap-px overflow-hidden rounded border border-linha bg-linha">
        {exemplos.map((e, i) => (
          <li key={e} className="flex gap-4 bg-card p-5">
            <span className="font-mono text-sm text-projeto">{String(i + 1).padStart(2, "0")}</span>
            <span className="leading-relaxed text-nanquim">{e}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
