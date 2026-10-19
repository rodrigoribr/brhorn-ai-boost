import { Link, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/home/SiteHeader";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

const NotFound = () => {
  const { pathname } = useLocation();
  usePageTitle("Página não encontrada · brhorn");

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="flex-1 border-b border-linha bg-papel bg-[linear-gradient(#ebe8df_1px,transparent_1px),linear-gradient(90deg,#ebe8df_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <h1 className="font-display text-[2.4rem] font-normal leading-[1.1] text-nanquim sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            O endereço <span className="font-mono text-base text-nanquim">{pathname}</span> não existe ou mudou de
            lugar.
          </p>
          <Link
            to="/"
            className="mt-9 inline-flex h-12 items-center justify-center rounded bg-projeto px-6 font-medium text-papel transition-colors hover:bg-[#1a5fcc]"
          >
            Ir para a página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
