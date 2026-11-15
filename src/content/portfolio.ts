// Portfólio da home. As capas atuais mostram demonstrações ou ilustrações identificadas.
//
// Vídeo: coloque o arquivo em public/videos/ e preencha `video` (mp4 H.264, 8 a 15 s, sem som, 1280x800 ou
// 16:10, até ~2 MB) e `poster` (o primeiro quadro em .jpg/.webp). O roteiro descreve o conteúdo do vídeo para leitores de tela.
//
// 🚫 O Agente BOM / wibom não entra (decisão de 2026-10-19, ligado à Versigent).
// A leitura de documentos aparece como capacidade do agente. Demonstrações usam só material próprio.
// O agente de IA abre a faixa da home.
// ViaSerra: o sistema NÃO fala com o hóspede; quem usa é o gestor da pousada, com login. O vídeo mostra o gestor.

export interface Projeto {
  id: string;
  nome: string;
  tipo: string;
  situacao: string;
  capa?: { src: string; alt: string; ilustracao?: boolean };
  detalhe?: { texto: string; area: readonly [number, number, number, number] };
  destaque?: string;
  roteiro: [string, string, string];
  link?: { to: string; label: string };
  video?: string;
  poster?: string;
  publicado: boolean;
}

export const PROJETOS: Projeto[] = [
  {
    id: "agente-ia",
    nome: "Agente de IA",
    tipo: "Lê documentos, confere dados e automatiza tarefas repetitivas.",
    situacao: "Serviço de configuração",
    capa: {
      src: "/projetos/agente-terceiro-turno.webp",
      alt: "Um agente de IA trabalha à noite. O monitor mostra tarefas concluídas e uma exceção aguardando revisão.",
      ilustracao: true,
    },
    detalhe: { texto: "Exceção separada para revisão", area: [48, 42, 35, 9] },
    roteiro: ["Recebe tarefas e documentos", "Lê e confere os dados conforme as regras", "Separa exceções para revisão"],
    link: { to: "/configuracao-de-agentes", label: "Ver serviço" },
    publicado: true,
  },
  {
    id: "axion",
    nome: "Axion",
    tipo: "Pedidos via WhatsApp com IA",
    situacao: "Piloto de 6 meses",
    capa: {
      src: "/projetos/axion-expedicao.webp",
      alt: "Um celular confirma um pedido ao lado de caixas e uma lista de itens numa mesa de expedição.",
      ilustracao: true,
    },
    detalhe: { texto: "Confirmação do pedido", area: [57.5, 54, 15, 11.5] },
    destaque: "50 revendedores no piloto",
    roteiro: ["O revendedor pede pelo WhatsApp", "O agente confere e confirma", "O pedido fica registrado"],
    link: { to: "/axion", label: "Ver caso" },
    publicado: true,
  },
  {
    id: "viaserra",
    nome: "ViaSerra",
    tipo: "Gestão de pousadas",
    situacao: "Em uso diário",
    capa: {
      src: "/projetos/viaserra-recepcao.webp",
      alt: "Um calendário de ocupação no tablet, ao lado das chaves de uma pousada na serra.",
      ilustracao: true,
    },
    detalhe: { texto: "Reserva no calendário", area: [61.4, 55.8, 9.6, 5.8] },
    roteiro: ["O gestor registra a reserva", "O calendário mostra a ocupação", "Lotação e receita no painel"],
    link: { to: "/viaserra", label: "Ver projeto" },
    publicado: true,
  },
];
