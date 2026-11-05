import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";

const exemplos = [
  "Resumo da manhã com agenda, e-mails que pedem resposta e pendências",
  "Preparação de reuniões com o histórico do cliente ou do fornecedor",
  "Rascunhos de respostas e documentos para você só revisar",
];

export const AgentePessoalSection = () => (
  <Secao id="agente-pessoal" tom="papel2">
    <div className="grid items-start gap-[var(--space-xl)] lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-x-[var(--gap-columns)]">
      <div>
        <Cabeca
          id="agente-pessoal"
          titulo="E um agente só seu, para a sua própria rotina."
          texto="Antes de levar agentes para a equipe, muito dono de empresa começa por si. Configuro um assistente nas suas contas, com os seus documentos e com os mesmos cuidados de segurança."
        />
        <Link to="/configuracao-de-agentes" className={`${CLASSE_BOTAO_SECUNDARIO} mt-[var(--space-xl)]`}>
          Conhecer o agente pessoal
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="border-b border-t-rulestrong">
        {exemplos.map((e) => (
          <li
            key={e}
            className="border-t border-t-rulestrong py-[var(--space-lg)] font-display text-[length:var(--text-title)] leading-[1.3] text-t-ink"
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  </Secao>
);
