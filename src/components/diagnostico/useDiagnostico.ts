import { useCallback, useRef, useState } from "react";
import { registrarContato } from "@/lib/consentimento";
import { apiDiagnostico, ErroChat, type Inicio } from "./api";

export type Fase = "carregando" | "aceite" | "conversa" | "fim" | "erro";

export interface Mensagem {
  id: number;
  autor: "agente" | "visitante";
  texto: string;
}

export function useDiagnostico() {
  const [fase, setFase] = useState<Fase>("carregando");
  const [inicio, setInicio] = useState<Inicio | null>(null);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [etapa, setEtapa] = useState(0);
  const [total, setTotal] = useState(0);
  const [opcoes, setOpcoes] = useState<string[] | undefined>();
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const sessao = useRef<string | null>(null);
  const seq = useRef(0);
  const origemChat = useRef("");
  const enviandoMensagem = useRef(false);

  const acrescentar = (autor: Mensagem["autor"], texto: string) =>
    setMensagens((m) => [...m, { id: ++seq.current, autor, texto }]);

  const falhar = (e: unknown, fatal: boolean) => {
    const msg = e instanceof ErroChat ? e.message : "Algo deu errado. Tente de novo.";
    setErro(msg);
    if (fatal || (e instanceof ErroChat && [404, 409].includes(e.status))) setFase("erro");
  };

  const abrir = useCallback(async (origem: string) => {
    origemChat.current = origem;
    sessao.current = null;
    setMensagens([]);
    setErro(null);
    setOpcoes(undefined);
    setEtapa(0);
    setFase("carregando");
    try {
      const i = await apiDiagnostico.inicio();
      setInicio(i);
      setTotal(i.total_etapas);
      setFase("aceite");
    } catch (e) {
      falhar(e, true);
    }
  }, []);

  const aceitar = useCallback(async () => {
    setEnviando(true);
    setErro(null);
    try {
      const s = await apiDiagnostico.aceitar();
      sessao.current = s.sessao_id;
      setEtapa(s.etapa);
      setTotal(s.total_etapas);
      setOpcoes(s.opcoes);
      acrescentar("agente", s.mensagem);
      setFase("conversa");
    } catch (e) {
      falhar(e, false);
    } finally {
      setEnviando(false);
    }
  }, []);

  const enviar = useCallback(async (texto: string) => {
    const t = texto.trim();
    const id = sessao.current;
    if (!t || !id || enviandoMensagem.current) return false;
    enviandoMensagem.current = true;
    setEnviando(true);
    setErro(null);
    acrescentar("visitante", t);
    try {
      const p = await apiDiagnostico.enviar(id, t);
      if (sessao.current !== id) return false;
      acrescentar("agente", p.mensagem);
      setEtapa(p.etapa);
      setTotal(p.total_etapas);
      setOpcoes(p.fim ? undefined : p.opcoes);
      if (p.fim) {
        setFase("fim");
        sessao.current = null;
        if (p.resumo) registrarContato("Lead", origemChat.current, "chat");
      }
      return true;
    } catch (e) {
      if (sessao.current !== id) return false;
      // A mensagem não foi aceita: tira da tela para o visitante reenviar.
      setMensagens((m) => m.slice(0, -1));
      falhar(e, false);
      return false;
    } finally {
      enviandoMensagem.current = false;
      setEnviando(false);
    }
  }, []);

  return { fase, inicio, mensagens, etapa, total, opcoes, enviando, erro, abrir, aceitar, enviar };
}
