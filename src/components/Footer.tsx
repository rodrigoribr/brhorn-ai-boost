import logo from "@/assets/logo1.jpg";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="BRHORN Logo" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Transformamos negócios através da automação inteligente. 
              Especialistas em IA, n8n e desenvolvimento ágil para resultados extraordinários.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-semibold text-background mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-background/80 hover:text-background transition-colors">
                  Para Clínicas
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-background/80 hover:text-background transition-colors">
                  Para Imobiliárias
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-background/80 hover:text-background transition-colors">
                  Profissionais Liberais
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-background/80 hover:text-background transition-colors">
                  Marketing Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:contato@brhorn.com" 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  contato@brhorn.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-background/80">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória e informações legais */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 BRHORN. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                LGPD
              </a>
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