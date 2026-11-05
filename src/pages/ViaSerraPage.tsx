import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ViaSerraDemo } from "@/components/produto/ViaSerraDemo";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { Abertura, Grade, Lado, Linhas, Etapas } from "@/components/paginas/Blocos";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { whatsappLink } from "@/lib/contato";

const MSG_WHATSAPP = "Olá! Vi o ViaSerra no site da brhorn e quero conversar sobre a gestão da minha pousada.";

const MODULOS = [
  { titulo: "Calendário de reservas", texto: "Quartos em linhas, dias em colunas. Check-in, check-out e status num olhar." },
  { titulo: "Quartos e tarifas", texto: "Tipo, capacidade, leitos, comodidades e preço por pessoa e noite." },
  { titulo: "Hóspedes", texto: "Cadastro com contato, documento e histórico de hospedagens." },
  { titulo: "Painel do dia", texto: "Ocupação, quem está na casa, receita do mês, próximas chegadas e origem das reservas." },
];

const ROTINA = [
  { titulo: "Arrastar para mudar",
    texto: "Hóspede trocou de quarto ou de data? Arraste a reserva no calendário. Sem refazer cadastro.",
  },
  { titulo: "Ao vivo em todos os aparelhos",
    texto: "A reserva lançada na recepção aparece na hora no celular de quem está fora. Ninguém trabalha com versão velha.",
  },
  { titulo: "Achar o hóspede em segundos",
    texto: "Busca por nome direto no cadastro, mesmo com o cadastro grande.",
  },
];

const PRIVACIDADE = [
  { titulo: "Login com verificação em duas etapas", texto: "Senha forte e código no celular para quem quiser mais proteção." },
  { titulo: "Aceite de termos e LGPD", texto: "Termos de uso e política de privacidade aceitos e registrados por versão." },
  { titulo: "Exportação dos dados", texto: "Os dados são seus: dá para baixar tudo quando quiser." },
  { titulo: "Exclusão de verdade", texto: "Pedido de exclusão apaga os dados, como a LGPD exige." },
];

const ViaSerraPage = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();
  usePageTitle("ViaSerra · gestão de pousadas sem planilha · brhorn");

  return (
    <div className="min-h-screen bg-t-paper font-sans text-t-ink">
      <SiteHeader />
      <main>
        <Abertura
          titulo="Sua pousada organizada, sem planilha."
          texto="O sistema de gestão para pousadas pequenas: reservas, quartos e hóspedes num calendário só, atualizado ao vivo no computador da recepção e no seu celular."
          acoes={
            <>
              <a
                href={whatsappLink(MSG_WHATSAPP)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsapp("viaserra_hero_whatsapp")}
                className={CLASSE_BOTAO_PRIMARIO}
              >
                Conversar sobre o ViaSerra
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#modulos" className={CLASSE_BOTAO_SECUNDARIO}>
                Ver o que tem
              </a>
            </>
          }
          nota="Em uso diário por uma pousada."
          figura={<ViaSerraDemo />}
        />

        <Secao id="modulos" className="scroll-mt-[var(--nav-height)]">
          <Cabeca id="modulos" titulo="Tudo o que a recepção precisa, nada do que ela não usa." />
          <Grade itens={MODULOS} colunas={4} />
        </Secao>

        <Secao id="rotina" tom="papel2">
          <Lado
            cabeca={
              <Cabeca
                id="rotina"
                titulo="Pensado para quem atende, limpa e cobra no mesmo dia."
                texto="Pousada pequena não tem gente sobrando para alimentar sistema. Cada tela foi feita para resolver em poucos cliques."
              />
            }
          >
            <Etapas itens={ROTINA} numerar={false} />
          </Lado>
        </Secao>

        <Secao id="privacidade" tom="noite">
          <Cabeca
            id="privacidade"
            titulo="Dado de hóspede é coisa séria."
            texto="Nome, documento e telefone de quem se hospeda na sua casa. O ViaSerra trata isso com os cuidados que a LGPD pede, desde o primeiro acesso."
            noite
          />
          <Linhas itens={PRIVACIDADE} noite />
        </Secao>

        <Secao id="proximo">
          <div className="grid gap-[var(--space-lg)] md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[var(--gap-columns)]">
            <p className="text-t-muted">Em desenvolvimento</p>
            <div>
              <h2
                id="proximo-titulo"
                className="max-w-[22ch] font-display text-[length:var(--text-section)] font-normal leading-[1.08] tracking-[var(--tracking-display)] text-t-ink"
              >
                Um agente que responde o hóspede no WhatsApp.
              </h2>
              <p className="lead mt-[var(--space-md)] text-t-muted">
                Consulta a disponibilidade no calendário, informa valores e deixa a reserva pré-lançada para você
                confirmar. É a próxima peça do ViaSerra. Se você quer acompanhar de perto, fale comigo.
              </p>
            </div>
          </div>
        </Secao>
      </main>
      <Footer>
        <FechoCarta
          titulo="Sua pousada ainda vive na planilha?"
          texto="Conte como você controla as reservas hoje. Em uma conversa a gente vê se o ViaSerra serve para a sua casa."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("viaserra_final_whatsapp")}
          onFormClick={() => openContact("viaserra_final_form")}
        />
      </Footer>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default ViaSerraPage;
