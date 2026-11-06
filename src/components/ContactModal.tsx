import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CLASSE_BOTAO_PRIMARIO } from "@/components/diagnostico/BotaoDiagnostico";
import { CLASSE_BOTAO_SECUNDARIO } from "@/components/home/classes";
import { CLASSE_CAMPO, Campo, NotaPrivacidade, TextoEnvio } from "@/components/formulario/Campo";

const ASSUNTOS = [
  { valor: "agente-whatsapp", texto: "Agente no WhatsApp" },
  { valor: "leitura-documentos", texto: "Leitura de documentos" },
  { valor: "configuracao-agentes", texto: "Configuração de agentes" },
  { valor: "software-sob-medida", texto: "Software sob medida" },
  { valor: "axion", texto: "Axion (piloto)" },
  { valor: "viaserra", texto: "ViaSerra / Pousadas" },
  { valor: "outro", texto: "Outro" },
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit?: () => void;
}

const ContactModal = ({ isOpen, onClose, onFormSubmit }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Grava em contact_leads pela Edge Function, ao lado dos pedidos de ligação (ver supabase/functions).
      const functionsUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-request`;

      const response = await fetch(functionsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: import.meta.env.VITE_SUPABASE_KEY,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          sector: formData.sector,
          message: formData.message,
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Disparar evento de Lead no Facebook Pixel após sucesso
      if (window.fbq) {
        window.fbq('track', 'Lead');
      }

      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Respondo em até 1 dia útil.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        sector: '',
        message: ''
      });

      onClose();
      onFormSubmit?.();
    } catch (error) {
      console.error('Erro ao enviar contato:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente de novo ou chame direto no WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.sector;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-lg gap-[var(--space-lg)] overflow-y-auto p-[var(--space-lg)] sm:p-[var(--space-xl)]">
        <DialogHeader className="space-y-[var(--space-xs)] pr-8">
          <DialogTitle>Descreva o seu caso</DialogTitle>
          <DialogDescription>
            Conte o que trava hoje. Respondo em até 1 dia útil pelo canal que você preferir.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-[var(--space-md)]">
          <Campo id="name" rotulo="Nome completo" obrigatorio>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Seu nome completo"
              className={`${CLASSE_CAMPO} h-12`}
              required
            />
          </Campo>

          <Campo id="email" rotulo="Seu melhor e-mail" obrigatorio>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
              className={`${CLASSE_CAMPO} h-12`}
              required
            />
          </Campo>

          <div className="grid gap-[var(--space-md)] sm:grid-cols-2">
            <Campo id="phone" rotulo="Telefone/WhatsApp" obrigatorio>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                className={`${CLASSE_CAMPO} h-12`}
                required
              />
            </Campo>

            <Campo id="company" rotulo="Empresa">
              <input
                id="company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da sua empresa"
                className={`${CLASSE_CAMPO} h-12`}
              />
            </Campo>
          </div>

          <Campo id="sector" rotulo="Assunto" obrigatorio>
            <select
              id="sector"
              value={formData.sector}
              onChange={(e) => handleInputChange('sector', e.target.value)}
              className={`${CLASSE_CAMPO} h-12 ${formData.sector ? "" : "text-t-muted"}`}
              required
            >
              <option value="" disabled>
                Escolha o assunto
              </option>
              {ASSUNTOS.map((a) => (
                <option key={a.valor} value={a.valor} className="text-t-ink">
                  {a.texto}
                </option>
              ))}
            </select>
          </Campo>

          <Campo id="message" rotulo="Mensagem">
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="O que acontece hoje, quem faz e onde trava..."
              rows={4}
              className={`${CLASSE_CAMPO} resize-y py-3`}
            />
          </Campo>

          <div className="mt-[var(--space-xs)] flex flex-col-reverse gap-[var(--space-sm)] sm:flex-row sm:justify-end">
            <button type="button" onClick={onClose} className={CLASSE_BOTAO_SECUNDARIO}>
              Cancelar
            </button>
            <button type="submit" disabled={!isFormValid || isSubmitting} className={CLASSE_BOTAO_PRIMARIO}>
              <TextoEnvio enviando={isSubmitting}>Enviar</TextoEnvio>
            </button>
          </div>
        </form>

        <NotaPrivacidade onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
