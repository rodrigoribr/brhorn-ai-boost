import { Cabeca, Secao } from "@/components/home/Titulos";
import { PerguntasSection } from "@/components/home/PerguntasSection";

export const FasesSection = () => (
  <Secao id="como-funciona" tom="papel2" className="py-9 md:py-12">
    <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-x-[var(--gap-columns)]">
      <Cabeca
        id="como-funciona"
        titulo="Comece com uma rotina. Meça a diferença."
        texto="Você escolhe uma tarefa. A brhorn testa na sua operação e mede o ganho. Com o resultado em mãos, você decide se vale ampliar."
      />
      <PerguntasSection />
    </div>
  </Secao>
);
