import { SiteHeader } from "@/components/home/SiteHeader";
import { AxionDemo } from "@/components/produto/AxionDemo";
import ContactModal from "@/components/ContactModal";
import CallModal from "@/components/CallModal";
import Footer, { FechoCarta } from "@/components/Footer";
import { Cabeca, Secao } from "@/components/home/Titulos";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";
import { Abertura, Etapas, Grade, Lado, Linhas, ListaNumerada, Passos } from "@/components/paginas/Blocos";
import { useContactIntent } from "@/hooks/use-contact-intent";
import { usePageTitle } from "@/hooks/use-page-title";
import { BotaoDiagnostico, CLASSE_BOTAO_PRIMARIO, ConteudoBotao } from "@/components/diagnostico/BotaoDiagnostico";

// DEV-0005: a página é um CASO (prova do método), não produto à venda. Só função conferida no código
// do axion-backend em 2026-11-05. O piloto (nov/2025 a mai/2026) rodou em n8n + Sheets + Postgres/NocoDB; o sistema
// (axion-backend + painel) veio depois e atendeu clientes reais (Rodrigo, 2026-11-05). Sem número além do piloto.
const MSG_WHATSAPP = "Olá! Vi o caso do Axion no site da brhorn e quero conversar sobre uma rotina da minha empresa.";

const PROBLEMAS = [
  "Pedido chega por mensagem, áudio, foto e ligação, cada um de um jeito",
  "Alguém passa o dia copiando pedido do WhatsApp para o sistema",
  "O horário de corte passa e o pedido fica para a próxima rota",
  "As mesmas perguntas sobre preço e prazo, todo dia",
  "Revendedor que esqueceu de pedir só aparece quando falta produto",
  "Sem histórico: ninguém sabe o que foi combinado com quem",
];

const PASSOS = [
  { titulo: "Contato", texto: "O revendedor chama no WhatsApp que ele já usa. Nada para instalar." },
  { titulo: "Interpretação", texto: "O agente entende o pedido, mesmo escrito do jeito do cliente." },
  { titulo: "Regras", texto: "Aplica o catálogo, os preços, as unidades e a rota de entrega da empresa." },
  { titulo: "Registro", texto: "Confirma com o cliente e lança o pedido no painel." },
];

const ENTENDE = [
  { titulo: "Mensagem picada", texto: "Espera o cliente terminar de escrever antes de responder, como uma pessoa faria." },
  { titulo: "Foto da lista", texto: "O revendedor fotografa o pedido no papel e o agente lê os itens." },
  { titulo: "PDF", texto: "Lista ou cotação em PDF vira pedido sem ninguém digitar." },
  { titulo: "Unidades", texto: "Caixa, fardo ou unidade: a quantidade é convertida pela regra de cada produto." },
  { titulo: "Rota de entrega", texto: "Sabe o dia de entrega de cada região e informa ao revendedor." },
  { titulo: "Lembretes e campanhas", texto: "Lembra quem ainda não pediu antes do fechamento e envia listas e ofertas na hora marcada." },
];

const PAINEL = [
  { titulo: "Visão geral", texto: "Clientes ativos, pedidos do ciclo e atividade recente." },
  { titulo: "Clientes", texto: "Cadastro, classificação e agente ligado por cliente." },
  { titulo: "Catálogo", texto: "Produtos, preços e conversão de unidades." },
  { titulo: "Pedidos", texto: "Status, edição, validação e histórico." },
  { titulo: "Logística", texto: "Rotas por região e frequência de entrega." },
  { titulo: "Estúdio do agente", texto: "Tom de voz, regras de negócio e o que o agente pode fazer." },
  { titulo: "Comunicação", texto: "Campanhas, envio de listas e lembretes de fechamento." },
  { titulo: "Conversas", texto: "Todas as conversas, para conferir o que foi combinado." },
];

const CONTROLE = [
  { titulo: "Tudo registrado", texto: "Cada conversa e cada decisão do agente fica no histórico, para conferir quando quiser." },
  { titulo: "Você assume quando quiser", texto: "Um atendimento fora do comum? Desliga o agente para aquele cliente e o time conversa direto." },
  { titulo: "Regras escritas, não adivinhadas", texto: "Preço e condição vêm do cadastro da empresa. O agente não inventa condição comercial." },
  { titulo: "Envio com limite", texto: "Campanhas saem espaçadas e com teto por hora, para não parecer disparo em massa." },
];

const PILOTO = [
  { titulo: "Diagnóstico", texto: "Antes de construir: como os pedidos chegavam, o catálogo, as rotas e as regras comerciais." },
  { titulo: "Piloto", texto: "6 meses, de novembro de 2025 a maio de 2026: 50 revendedores do produtor de queijos pedindo pelo WhatsApp, num fluxo em n8n com planilhas do Google e banco em Postgres com NocoDB." },
  { titulo: "Ajuste", texto: "Prompt e modelo ajustados toda semana, a partir das conversas reais e do funcionamento da operação." },
  { titulo: "Sistema próprio", texto: "Com o que o piloto ensinou, o fluxo virou um sistema próprio, com backend e painel, que atendeu clientes reais." },
];

const AxionPage = () => {
  const { isContactOpen, isCallOpen, closeContact, closeCall, openContact, trackWhatsapp } = useContactIntent();
  usePageTitle("Caso Axion · agente que tira pedido pelo WhatsApp · brhorn");

  return (
    <div className="min-h-screen bg-t-paper font-sans text-t-ink">
      <SiteHeader />
      <main>
        <Abertura
          titulo="O agente que tira pedido de revendedor pelo WhatsApp."
          texto="Começou num piloto de 6 meses com um produtor de queijos: 50 revendedores pedindo pelo WhatsApp, de novembro de 2025 a maio de 2026. Depois virou um sistema próprio, com backend e painel, que atendeu clientes reais. O revendedor manda mensagem, foto ou PDF da lista; o Axion entende, aplica as regras comerciais e registra o pedido no painel. O time fica com as exceções."
          acoes={
            <>
              <BotaoDiagnostico origem="axion_hero" className={CLASSE_BOTAO_PRIMARIO}>
                <ConteudoBotao />
              </BotaoDiagnostico>
              <a href="#como-funciona" className={CLASSE_BOTAO_SECUNDARIO}>
                Ver como funciona
              </a>
            </>
          }
          figura={<AxionDemo />}
        />

        <Secao id="problema">
          <Lado
            cabeca={
              <Cabeca
                id="problema"
                titulo="O pedido chegava de todo jeito."
                texto="É assim na maioria das distribuidoras: alguém passa o dia traduzindo conversa em pedido. Não escala, e o erro aparece na entrega."
              />
            }
          >
            <ListaNumerada itens={PROBLEMAS} />
          </Lado>
        </Secao>

        <Secao id="como-funciona" tom="papel2" className="scroll-mt-[var(--nav-height)]">
          <Cabeca id="como-funciona" titulo="Da mensagem ao pedido, sem ninguém digitar." />
          <Passos itens={PASSOS} />
        </Secao>

        <Secao id="entende">
          <Cabeca id="entende" titulo="Feito para o jeito que o revendedor realmente pede." />
          <Grade itens={ENTENDE} />
        </Secao>

        <Secao id="painel" tom="papel2">
          <Lado
            cabeca={
              <Cabeca
                id="painel"
                titulo="O controle fica com você."
                texto="O agente trabalha no WhatsApp; a gestão acontece num painel web, com tudo o que ele precisa saber da sua operação."
              />
            }
          >
            <Linhas itens={PAINEL} />
          </Lado>
        </Secao>

        <Secao id="supervisao" tom="noite">
          <Cabeca id="supervisao" titulo="Automático no que é rotina. Humano no que é exceção." noite />
          <Linhas itens={CONTROLE} noite />
        </Secao>

        <Secao id="piloto">
          <Lado cabeca={<Cabeca id="piloto" titulo="Primeiro provar, depois construir." />}>
            <Etapas itens={PILOTO} />
          </Lado>
        </Secao>
      </main>
      <Footer>
        <FechoCarta
          titulo="Tem uma rotina parecida na sua empresa?"
          texto="Pedido, cadastro, cobrança: o método é o mesmo do Axion. Conte onde o trabalho manual trava e eu digo se um agente resolve."
          mensagemWhatsapp={MSG_WHATSAPP}
          onWhatsappClick={() => trackWhatsapp("axion_final_whatsapp")}
          onFormClick={() => openContact("axion_final_form")}
        />
      </Footer>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <CallModal isOpen={isCallOpen} onClose={closeCall} />
    </div>
  );
};

export default AxionPage;
