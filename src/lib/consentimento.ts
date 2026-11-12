// Consentimento de cookies (LGPD, guia da ANPD de 2022). O único cookie que não é necessário é o do
// Meta Pixel, então ele só carrega depois do "Aceitar". Antes disso window.fbq não existe, e todas as
// chamadas do site (Lead, Contact) já usam window.fbq?.(...), então viram nada.
// O Vercel Web Analytics (main.tsx) não usa cookie e roda sempre.

export type Escolha = "aceito" | "recusado";

const CHAVE = "brhorn-cookies";
const PIXEL_ID = "1926122314988363";

const ouvintes = new Set<() => void>();

export function lerEscolha(): Escolha | null {
  try {
    const v = localStorage.getItem(CHAVE);
    return v === "aceito" || v === "recusado" ? v : null;
  } catch {
    return null;
  }
}

export function gravarEscolha(escolha: Escolha) {
  try {
    localStorage.setItem(CHAVE, escolha);
  } catch {
    // Navegador sem storage: a escolha vale só para esta visita.
  }
  escolhaDaSessao = escolha;
  if (escolha === "aceito") {
    if (pixelCarregado) window.fbq?.("consent", "grant");
    else carregarPixel();
  } else if (pixelCarregado) {
    // Recusou depois de ter aceitado: o Pixel para de enviar a partir de agora.
    window.fbq?.("consent", "revoke");
  }
  ouvintes.forEach((f) => f());
}

/** Reabre o aviso (link na Política de Privacidade). */
export function reabrirAviso() {
  try {
    localStorage.removeItem(CHAVE);
  } catch {
    // ignora
  }
  escolhaDaSessao = null;
  ouvintes.forEach((f) => f());
}

let escolhaDaSessao: Escolha | null = typeof window === "undefined" ? null : lerEscolha();

export function escolhaAtual() {
  return escolhaDaSessao;
}

export function ouvirEscolha(f: () => void) {
  ouvintes.add(f);
  return () => {
    ouvintes.delete(f);
  };
}

let pixelCarregado = false;

/** Código padrão do Meta Pixel, só que chamado depois do consentimento. */
export function carregarPixel() {
  if (pixelCarregado || typeof window === "undefined") return;
  pixelCarregado = true;
  /* eslint-disable */
  // @ts-ignore
  !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq?.("init", PIXEL_ID);
  window.fbq?.("track", "PageView");
}
