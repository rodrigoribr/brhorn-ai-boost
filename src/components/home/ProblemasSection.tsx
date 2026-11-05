import { Cabeca, Secao } from "@/components/home/Titulos";
import { PROBLEMAS } from "@/content/consultoriaAgentes";

// Seção quieta: três situações lado a lado, cada uma sob uma régua.
export const ProblemasSection = () => (
  <Secao id="problemas" tom="papel2">
    <Cabeca id="problemas" titulo="A IA já chegou na empresa. O resultado, quase nunca." />

    <ul className="mt-[var(--space-2xl)] grid gap-[var(--gap-columns)] md:grid-cols-3">
      {PROBLEMAS.map((p) => (
        <li key={p.titulo} className="border-t border-t-rulestrong pt-[var(--space-lg)]">
          <h3 className="font-display text-[length:var(--text-title)] font-normal leading-[1.2] text-t-ink">{p.titulo}</h3>
          <p className="mt-[var(--space-sm)] text-t-muted">{p.texto}</p>
        </li>
      ))}
    </ul>
  </Secao>
);
