import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Users, MessageSquare, Star, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Imobiliarias = () => {
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
              <Home className="w-8 h-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-foreground">Automação para Imobiliárias</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Venda mais imóveis com
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              automação inteligente
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Qualifique leads automaticamente, agende visitas e acompanhe clientes 24/7
          </p>
          <Button size="lg" className="px-8">
            Começar agora
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Qualificação de Leads</h3>
              <p className="text-muted-foreground">
                IA qualifica automaticamente leads e direciona para o corretor certo
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Agendamento de Visitas</h3>
              <p className="text-muted-foreground">
                Sistema inteligente agenda visitas baseado na disponibilidade
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Follow-up Personalizado</h3>
              <p className="text-muted-foreground">
                Acompanhamento automático personalizado para cada cliente
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
              "Qualificação automática de leads",
              "Agendamento inteligente de visitas",
              "Follow-up personalizado",
              "Catálogo digital de imóveis",
              "Comparativo automático de preços",
              "Alertas de novos imóveis",
              "Documentação automatizada",
              "Relatórios de performance"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Login Section */}
        <div className="max-w-md mx-auto mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Faça login para começar
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="mt-1"
              />
            </div>
            <Button className="w-full" size="lg">
              Entrar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Imobiliarias;