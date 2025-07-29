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

const Technology = () => {
  const features = [
    {
      icon: Workflow,
      title: "Integração n8n",
      description: "Automação visual sem código para conectar todos os seus sistemas"
    },
    {
      icon: Code,
      title: "Desenvolvimento Lovable",
      description: "Interfaces modernas e responsivas criadas em tempo recorde"
    },
    {
      icon: Cpu,
      title: "IA Avançada",
      description: "Machine learning para respostas cada vez mais inteligentes"
    },
    {
      icon: Zap,
      title: "Deploy Instantâneo",
      description: "Sua solução no ar em minutos, não semanas"
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
              Combinamos o poder do <strong>n8n</strong> para automação no-code com 
              o <strong>Lovable</strong> para desenvolvimento ágil. Resultado: soluções 
              empresariais em tempo e custo reduzidos.
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

        {/* Seção de integração visual */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-background rounded-full shadow-elegant">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Workflow className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">n8n</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Code className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Lovable</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Sua Solução</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;