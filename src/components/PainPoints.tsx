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
        <section className="py-32 bg-background border-t border-white/5 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    {/* Header Area - Left Aligned */}
                    <div className="col-span-12 md:col-span-4 sticky top-10">
                        <div className="inline-block px-3 py-1 mb-6 border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-mono uppercase tracking-widest rounded-sm">
                            System Diagnostics
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-none tracking-tighter">
                            FALHA <br />CRÍTICA
                        </h2>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            Detectamos ineficiências operacionais severas no seu fluxo atual.
                        </p>
                    </div>

                    {/* Staggered List - Right Side */}
                    <div className="col-span-12 md:col-span-8 flex flex-col gap-0 border-l border-white/10 pl-8 md:pl-12">
                        {points.map((point, index) => (
                            <div
                                key={index}
                                className="group flex flex-col md:flex-row items-baseline gap-6 py-12 border-b border-white/5 hover:border-white/20 transition-colors"
                                style={{ paddingLeft: `${index * 40}px` }} // Staggered Effect
                            >
                                <div className="text-xl md:text-2xl font-mono text-zinc-600 group-hover:text-red-500 transition-colors">
                                    0{index + 1}
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                        {point.title}
                                    </h3>
                                    <p className="text-zinc-500 max-w-md">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-20">
                    <div className="col-span-12 md:col-span-8 md:col-start-5 pl-8 md:pl-12">
                        <Button
                            onClick={scrollToForm}
                            className="w-full md:w-auto bg-transparent border border-white/20 text-white hover:bg-white hover:text-black rounded-none px-12 py-8 text-lg font-bold uppercase tracking-widest transition-all"
                        >
                            Corrigir Falhas <ArrowRight className="ml-4 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
