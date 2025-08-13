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
      const webhookUrl = 'https://webhooks.n8n.brhorn.com/webhook/de921d77-9893-4e42-8324-06e955f1928d';
      const credentials = btoa('brhorn_form:ofXbNo81TsteAJf6HXfzCNVyu55AY36a');
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        },
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
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground">
              Fale com um Especialista
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            Receba uma demonstração personalizada e descubra como podemos automatizar seu negócio.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail corporativo *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            <div>
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da sua empresa"
              />
            </div>

            <div>
              <Label htmlFor="sector">Setor *</Label>
              <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seu setor" />
                </SelectTrigger>
                <SelectContent>
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
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Conte-nos sobre seu negócio e objetivos..."
                rows={3}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              variant="cta"
              disabled={!isFormValid || isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
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

        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
          Seus dados estão protegidos pela nossa política de privacidade
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;