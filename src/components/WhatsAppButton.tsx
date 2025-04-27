
import { WhatsApp } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5579988774996?text=Olá! Vim pelo seu site e gostaria de saber mais sobre a economia na conta de energia.", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center gap-2"
    >
      <WhatsApp className="h-6 w-6" />
      <span className="hidden md:inline">Fale Conosco</span>
    </Button>
  );
};

export default WhatsAppButton;
