import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

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
      // Enviar dados para o webhook do n8n
      const webhookUrl = 'https://n8nwebhooks01.brhorn.com/webhook/5572cf97-cc95-4241-949a-02082b1b6ead';
      const credentials = import.meta.env.VITE_WEBHOOK_CREDENTIALS;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (credentials) {
        const encodedCredentials = credentials.includes(':') ? btoa(credentials) : credentials;
        headers['Authorization'] = `Basic ${encodedCredentials}`;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || '',
          sector: formData.sector,
          message: formData.message || '',
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
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
        description: "Tente novamente ou entre em contato conosco diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.sector;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto bg-card border border-border text-foreground">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-display text-3xl font-normal text-nanquim tracking-tight">
              Descreva o seu caso
            </DialogTitle>
          </div>
          <p className="text-muted-foreground">
            Conte o que trava hoje. Respondo em até 1 dia útil pelo canal que você preferir.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name" className="text-foreground">Nome completo *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-projeto rounded"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">Seu melhor e-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-projeto rounded"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-projeto rounded"
                required
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-foreground">Empresa</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da sua empresa"
                className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-projeto rounded"
              />
            </div>

            <div>
              <Label htmlFor="sector" className="text-foreground">Assunto *</Label>
              <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)}>
                <SelectTrigger className="bg-background border-border text-foreground rounded">
                  <SelectValue placeholder="Escolha o assunto" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border text-foreground">
                  <SelectItem value="agente-whatsapp">Agente no WhatsApp</SelectItem>
                  <SelectItem value="leitura-documentos">Leitura de documentos</SelectItem>
                  <SelectItem value="configuracao-agentes">Configuração de agentes</SelectItem>
                  <SelectItem value="software-sob-medida">Software sob medida</SelectItem>
                  <SelectItem value="axion">Axion (piloto)</SelectItem>
                  <SelectItem value="viaserra">ViaSerra / Pousadas</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground">Mensagem</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="O que acontece hoje, quem faz e onde trava..."
                rows={3}
                className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-projeto rounded"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border text-foreground bg-transparent hover:bg-secondary rounded"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1 bg-projeto text-papel hover:bg-[#1a5fcc] rounded"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-papel border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Enviar
                </div>
              )}
            </Button>
          </div>
        </form>

        <div className="text-xs text-muted-foreground text-center pt-3 border-t border-border">
          Seus dados são usados só para responder este contato.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
