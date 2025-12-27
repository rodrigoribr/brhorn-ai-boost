
import { CheckCircle2, Sparkles } from "lucide-react";

export const ValueProp = () => {
    const benefits = [
        {
            title: "Agentes de IA 100% personalizados",
            description: "Entendemos profundamente seu processo atual."
        },
        {
            title: "Automação completa de atendimento",
            description: "Desenvolvemos o agente de IA ideal."
        },
        {
            title: "Integração nativa com WhatsApp, e-mail e CRM",
            description: "Conectamos com todos os seus sistemas."
        },
        {
            title: "Processos automáticos, auditáveis e controlados",
            description: "Sua automação em plena operação imediata."
        },
        {
            title: "Soluções sob medida para o seu negócio",
            description: "Nossas soluções se adaptam às suas necessidades específicas."
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-8">
                    {/* Header kept simple as per design it's just text usually */}
                    <h2 className="text-4xl font-bold text-blue-600 block w-full text-center md:text-left">O que a brhorn faz</h2>
                </div>

                <div className="space-y-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="mt-1 bg-blue-600 rounded-full p-1 flex-shrink-0">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
