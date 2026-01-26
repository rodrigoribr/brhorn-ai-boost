import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    LayoutDashboard,
    Users,
    Package,
    ShoppingCart,
    Truck,
    Bot,
    MessageSquare,
    History,
    AlertCircle,
    BrainCircuit,
    Zap,
    ShieldCheck,
    BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import logo from "@/assets/logo-original.png";

const AxionPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const problems = [
        "Contato manual com dezenas de revendedores",
        "Dependência de mensagens informais (WhatsApp)",
        "Janelas de corte e prazos ignorados",
        "Dúvidas repetitivas sobre preços e estoque",
        "Pedidos perdidos por esquecimento",
        "Falta de padronização e histórico"
    ];

    const features = [
        {
            icon: LayoutDashboard,
            title: "Dashboard Gerencial",
            desc: "Visão clara de clientes ativos, pedidos no ciclo, atividades recentes e limites de uso."
        },
        {
            icon: Users,
            title: "Gestão de Clientes (CRM)",
            desc: "Cadastro completo, classificação VIP/Padrão e ativação individual de agentes."
        },
        {
            icon: Package,
            title: "Catálogo Inteligente",
            desc: "SKUs, preços, conversão de unidades (cx → un) e sinônimos para IA entender."
        },
        {
            icon: ShoppingCart,
            title: "Gestão de Pedidos",
            desc: "Status em tempo real, edição, validação e integração com ERP."
        },
        {
            icon: Truck,
            title: "Logística e Ciclos",
            desc: "Rotas por região, frequência de entrega e janelas de corte (horário limite)."
        },
        {
            icon: Bot,
            title: "Prompt Studio",
            desc: "Controle total da IA: Persona, tom de voz, regras de negócio e mapeamento de intenções."
        },
        {
            icon: MessageSquare,
            title: "Regras de Comunicação",
            desc: "Campanhas automáticas, envio de listas e lembretes de fechamento."
        },
        {
            icon: History,
            title: "Histórico Human-in-the-loop",
            desc: "Auditoria de conversas e possibilidade de assumir o atendimento manualmente."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-poppins text-white selection:bg-white selection:text-black">

            {/* Scroll Progress Bar could go here */}

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center px-6">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                    <Link to="/" className="text-sm font-mono text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> VOLTAR
                    </Link>

                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Brhorn" className="h-6 w-auto" />
                        <span className="text-zinc-600 font-light text-xl">|</span>
                        <span className="font-bold tracking-tighter text-lg">AXIØN</span>
                    </div>

                    <Button
                        onClick={() => setIsModalOpen(true)}
                        size="sm"
                        className="bg-white text-black hover:bg-zinc-200 text-xs uppercase font-bold tracking-wider"
                    >
                        Falar com Especialista
                    </Button>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2"></div>

                <div className="max-w-5xl mx-auto">
                    <div className="inline-block mb-6 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                            Brhorn AI Platform
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        AXIØN
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-zinc-400 font-light mb-12 max-w-3xl leading-tight">
                        O piloto automático para <span className="text-white font-medium">vendas B2B</span>.
                    </h2>

                    <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed mb-12 border-l-2 border-white/10 pl-6">
                        O Axion é a plataforma que automatiza o processo de pedidos entre distribuidores e revendedores, utilizando agentes de IA para interpretar, decidir e executar.
                    </p>

                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="h-14 px-10 bg-white text-black hover:bg-zinc-200 text-lg font-bold rounded-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all"
                    >
                        Solicitar Demonstração
                    </Button>
                </div>
            </section>

            {/* PROBLEM SECTION - "Disorder" */}
            <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6 text-red-400">
                            <AlertCircle className="w-6 h-6" />
                            <span className="font-mono uppercase tracking-widest text-sm">O Problema</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Sem escala,<br />sem controle.
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Distribuidores e atacadistas enfrentam um caos operacional diário. O contato manual e a dependência de mensagens informais geram gargalos que impedem o crescimento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {problems.map((prob, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/10 rounded-sm">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-zinc-300">{prob}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION SECTION - "Order" */}
            <section className="py-24 bg-background relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6 text-emerald-400">
                            <Zap className="w-6 h-6" />
                            <span className="font-mono uppercase tracking-widest text-sm">A Solução</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Autopiloto de Vendas</h3>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            O Axion assume a fricção operacional. O time humano foca apenas na estratégia e nas exceções.
                        </p>
                    </div>

                    {/* Funil Visual */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                        {[
                            { step: "1. Contato", desc: "Cliente chama no WhatsApp", icon: MessageSquare },
                            { step: "2. Interpretação", desc: "IA entende a intenção", icon: BrainCircuit },
                            { step: "3. Validação", desc: "Regras e Estoque aplicados", icon: ShieldCheck },
                            { step: "4. Execução", desc: "Pedido registrado no ERP", icon: CheckCircle2 }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-sm relative group hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 mx-auto bg-black border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:border-white transition-colors">
                                    <item.icon className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{item.step}</h4>
                                <p className="text-sm text-zinc-500">{item.desc}</p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-white/20 -translate-y-1/2 z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="py-24 bg-zinc-950/50 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-bold mb-12 border-l-4 border-white pl-6">
                        Painel de Controle
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feat, i) => (
                            <div key={i} className="p-6 bg-background border border-white/10 hover:border-white/30 transition-all group">
                                <feat.icon className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-white transition-colors" />
                                <h4 className="text-lg font-bold mb-3">{feat.title}</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATORS & CTA */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-12">Por que o Axion é diferente?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
                        <div className="p-6 border-l border-white/20">
                            <h4 className="font-bold text-xl mb-2">Produto Brhorn</h4>
                            <p className="text-zinc-500 text-sm">Não somos revendedores de tecnologia. Somos os criadores da plataforma.</p>
                        </div>
                        <div className="p-6 border-l border-white/20">
                            <h4 className="font-bold text-xl mb-2">Execução real</h4>
                            <p className="text-zinc-500 text-sm">Vai além do chat. O Axion opera sistemas e processa regras complexas.</p>
                        </div>
                        <div className="p-6 border-l border-white/20">
                            <h4 className="font-bold text-xl mb-2">Auditoria Total</h4>
                            <p className="text-zinc-500 text-sm">Cada decisão da IA é registrada e pode ser supervisionada.</p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-md">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para escalar?</h2>
                        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Transforme sua operação de vendas B2B hoje mesmo.
                        </p>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="h-16 px-12 bg-white text-black hover:bg-zinc-200 text-xl font-bold rounded-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all"
                        >
                            Agendar Apresentação
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default AxionPage;
