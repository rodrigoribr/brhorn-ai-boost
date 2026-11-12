import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import App from './App.tsx'
import './index.css'

// Vercel Web Analytics: sem cookie; contagem de visitas no painel da Vercel.
inject()

createRoot(document.getElementById("root")!).render(<App />);
