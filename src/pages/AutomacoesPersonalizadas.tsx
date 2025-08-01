import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Cog, Zap, Puzzle, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AutomacoesPersonalizadas = () => {
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
              <Settings className="w-8 h-8 text-indigo-500" />
              <h1 className="text-3xl font-bold text-foreground">Automações Personalizadas</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções sob medida
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              para seu negócio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Desenvolvemos automações específicas para suas necessidades únicas de negócio
          </p>
          <Button size="lg" className="px-8">
            Começar agora
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <Cog className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sob Medida</h3>
              <p className="text-muted-foreground">
                Desenvolvemos soluções específicas para seu modelo de negócio
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Puzzle className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integração Total</h3>
              <p className="text-muted-foreground">
                Conectamos com seus sistemas existentes sem complicações
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Processos Específicos</h3>
              <p className="text-muted-foreground">
                Automatizamos qualquer processo repetitivo do seu negócio
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features List */}
        <div className="bg-gradient-light rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            O que podemos automatizar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Processos internos específicos",
              "Integração com sistemas legados",
              "Workflows personalizados",
              "Relatórios automatizados",
              "Aprovações e validações",
              "Notificações inteligentes",
              "Coleta e análise de dados",
              "Qualquer processo repetitivo"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Como funciona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Análise</h4>
              <p className="text-muted-foreground">
                Analisamos seus processos e identificamos oportunidades de automação
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Desenvolvimento</h4>
              <p className="text-muted-foreground">
                Criamos a solução personalizada para suas necessidades específicas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Implementação</h4>
              <p className="text-muted-foreground">
                Implementamos e treinamos sua equipe para usar a nova automação
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para automatizar seu negócio?
          </h3>
          <p className="text-muted-foreground mb-8">
            Vamos conversar sobre suas necessidades específicas
          </p>
          <Button size="lg" className="px-8">
            Agendar consultoria gratuita
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AutomacoesPersonalizadas;