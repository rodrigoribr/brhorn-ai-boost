// Classes compartilhadas da home (redesign hallmark). O botão primário mora em BotaoDiagnostico.

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";

/** Botão secundário: contorno em nanquim. */
export const CLASSE_BOTAO_SECUNDARIO = `inline-flex h-12 items-center justify-center rounded-[var(--radius-control)] border border-t-ink px-6 font-medium text-t-ink transition-colors duration-micro hover:bg-t-ink hover:text-t-paper active:translate-y-px disabled:opacity-60 ${FOCO}`;

/** O mesmo, sobre a faixa escura. */
export const CLASSE_BOTAO_SECUNDARIO_NOITE = `inline-flex h-12 items-center justify-center rounded-[var(--radius-control)] border border-t-nightink px-6 font-medium text-t-nightink transition-colors duration-micro hover:bg-t-nightink hover:text-t-night active:translate-y-px disabled:opacity-60 ${FOCO}`;

/** Link de texto sublinhado, em nanquim. */
export const CLASSE_LINK_TEXTO = `inline-flex items-center gap-2 rounded-[var(--radius-control)] font-medium text-t-ink underline underline-offset-4 transition-colors duration-micro hover:text-t-accent ${FOCO}`;
