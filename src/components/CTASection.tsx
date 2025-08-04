import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

const CTASection = ({ onOpenContact }: CTASectionProps) => {
  return (
    <section id="contact" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Pronto para transformar
            <span className="block">
              seu negócio?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Junte-se a centenas de empresas que já automatizaram seus processos 
            e multiplicaram seus resultados com a BRHORN.
          </p>
        </div>

        {/* Benefícios rápidos */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">Setup em 7 dias</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">Ajustes 21 dias</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">ROI garantido</span>
          </div>
        </div>

        {/* CTAs principais */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={onOpenContact}
            className="group text-lg px-8 py-4 h-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-hero hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
          >
            Quero uma Demonstração Gratuita
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Garantias e segurança */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            <span>✓ Demonstração personalizada</span>
            <span>✓ Sem compromisso</span>
            <span>✓ Análise gratuita do seu negócio</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;