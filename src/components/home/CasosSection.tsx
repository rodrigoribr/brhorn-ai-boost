import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AxionDemo } from "@/components/produto/AxionDemo";
import { ViaSerraDemo } from "@/components/produto/ViaSerraDemo";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";

// Só fatos verificáveis: sem números de exemplo, sem "ao vivo" de mentira. A Frutty entra aqui quando for liberada.
// DEV-0005: provas do que é construído, não produtos à venda. Textos aprovados pelo Rodrigo em 2026-11-05
// (único número real: piloto do Axion de 6 meses, nov/2025 a mai/2026, 50 revendedores).
const projetos = [
  {
    nome: "ViaSerra",
    tipo: "Gestão de pousadas",
    status: "Em uso",
    texto:
      "Reservas, quartos, hóspedes e calendário de ocupação numa interface objetiva, com privacidade e fluxos de LGPD documentados. Em uso diário por uma pousada.",
    link: { to: "/viaserra", label: "Ver o ViaSerra" },
    Demo: ViaSerraDemo,
  },
  {
    nome: "Axion",
    tipo: "Pedidos via WhatsApp com IA",
    status: "Piloto de 6 meses",
    texto:
      "Recebe os pedidos dos revendedores pelo WhatsApp, confere catálogo, preços e regras comerciais e organiza tudo num painel. Atendeu 50 revendedores de um produtor de queijos num piloto de 6 meses, de novembro de 2025 a maio de 2026.",
    link: { to: "/axion", label: "Ver o caso do Axion" },
    Demo: AxionDemo,
  },
];

// Índice de projetos: cada linha é o nome e os fatos à esquerda, o sistema funcionando à direita.
export const CasosSection = () => (
  <Secao id="casos">
    <Cabeca
      id="casos"
      titulo="O que eu já construí."
      texto="Dois sistemas que rodaram com clientes reais. Não são produtos de prateleira: mostram o tipo de trabalho que o método entrega."
    />

    <div className="mt-[var(--space-2xl)]">
      {projetos.map(({ Demo, ...p }) => (
        <article
          key={p.nome}
          aria-labelledby={`caso-${p.nome}`}
          className="grid gap-[var(--space-xl)] border-t border-t-rule py-[var(--space-2xl)] last:pb-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-[var(--gap-columns)]"
        >
          <div className="flex flex-col">
            <h3
              id={`caso-${p.nome}`}
              className="font-display text-[length:var(--text-display-s)] font-normal leading-none tracking-[var(--tracking-display)] text-t-ink"
            >
              {p.nome}
            </h3>
            <dl className="mt-[var(--space-lg)] grid grid-cols-[auto_1fr] gap-x-[var(--space-md)] gap-y-[var(--space-2xs)] text-sm">
              <dt className="text-t-muted">O quê</dt>
              <dd className="text-t-ink">{p.tipo}</dd>
              <dt className="text-t-muted">Situação</dt>
              <dd className="text-t-ink">{p.status}</dd>
            </dl>
            <p className="mt-[var(--space-lg)] max-w-[52ch] text-t-muted">{p.texto}</p>
            <Link to={p.link.to} className={`${CLASSE_LINK_TEXTO} mt-[var(--space-lg)] self-start`}>
              {p.link.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="min-w-0">
            <Demo />
          </div>
        </article>
      ))}
    </div>
  </Secao>
);
