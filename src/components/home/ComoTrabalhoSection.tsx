const etapas = [
  {
    titulo: "Entender a operação",
    texto: "Mapeio o processo real: clientes, regras, exceções, canais e as decisões que hoje dependem de alguém.",
  },
  {
    titulo: "Organizar dados e regras",
    texto: "Conhecimento solto vira cadastro, catálogo, instrução para o agente, status e histórico que dá para auditar.",
  },
  {
    titulo: "Construir",
    texto: "Produto pronto, adaptação ou sob medida, o que resolver melhor. Nada encaixado à força.",
  },
  {
    titulo: "Integrar à rotina",
    texto: "WhatsApp, banco de dados, painéis, planilhas e sistemas que você já usa, conectados.",
  },
  {
    titulo: "Medir e ajustar",
    texto: "Depois da entrega, ajusto regras, mensagens e telas com base no uso de verdade.",
  },
];

export const ComoTrabalhoSection = () => (
  <section id="como-trabalho" className="scroll-mt-20 border-t border-linha bg-papel py-20 lg:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-projeto">Como trabalho</p>
        <h2 className="mt-4 font-display text-4xl font-normal leading-tight text-nanquim sm:text-5xl">
          Engenharia aplicada antes de promessa de IA.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Tudo começa pela operação. A IA entra onde ajuda a decidir, responder ou executar melhor, não como enfeite
          em cima de um processo quebrado.
        </p>
      </div>

      <ol className="mt-12 grid gap-px overflow-hidden rounded border border-linha bg-linha md:grid-cols-5">
        {etapas.map((e, i) => (
          <li key={e.titulo} className="bg-card p-6">
            <span className="font-mono text-sm text-projeto">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-semibold text-nanquim">{e.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
