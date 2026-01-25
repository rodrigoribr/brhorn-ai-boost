import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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
        description: "Nossa equipe entrará em contato em até 24 horas.",
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
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white tracking-tight">
              Fale com um Especialista
            </DialogTitle>
          </div>
          <p className="text-zinc-400">
            Receba uma demonstração personalizada e descubra como podemos automatizar seu negócio.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name" className="text-zinc-300">Nome completo *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 focus:ring-0 rounded-sm"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-zinc-300">E-mail corporativo *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 focus:ring-0 rounded-sm"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-zinc-300">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 focus:ring-0 rounded-sm"
                required
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-zinc-300">Empresa</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da sua empresa"
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 focus:ring-0 rounded-sm"
              />
            </div>

            <div>
              <Label htmlFor="sector" className="text-zinc-300">Setor *</Label>
              <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-sm">
                  <SelectValue placeholder="Selecione seu setor" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white">
                  <SelectItem value="clinica">Clínica/Saúde</SelectItem>
                  <SelectItem value="imobiliaria">Imobiliária</SelectItem>
                  <SelectItem value="profissional-liberal">Profissional Liberal</SelectItem>
                  <SelectItem value="marketing">Marketing/Agência</SelectItem>
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="servicos">Serviços</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-zinc-300">Mensagem</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Conte-nos sobre seu negócio e objetivos..."
                rows={3}
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 focus:ring-0 rounded-sm"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-white/10 text-white bg-transparent hover:bg-white hover:text-black rounded-sm uppercase tracking-wider text-xs font-bold"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1 bg-white text-black hover:bg-zinc-200 rounded-sm uppercase tracking-wider text-xs font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Solicitar Contato
                </div>
              )}
            </Button>
          </div>
        </form>

        <div className="text-[10px] text-zinc-500 text-center pt-2 border-t border-white/5 uppercase tracking-widest">
          Seus dados estão protegidos
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;