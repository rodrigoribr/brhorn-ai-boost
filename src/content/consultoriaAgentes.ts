// Conteúdo da home (consultoria de agentes para empresas), num lugar só para editar sem mexer no layout.
// Voz institucional: a brhorn responde pela oferta, pela entrega e pelos compromissos do projeto.
// 🚫 Nada que lembre o Agente BOM (chicotes, listas de materiais, Versigent). Leitura de documentos técnicos com
// material próprio está liberada desde 2026-11-05: ver content/portfolio.ts.
// FORMATOS ainda não aparece na home; preço vazio ("") mostra "Valor definido no diagnóstico".

export const ABERTURA = {
  titulo: ["Agentes de IA", "para o dia a dia do seu negócio."],
  frase: "O agente executa as tarefas que se repetem, segue as regras da sua operação e encaminha as exceções para quem decide.",
  primeiraConversa: "Conte uma rotina da sua equipe. Na primeira conversa, vemos o que dá para automatizar.",
};

export const FECHO = {
  titulo: "Qual rotina você passaria adiante primeiro?",
  texto: "Conte como ela funciona hoje. Na primeira conversa, você descobre por onde vale começar.",
};

export const LIMITES = [
  {
    titulo: "Decisões sobre pessoas",
    texto: "Em contratação, avaliação ou desligamento, o agente organiza as informações e uma pessoa decide. A LGPD garante o direito à revisão humana.",
  },
  {
    titulo: "Envios oficiais",
    texto: "Folha, guias, obrigações fiscais e eSocial: o agente prepara e confere, e uma pessoa da equipe transmite.",
  },
  {
    titulo: "Pagamentos",
    texto: "O agente agenda e confere. A aprovação continua com quem a empresa autorizar.",
  },
];

export interface Formato {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  cobranca: string;
  destaque?: boolean;
  inclui: string[];
}

export const FORMATOS: Formato[] = [
  {
    id: "diagnostico",
    nome: "Diagnóstico",
    descricao: "Para saber onde a IA dá retorno antes de investir.",
    preco: "",
    cobranca: "Escopo e prazo fechados",
    destaque: true,
    inclui: [
      "Conversas com as áreas escolhidas",
      "Levantamento de rotinas, volumes e tempo gasto",
      "Mapa de oportunidades priorizado por esforço e retorno",
      "Recomendação do primeiro piloto, com estimativa de custo",
    ],
  },
  {
    id: "piloto",
    nome: "Projeto e piloto",
    descricao: "Para tirar a primeira oportunidade do papel e provar que funciona.",
    preco: "",
    cobranca: "Por projeto",
    inclui: [
      "Especificação do agente e do critério de sucesso",
      "Construção e integração com os sistemas da empresa",
      "Piloto com uma equipe real, no prazo combinado",
      "Relatório de resultado: tempo, erros e uso",
    ],
  },
  {
    id: "acompanhamento",
    nome: "Acompanhamento",
    descricao: "Para manter os agentes funcionando e ampliar aos poucos.",
    preco: "",
    cobranca: "Mensal, cancele quando quiser",
    inclui: [
      "Ajustes conforme os processos mudam",
      "Novos agentes para outras áreas",
      "Revisão periódica de acessos e de segurança",
      "Treinamento de quem entra na equipe",
    ],
  },
];

export const FAQ = [
  {
    id: "integracoes",
    pergunta: "Dá para usar os sistemas que já tenho?",
    resposta: "No diagnóstico, verifico o que seus sistemas permitem integrar. Dá para começar sem uma equipe de TI dedicada.",
  },
  {
    id: "seguranca",
    pergunta: "Quem tem acesso aos meus dados?",
    resposta: "Os dados e as contas ficam com sua empresa, que define e pode revogar os acessos. O agente registra suas ações, e decisões sensíveis passam por quem você autorizar. Quando preciso, o processamento pode acontecer na própria empresa.",
  },
  {
    id: "custos",
    pergunta: "Como vou saber quanto custa?",
    resposta: "O diagnóstico estima o investimento conforme a rotina e as integrações. Se houver ferramentas pagas, sua empresa contrata direto com os fornecedores.",
  },
];
