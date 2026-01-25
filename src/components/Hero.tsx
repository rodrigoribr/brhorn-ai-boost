
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
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background">
      {/* Massive Background Typography - The "Monolith" */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] md:text-[25vw] font-bold tracking-tighter text-white leading-none whitespace-nowrap">
          FUTURE
        </span>
      </div>

      <div className="container px-6 mx-auto relative z-10 grid grid-cols-12 gap-6 h-full items-center">
        {/* Left Column (10%) - Social Proof / Indicators */}
        <div className="hidden md:flex flex-col justify-between h-[60vh] col-span-1 border-l border-white/10 pl-6">
          <div className="text-xs font-mono text-zinc-500 rotate-180 writing-vertical-rl tracking-[0.2em] uppercase">
            System Active
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-1 h-12 bg-white/20"></div>
            <div className="w-1 h-4 bg-white/60"></div>
          </div>
        </div>

        {/* Right Content (90%) - Asymmetric & Staggered */}
        <div className="col-span-12 md:col-span-11 md:pl-12 flex flex-col items-start text-left">

          {/* Logo - Smaller and aligned */}
          <div className="mb-12 w-48 opacity-80">
            <img src={logo} alt="Brhorn Logo" className="w-full h-auto object-contain invert brightness-0 filter" />
          </div>

          <div className="space-y-2 mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
              <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Transforme</span>
              <span className="block opacity-0 animate-fade-in-up pl-12 md:pl-24 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600" style={{ animationDelay: '0.3s' }}>
                Atendimento
              </span>
              <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Em Vendas.</span>
            </h1>
          </div>

          <p className="text-zinc-400 text-xl font-light max-w-xl mb-12 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            Agentes inteligentes que não apenas respondem, mas <strong className="text-white font-medium">executam</strong>.
            A era da automação passiva acabou.
          </p>

          <div className="flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Button
              onClick={scrollToForm}
              className="group bg-white hover:bg-zinc-200 text-black rounded-none px-10 py-7 text-lg font-bold tracking-wide transition-all border border-transparent hover:border-white/50"
            >
              INICIAR PROTOCOLO
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <button
              onClick={scrollToForm}
              className="text-zinc-400 hover:text-white uppercase tracking-widest text-sm font-semibold border-b border-transparent hover:border-white transition-all pb-1 translate-y-2"
            >
              Ver Casos de Uso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;