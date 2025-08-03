import { useState } from "react";
import Hero from "@/components/Hero";
import SectorBenefits from "@/components/SectorBenefits";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Hero />
      <SectorBenefits />
      <Technology />
      <Testimonials />
      
      {/* Seção de Todos os Serviços */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Todos os nossos
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                serviços
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça todas as soluções de automação que oferecemos para diferentes setores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clínicas */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 font-bold">♥</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Clínicas</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Agendamento 24h com lembretes automáticos</li>
                <li>• Redução de faltas em até 30%</li>
                <li>• Gestão inteligente de horários</li>
              </ul>
            </div>

            {/* Imobiliárias */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Imobiliárias</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Qualificação automática de leads</li>
                <li>• Agendamento de visitas inteligente</li>
                <li>• Follow-up personalizado para clientes</li>
              </ul>
            </div>

            {/* Profissionais Liberais */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-500 font-bold">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Profissionais Liberais</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Triagem automática de clientes</li>
                <li>• Agendamento de consultorias</li>
                <li>• Suporte 24/7 para dúvidas frequentes</li>
              </ul>
            </div>

            {/* Marketing */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-500 font-bold">📢</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Marketing</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Campanhas automatizadas multicanal</li>
                <li>• Segmentação inteligente de leads</li>
                <li>• ROI otimizado com IA</li>
              </ul>
            </div>

            {/* Contabilidade */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 font-bold">🧮</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Contabilidade</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Atendimento automatizado para clientes</li>
                <li>• Agendamento de consultorias tributárias</li>
                <li>• Triagem de documentos e serviços</li>
              </ul>
            </div>

            {/* Pousadas */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-500 font-bold">🛏️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Pousadas</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Check-in/check-out automatizado</li>
                <li>• Gestão de reservas inteligente</li>
                <li>• Suporte 24h para hóspedes</li>
              </ul>
            </div>

            {/* Restaurantes */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-500 font-bold">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Restaurantes</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Pedidos automatizados via WhatsApp</li>
                <li>• Cardápio digital interativo</li>
                <li>• Gestão de entregas inteligente</li>
              </ul>
            </div>

            {/* E-commerce */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-500 font-bold">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">E-commerce</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Atendimento pré-venda automatizado</li>
                <li>• Recuperação de carrinho abandonado</li>
                <li>• Suporte pós-venda 24/7</li>
              </ul>
            </div>

            {/* Automações Personalizadas */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-500 font-bold">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Automações Personalizadas</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Soluções sob medida para seu negócio</li>
                <li>• Integração com sistemas existentes</li>
                <li>• Automação de processos específicos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenContact={() => setIsContactModalOpen(true)} />
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
