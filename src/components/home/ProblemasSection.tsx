import { CreditCard, FlaskConical, ShieldAlert, type LucideIcon } from "lucide-react";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { useNaTela } from "@/components/home/useNaTela";
import { PROBLEMAS } from "@/content/consultoriaAgentes";

// Três situações lado a lado (2026-11-08: ganharam ícone e entrada em sequência; a régua se desenha ao aparecer).
const ICONES: LucideIcon[] = [CreditCard, FlaskConical, ShieldAlert];

const Problema = ({ titulo, texto, indice }: { titulo: string; texto: string; indice: number }) => {
  const [ref, visto] = useNaTela<HTMLLIElement>("0px 0px -15% 0px");
  const Icone = ICONES[indice] ?? ShieldAlert;
  return (
    <li
      ref={ref}
      style={{ "--atraso": `${indice * 140}ms` } as React.CSSProperties}
      data-visto={visto || undefined}
      className="entra relative pt-[var(--space-lg)]"
    >
      <span aria-hidden="true" className="regua-desenha absolute inset-x-0 top-0 h-px bg-t-rulestrong" />
      <span
        aria-hidden="true"
        className="icone-pula mb-[var(--space-md)] inline-flex h-11 w-11 items-center justify-center rounded-full bg-t-paper text-t-accent"
      >
        <Icone className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">{titulo}</h3>
      <p className="mt-[var(--space-sm)] text-t-muted">{texto}</p>
    </li>
  );
};

export const ProblemasSection = () => (
  <Secao id="problemas" tom="papel2">
    <Cabeca id="problemas" titulo="A IA já chegou na empresa. O resultado, quase nunca." />

    <ul className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)] md:grid-cols-3 md:gap-[var(--gap-columns)]">
      {PROBLEMAS.map((p, i) => (
        <Problema key={p.titulo} titulo={p.titulo} texto={p.texto} indice={i} />
      ))}
    </ul>
  </Secao>
);
