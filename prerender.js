import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const TARGET_FILE = path.join(DIST_DIR, 'index.html');
const PORT = 45678;
// Rotas que vão ao Google: cada uma vira dist/<rota>/index.html com o HTML pronto.
// Manter igual a src/lib/seo.ts e public/sitemap.xml.
const ROTAS_SEO = ['/', '/configuracao-de-agentes', '/axion', '/viaserra'];
// O template original fica em memória: a home pré-renderizada não pode virar o shell das outras rotas.
const TEMPLATE = fs.readFileSync(TARGET_FILE);

const server = http.createServer((req, res) => {
    try {
        const urlPath = req.url.split('?')[0];
        let filePath = path.join(DIST_DIR, urlPath === '/' ? 'index.html' : urlPath);

        if (filePath === TARGET_FILE || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(TEMPLATE);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
        };

        const contentType = mimeTypes[ext] || 'application/octet-stream';
        const content = fs.readFileSync(filePath);

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(500);
            res.end('500 Internal Server Error: ' + error.code);
        }
    }
});

server.listen(PORT, async () => {
    console.log(`Prerender server running at http://localhost:${PORT}/`);

    try {
        console.log('Launching browser...');
        let browser;

        if (process.env.VERCEL) {
            console.log('Detected Vercel environment. Using @sparticuz/chromium...');
            try {
                const chromium = (await import('@sparticuz/chromium')).default;
                browser = await puppeteer.launch({
                    args: chromium.args,
                    defaultViewport: chromium.defaultViewport,
                    executablePath: await chromium.executablePath(),
                    headless: chromium.headless,
                    ignoreHTTPSErrors: true,
                });
            } catch (err) {
                console.error('Failed to load @sparticuz/chromium:', err);
                throw err;
            }
        } else {
            console.log('Detected Local environment. Using default Puppeteer...');
            browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
        }

        const page = await browser.newPage();

        for (const rota of ROTAS_SEO) {
            console.log(`Navigating ${rota}...`);
            await page.goto(`http://localhost:${PORT}${rota}`, {
                waitUntil: 'networkidle0',
                timeout: 60000
            });
            const html = await page.content();
            const destino = rota === '/' ? TARGET_FILE : path.join(DIST_DIR, rota.slice(1), 'index.html');
            fs.mkdirSync(path.dirname(destino), { recursive: true });
            fs.writeFileSync(destino, html);
            console.log(`Saved ${path.relative(DIST_DIR, destino)} (${html.length} bytes)`);
        }
        console.log('✅ Prerender successful!');

        await browser.close();
        server.close();
        process.exit(0);
    } catch (e) {
        console.error('❌ Prerender failed:', e);
        server.close();
        process.exit(1);
    }
});
