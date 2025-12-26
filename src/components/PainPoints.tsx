
import { Clock, MessageSquareX, FileX } from "lucide-react";

export const PainPoints = () => {
    const points = [
        {
            icon: <Clock className="w-6 h-6 text-red-500" />,
            title: "Atendimento manual",
            description: "Tarefas repetitivas que consomem horas."
        },
        {
            icon: <MessageSquareX className="w-6 h-6 text-red-500" />,
            title: "Leads sem resposta",
            description: "Oportunidades perdidas por demora."
        },
        {
            icon: <FileX className="w-6 h-6 text-red-500" />,
            title: "Processos desorganizados",
            description: "Falta de controle e padronização."
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-10 text-center">Sua empresa ainda perde tempo com:</h2>
                <div className="space-y-4">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-red-50 rounded-xl">
                                {point.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground">{point.title}</h3>
                                <p className="text-muted-foreground text-sm">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
