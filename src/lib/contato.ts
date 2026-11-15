// Canais de contato da brhorn, num lugar só (antes o telefone do link e o do texto eram diferentes).

export const TELEFONE_E164 = "5535991617547";
export const TELEFONE_EXIBICAO = "(35) 9 9161-7547";
export const EMAIL = "contato@brhorn.com";
export const CONTATO_ROTINA_WHATSAPP = {
  rotulo: "Contar minha rotina no WhatsApp",
  mensagem: "Olá! Vim pelo site da brhorn e quero conversar sobre uma rotina da minha empresa.",
};

export const LINKEDIN_URL = "https://www.linkedin.com/in/rodrigo-ribeiro-brasil/";
export const LINKEDIN_BRHORN_URL = "https://www.linkedin.com/company/brhorn/";
export const INSTAGRAM_URL = "https://www.instagram.com/brhorn_ia/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579100998129&locale=pt_BR";

export const whatsappLink = (mensagem = "Olá! Vim pelo site da brhorn e quero conversar sobre um agente de IA.") =>
  `https://wa.me/${TELEFONE_E164}?text=${encodeURIComponent(mensagem)}`;
