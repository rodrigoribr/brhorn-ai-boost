// DEV-0066: o botão "Testar grátis" da página /viaserra leva direto ao formulário "Criar conta" do
// app, repassando a origem do visitante (utm_* e ref) para o cadastro guardar e o QG saber de onde
// veio o teste. Sem utm na chegada, a origem é o próprio botão: utm_source=site&utm_medium=viaserra_<botão>.
// Só utm_* e ref, só caracteres seguros: nada de dado pessoal. O app limpa de novo no cadastro.

export const APP_VIASERRA = "https://viaserra.brhorn.com/#/login";

const CHAVES = ["utm_source", "utm_medium", "utm_campaign", "ref"] as const;
const CHAVE_STORAGE = "brhorn-origem-viaserra";

export type BotaoTeste = "hero" | "preco" | "final" | "barra";

function limpar(valor: string | null): string | null {
  if (!valor) return null;
  const limpo = valor.trim().replace(/\s+/g, "-").replace(/[^A-Za-z0-9._-]/g, "").slice(0, 60);
  return limpo || null;
}

/** utm_* e ref de uma query string, já limpos. */
export function origemDaQuery(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const origem: Record<string, string> = {};
  for (const chave of CHAVES) {
    const v = limpar(params.get(chave));
    if (v) origem[chave] = v;
  }
  return origem;
}

/** Origem da chegada: a da URL atual; sem nada nela, a guardada nesta visita (a pessoa pode ter navegado). */
export function origemDaChegada(search: string): Record<string, string> {
  const daUrl = origemDaQuery(search);
  try {
    if (Object.keys(daUrl).length) {
      sessionStorage.setItem(CHAVE_STORAGE, new URLSearchParams(daUrl).toString());
      return daUrl;
    }
    return origemDaQuery(sessionStorage.getItem(CHAVE_STORAGE) ?? "");
  } catch {
    return daUrl;
  }
}

/** Link do teste grátis para um botão, com a origem que vai para o cadastro. */
export function linkTesteViaSerra(botao: BotaoTeste, chegada: Record<string, string> = {}): string {
  const temUtm = CHAVES.some((c) => c !== "ref" && chegada[c]);
  const origem = temUtm ? { ...chegada } : { utm_source: "site", utm_medium: `viaserra_${botao}`, ...(chegada.ref ? { ref: chegada.ref } : {}) };
  return `${APP_VIASERRA}?${new URLSearchParams({ cadastro: "1", ...origem }).toString()}`;
}
