
import { CheckCircle2, ArrowRight, BrainCircuit, Target, ShoppingBag, Truck, Zap, Settings, TrendingUp, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const AxionSection = () => {
    const pillars = [
        {
            title: "Automação Cognitiva",
            subtitle: "Inteligência que entende, não apenas responde.",
            icon: BrainCircuit,
            details: [
                "Interpretação de linguagem natural e intenção",
                "Negociação autônoma via WhatsApp",
                "Tomada de decisão baseada em contexto"
            ]
        },
        {
            title: "Engenharia de Vendas",
            subtitle: "Sua política comercial, aplicada com precisão.",
            icon: Settings,
            details: [
                "Aplicação estrita de regras de negócio",
                "Cálculo de fretes, impostos e descontos",
                "Validação de estoque em tempo real"
            ]
        },
        {
            title: "Escala Industrial",
            subtitle: "Atenda 10 ou 10.000 revendedores simultaneamente.",
            icon: TrendingUp,
            details: [
                "Disponibilidade 24/7 sem filas",
                "Zero erro humano na digitação de pedidos",
                "Auditoria completa de cada interação"
            ]
        }
    ];

    return (
        <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
            {/* Background Texture & Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Compacto */}
                <div className="text-center mb-20 animate-fade-up">
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 tracking-tighter mb-4 opacity-100 leading-[0.8]">
                        AXIØN
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 font-mono uppercase tracking-widest mt-8 px-4">
                        O piloto automático para vendas B2B
                    </p>
                </div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="group relative bg-white/5 border border-white/10 p-8 min-h-[350px] md:h-[400px] flex flex-col justify-between transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] overflow-hidden rounded-sm">

                            {/* Static Content - Mobile: Top / Desktop: Center then moves up */}
                            <div className="relative z-10 transition-all duration-500 md:group-hover:-translate-y-2">
                                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl text-white font-bold mb-3">{pillar.title}</h3>
                                <p className="text-zinc-400 font-light text-lg leading-snug md:group-hover:text-white transition-colors">
                                    {pillar.subtitle}
                                </p>
                            </div>

                            {/* Details - Mobile: Always Visible / Desktop: Reveal on Hover */}
                            <div className="relative md:absolute inset-0 md:bg-black/90 md:backdrop-blur-md flex flex-col justify-end p-0 md:p-8 mt-6 md:mt-0 
                                            opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-20 
                                            translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                                <ul className="space-y-4">
                                    {pillar.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                            <div className="mt-1.5 w-1 h-1 rounded-full bg-white flex-shrink-0"></div>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <div className="hidden md:block w-full h-1 bg-white/20 mt-6 overflow-hidden">
                                    <div className="w-full h-full bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Statement - Simplified */}
                <div className="flex justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
                    <Link to="/axion">
                        <Button className="bg-white text-black hover:bg-zinc-200 px-10 py-7 text-lg font-bold uppercase tracking-widest rounded-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all">
                            Conhecer o Axion <ArrowRight className="ml-3 w-5 h-5" />
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
