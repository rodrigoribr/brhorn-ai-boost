
import { CheckCircle2, Sparkles } from "lucide-react";

export const ValueProp = () => {
    const benefits = [
        "Agentes de IA 100% personalizados",
        "Automação completa de atendimento",
        "Integração nativa com WhatsApp, e-mail e CRM",
        "Processos automáticos, auditáveis e controlados",
        "Soluções sob medida para o seu negócio"
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-8">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold">O que a brhorn faz</h2>
                </div>

                <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-foreground font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
