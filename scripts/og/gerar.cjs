// Gera public/og-imagem.png a partir de scripts/og/og-imagem.html (1200x630, fontes reais do site).
// Uso: node scripts/og/gerar.cjs "$PWD/scripts/og/og-imagem.html" public/og-imagem.png
const puppeteer = require('puppeteer');
(async () => {
  const b = await puppeteer.launch({ args: ['--no-sandbox'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await p.goto('file://' + process.argv[2], { waitUntil: 'networkidle0' });
  await p.evaluate(() => document.fonts.ready);
  console.log('fontes:', await p.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight).join(', ')));
  await p.screenshot({ path: process.argv[3], type: 'png' });
  await b.close();
})();
