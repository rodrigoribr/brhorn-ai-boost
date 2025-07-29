import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Souza",
      role: "Diretora da Clínica Vida",
      company: "São Paulo, SP",
      avatar: "AS",
      rating: 5,
      testimonial: "Reduzimos tarefas manuais pela metade e dobramos o agendamento online em 3 meses. O chatbot da BRHORN transformou nossa operação.",
      highlight: "Dobrou agendamentos"
    },
    {
      name: "Carlos Mendes",
      role: "Diretor Comercial",
      company: "Imobiliária Prime",
      avatar: "CM",
      rating: 5,
      testimonial: "Nossa qualificação de leads aumentou 250% e economizamos 15 horas semanais na triagem. ROI fantástico em apenas 2 meses.",
      highlight: "250% mais leads qualificados"
    },
    {
      name: "Marina Lima",
      role: "Consultora Jurídica",
      company: "Advocacia Especializada",
      avatar: "ML",
      rating: 5,
      testimonial: "Automatizei todo o processo de triagem de clientes. Agora foco apenas nos casos que realmente importam. Minha produtividade triplicou.",
      highlight: "Produtividade triplicada"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resultados que
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como nossos clientes transformaram seus negócios com automação inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md overflow-hidden"
            >
              <CardContent className="p-6 relative">
                {/* Badge de destaque */}
                <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.highlight}
                </div>

                {/* Avaliação com estrelas */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Depoimento */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Informações do cliente */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Elemento decorativo */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estatísticas de satisfação */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfação dos clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-muted-foreground">ROI médio em 6 meses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Tempo médio de implementação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;