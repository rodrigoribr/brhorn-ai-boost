import { LinkSuporte, PaginaLegal } from "@/components/PaginaLegal";

const PoliticaPrivacidade = () => (
  <PaginaLegal
    titulo="Política de Privacidade"
    resumo="A brhorn coleta dados estritamente necessários para autenticação e suporte."
    atualizacao={import.meta.env.VITE_PRIVACY_POLICY_UPDATE || "2023-09-01"}
    secoes={[
      {
        titulo: "Dados coletados",
        texto: "Nome, e-mail, ID das contas conectadas (Facebook/Instagram), logs técnicos.",
      },
      {
        titulo: "Uso",
        texto: "Usamos os dados para login via Meta, atendimento e melhoria do serviço.",
      },
      {
        titulo: "Compartilhamento",
        texto: "Não vendemos dados. Fornecedores de infraestrutura podem processá-los sob contrato.",
      },
      {
        titulo: "Retenção",
        texto: "Guardamos enquanto houver conta ativa ou obrigação legal.",
      },
      {
        titulo: "Seus direitos",
        texto: (
          <>
            Você pode acessar, corrigir ou excluir dados. Contato: <LinkSuporte />
          </>
        ),
      },
      {
        titulo: "Contato",
        texto: (
          <>
            brhorn – <LinkSuporte />
          </>
        ),
      },
    ]}
  />
);

export default PoliticaPrivacidade;
