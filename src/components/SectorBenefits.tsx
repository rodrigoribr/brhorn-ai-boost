import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Home, 
  Briefcase, 
  Megaphone,
  Calculator,
  Bed,
  Settings,
  UtensilsCrossed,
  ShoppingBag,
  Clock,
  TrendingUp,
  Users,
  Target
} from "lucide-react";

const SectorBenefits = () => {
  const sectors = [
    {
      icon: Heart,
      title: "Clínicas",
      color: "text-red-500",
      benefits: [
        "Agendamento 24h com lembretes automáticos",
        "Redução de faltas em até 30%",
        "Gestão inteligente de horários"
      ]
    },
    {
      icon: Home,
      title: "Imobiliárias",
      color: "text-blue-500",
      benefits: [
        "Qualificação automática de leads",
        "Agendamento de visitas inteligente",
        "Follow-up personalizado para clientes"
      ]
    },
    {
      icon: Briefcase,
      title: "Profissionais Liberais",
      color: "text-green-500",
      benefits: [
        "Triagem automática de clientes",
        "Agendamento de consultorias",
        "Suporte 24/7 para dúvidas frequentes"
      ]
    },
    {
      icon: Megaphone,
      title: "Marketing",
      color: "text-purple-500",
      benefits: [
        "Campanhas automatizadas multicanal",
        "Segmentação inteligente de leads",
        "ROI otimizado com IA"
      ]
    },
    {
      icon: Calculator,
      title: "Contabilidade",
      color: "text-orange-500",
      benefits: [
        "Atendimento automatizado para clientes",
        "Agendamento de consultorias tributárias",
        "Triagem de documentos e serviços"
      ]
    },
    {
      icon: Bed,
      title: "Pousadas",
      color: "text-teal-500",
      benefits: [
        "Check-in/check-out automatizado",
        "Gestão de reservas inteligente",
        "Suporte 24h para hóspedes"
      ]
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurantes",
      color: "text-amber-500",
      benefits: [
        "Pedidos automatizados via WhatsApp",
        "Cardápio digital interativo",
        "Gestão de entregas inteligente"
      ]
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      color: "text-pink-500",
      benefits: [
        "Atendimento pré-venda automatizado",
        "Recuperação de carrinho abandonado",
        "Suporte pós-venda 24/7"
      ]
    },
    {
      icon: Settings,
      title: "Automações Personalizadas",
      color: "text-indigo-500",
      benefits: [
        "Soluções sob medida para seu negócio",
        "Integração com sistemas existentes",
        "Automação de processos específicos"
      ]
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções para cada
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              tipo de negócio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa automação inteligente se adapta às necessidades específicas do seu setor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-light mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <sector.icon className={`w-8 h-8 ${sector.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {sector.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {sector.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de métricas */}
        <div className="mt-20 bg-gradient-light rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Economia de tempo</div>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">3x</div>
              <div className="text-sm text-muted-foreground">Mais conversões</div>
            </div>
            <div>
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte ativo</div>
            </div>
            <div>
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">15min</div>
              <div className="text-sm text-muted-foreground">Setup completo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorBenefits;