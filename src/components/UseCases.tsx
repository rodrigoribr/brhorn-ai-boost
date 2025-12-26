
import { Home, Lightbulb, Calendar, FileText } from "lucide-react";

export const UseCases = () => {
    const cases = [
        {
            icon: <Home className="w-6 h-6 text-blue-500" />,
            title: "Atendimento Automático"
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
            title: "Qualificação de Leads"
        },
        {
            icon: <Calendar className="w-6 h-6 text-blue-500" />,
            title: "Agendamentos"
        },
        {
            icon: <FileText className="w-6 h-6 text-blue-500" />,
            title: "Gestão de Pedidos"
        },
        {
            icon: <span className="text-xl">👉</span>, // Or any other icon
            title: "Follow-ups Automáticos"
        }
    ];

    return (
        <section className="py-20 bg-blue-50/50 rounded-t-[3rem]">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-10 text-center">Onde aplica</h2>

                <div className="grid grid-cols-2 gap-4">
                    {cases.slice(0, 4).map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-3">
                            <div className="p-3 bg-blue-50 rounded-full">
                                {item.icon}
                            </div>
                            <span className="font-medium text-sm text-foreground">{item.title}</span>
                        </div>
                    ))}
                </div>
                {/* Full width item for the last one if needed, or just append */}
                <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-center gap-3 mt-4">
                    <div className="p-2 bg-blue-50 rounded-full">
                        <span className="text-blue-500 text-lg">↻</span>
                    </div>
                    <span className="font-medium text-sm text-foreground">Follow-ups Automáticos</span>
                </div>
            </div>
        </section>
    );
};
