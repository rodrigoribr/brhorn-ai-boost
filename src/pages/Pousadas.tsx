import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bed, MapPin, Calendar, HeadphonesIcon, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Pousadas = () => {
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
              <Bed className="w-8 h-8 text-teal-500" />
              <h1 className="text-3xl font-bold text-foreground">Automação para Pousadas</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforme a experiência
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              dos seus hóspedes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Check-in automatizado, gestão inteligente de reservas e suporte 24h para seus hóspedes
          </p>
          <Button size="lg" className="px-8">
            Começar agora
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <MapPin className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Check-in/Check-out</h3>
              <p className="text-muted-foreground">
                Processo automatizado sem filas, direto pelo WhatsApp
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Calendar className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Gestão de Reservas</h3>
              <p className="text-muted-foreground">
                Sistema inteligente que otimiza ocupação e receita
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <HeadphonesIcon className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Suporte 24h</h3>
              <p className="text-muted-foreground">
                Atendimento automático para dúvidas e solicitações
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
              "Check-in/Check-out automatizado",
              "Gestão de reservas inteligente",
              "Suporte 24h para hóspedes",
              "Informações locais automáticas",
              "Solicitações de serviços",
              "Avaliações automatizadas",
              "Controle de acesso digital",
              "Relatórios de ocupação"
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

export default Pousadas;