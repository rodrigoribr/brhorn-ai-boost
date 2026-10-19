// Conteúdo da página /consultoria-de-agentes, num lugar só para editar sem mexer no layout.
// Mesma convenção de configuracaoAgentes.ts: preço vazio ("") mostra "Valor definido no diagnóstico".

export const ABERTURA = {
  rotulo: "Consultoria para empresas",
  titulo: "Agentes de IA na rotina da sua empresa, com método de engenharia.",
  subtitulo:
    "Do RH à engenharia: descobrimos onde um agente economiza tempo de verdade, projetamos com regras claras, provamos num piloto medido e só então ampliamos.",
};

export const PROBLEMAS = [
  {
    titulo: "A assinatura existe, o resultado não",
    texto: "A empresa paga ChatGPT ou Copilot, cada um usa de um jeito e nenhum processo mudou.",
  },
  {
    titulo: "O piloto que nunca sai do piloto",
    texto: "Alguém montou uma automação, ela funcionou na demonstração e ninguém sabe se dá retorno.",
  },
  {
    titulo: "Medo de expor dados",
    texto: "Folha, contratos, desenhos e dados de clientes não podem ir para qualquer ferramenta, então a IA fica de fora.",
  },
];

export interface Fase {
  numero: string;
  nome: string;
  texto: string;
  entrega: string;
}

export const FASES: Fase[] = [
  {
    numero: "01",
    nome: "Diagnóstico",
    texto:
      "Conversas com cada área para mapear as rotinas repetitivas, o volume e o tempo gasto. Também mostramos onde um agente não compensa.",
    entrega: "Mapa de oportunidades priorizado por esforço e retorno",
  },
  {
    numero: "02",
    nome: "Projeto",
    texto:
      "Para a oportunidade escolhida: que dados o agente usa, com que ferramentas conversa, quem aprova o quê e como medir o sucesso.",
    entrega: "Especificação do agente e critério de sucesso por escrito",
  },
  {
    numero: "03",
    nome: "Piloto",
    texto:
      "O agente entra em um processo real, com uma equipe real, durante 30 a 60 dias. Medimos tempo, erros e uso, comparando com o antes.",
    entrega: "Agente funcionando e relatório com o resultado medido",
  },
  {
    numero: "04",
    nome: "Escala",
    texto:
      "Com o piloto aprovado, o agente se estende a outras áreas, com treinamento, política de uso de IA e acompanhamento.",
    entrega: "Agentes em produção, equipe treinada e regras de uso",
  },
];

// Exemplos, não um cardápio fechado: o diagnóstico decide o que entra.
export const AREAS = [
  {
    area: "RH e departamento pessoal",
    exemplos: [
      "Responde às dúvidas dos funcionários sobre férias, benefícios e políticas internas",
      "Prepara a integração de quem entra: documentos, acessos e treinamentos",
      "Controla vencimento de exames, documentos e certificações",
    ],
  },
  {
    area: "Financeiro e contabilidade",
    exemplos: [
      "Lança notas e boletos que chegam por e-mail",
      "Concilia o extrato bancário e aponta divergências",
      "Monta o pacote do fechamento mensal para a equipe revisar",
    ],
  },
  {
    area: "Comercial e atendimento",
    exemplos: [
      "Prepara propostas a partir dos modelos e da tabela de preços",
      "Registra os contatos e lembra os retornos pendentes",
      "Responde às perguntas frequentes dos clientes com base nos documentos da empresa",
    ],
  },
  {
    area: "Compras e suprimentos",
    exemplos: [
      "Compara cotações de fornecedores lado a lado",
      "Acompanha prazos de entrega e avisa os atrasos",
      "Confere pedido, nota fiscal e recebimento",
    ],
  },
  {
    area: "Engenharia e projeto",
    exemplos: [
      "Extrai listas de materiais de desenhos e documentos técnicos",
      "Compara revisões de desenhos e de especificações e lista o que mudou",
      "Consulta normas, especificações de cliente e histórico de projetos",
    ],
  },
  {
    area: "Qualidade e gestão",
    exemplos: [
      "Organiza registros de não conformidade e ações corretivas",
      "Junta os números das áreas num relatório semanal",
      "Mantém procedimentos e instruções de trabalho fáceis de consultar",
    ],
  },
];

// Onde o agente prepara e uma pessoa decide. É argumento de venda, não letra miúda.
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
  {
    titulo: "Liberação técnica",
    texto: "Em engenharia e qualidade, o agente aponta e compara. A assinatura do responsável técnico continua sendo de uma pessoa.",
  },
];

export const SEGURANCA = [
  {
    titulo: "A empresa é dona de tudo",
    texto: "Contas, chaves de acesso e dados ficam no nome da empresa. Eu configuro, a empresa controla e pode revogar meu acesso quando quiser.",
  },
  {
    titulo: "Permissão por área",
    texto: "O agente do financeiro não vê o RH, e o agente do RH não vê os desenhos da engenharia. Cada agente acessa só o que a rotina dele exige.",
  },
  {
    titulo: "Dados sensíveis tratados à parte",
    texto: "Atestados, exames e dados de saúde têm proteção reforçada na LGPD. Ficam em ambiente restrito ou no servidor da própria empresa.",
  },
  {
    titulo: "Opção local",
    texto: "Para desenhos, segredos industriais e o que não pode sair da empresa, o agente roda nos computadores da própria empresa, sem internet.",
  },
  {
    titulo: "Registro de tudo",
    texto: "Toda ação do agente fica registrada: o que leu, o que fez e quem aprovou.",
  },
  {
    titulo: "LGPD por escrito",
    texto: "Termo de confidencialidade e acordo de tratamento de dados assinados antes de qualquer acesso.",
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
      "Piloto de 30 a 60 dias com uma equipe real",
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
    p: "Preciso ter uma equipe de TI?",
    r: "Não. O trabalho é pensado para empresas que não têm TI dedicada. Se houver uma, ela participa das decisões de acesso e integração.",
  },
  {
    p: "A IA vai substituir funcionários?",
    r: "O objetivo é tirar o trabalho repetitivo de quem já está na equipe, para que essas pessoas façam o que exige julgamento. O diagnóstico mostra quanto tempo isso libera.",
  },
  {
    p: "Funciona com o sistema que já usamos?",
    r: "Na maioria dos casos, sim: ERP, planilhas, e-mail e pastas compartilhadas. Se um sistema não permite integração, o diagnóstico mostra a alternativa.",
  },
  {
    p: "Quanto custa a ferramenta de IA em si?",
    r: "Ela é paga direto pela empresa ao fornecedor, sem intermediário. Eu estimo esse custo no diagnóstico, antes de qualquer decisão.",
  },
  {
    p: "Quanto tempo leva até ver resultado?",
    r: "O diagnóstico leva semanas, e o piloto, de 30 a 60 dias. Ao final do piloto, a empresa tem um número medido para decidir se amplia.",
  },
  {
    p: "Por que começar pelo diagnóstico e não direto pelo agente?",
    r: "Porque a rotina mais visível nem sempre dá o maior retorno. Projetar antes de construir custa menos que refazer.",
  },
];
