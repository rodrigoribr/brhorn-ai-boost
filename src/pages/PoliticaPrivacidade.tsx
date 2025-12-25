import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
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
            <h1 className="text-xl font-semibold">Política de Privacidade</h1>
          </div>


        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-foreground">Política de Privacidade</h1>

            <p className="text-muted-foreground mb-8 text-lg">
              A brhorn coleta dados estritamente necessários para autenticação e suporte.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Dados coletados</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Nome, e-mail, ID das contas conectadas (Facebook/Instagram), logs técnicos.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Uso</h2>
                <p className="text-muted-foreground">
                  Usamos os dados para login via Meta, atendimento e melhoria do serviço.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Compartilhamento</h2>
                <p className="text-muted-foreground">
                  Não vendemos dados. Fornecedores de infraestrutura podem processá-los sob contrato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Retenção</h2>
                <p className="text-muted-foreground">
                  Guardamos enquanto houver conta ativa ou obrigação legal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Seus direitos</h2>
                <p className="text-muted-foreground">
                  Você pode acessar, corrigir ou excluir dados. Contato: suporte@brhorn.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contato</h2>
                <p className="text-muted-foreground">
                  brhorn – suporte@brhorn.com
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  Última atualização: {import.meta.env.VITE_PRIVACY_POLICY_UPDATE || '2023-09-01'}
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;