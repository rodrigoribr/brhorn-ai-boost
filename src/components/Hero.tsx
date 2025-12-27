
import logo from "../assets/logo-new.png";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const scrollToForm = () => {
    // Trigger webhook/pixel for button click if needed, then scroll
    onContactClick();
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      {/* Logo */}
      <div className="mb-12 w-64 md:w-80">
        <img src={logo} alt="Brhorn Logo" className="w-full h-auto object-contain" />
      </div>

      {/* Tag */}
      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-xs font-semibold uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        A última Geração IA
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        Transforme atendimento manual <br />
        em vendas automáticas com <span className="text-blue-500">IA</span>
      </h1>

      {/* Subheadline */}
      <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto leading-relaxed">
        Criamos agentes inteligentes que executam tarefas, atendem clientes e organizam operações automaticamente.
      </p>

      {/* CTA Button */}
      <Button
        onClick={scrollToForm}
        className="bg-[#0091FF] hover:bg-[#007acc] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
      >
        Ver automação funcionando <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </section>
  );
};

export default Hero;