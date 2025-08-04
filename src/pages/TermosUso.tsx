import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Header com login */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <h1 className="text-xl font-semibold">Termos de Uso</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Input
              type="email"
              placeholder="E-mail"
              className="w-40 h-9"
            />
            <Input
              type="password"
              placeholder="Senha"
              className="w-32 h-9"
            />
            <Button size="sm" className="h-9">
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-foreground">Termos de Uso</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Serviço fornecido "como está". Você deve ter autorização para conectar contas Meta.
              </p>
              
              <p className="text-lg">
                Proibido uso abusivo ou ilegal. Podemos suspender contas que violem estes termos.
              </p>
              
              <p className="text-lg">
                Contato: suporte@brhorn.com
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default TermosUso;