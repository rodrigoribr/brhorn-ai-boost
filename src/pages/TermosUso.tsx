import { LinkEmail, LinkPagina, PaginaLegal } from "@/components/PaginaLegal";

// Termos de Uso reescritos em 2026-11-05 a partir do que o site faz de verdade: páginas informativas, chat de
// diagnóstico com IA (DEV-0004), formulários de contato e de ligação, e contratação só por proposta ou contrato.
// Voz da empresa (a brhorn). Mudou o site, um serviço ou o chat? Atualize esta página e a data.
const TermosUso = () => (
  <PaginaLegal
    titulo="Termos de Uso"
    resumo="As regras para usar este site, o chat de diagnóstico e os formulários de contato. A contratação de um projeto segue proposta e contrato próprios."
    atualizacao="5 de novembro de 2026"
    secoes={[
      {
        titulo: "Quem é a brhorn",
        texto: (
          <>
            Este site é da BRHORN AUTOMACAO &amp; IA LTDA, CNPJ 64.680.803/0001-17, com sede em Paraisópolis (MG). Ao
            usar o site, você concorda com estes termos. O contato para qualquer assunto sobre eles é <LinkEmail />.
          </>
        ),
      },
      {
        titulo: "O que o site é",
        texto:
          "O site apresenta os serviços de consultoria e configuração de agentes de IA da brhorn e alguns trabalhos já feitos. O conteúdo é informativo: não é uma oferta com preço, prazo ou escopo definidos. Esses pontos só valem quando estão escritos numa proposta ou num contrato assinado pelas duas partes.",
      },
      {
        titulo: "Chat de diagnóstico",
        texto: (
          <ul className="list-disc space-y-2 pl-5">
            <li>
              O diagnóstico inicial é uma conversa com um agente de IA. As respostas são geradas automaticamente e
              podem conter imprecisões.
            </li>
            <li>
              Ele serve para entender a sua rotina e preparar uma primeira conversa. Não é parecer técnico, proposta
              comercial nem garantia de resultado.
            </li>
            <li>
              Não informe no chat senhas, dados bancários, dados de saúde ou dados de outras pessoas sem autorização
              delas.
            </li>
            <li>
              O que é guardado da conversa, por quanto tempo e com quem é compartilhado está na{" "}
              <LinkPagina to="/politica-privacidade">Política de Privacidade</LinkPagina>.
            </li>
          </ul>
        ),
      },
      {
        titulo: "Formulários e pedidos de contato",
        texto:
          "Ao enviar um formulário, pedir uma ligação ou concluir o chat, você declara que os dados são seus e verdadeiros. Pedir contato não obriga nenhuma das partes a contratar.",
      },
      {
        titulo: "Uso permitido",
        texto:
          "Não é permitido usar o site para atividades ilegais, enviar conteúdo ofensivo ou de terceiros sem autorização, tentar acessar áreas restritas, sobrecarregar os servidores ou automatizar o envio de mensagens ao chat e aos formulários. A brhorn pode bloquear acessos que façam isso.",
      },
      {
        titulo: "Projetos e contas de terceiros",
        texto:
          "Quando uma empresa contrata a brhorn, valem a proposta, o contrato e o acordo de tratamento de dados assinados, que prevalecem sobre estes termos. Quem conectar a um serviço da brhorn uma conta de outra plataforma, como WhatsApp, Facebook, Instagram ou Google, declara ter autorização para isso e pode desconectá-la a qualquer momento.",
      },
      {
        titulo: "Marca e conteúdo",
        texto:
          "A marca brhorn, o monograma brh, os textos, as ilustrações e as demonstrações deste site pertencem à brhorn. Citar trechos com indicação da fonte é permitido; outras formas de reprodução dependem de autorização por escrito.",
      },
      {
        titulo: "Links e serviços de terceiros",
        texto:
          "O site tem links para WhatsApp, Instagram e LinkedIn. Ao usá-los, valem os termos e a política de privacidade de cada um desses serviços.",
      },
      {
        titulo: "Responsabilidade",
        texto:
          "A brhorn revisa o conteúdo do site com cuidado, mas ele pode mudar e não substitui a análise do seu caso. A brhorn não responde por decisões tomadas apenas com base no site ou no chat, nem garante que o site funcione sem interrupções. Nada nestes termos limita os direitos que a lei garante a você.",
      },
      {
        titulo: "Mudanças nestes termos",
        texto:
          "Quando os termos mudarem, esta página é atualizada e a data no topo também. Continuar usando o site depois disso significa concordar com a nova versão.",
      },
      {
        titulo: "Lei e foro",
        texto:
          "Estes termos seguem as leis brasileiras. Fica eleito o foro da comarca de Paraisópolis (MG), ressalvado o direito de quem for consumidor de entrar com a ação no próprio domicílio.",
      },
    ]}
  />
);

export default TermosUso;
