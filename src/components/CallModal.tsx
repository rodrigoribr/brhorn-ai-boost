import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";
import { CLASSE_CAMPO, Campo, NotaPrivacidade, TextoEnvio } from "@/components/formulario/Campo";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallModal = ({ isOpen, onClose }: CallModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const functionsUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/call-request`;

      const response = await fetch(functionsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_KEY,
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      toast({
        title: "Pedido enviado!",
        description: "Eu te ligo em breve.",
      });

      setFormData({ name: "", phone: "" });
      onClose();
    } catch (error) {
      console.error("Erro ao enviar pedido de ligação:", error);
      toast({
        title: "Erro ao enviar pedido",
        description: "Tente de novo ou chame direto no WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md gap-[var(--space-lg)] p-[var(--space-lg)] sm:p-[var(--space-xl)]">
        <DialogHeader className="space-y-[var(--space-xs)] pr-8">
          <DialogTitle>Quero que me liguem</DialogTitle>
          <DialogDescription>Deixe seu nome e telefone, e eu ligo para você.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-[var(--space-md)]">
          <Campo id="call-name" rotulo="Nome">
            <input
              id="call-name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Seu nome"
              className={`${CLASSE_CAMPO} h-12`}
              required
            />
          </Campo>

          <Campo id="call-phone" rotulo="Telefone/WhatsApp">
            <input
              id="call-phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="(11) 99999-9999"
              className={`${CLASSE_CAMPO} h-12`}
              required
            />
          </Campo>

          <div className="mt-[var(--space-xs)] flex flex-col-reverse gap-[var(--space-sm)] sm:flex-row sm:justify-end">
            <button type="button" onClick={onClose} className={CLASSE_BOTAO_SECUNDARIO}>
              Cancelar
            </button>
            <button type="submit" disabled={!isFormValid || isSubmitting} className={CLASSE_BOTAO_PRIMARIO}>
              <TextoEnvio enviando={isSubmitting}>Quero receber a ligação</TextoEnvio>
            </button>
          </div>
        </form>

        <NotaPrivacidade onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CallModal;
