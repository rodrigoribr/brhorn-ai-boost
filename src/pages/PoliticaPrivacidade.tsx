import { LinkEmail, PaginaLegal } from "@/components/PaginaLegal";

// Reflete o que o site coleta de fato: ContactModal e CallModal (Edge Functions → Supabase contact_leads),
// Meta Pixel e Google Fonts (index.html). Mudou a coleta ou um fornecedor? Atualize esta página e a data.
const PoliticaPrivacidade = () => (
  <PaginaLegal
    titulo="Política de Privacidade"
    resumo="Este site coleta só o necessário para responder a quem entra em contato. Aqui está o que é coletado, para quê, com quem é compartilhado e como pedir a exclusão."
    atualizacao="20 de outubro de 2026"
    secoes={[
      {
        titulo: "Quem é o responsável",
        texto: (
          <>
            BRHORN AUTOMACAO &amp; IA LTDA, CNPJ 64.680.803/0001-17, com sede em Paraisópolis (MG), é a controladora
            dos dados coletados neste site, nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018). O canal
            para qualquer assunto sobre os seus dados é <LinkEmail />.
          </>
        ),
      },
      {
        titulo: "O que é coletado",
        texto: (
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-nanquim">Formulário "descreva por escrito":</strong> nome, e-mail,
              telefone, empresa, setor e a mensagem que você escrever.
            </li>
            <li>
              <strong className="font-medium text-nanquim">"Prefiro que me liguem":</strong> nome e telefone.
            </li>
            <li>
              <strong className="font-medium text-nanquim">Dados técnicos:</strong> como em qualquer site, os servidores
              registram o endereço IP e o tipo de navegador de cada acesso, para funcionar e se proteger de abusos.
            </li>
            <li>
              <strong className="font-medium text-nanquim">Medição de visitas e anúncios:</strong> o Meta Pixel registra
              visitas e cliques de contato por meio de cookies, para medir o resultado de anúncios no Facebook e no
              Instagram.
            </li>
          </ul>
        ),
      },
      {
        titulo: "Para que os dados são usados",
        texto:
          "Para responder ao seu contato, fazer a ligação que você pediu e preparar uma eventual proposta. Os dados de navegação servem para medir quais páginas e anúncios funcionam. Não uso os seus dados para outra finalidade e não envio propaganda sem você pedir.",
      },
      {
        titulo: "Base legal",
        texto:
          "O contato que você inicia é tratado para atender ao seu pedido e para procedimentos anteriores a um contrato (art. 7º, V, da LGPD). A medição de visitas usa o legítimo interesse (art. 7º, IX), e você pode bloqueá-la como explicado abaixo.",
      },
      {
        titulo: "Com quem é compartilhado",
        texto: (
          <>
            <p>Não vendo dados. Eles passam apenas pelos fornecedores que fazem o site funcionar:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Vercel, que hospeda o site;</li>
              <li>Supabase, banco de dados onde ficam os contatos enviados pelo formulário e os pedidos de ligação;</li>
              <li>Google Fonts, de onde o site carrega as fontes, o que envia o seu endereço IP ao Google;</li>
              <li>Meta, pelo Pixel, e o WhatsApp, quando você escolhe conversar por lá.</li>
            </ul>
            <p className="mt-3">
              Alguns desses fornecedores guardam dados fora do Brasil. A transferência segue as regras do art. 33 da
              LGPD e as garantias contratuais de cada fornecedor.
            </p>
          </>
        ),
      },
      {
        titulo: "Por quanto tempo",
        texto:
          "Os dados de contato ficam guardados por até 12 meses após a última conversa, se ela não virar um projeto. Se virar, passam a seguir o contrato e os prazos legais, como os fiscais. Depois disso, são apagados.",
      },
      {
        titulo: "Como os dados são protegidos",
        texto:
          "O site só funciona com conexão criptografada (HTTPS). O acesso aos contatos é restrito a mim, e os fornecedores acima tratam os dados conforme os próprios contratos e políticas de segurança.",
      },
      {
        titulo: "Cookies e como bloquear",
        texto:
          "O site não usa cookies de login. Os cookies do Meta Pixel podem ser bloqueados nas configurações do seu navegador ou nas preferências de anúncios da sua conta Meta. O site continua funcionando normalmente sem eles.",
      },
      {
        titulo: "Dados de clientes em projetos",
        texto:
          "Quando uma empresa contrata a brhorn, os dados que os agentes acessam são tratados em nome dela, conforme o contrato e o acordo de tratamento de dados assinados antes de qualquer acesso. Esta política cobre apenas o site.",
      },
      {
        titulo: "Contas Meta conectadas",
        texto:
          "Se você conectar uma conta do Facebook ou do Instagram a um serviço da brhorn, são usados apenas o identificador da conta e as permissões que você autorizar, só para prestar aquele serviço. Você pode desconectar a qualquer momento nas configurações da sua conta Meta.",
      },
      {
        titulo: "Seus direitos",
        texto: (
          <>
            Você pode pedir a confirmação de que tenho dados seus, o acesso, a correção, a exclusão e a informação
            sobre com quem foram compartilhados (art. 18 da LGPD). Escreva para <LinkEmail />. Respondo em até 15
            dias. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
          </>
        ),
      },
      {
        titulo: "Mudanças nesta política",
        texto:
          "Quando a coleta de dados mudar, esta página é atualizada e a data no topo também. Mudanças importantes são avisadas aqui no site.",
      },
    ]}
  />
);

export default PoliticaPrivacidade;
