import logo from "@/assets/logo-original.png";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="brhorn Logo"
              className="h-10 w-auto mb-6"
            />
            <p className="text-zinc-500 mb-8 max-w-sm leading-relaxed text-sm">
              Produtos de IA e gestão para operações reais. Criamos sistemas que atendem clientes, organizam pedidos,
              reservas e processos internos com controle.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/brhorn_ia/"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 text-zinc-400 group-hover:text-black" />
              </a>
              <a
                href="https://www.facebook.com/people/Brhorn/61579100998129/?locale=pt_BR"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4 text-zinc-400 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Links omitidos conforme solicitado */}

          {/* Contato */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <a
                  href="mailto:contato@brhorn.com"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  contato@brhorn.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <a
                  href="tel:+553599161747"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  (35) 9 9161 7547
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white mt-0.5" />
                <span className="text-zinc-400">
                  Minas Gerais, Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória e informações legais */}
        <div className="border-t border-white/5 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs uppercase tracking-wider">
              © 2026 brhorn. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs uppercase tracking-wider">
              <Link to="/politica-privacidade" className="text-zinc-600 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-zinc-600 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link to="/exclusao-dados" className="text-zinc-600 hover:text-white transition-colors">
                Exclusão de Dados
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics placeholder */}
      {/* GA4 here */}
    </footer>
  );
};

export default Footer;
