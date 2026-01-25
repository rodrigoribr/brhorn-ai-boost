import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

export const LeadFormSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact-form" className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="inline-block mb-8">
                    <span className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest text-white bg-white/5">
                        Start Now
                    </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter leading-none">
                    PRONTO PARA <br />
                    <span className="text-zinc-600">ESCALAR?</span>
                </h2>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Não deixe sua operação manual limitar seu crescimento. Transforme seu atendimento hoje.
                </p>

                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white hover:bg-zinc-200 text-black px-12 py-8 text-xl font-bold rounded-sm uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all hover:scale-105"
                >
                    Falar com Especialista <ArrowRight className="ml-4 w-6 h-6" />
                </Button>

                <p className="mt-8 text-zinc-600 text-sm font-mono">
                    Resposta em até 24 horas úteis.
                </p>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};
