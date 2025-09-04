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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-light overflow-hidden pt-32 md:pt-24">
      {/* Header com Logo e Menu */}
      <header className="absolute top-0 left-0 right-0 z-10">
        {/* Faixa futurista */}
        <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary-dark/10 backdrop-blur-sm border-b border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
            {/* Logo e texto à esquerda */}
            <div className="flex flex-col items-center gap-1 relative z-10">
              <img 
                src={logo} 
                alt="brhorn Logo" 
                className="h-16 w-auto"
              />
              <span className="text-lg font-bold text-foreground">
                Automação & IA
              </span>
            </div>

            {/* Menu de navegação centralizado */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-12">
              <div className="flex items-center space-x-10 bg-white/5 backdrop-blur-md rounded-full px-8 py-3 border border-primary/20">
                <a href="#inicio" className="menu-item relative text-lg font-medium text-foreground hover:text-primary transition-all duration-300 group">
                  <span className="relative z-10">Início</span>
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
                <a href="#sobre" className="menu-item relative text-lg font-medium text-foreground hover:text-primary transition-all duration-300 group">
                  <span className="relative z-10">Sobre Nós</span>
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
                <a href="#solucoes" className="menu-item relative text-lg font-medium text-foreground hover:text-primary transition-all duration-300 group">
                  <span className="relative z-10">Soluções</span>
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
                <a href="#clientes" className="menu-item relative text-lg font-medium text-foreground hover:text-primary transition-all duration-300 group">
                  <span className="relative z-10">Nossos Clientes</span>
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
                <a href="#contato" className="menu-item relative text-lg font-medium text-foreground hover:text-primary transition-all duration-300 group">
                  <span className="relative z-10">Fale Conosco</span>
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
              </div>
            </nav>

            {/* Espaço para balancear o layout */}
            <div className="w-32"></div>
          </div>

          {/* Linhas de energia animadas */}
          <div className="absolute bottom-0 left-0 right-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-dark to-transparent opacity-30 animate-pulse"></div>
          </div>
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