import { LinkEmail, PaginaLegal } from "@/components/PaginaLegal";

const ExclusaoDados = () => (
  <PaginaLegal
    titulo="Solicitação de Exclusão de Dados"
    secoes={[
      {
        texto: (
          <>
            Envie um e-mail para <LinkEmail /> com o assunto "Exclusão de dados" (ou "Data Deletion") e o nome e
            telefone que você deixou no site. Se for uma conta Meta conectada, informe também o ID ou o nome de usuário.
          </>
        ),
      },
      { texto: "Apago os dados vinculados em até 15 dias e confirmo por e-mail." },
    ]}
  />
);

export default ExclusaoDados;
