// DEV-0005: confere, no build servido em BASE (padrão http://localhost:4174, `npx vite preview --port 4174`),
// que nenhuma página rola na horizontal e que o botão fixo "Fazer diagnóstico" está visível.
// Uso: node scripts/verificar-larguras.mjs [pasta-das-capturas]
import puppeteer from "puppeteer";

const BASE = process.env.BASE ?? "http://localhost:4174";
const SAIDA = process.argv[2];
const PAGINAS = ["/", "/axion", "/viaserra", "/configuracao-de-agentes"];
const LARGURAS = [
  [360, 780],
  [390, 844],
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
      const botao = [...document.querySelectorAll("a,button")].find(
        (el) => el.textContent?.trim() === "Fazer diagnóstico" && getComputedStyle(el.parentElement).position === "fixed",
      );
      const b = botao?.getBoundingClientRect();
      return {
        rolaHorizontal: document.documentElement.scrollWidth > window.innerWidth,
        largos,
        botaoVisivel: !!b && b.bottom <= window.innerHeight && b.right <= window.innerWidth && b.width > 0,
      };
    });
    const ok = !r.rolaHorizontal && r.botaoVisivel;
    if (!ok) falhas++;
    console.log(`${ok ? "ok  " : "FALHA"} ${w}px ${caminho}  rolagem-horizontal=${r.rolaHorizontal} botao-fixo=${r.botaoVisivel}${r.largos.length ? "  largos: " + r.largos.join(", ") : ""}`);
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
