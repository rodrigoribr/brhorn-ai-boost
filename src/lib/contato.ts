// Canais de contato da brhorn, num lugar só (antes o telefone do link e o do texto eram diferentes).

export const TELEFONE_E164 = "5535991617547";
export const TELEFONE_EXIBICAO = "(35) 9 9161-7547";
export const EMAIL = "contato@brhorn.com";

// TODO(Rodrigo): colar a URL do perfil. Enquanto estiver vazia, o link não aparece no site.
export const LINKEDIN_URL = "";

export const INSTAGRAM_URL = "https://www.instagram.com/brhorn_ia/";

export const whatsappLink = (mensagem = "Olá! Vim pelo site da brhorn e quero conversar sobre um agente de IA.") =>
  `https://wa.me/${TELEFONE_E164}?text=${encodeURIComponent(mensagem)}`;
