import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
  Target,
  ArrowRight
} from "lucide-react";

const SectorBenefits = () => {
  const sectors = [
    {
      icon: Heart,
      title: "Clínicas",
      url: "/clinicas",
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
      url: "/imobiliarias",
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
      url: "/profissionais-liberais",
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
      url: "/marketing",
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
      url: "/contabilidade",
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
      url: "/pousadas",
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
      url: "/restaurantes",
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
      url: "/ecommerce",
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
      url: "/automacoes-personalizadas",
      color: "text-indigo-500",
      benefits: [
        "Soluções sob medida para seu negócio",
        "Integração com sistemas existentes",
        "Automação de processos específicos"
      ]
    }
  ];

  return (
    <section id="beneficios" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="inline-block px-3 py-1 mb-6 border border-white/20 bg-white/5 text-white text-xs font-mono uppercase tracking-widest rounded-sm">
              Setores Compatíveis
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              SOLUÇÕES <br />
              <span className="text-zinc-600">MODULARES</span>
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-md text-right hidden md:block">
            Arquitetura adaptável para escalar qualquer operação.
          </p>
        </div>

        {/* Interactive List Layout */}
        <div className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
          {sectors.map((sector, index) => (
            <Link key={index} to={sector.url} className="group relative py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between transition-all hover:bg-white/5 px-4 cursor-pointer">
              <div className="flex items-center gap-6 md:gap-10">
                <span className="text-lg font-mono text-zinc-600 group-hover:text-white transition-colors">0{index + 1}</span>
                <div className="flex items-center gap-4">
                  {/* Icon hidden by default, reveal on hover could be cool, but keeping it simple/brutalist */}
                  <sector.icon className={`w-8 h-8 ${sector.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <h3 className="text-3xl md:text-5xl font-bold text-zinc-300 group-hover:text-white transition-colors tracking-tight">
                    {sector.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex items-center md:opacity-0 md:group-hover:opacity-100 md:translate-x-10 md:group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm uppercase tracking-widest text-white font-semibold mr-4">Explorar Módulo</span>
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </Link>
          ))}
        </div>

        {/* Metric Bar - Brutalist */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-20 border border-white/10 divide-x divide-white/10 bg-white/5">
          <div className="p-8 text-center">
            <div className="text-4xl font-mono font-bold text-white mb-2">80%</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Tempo Salvo</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl font-mono font-bold text-white mb-2">3x</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Conversão</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl font-mono font-bold text-white mb-2">24/7</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Atividade</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl font-mono font-bold text-white mb-2">FAST</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorBenefits;