import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConsultationFormProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ isOpen, onToggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = async (name: string, phone: string): Promise<boolean> => {
    const botToken = "7937084108:AAEk8qlqxFrMGDiGaNRZxlKHTu8vKbnR6ek";
    const chatId = "-1002254847074";
    const message = `🏠 Новая заявка на консультацию!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n\n📍 Источник: Сайт Древ'Ко`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML"
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendToTelegram(formData.name, formData.phone);
      
      if (success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в течение 30 минут",
        });
        
        setFormData({ name: "", phone: "" });
        
        // Dispatch custom event for analytics
        const event = new CustomEvent('formSubmitted', {
          detail: { type: 'consultation', name: formData.name, phone: formData.phone }
        });
        window.dispatchEvent(event);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке. Попробуйте позвонить нам: +7 (978) 553-30-97",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "Telegram",
      action: () => window.open("https://t.me/+79785533097", "_blank"),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp", 
      action: () => window.open("https://wa.me/79785533097", "_blank"),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:info@drevko-crimea.ru", "_blank"),
      color: "bg-red-500 hover:bg-red-600"
    },
    {
      icon: Phone,
      label: "Телефон",
      action: () => window.open("tel:+79785533097", "_blank"),
      color: "bg-primary hover:bg-primary/90"
    }
  ];

  if (!isOpen) {
    return (
      <div className="w-full">
        <Button 
          onClick={onToggle}
          size="lg"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90"
        >
          Получить консультацию
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <Button 
        onClick={onToggle}
        size="lg"
        className="w-full sm:w-auto bg-primary hover:bg-primary/90"
      >
        Получить консультацию
      </Button>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-center">Заявка на консультацию</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Имя *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Телефон *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#5a7c3a] hover:bg-[#4a6b2f] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправляем..." : "Отправить заявку"}
            </Button>
          </form>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-center text-muted-foreground mb-3">
              Или свяжитесь с нами удобным способом:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {contactMethods.map((method, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={method.action}
                  className={`${method.color} text-white border-0 hover:text-white`}
                >
                  <method.icon className="w-4 h-4 mr-1" />
                  {method.label}
                </Button>
              ))}
            </div>
          </div>
          
          <p className="text-xs text-center text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="text-primary hover:underline">политикой обработки персональных данных</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultationForm;