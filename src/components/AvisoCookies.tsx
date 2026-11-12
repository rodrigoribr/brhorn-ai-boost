import { useEffect, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { escolhaAtual, gravarEscolha, ouvirEscolha } from "@/lib/consentimento";

const FOCO =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]";
// Aceitar e Recusar com o mesmo peso visual (a ANPD pede que recusar seja tão fácil quanto aceitar).
const BOTAO = `inline-flex h-10 flex-1 items-center justify-center rounded-[var(--radius-control)] border border-t-ink px-4 text-sm font-medium text-t-ink transition-colors duration-micro hover:bg-t-ink hover:text-t-paper active:translate-y-px ${FOCO}`;

/** Ainda não escolheu? Usado também para esconder o botão fixo de diagnóstico enquanto o aviso está aberto. */
export function useAvisoAberto() {
  const escolha = useSyncExternalStore(ouvirEscolha, escolhaAtual, () => null);
  // Só depois de montar: o prerender (puppeteer) não pode gravar o aviso no index.html.
  const [montado, setMontado] = useState(false);
  useEffect(() => {
    if (!navigator.webdriver) setMontado(true);
  }, []);
  return montado && escolha === null;
}

const AvisoCookies = () => {
  const aberto = useAvisoAberto();
  if (!aberto) return null;

  return (
    <section
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:left-6 sm:max-w-md sm:px-0 sm:pb-6"
    >
      <div className="rounded-[var(--radius-control)] border border-t-rule bg-t-paper p-5 text-sm text-t-ink shadow-[var(--shadow-float)]">
        <p>
          Este site usa cookies do Meta Pixel para medir o resultado de anúncios. Eles só são ativados se você aceitar.
          Sem eles, o site funciona igual.{" "}
          <Link to="/politica-privacidade" className={`underline underline-offset-4 hover:text-t-accent ${FOCO}`}>
            Saiba mais
          </Link>
        </p>
        <div className="mt-4 flex gap-3">
          <button type="button" className={BOTAO} onClick={() => gravarEscolha("recusado")}>
            Recusar
          </button>
          <button type="button" className={BOTAO} onClick={() => gravarEscolha("aceito")}>
            Aceitar
          </button>
        </div>
      </div>
    </section>
  );
};

export default AvisoCookies;
