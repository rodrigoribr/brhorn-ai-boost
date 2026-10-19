import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/contato";

interface ContatoSectionProps {
  onWhatsappClick: () => void;
  onFormClick: () => void;
  titulo?: string;
  texto?: string;
  mensagemWhatsapp?: string;
}

export const ContatoSection = ({
  onWhatsappClick,
  onFormClick,
  titulo = "Onde o trabalho manual trava hoje?",
  texto = "Conte em poucas linhas. A primeira conversa é sem compromisso, e você sai dela sabendo se um agente resolve, quanto trabalho dá e por onde começar.",
  mensagemWhatsapp,
}: ContatoSectionProps) => (
  <section id="contato" className="scroll-mt-20 bg-nanquim py-20 text-papel lg:py-28">
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-projeto-claro">Próximo passo</p>
      <h2 className="mt-4 font-display text-4xl font-normal leading-tight sm:text-5xl">
        {titulo}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-papel/70">
        {texto}
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={whatsappLink(mensagemWhatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsappClick}
          className="inline-flex h-12 items-center justify-center rounded bg-projeto px-6 font-medium text-papel transition-colors hover:bg-[#1a5fcc]"
        >
          Conversar no WhatsApp
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={onFormClick}
          className="inline-flex h-12 items-center justify-center rounded border border-papel/40 px-6 font-medium text-papel transition-colors hover:bg-papel hover:text-nanquim"
        >
          Descrever por escrito
        </button>
      </div>
    </div>
  </section>
);
