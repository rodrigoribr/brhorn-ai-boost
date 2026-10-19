import { ArrowRight, FileSearch, MessageSquareText, Settings2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const servicos = [
  {
    icon: MessageSquareText,
    titulo: "Agentes no WhatsApp",
    texto:
      "Atendem, tiram pedido, consultam preço e estoque, agendam e cobram, seguindo as regras do seu negócio e registrando tudo no seu sistema.",
  },
  {
    icon: FileSearch,
    titulo: "Agentes que leem documentos",
    texto:
      "PDFs, notas, planilhas e desenhos técnicos viram dados organizados. Quando a informação não pode sair da empresa, o agente roda offline.",
  },
  {
    icon: Settings2,
    titulo: "Configuração de agentes",
    texto:
      "ChatGPT, Claude e automações configurados com os seus documentos, processos e ferramentas, para você ou para a sua equipe, com treinamento de uso.",
    link: { to: "/configuracao-de-agentes", label: "Ver pacotes" },
  },
  {
    icon: Wrench,
    titulo: "Software sob medida",
    texto:
      "Sistemas de gestão, painéis e integrações para a parte da rotina que nenhum sistema pronto resolve.",
  },
];

export const ServicosSection = () => (
  <section id="servicos" className="scroll-mt-20 border-t border-linha bg-papel py-20 lg:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-projeto">O que a brhorn faz</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-normal leading-tight text-nanquim sm:text-5xl">
        IA que entra na operação, não ao lado dela.
      </h2>

      <div className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha sm:grid-cols-2">
        {servicos.map((s) => (
          <article key={s.titulo} className="bg-card p-7 sm:p-8">
            <s.icon className="h-6 w-6 text-projeto" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold text-nanquim">{s.titulo}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.texto}</p>
            {s.link && (
              <Link
                to={s.link.to}
                className="mt-5 inline-flex items-center text-sm font-medium text-projeto underline-offset-4 hover:underline"
              >
                {s.link.label}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
