// DEV-0005: confere, no build servido em BASE (padrão http://localhost:4174, `npx vite preview --port 4174`),
// que nenhuma página rola na horizontal e que o contato previsto para a rota e a largura está visível.
// Uso: node scripts/verificar-larguras.mjs [pasta-das-capturas]
import puppeteer from "puppeteer";

const BASE = process.env.BASE ?? "http://localhost:4174";
const SAIDA = process.argv[2];
const PAGINAS = ["/", "/axion", "/viaserra", "/configuracao-de-agentes"];
const LARGURAS = [
  [360, 780],
  [390, 844],
  [768, 844],
  [1024, 768],
  [1366, 768],
];

const browser = await puppeteer.launch({ headless: true, executablePath: process.env.CHROME ?? "/usr/bin/google-chrome" });
let falhas = 0;
for (const [w, h] of LARGURAS) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h });
  for (const caminho of PAGINAS) {
    await page.goto(BASE + caminho, { waitUntil: "networkidle0" });
    // rola até o fim para disparar as entradas animadas e medir com tudo visível
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
    });
    await new Promise((r) => setTimeout(r, 2200));
    const r = await page.evaluate(() => {
      const largos = [...document.querySelectorAll("body *")]
        .filter((el) => el.getBoundingClientRect().right > window.innerWidth + 1)
        .slice(0, 3)
        .map((el) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)}`);
      const usaCabecalho = location.pathname === "/" && !matchMedia("(min-width: 64rem) and (pointer: fine)").matches;
      const botao = document.querySelector(usaCabecalho ? '[data-origem="header_whatsapp"]' : '[data-origem="botao_fixo"]');
      const b = botao?.getBoundingClientRect();
      const alvo = b && document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2);
      return {
        rolaHorizontal: document.documentElement.scrollWidth > window.innerWidth,
        largos,
        contatoAcessivel: !!b && b.width > 0 && botao.contains(alvo),
      };
    });
    const ok = !r.rolaHorizontal && r.contatoAcessivel;
    if (!ok) falhas++;
    console.log(`${ok ? "ok  " : "FALHA"} ${w}px ${caminho}  rolagem-horizontal=${r.rolaHorizontal} contato-acessível=${r.contatoAcessivel}${r.rolaHorizontal && r.largos.length ? "  largos: " + r.largos.join(", ") : ""}`);
    if (SAIDA && caminho === "/") {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${SAIDA}/home-${w}.png`, fullPage: true });
      const metodo = await page.$("#como-funciona");
      if (metodo) await metodo.screenshot({ path: `${SAIDA}/metodo-${w}.png` });
    }
  }
  await page.close();
}
await browser.close();
console.log(falhas ? `${falhas} falha(s)` : "tudo ok");
process.exit(falhas ? 1 : 0);
