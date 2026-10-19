import { LinkSuporte, PaginaLegal } from "@/components/PaginaLegal";

const TermosUso = () => (
  <PaginaLegal
    titulo="Termos de Uso"
    secoes={[
      { texto: 'Serviço fornecido "como está". Você deve ter autorização para conectar contas Meta.' },
      { texto: "Proibido uso abusivo ou ilegal. Podemos suspender contas que violem estes termos." },
      {
        texto: (
          <>
            Contato: <LinkSuporte />
          </>
        ),
      },
    ]}
  />
);

export default TermosUso;
