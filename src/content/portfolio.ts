// Portfólio da home (cards com vídeo). Só fatos verificáveis no texto; o `roteiro` é o que o vídeo vai mostrar
// e aparece no lugar dele enquanto o vídeo não existe.
//
// Vídeo: coloque o arquivo em public/videos/ e preencha `video` (mp4 H.264, 8 a 15 s, sem som, 1280x800 ou
// 16:10, até ~2 MB) e `poster` (o primeiro quadro em .jpg/.webp). Sem `video`, o card mostra o roteiro.
//
// 🚫 O Agente BOM / wibom não entra (decisão de 2026-10-19, ligado à Versigent). O card "Leitura de documentos"
// foi liberado pelo Rodrigo em 2026-11-05 com a condição: demonstração só com material próprio, nada da Versigent,
// nada de chicote elétrico e sem o nome wibom.
// ViaSerra: o sistema NÃO fala com o hóspede; quem usa é o gestor da pousada, com login. O vídeo mostra o gestor.

export interface Projeto {
  id: string;
  nome: string;
  tipo: string;
  situacao: string;
  texto: string;
  roteiro: [string, string, string];
  link?: { to: string; label: string };
  video?: string;
  poster?: string;
  publicado: boolean;
}

export const PROJETOS: Projeto[] = [
  {
    id: "axion",
    nome: "Axion",
    tipo: "Pedidos via WhatsApp com IA",
    situacao: "Piloto de 6 meses",
    texto:
      "Atendeu 50 revendedores de um produtor de queijos, de novembro de 2025 a maio de 2026: recebe o pedido no WhatsApp, confere catálogo, preço e regra comercial e organiza tudo num painel.",
    roteiro: ["O revendedor pede pelo WhatsApp", "O agente confere e confirma", "O pedido entra no painel"],
    link: { to: "/axion", label: "Ver o caso do Axion" },
    publicado: true,
  },
  {
    id: "viaserra",
    nome: "ViaSerra",
    tipo: "Gestão de pousadas",
    situacao: "Em uso diário",
    texto:
      "Reservas, quartos, hóspedes e calendário de ocupação num sistema só, com privacidade e fluxos de LGPD documentados. Em uso diário por uma pousada.",
    roteiro: ["O gestor registra a reserva", "O calendário mostra a ocupação", "Lotação e receita no painel"],
    link: { to: "/viaserra", label: "Ver o ViaSerra" },
    publicado: true,
  },
  {
    id: "documentos",
    nome: "Leitura de documentos",
    tipo: "Documentos técnicos em dados",
    situacao: "Demonstração",
    texto:
      "PDFs com tabelas e desenhos de estruturas metálicas viram dados organizados, prontos para a planilha ou o sistema da empresa.",
    roteiro: ["PDFs e tabelas soltos", "O agente lê e confere", "Dados estruturados na planilha"],
    publicado: true,
  },
  {
    id: "agente-pessoal",
    nome: "Agente pessoal",
    tipo: "Assistente do empresário",
    situacao: "Serviço de configuração",
    texto:
      "Um agente nas suas contas e com os seus documentos: resumo da manhã, preparação de reuniões e rascunhos para você só revisar, com os mesmos cuidados de segurança.",
    roteiro: ["Agenda e e-mails da manhã", "O que pede resposta, resumido", "Rascunho pronto para revisar"],
    link: { to: "/configuracao-de-agentes", label: "Conhecer o agente pessoal" },
    publicado: true,
  },
];
