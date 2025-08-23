
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendToTelegram = async (name: string, phone: string) => {
    const BOT_TOKEN = "YOUR_BOT_TOKEN"; // Замените на ваш токен бота
    const CHAT_ID = "YOUR_CHAT_ID"; // Замените на ID вашего канала
    
    const message = `🔔 Новая заявка на консультацию!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n\n⏰ Время: ${new Date().toLocaleString('ru-RU')}`;
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send to Telegram');
      }

      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Отправляем в Telegram
      const telegramSent = await sendToTelegram(formData.name, formData.phone);
      
      if (telegramSent) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в течение 15 минут.",
        });
        setFormData({
          name: "",
          phone: ""
        });
      } else {
        toast({
          title: "Ошибка отправки",
          description: "Попробуйте еще раз или свяжитесь с нами по телефону.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами по телефону.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-form" className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Получить консультацию
          </h2>
          <p className="text-lg text-muted-foreground">
            Оставьте заявку, и наш эксперт свяжется с вами для обсуждения вашего проекта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Заявка на консультацию</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    required
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    required
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-warm-brown text-primary-foreground"
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Контактная информация */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">Телефон</h3>
                    <p className="text-muted-foreground">+7 (978) 553-30-97</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Звоните с 8:00 до 20:00, без выходных
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@drevko-crimea.ru</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Отвечаем в течение 2 часов в рабочее время
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">Мессенджеры</h3>
                    <p className="text-muted-foreground">WhatsApp, Telegram</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Быстрая связь для срочных вопросов
                </p>
              </CardContent>
            </Card>

            <div className="bg-accent/10 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Гарантии качества
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Бесплатная консультация и выезд на участок</li>
                <li>• Договор с фиксированной стоимостью</li>
                <li>• Поэтапная оплата по факту работ</li>
                <li>• Официальная гарантия 1 год</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
