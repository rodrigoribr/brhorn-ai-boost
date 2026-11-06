import { Link, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/home/SiteHeader";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";

const NotFound = () => {
  const { pathname } = useLocation();
  usePageTitle("Página não encontrada · brhorn");

  return (
    <div className="flex min-h-screen flex-col bg-t-paper text-t-ink">
      <SiteHeader />
      <main className="flex-1">
        <section aria-labelledby="nao-encontrada-titulo" className="bg-t-paper">
          <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] py-[var(--section-gap-s)]">
            <h1
              id="nao-encontrada-titulo"
              className="max-w-[18ch] font-display text-[length:var(--text-display-s)] font-normal leading-[1.06] tracking-[var(--tracking-display)] text-t-ink"
            >
              Página não encontrada
            </h1>
            <p className="lead mt-[var(--space-lg)] text-t-muted">
              O endereço <code className="break-all font-[family-name:var(--font-outlier)] text-[0.9em] text-t-ink">{pathname}</code>{" "}
              não existe ou mudou de lugar.
            </p>
            <Link to="/" className={`mt-[var(--space-xl)] ${CLASSE_BOTAO_PRIMARIO}`}>
              Ir para a página inicial
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
