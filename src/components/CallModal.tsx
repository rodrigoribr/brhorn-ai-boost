import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PhoneCall } from "lucide-react";

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
      <DialogContent className="max-w-sm mx-auto bg-zinc-950 border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white tracking-tight">
            Quero que me liguem
          </DialogTitle>
          <p className="text-zinc-400">Deixe seu nome e telefone, ligamos para você.</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="call-name" className="text-zinc-300">
              Nome
            </Label>
            <Input
              id="call-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Seu nome"
              className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 focus:ring-0 rounded-sm"
              required
            />
          </div>

          <div>
            <Label htmlFor="call-phone" className="text-zinc-300">
              Telefone/WhatsApp
            </Label>
            <Input
              id="call-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="(11) 99999-9999"
              className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30 focus:ring-0 rounded-sm"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
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
                  <PhoneCall className="w-4 h-4" />
                  Quero receber a ligação
                </div>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallModal;
