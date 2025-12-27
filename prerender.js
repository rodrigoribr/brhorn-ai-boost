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

const server = http.createServer((req, res) => {
    try {
        // Clean URL parameters
        const urlPath = req.url.split('?')[0];
        let filePath = path.join(DIST_DIR, urlPath === '/' ? 'index.html' : urlPath);

        // Simple SPA fallback: if file not found, serve index.html
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
            filePath = TARGET_FILE;
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
            // Should have been caught by existsSync check but just in case
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
        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        console.log('Navigating...');
        await page.goto(`http://localhost:${PORT}/`, {
            waitUntil: 'networkidle0',
            timeout: 60000
        });

        console.log('Capturing HTML...');
        const html = await page.content();

        console.log('Saving index.html...');
        fs.writeFileSync(TARGET_FILE, html);
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
