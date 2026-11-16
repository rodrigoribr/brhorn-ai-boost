// SEO por rota: descrição, canonical e Open Graph. O título continua vindo de
// usePageTitle em cada página (e do index.html na home).
// Uma rota nova que deve ir ao Google entra aqui E no prerender.js (ROTAS_SEO).

export const SITE = "https://www.brhorn.com";

type SeoRota = { titulo: string; descricao: string; canonical: string };

export const SEO_ROTAS: Record<string, SeoRota> = {
  "/": {
    titulo: "brhorn — Agentes de IA para empresas",
    descricao:
      "A brhorn encontra onde um agente de IA economiza tempo na sua empresa. Diagnóstico, projeto, piloto e rotina, com método de engenharia.",
    canonical: "/",
  },
  "/configuracao-de-agentes": {
    titulo: "Agente de IA para sua rotina ou equipe · brhorn",
    descricao:
      "Agentes de IA que conferem documentos, organizam tarefas e preparam respostas nas ferramentas que você e sua equipe já usam.",
    canonical: "/configuracao-de-agentes",
  },
  "/axion": {
    titulo: "Axion · Pedidos de revendedores pelo WhatsApp · brhorn",
    descricao:
      "O Axion recebe pedidos de revendedores pelo WhatsApp, confere o que chegou na conversa, confirma com o cliente e registra o pedido no painel.",
    canonical: "/axion",
  },
  "/viaserra": {
    titulo: "ViaSerra · reservas e gestão de pousadas · brhorn",
    descricao:
      "Sistema de reservas para pousadas: quartos, hóspedes e chegadas em um calendário, no computador da recepção ou no celular.",
    canonical: "/viaserra",
  },
  // mesma página do /viaserra: o canonical aponta para lá para não duplicar no Google
  "/pousadas": {
    titulo: "ViaSerra · reservas e gestão de pousadas · brhorn",
    descricao:
      "Sistema de reservas para pousadas: quartos, hóspedes e chegadas em um calendário, no computador da recepção ou no celular.",
    canonical: "/viaserra",
  },
};

const ROTAS_INDEXAVEIS_SEM_SEO = ["/politica-privacidade", "/termos-uso", "/exclusao-dados"];

const meta = (seletor: string, criar: () => HTMLElement) => {
  let el = document.head.querySelector<HTMLElement>(seletor);
  if (!el) {
    el = criar();
    document.head.appendChild(el);
  }
  return el;
};

const metaNome = (nome: string, valor: string) =>
  meta(`meta[name="${nome}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("name", nome);
    return m;
  }).setAttribute("content", valor);

const metaProp = (prop: string, valor: string) =>
  meta(`meta[property="${prop}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("property", prop);
    return m;
  }).setAttribute("content", valor);

export const aplicarSeo = (caminho: string) => {
  const limpo = caminho.length > 1 ? caminho.replace(/\/+$/, "") : caminho;
  const seo = SEO_ROTAS[limpo];
  const robots = document.head.querySelector('meta[name="robots"]');

  if (!seo) {
    // 404 e rotas de redirecionamento não entram no índice
    if (!ROTAS_INDEXAVEIS_SEM_SEO.includes(limpo)) metaNome("robots", "noindex");
    return;
  }
  robots?.remove();

  const url = SITE + (seo.canonical === "/" ? "/" : seo.canonical);
  metaNome("description", seo.descricao);
  metaProp("og:title", seo.titulo);
  metaProp("og:description", seo.descricao);
  metaProp("og:url", url);
  meta('link[rel="canonical"]', () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  }).setAttribute("href", url);
};
