import { Clock, MessageSquareX, FileX, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface PainPointsProps {
    onContactClick: () => void;
}

export const PainPoints = ({ onContactClick }: PainPointsProps) => {
    const points = [
        {
            icon: <Clock className="w-6 h-6 text-white" />,
            title: "Atendimento manual",
            description: "Tarefas repetitivas que consomem horas."
        },
        {
            icon: <MessageSquareX className="w-6 h-6 text-white" />,
            title: "Leads sem resposta",
            description: "Oportunidades perdidas por demora."
        },
        {
            icon: <FileX className="w-6 h-6 text-white" />,
            title: "Processos desorganizados",
            description: "Falta de controle e padronização."
        }
    ];

    const scrollToForm = () => {
        onContactClick();
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-10 text-center">Sua empresa ainda perde tempo com:</h2>
                <div className="space-y-4 mb-10">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="p-3 bg-blue-500 rounded-full flex-shrink-0">
                                {point.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-blue-900 mb-1">{point.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button
                        onClick={scrollToForm}
                        className="bg-[#0091FF] hover:bg-[#007acc] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                    >
                        Ver automação funcionando <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
