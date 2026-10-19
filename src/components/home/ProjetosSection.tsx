import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Só fatos verificáveis: sem números de exemplo, sem "ao vivo" de mentira.
const projetos = [
  {
    nome: "ViaSerra",
    tipo: "Gestão de pousadas",
    status: "Em uso",
    texto:
      "Reservas, quartos, hóspedes e calendário de ocupação numa interface objetiva, com privacidade e fluxos de LGPD documentados. Em uso diário por uma pousada.",
    link: { to: "/viaserra", label: "Ver o ViaSerra" },
  },
  {
    nome: "Axion",
    tipo: "Agente de vendas B2B no WhatsApp",
    status: "Aberto para piloto",
    texto:
      "Recebe pedidos de revendedores pelo WhatsApp, consulta catálogo e preços, aplica as regras comerciais e organiza tudo num painel. Pronto e procurando as primeiras empresas para piloto.",
    link: { to: "/axion", label: "Ver o Axion" },
  },
  {
    nome: "Agente BOM",
    tipo: "Indústria · cliente confidencial",
    status: "Sob medida",
    texto:
      "Lê desenhos técnicos e monta a lista de materiais automaticamente. Roda offline, no computador do cliente: nenhum desenho sai da empresa.",
    link: null,
  },
];

export const ProjetosSection = () => (
  <section id="projetos" className="scroll-mt-20 border-t border-linha bg-[#f2f0ea] py-20 lg:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-projeto">Projetos</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-normal leading-tight text-nanquim sm:text-5xl">
        Feito, entregue e funcionando.
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projetos.map((p) => (
          <article key={p.nome} className="flex flex-col rounded border border-linha bg-card p-7">
            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{p.tipo}</p>
              <span className="shrink-0 rounded-full border border-projeto/30 bg-projeto/5 px-2.5 py-0.5 font-mono text-[11px] text-projeto">
                {p.status}
              </span>
            </div>
            <h3 className="mt-5 font-display text-3xl text-nanquim">{p.nome}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.texto}</p>
            {p.link && (
              <Link
                to={p.link.to}
                className="mt-6 inline-flex items-center text-sm font-medium text-nanquim underline-offset-4 hover:underline"
              >
                {p.link.label}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
