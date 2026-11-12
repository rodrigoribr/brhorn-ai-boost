import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import App from './App.tsx'
import { carregarPixel, escolhaAtual } from './lib/consentimento'
import './index.css'

// Vercel Web Analytics: sem cookie; contagem de visitas no painel da Vercel.
inject()

// Meta Pixel só com consentimento (aviso de cookies em AvisoCookies.tsx).
if (escolhaAtual() === 'aceito') carregarPixel()

createRoot(document.getElementById("root")!).render(<App />);
