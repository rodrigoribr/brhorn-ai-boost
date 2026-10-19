// Conteúdo da página /configuracao-de-agentes, num lugar só para editar sem mexer no layout.
// Preço vazio ("") mostra "Valor definido no diagnóstico". Preencha quando tiver a tabela, ex.: "a partir de R$ 2.000".

export interface Pacote {
  id: string;
  nome: string;
  paraQuem: string;
  preco: string;
  cobranca: string;
  destaque?: boolean;
  inclui: string[];
}

export const PACOTES: Pacote[] = [
  {
    id: "pessoal",
    nome: "Agente Pessoal",
    paraQuem: "Para donos de empresa, profissionais liberais e executivos.",
    preco: "",
    cobranca: "Pagamento único",
    destaque: true,
    inclui: [
      "Diagnóstico da sua rotina: o que dá para delegar e o que não vale a pena",
      "Assistente no Claude ou no ChatGPT, com instruções, memória e os seus documentos",
      "Conexão com e-mail, agenda e pasta de arquivos",
      "Três rotinas prontas, escolhidas para o seu dia a dia",
      "Opcional: falar com o agente pelo WhatsApp ou Telegram",
      "Treinamento de uso e um período de ajustes depois da entrega",
    ],
  },
  {
    id: "equipe",
    nome: "Agentes para a Equipe",
    paraQuem: "Para empresas de 3 a 10 pessoas que querem a IA trabalhando no processo, não só no navegador de cada um.",
    preco: "",
    cobranca: "Pagamento único",
    inclui: [
      "Tudo do Agente Pessoal, para cada pessoa da equipe",
      "Base de conhecimento da empresa: processos, modelos, preços e perguntas frequentes",
      "Agentes por função: comercial, atendimento, financeiro, operação",
      "Permissões por pessoa: cada um acessa só o que precisa",
      "Treinamento da equipe e manual de uso da empresa",
    ],
  },
  {
    id: "manutencao",
    nome: "Manutenção",
    paraQuem: "Para manter o agente afiado depois da entrega.",
    preco: "",
    cobranca: "Mensal, cancele quando quiser",
    inclui: [
      "Ajustes de instruções e novas rotinas conforme a sua demanda muda",
      "Atualização quando as ferramentas mudam (e elas mudam todo mês)",
      "Revisão periódica de segurança e de acessos",
      "Suporte direto pelo WhatsApp",
    ],
  },
];

export const EXEMPLOS = [
  { titulo: "Resumo da manhã", texto: "Os e-mails que importam, a agenda do dia e o que ficou pendente, numa mensagem só." },
  { titulo: "Preparo de reunião", texto: "Quem é a pessoa, o histórico de conversas e os pontos a decidir, antes de você entrar." },
  { titulo: "Rascunho de respostas", texto: "Respostas no seu tom para os e-mails e mensagens repetitivos. Você revisa e envia." },
  { titulo: "Documentos e propostas", texto: "Propostas, contratos e relatórios a partir dos seus modelos e dos seus números." },
  { titulo: "Pesquisa e comparação", texto: "Fornecedores, concorrentes, leis, preços: pesquisa com fontes, resumida para decidir." },
  { titulo: "Lembretes e acompanhamento", texto: "Cobra prazos, lembra retornos e avisa no WhatsApp o que está atrasado." },
];

export const SEGURANCA = [
  {
    titulo: "Você é o dono de tudo",
    texto: "Contas, chaves de acesso e dados ficam no seu nome. Eu configuro, você controla e pode me tirar quando quiser.",
  },
  {
    titulo: "Acesso mínimo",
    texto: "O agente só enxerga o que precisa para cada rotina. Nada de acesso total à caixa de e-mail por comodidade.",
  },
  {
    titulo: "Nada exposto na internet",
    texto: "Quando o agente roda num servidor, ele fica fechado, atualizado e sem painel aberto ao público.",
  },
  {
    titulo: "Defesa contra instruções escondidas",
    texto: "Um e-mail ou documento malicioso pode tentar dar ordens ao agente. Ações sensíveis pedem a sua confirmação.",
  },
  {
    titulo: "LGPD por escrito",
    texto: "Termo de confidencialidade e de tratamento de dados antes de qualquer acesso.",
  },
  {
    titulo: "Opção local",
    texto: "Para informação que não pode sair da empresa, o agente pode rodar no seu próprio computador.",
  },
];

export const FAQ = [
  {
    p: "Preciso saber programar ou entender de IA?",
    r: "Não. Você conta como é a sua rotina, eu traduzo em agente e te ensino a usar no dia a dia.",
  },
  {
    p: "Qual ferramenta vocês usam: ChatGPT, Claude ou outra?",
    r: "A que fizer mais sentido para você. Se você já paga uma, começamos por ela. A escolha é feita no diagnóstico, com os prós e contras de cada uma.",
  },
  {
    p: "Quanto custa a ferramenta de IA em si?",
    r: "É paga direto por você ao fornecedor, sem intermediário. Uma assinatura individual de ChatGPT ou Claude costuma bastar; rotinas mais pesadas, como atender pelo WhatsApp, podem ter custo de uso variável, que eu estimo antes de começar.",
  },
  {
    p: "O agente vai responder em meu nome sozinho?",
    r: "Só se você quiser. O padrão é o agente preparar e você aprovar. Autonomia total, só para tarefas de baixo risco que você escolher.",
  },
  {
    p: "Funciona no WhatsApp?",
    r: "Sim, como opcional. Você manda áudio ou texto para o seu agente e recebe a resposta ali mesmo.",
  },
  {
    p: "E se eu quiser parar?",
    r: "Tudo está no seu nome, então você continua usando o que foi configurado. A manutenção é mensal e pode ser cancelada a qualquer momento.",
  },
];
