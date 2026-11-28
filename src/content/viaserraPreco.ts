// DEV-0066: preço do ViaSerra na página /viaserra. Tem que bater com o app (trial_dias = 14 em
// assinatura_config) e com os segredos VIASERRA_PRECO_MENSAL/_ANUAL das funções (69 e 690, decisão
// do Comercial em 2026-11-22). Mudou lá, muda aqui.
// "Cancela quando quiser" ficou de fora: os Termos não tratam da assinatura do ViaSerra e o app não
// tem cancelamento pela tela (2026-11-27). Volta quando os dois existirem.

export const VIASERRA_TESTE_DIAS = 14;

export const VIASERRA_PLANOS = [
  { nome: "Mensal", valor: "R$ 69", periodo: "por mês", nota: "Cobrança todo mês." },
  { nome: "Anual", valor: "R$ 690", periodo: "por ano", nota: "Sai pelo preço de 10 meses." },
] as const;

export const VIASERRA_CONDICOES = [
  `${VIASERRA_TESTE_DIAS} dias grátis para testar`,
  "Sem cartão para começar",
  "Sem taxa de entrada",
] as const;

export const VIASERRA_NOTA_CTA = "Sem cartão · depois R$ 69/mês";
