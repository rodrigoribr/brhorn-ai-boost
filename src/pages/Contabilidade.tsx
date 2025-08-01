import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, Clock, Users, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contabilidade = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Calculator className="w-8 h-8 text-orange-500" />
              <h1 className="text-3xl font-bold text-foreground">Automação para Contabilidade</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simplifique sua
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              contabilidade
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Atendimento automatizado, agendamento de consultorias e triagem inteligente de documentos
          </p>
          <Button size="lg" className="px-8">
            Começar agora
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Atendimento Automatizado</h3>
              <p className="text-muted-foreground">
                Responda clientes automaticamente sobre serviços e prazos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Consultorias Tributárias</h3>
              <p className="text-muted-foreground">
                Agendamento automático de consultorias especializadas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Triagem de Documentos</h3>
              <p className="text-muted-foreground">
                Classificação automática de documentos e serviços necessários
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features List */}
        <div className="bg-gradient-light rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Funcionalidades incluídas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Atendimento automatizado para clientes",
              "Agendamento de consultorias tributárias",
              "Triagem de documentos e serviços",
              "Lembretes de prazos fiscais",
              "Envio automático de guias",
              "Coleta de documentos automatizada",
              "Relatórios personalizados",
              "Suporte 24/7 para dúvidas"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para automatizar sua contabilidade?
          </h3>
          <p className="text-muted-foreground mb-8">
            Configure tudo em menos de 15 minutos
          </p>
          <Button size="lg" className="px-8">
            Começar automação gratuita
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Contabilidade;