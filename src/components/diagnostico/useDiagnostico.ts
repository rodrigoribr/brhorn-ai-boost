import { useCallback, useRef, useState } from "react";
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

  const acrescentar = (autor: Mensagem["autor"], texto: string) =>
    setMensagens((m) => [...m, { id: ++seq.current, autor, texto }]);

  const falhar = (e: unknown, fatal: boolean) => {
    const msg = e instanceof ErroChat ? e.message : "Algo deu errado. Tente de novo.";
    setErro(msg);
    if (fatal || (e instanceof ErroChat && [404, 409].includes(e.status))) setFase("erro");
  };

  const abrir = useCallback(async () => {
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
    if (!t || !sessao.current) return false;
    setEnviando(true);
    setErro(null);
    acrescentar("visitante", t);
    try {
      const p = await apiDiagnostico.enviar(sessao.current, t);
      acrescentar("agente", p.mensagem);
      setEtapa(p.etapa);
      setTotal(p.total_etapas);
      setOpcoes(p.fim ? undefined : p.opcoes);
      if (p.fim) {
        setFase("fim");
        if (p.resumo && window.fbq) window.fbq("track", "Lead");
      }
      return true;
    } catch (e) {
      // A mensagem não foi aceita: tira da tela para o visitante reenviar.
      setMensagens((m) => m.slice(0, -1));
      falhar(e, false);
      return false;
    } finally {
      setEnviando(false);
    }
  }, []);

  return { fase, inicio, mensagens, etapa, total, opcoes, enviando, erro, abrir, aceitar, enviar };
}
