import { LinkSuporte, PaginaLegal } from "@/components/PaginaLegal";

const ExclusaoDados = () => (
  <PaginaLegal
    titulo="Solicitação de Exclusão de Dados"
    secoes={[
      {
        texto: (
          <>
            Envie e-mail para <LinkSuporte /> com o assunto "Data Deletion" e o ID/username.
          </>
        ),
      },
      { texto: "Excluiremos dados vinculados em até 30 dias e confirmaremos por e-mail." },
    ]}
  />
);

export default ExclusaoDados;
