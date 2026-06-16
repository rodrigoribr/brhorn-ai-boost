import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LeadFormSectionProps {
  onContactClick: () => void;
}

export const LeadFormSection = ({ onContactClick }: LeadFormSectionProps) => {
  return (
    <section id="contact-form" className="relative overflow-hidden border-t border-white/10 bg-background py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-8 inline-block border-l-4 border-l-accent bg-white/[0.04] px-4 py-3">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-300">
            Próximo passo
          </span>
        </div>

        <h2 className="font-brand text-5xl leading-none text-white md:text-7xl">
          Vamos olhar para a sua operação?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
          Conte onde o trabalho manual trava hoje. A brhorn ajuda a escolher entre produto pronto, adaptação ou
          automação sob medida.
        </p>

        <Button
          onClick={onContactClick}
          className="mt-12 h-16 rounded-sm bg-accent px-12 text-lg font-bold text-black shadow-[0_0_40px_rgba(245,158,11,0.16)] transition-all hover:bg-amber-400"
        >
          Falar com a brhorn <ArrowRight className="ml-4 h-6 w-6" />
        </Button>

        <p className="mt-8 text-sm text-zinc-600">
          Resposta em até 24 horas úteis pelo melhor canal informado.
        </p>
      </div>
    </section>
  );
};
