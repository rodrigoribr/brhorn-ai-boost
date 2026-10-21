import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

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
        description: "Vamos te ligar em breve.",
      });

      setFormData({ name: "", phone: "" });
      onClose();
    } catch (error) {
      console.error("Erro ao enviar pedido de ligação:", error);
      toast({
        title: "Erro ao enviar pedido",
        description: "Tente novamente ou entre em contato conosco diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto bg-card border border-border text-foreground">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl font-normal text-nanquim tracking-tight">
            Quero que me liguem
          </DialogTitle>
          <p className="text-muted-foreground">Deixe seu nome e telefone, ligamos para você.</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="call-name" className="text-foreground">
              Nome
            </Label>
            <Input
              id="call-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Seu nome"
              className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-projeto rounded"
              required
            />
          </div>

          <div>
            <Label htmlFor="call-phone" className="text-foreground">
              Telefone/WhatsApp
            </Label>
            <Input
              id="call-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="(11) 99999-9999"
              className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-projeto rounded"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
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
                  <PhoneCall className="w-4 h-4" />
                  Quero receber a ligação
                </div>
              )}
            </Button>
          </div>
        </form>

        <div className="text-xs text-muted-foreground text-center pt-3 border-t border-border">
          Seus dados são usados só para responder este contato. Veja a{" "}
          <Link to="/politica-privacidade" onClick={onClose} className="underline underline-offset-4 hover:text-nanquim">
            Política de Privacidade
          </Link>
          .
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallModal;
