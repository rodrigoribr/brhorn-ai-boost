import { Button } from "@/components/ui/button";
import logo from "@/assets/brhorn-logo.png";

interface HeroProps {
  onContactClick?: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    onContactClick?.();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-light overflow-hidden pt-40 md:pt-0">
      {/* Header com Logo e Menu */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo e texto à esquerda */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="brhorn Logo" 
              className="h-16 w-auto"
            />
            <span className="text-xl font-bold text-foreground">
              Automação & IA
            </span>
          </div>

          {/* Menu de navegação */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#solucoes" className="text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#clientes" className="text-foreground hover:text-primary transition-colors">
              Nossos Clientes
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Fale Conosco
            </a>
          </nav>
        </div>
      </header>

      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-dark/10 rounded-full blur-3xl"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Impulsione seu negócio com
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Automação e IA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Chatbots inteligentes para clínicas, imobiliárias e profissionais liberais. 
            Transforme processos manuais em automação eficiente.
          </p>

          <div className="flex justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-4 h-auto"
            >
              Fale com um Especialista
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;