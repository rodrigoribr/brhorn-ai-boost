import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingBag, MessageSquare, ShoppingCart, HeadphonesIcon, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Ecommerce = () => {
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
                <ShoppingBag className="w-8 h-8 text-pink-500" />
                <h1 className="text-3xl font-bold text-foreground">Automação para E-commerce</h1>
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
            Venda mais online com
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              automação inteligente
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Atendimento pré-venda, recuperação de carrinho e suporte pós-venda automatizado
          </p>
          <Button size="lg" className="px-8">
            Começar agora
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <MessageSquare className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Atendimento Pré-venda</h3>
              <p className="text-muted-foreground">
                Responda dúvidas sobre produtos automaticamente e qualifique leads
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <ShoppingCart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Recuperação de Carrinho</h3>
              <p className="text-muted-foreground">
                Recupere vendas perdidas com mensagens personalizadas automáticas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <HeadphonesIcon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Suporte Pós-venda</h3>
              <p className="text-muted-foreground">
                Acompanhamento automático de pedidos e suporte 24/7
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
              "Atendimento pré-venda automatizado",
              "Recuperação de carrinho abandonado",
              "Suporte pós-venda 24/7",
              "Recomendações personalizadas",
              "Avaliações automatizadas",
              "Programa de fidelidade",
              "Cross-sell e upsell automático",
              "Relatórios de conversão"
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
            Pronto para vender mais online?
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

export default Ecommerce;