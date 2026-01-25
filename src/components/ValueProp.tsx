
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
        <section className="py-24 bg-background border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white block w-full text-center md:text-left tracking-tight">O que a brhorn faz</h2>
                </div>

                <div className="space-y-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-6 group">
                            <div className="mt-1 bg-white/10 rounded-full p-2 flex-shrink-0 border border-white/20 group-hover:border-white/50 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform">{benefit.title}</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
