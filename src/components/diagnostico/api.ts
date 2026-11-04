// Cliente do brhorn-chat (DEV-0004). Contrato: Spec §3.3 no vault
// (brhorn/Site_Brhorn/10_Planejamento/2026-11_DEV-0004_Chat_Diagnostico/00_Spec.md).

const BASE = (import.meta.env.VITE_CHAT_API_URL ?? "").replace(/\/$/, "");

export interface Inicio {
  saudacao: string;
  texto_aceite: string;
  link_politica: string;
  total_etapas: number;
}

export interface Passo {
  mensagem: string;
  etapa: number;
  total_etapas: number;
  opcoes?: string[];
  fim?: boolean;
  resumo?: string;
}

export interface NovaSessao extends Passo {
  sessao_id: string;
}

export class ErroChat extends Error {
  constructor(public status: number, mensagem: string) {
    super(mensagem);
  }
}

const MENSAGENS: Record<number, string> = {
  400: "Não consegui enviar essa mensagem. Confira o texto e tente de novo.",
  404: "Esta conversa expirou. Comece um novo diagnóstico.",
  409: "Esta conversa já foi encerrada.",
  429: "Muitas mensagens em pouco tempo. Espere um pouco e tente de novo.",
  503: "O diagnóstico está indisponível agora. Tente mais tarde.",
};

async function chamar<T>(caminho: string, init?: RequestInit): Promise<T> {
  if (!BASE) throw new ErroChat(0, "O diagnóstico não está configurado neste ambiente.");
  let r: Response;
  try {
    r = await fetch(`${BASE}${caminho}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    });
  } catch {
    throw new ErroChat(0, "Sem conexão com o diagnóstico. Verifique a internet e tente de novo.");
  }
  if (!r.ok) {
    let erro = "";
    try {
      erro = (await r.json()).erro ?? "";
    } catch {
      /* corpo vazio */
    }
    throw new ErroChat(r.status, MENSAGENS[r.status] ?? (erro || "Algo deu errado. Tente de novo."));
  }
  return r.json() as Promise<T>;
}

export const apiDiagnostico = {
  inicio: () => chamar<Inicio>("/v1/diagnostico/inicio"),
  /** Só é chamada depois do "Concordo": sem aceite, nada é gravado. */
  aceitar: () => chamar<NovaSessao>("/v1/diagnostico/sessoes", { method: "POST", body: JSON.stringify({ aceite: true }) }),
  enviar: (sessaoId: string, texto: string) =>
    chamar<Passo>(`/v1/diagnostico/sessoes/${encodeURIComponent(sessaoId)}/mensagens`, {
      method: "POST",
      body: JSON.stringify({ texto }),
    }),
};

export const LIMITE_TEXTO = 500;
