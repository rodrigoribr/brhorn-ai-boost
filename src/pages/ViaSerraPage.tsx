import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ViaSerraDemo } from "@/components/produto/ViaSerraDemo";
import Footer, { FechoCarta } from "@/components/Footer";
import { useAvisoAberto } from "@/components/AvisoCookies";
import { CLASSE_LINK_TEXTO } from "@/components/home/classes";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { VIASERRA_CONDICOES, VIASERRA_NOTA_CTA, VIASERRA_PLANOS, VIASERRA_TESTE_DIAS } from "@/content/viaserraPreco";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";
import { type BotaoTeste, linkTesteViaSerra, origemDaChegada } from "@/lib/viaserraTeste";
import "./viaserra.css";

const MSG_WHATSAPP = "Olá! Vi o ViaSerra no site da brhorn e quero conversar sobre a gestão da minha pousada.";

/** Links do teste por botão, com a origem da chegada. No prerender (sem window) saem com a origem padrão. */
function useLinksTeste() {
  const { search } = useLocation();
  const [chegada, setChegada] = useState<Record<string, string>>({});
  useEffect(() => setChegada(origemDaChegada(search)), [search]);
  return (botao: BotaoTeste) => linkTesteViaSerra(botao, chegada);
}

/** DEV-0066: barra "Testar grátis" no celular, entre o botão do topo e o fecho. */
function BarraTeste({ href, onClick, alvos }: { href: string; onClick: () => void; alvos: React.RefObject<HTMLElement>[] }) {
  const avisoAberto = useAvisoAberto();
  const [visiveis, setVisiveis] = useState<Record<number, boolean>>({ 0: true });

  useEffect(() => {
    const obs = alvos.map((alvo, i) => {
      if (!alvo.current) return null;
      const o = new IntersectionObserver(([e]) => setVisiveis((v) => ({ ...v, [i]: e.isIntersecting })));
      o.observe(alvo.current);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, [alvos]);

  // Some com o aviso de cookies aberto (fica no mesmo lugar) e com o botão do topo ou o fecho na tela.
  const mostrar = !avisoAberto && !Object.values(visiveis).some(Boolean);
  return (
    <div className="viaserra-barra" data-visivel={mostrar} aria-hidden={!mostrar}>
      <span>{VIASERRA_TESTE_DIAS} dias grátis, sem cartão</span>
      <a href={href} onClick={onClick} tabIndex={mostrar ? 0 : -1} className={CLASSE_BOTAO_PRIMARIO}>
        Testar grátis
      </a>
    </div>
  );
}

const ViaSerraPage = () => {
  const { trackWhatsapp, trackTesteViaSerra } = useContactIntent();
  const linkTeste = useLinksTeste();
  const ctaTopo = useRef<HTMLDivElement>(null);
  const fecho = useRef<HTMLDivElement>(null);
  const [alvosBarra] = useState(() => [ctaTopo, fecho]);
  usePageTitle("ViaSerra · reservas e gestão de pousadas · brhorn");

  return (
    <div className="viaserra-page min-h-screen bg-t-paper font-sans text-t-ink">
      <a
        href="#conteudo-viaserra"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-t-paper focus:px-4 focus:py-3 focus:text-t-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-viaserra" tabIndex={-1}>
        <section className="viaserra-hero" aria-labelledby="viaserra-title">
          <div className="viaserra-wrap viaserra-hero-grid">
            <div className="viaserra-hero-copy">
              <p className="viaserra-wordmark">ViaSerra</p>
              <h1 id="viaserra-title">As reservas da pousada <span>em um calendário.</span></h1>
              <p>Controle quartos, hóspedes e chegadas pelo computador da recepção ou pelo celular.</p>
            </div>
            <figure className="viaserra-hero-image">
              <img
                src="/projetos/viaserra/chaveiro-da-recepcao.webp"
                srcSet="/projetos/viaserra/chaveiro-da-recepcao-640.webp 640w, /projetos/viaserra/chaveiro-da-recepcao.webp 1200w"
                sizes="(min-width: 1400px) 720px, (min-width: 960px) 54vw, 100vw"
                width={1200}
                height={800}
                alt="Chaves de quartos com plaquinhas numeradas penduradas num chaveiro de madeira na recepção."
                fetchPriority="high"
              />
            </figure>
            <div className="viaserra-hero-actions" ref={ctaTopo}>
              <div className="viaserra-cta">
                <a
                  href={linkTeste("hero")}
                  onClick={() => trackTesteViaSerra("viaserra_hero")}
                  className={`${CLASSE_BOTAO_PRIMARIO} gap-2`}
                >
                  Testar {VIASERRA_TESTE_DIAS} dias grátis <ArrowRight size={18} aria-hidden="true" />
                </a>
                <p>{VIASERRA_NOTA_CTA}</p>
              </div>
              <a
                href={whatsappLink(MSG_WHATSAPP)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsapp("viaserra_hero_whatsapp")}
                className={`${CLASSE_LINK_TEXTO} min-h-11`}
              >
                Conversar sobre o ViaSerra
              </a>
            </div>
          </div>
        </section>

        <ViaSerraDemo />

        <section id="preco" className="viaserra-preco" aria-labelledby="viaserra-preco-titulo">
          <div className="viaserra-wrap viaserra-preco-grid">
            <div>
              <h2 id="viaserra-preco-titulo">Preço</h2>
              <ul className="viaserra-condicoes">
                {VIASERRA_CONDICOES.map((c) => (
                  <li key={c}><Check size={18} aria-hidden="true" />{c}</li>
                ))}
              </ul>
            </div>
            <ul className="viaserra-planos">
              {VIASERRA_PLANOS.map((p) => (
                <li key={p.nome}>
                  <span>{p.nome}</span>
                  <p><strong>{p.valor}</strong> {p.periodo}</p>
                  <small>{p.nota}</small>
                </li>
              ))}
            </ul>
            <div className="viaserra-cta">
              <a
                href={linkTeste("preco")}
                onClick={() => trackTesteViaSerra("viaserra_preco")}
                className={`${CLASSE_BOTAO_PRIMARIO} gap-2`}
              >
                Testar {VIASERRA_TESTE_DIAS} dias grátis <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div className="viaserra-wrap">
          <details id="privacidade" className="viaserra-privacy">
            <summary>Como o ViaSerra protege os dados dos hóspedes?</summary>
            <p>O acesso é por login, com verificação em duas etapas disponível. A pousada pode exportar os dados da sua conta ou solicitar a exclusão.</p>
          </details>
        </div>
      </main>
      <Footer>
        <div ref={fecho} className="viaserra-fecho">
          <FechoCarta
            titulo="Teste o ViaSerra com as reservas da sua pousada"
            texto={`${VIASERRA_TESTE_DIAS} dias grátis, sem cartão. Se preferir, conte como a recepção se organiza hoje e a gente conversa.`}
            mensagemWhatsapp={MSG_WHATSAPP}
            rotuloWhatsapp="Conversar sobre o ViaSerra"
            onWhatsappClick={() => trackWhatsapp("viaserra_final_whatsapp")}
            acaoPrincipal={
              <a
                href={linkTeste("final")}
                onClick={() => trackTesteViaSerra("viaserra_final")}
                className={`${CLASSE_BOTAO_PRIMARIO} px-3 text-sm sm:px-6`}
              >
                Testar {VIASERRA_TESTE_DIAS} dias grátis
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            }
          />
        </div>
      </Footer>
      <BarraTeste href={linkTeste("barra")} onClick={() => trackTesteViaSerra("viaserra_barra")} alvos={alvosBarra} />
    </div>
  );
};

export default ViaSerraPage;
