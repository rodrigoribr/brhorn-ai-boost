import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Code, 
  Cpu, 
  Workflow,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface TechnologyProps {
  onContactClick?: () => void;
}

const Technology = ({ onContactClick }: TechnologyProps) => {
  const features = [
    {
      icon: Workflow,
      title: "Automação Inteligente",
      description: "Processos automatizados que conectam todos os seus sistemas de forma eficiente"
    },
    {
      icon: Code,
      title: "Interfaces Modernas",
      description: "Tecnologia de ponta para experiências digitais intuitivas e responsivas"
    },
    {
      icon: Cpu,
      title: "IA Avançada",
      description: "Inteligência artificial para respostas cada vez mais precisas e personalizadas"
    },
    {
      icon: Zap,
      title: "Implementação Ágil",
      description: "Soluções tecnológicas implementadas rapidamente com máxima eficiência"
    }
  ];

  const benefits = [
    "Redução de 80% no tempo de desenvolvimento",
    "Economia de até 70% nos custos operacionais",
    "Integração com mais de 200 aplicações",
    "Suporte técnico especializado incluso"
  ];

  return (
    <section id="tecnologia" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tecnologia de ponta,
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                implementação simples
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Utilizamos as mais avançadas tecnologias de automação e inteligência artificial 
              para criar soluções empresariais eficientes. Resultado: processos otimizados 
              em tempo e custo reduzidos.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="cta" 
              size="lg"
              className="group"
              onClick={() => {
                onContactClick?.();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero uma demonstração
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Cards à direita */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Seção de processo visual */}
        <div className="mt-20 text-center">
          <div className="flex flex-col md:flex-row md:inline-flex items-center gap-4 px-6 md:px-8 py-4 bg-background rounded-2xl md:rounded-full shadow-elegant mx-auto max-w-sm md:max-w-none">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Workflow className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Análise</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Code className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Automação</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Resultados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;