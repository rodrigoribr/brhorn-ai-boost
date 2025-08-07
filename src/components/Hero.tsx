import { Button } from "@/components/ui/button";
import logo from "@/assets/brhorn-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-light overflow-hidden">
      {/* Header com Logo */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-2">
          <img 
            src={logo} 
            alt="brhorn Logo" 
            className="h-24 w-auto"
          />
          <span className="text-2xl font-bold text-foreground">
            Automação & IA
          </span>
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