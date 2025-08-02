import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Megaphone, Target, TrendingUp, Zap, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <Megaphone className="w-8 h-8 text-purple-500" />
                <h1 className="text-3xl font-bold text-foreground">Automação para Marketing</h1>
              </div>
            </div>
            {/* Login Form */}
            <div className="flex items-center gap-3">
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-40"
              />
              <Input 
                type="password" 
                placeholder="Senha" 
                className="w-40"
              />
              <Button size="sm">
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Maximize seu ROI com
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              marketing automatizado
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Campanhas multicanal, segmentação inteligente e otimização automática com IA
          </p>
          <Button size="lg" className="px-8">
            Começar agora
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Campanhas Automatizadas</h3>
              <p className="text-muted-foreground">
                Campanhas multicanal que se executam automaticamente
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Segmentação Inteligente</h3>
              <p className="text-muted-foreground">
                IA segmenta leads automaticamente para máxima conversão
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">ROI Otimizado</h3>
              <p className="text-muted-foreground">
                Otimização automática baseada em performance em tempo real
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
              "Campanhas automatizadas multicanal",
              "Segmentação inteligente com IA",
              "A/B testing automático",
              "Lead scoring automatizado",
              "Nurturing personalizado",
              "Remarketing inteligente",
              "Analytics avançado",
              "ROI tracking em tempo real"
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
            Pronto para multiplicar seus resultados?
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

export default Marketing;