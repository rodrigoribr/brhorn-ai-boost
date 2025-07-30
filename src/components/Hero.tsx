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
        <div className="max-w-7xl mx-auto flex items-center">
          <img 
            src={logo} 
            alt="BRHORN Logo" 
            className="h-12 w-auto"
          />
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-4 h-auto"
            >
              Fale com um Especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver Demonstração
            </Button>
          </div>
        </div>

        {/* Estatísticas rápidas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideUp">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">30%</div>
            <div className="text-muted-foreground">Redução de faltas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Atendimento automático</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2x</div>
            <div className="text-muted-foreground">Mais agendamentos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;