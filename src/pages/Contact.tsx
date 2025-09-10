import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Контакты - Связаться с Drevko для строительства в Крыму</title>
        <meta name="description" content="Свяжитесь с нами для строительства каркасного дома, бани или хозблока в Крыму. Телефон, WhatsApp, email. Работаем без выходных с 8:00 до 20:00." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Консультируем бесплатно, 
              выезжаем на участок в любую точку Крыма.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+79785533097" 
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    +7 (978) 553-30-97
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Звоните в любое время
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Мессенджеры</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a 
                      href="https://wa.me/79785533097" 
                      className="block text-primary hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href="https://t.me/+79785533097" 
                      className="block text-primary hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:info@drevko-crimea.ru" 
                    className="text-primary hover:underline break-all"
                  >
                    info@drevko-crimea.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ответим в течение часа
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">с 8:00 до 20:00</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    без выходных
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Coverage Area */}
            <div className="mb-16">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>География работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-6">
                    Работаем по всему Крыму — выезжаем в любую точку полуострова
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      "Симферополь", "Ялта", "Евпатория", "Феодосия", 
                      "Алушта", "Судак", "Керчь", "Севастополь",
                      "Бахчисарай", "Джанкой", "Красноперекопск", "Армянск"
                    ].map((city, index) => (
                      <div key={index} className="bg-secondary/30 p-3 rounded-lg text-center text-sm">
                        {city}
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    И другие населённые пункты Крыма
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Buttons */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Быстрая связь</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+79785533097"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить сейчас
                </a>
                <a 
                  href="https://wa.me/79785533097"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Написать в WhatsApp
                </a>
                <a 
                  href="https://t.me/+79785533097"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <LeadForm />

        {/* FAQ */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "Выезжаете ли вы на участок бесплатно?",
                  answer: "Да, консультация и выезд на участок в пределах Крыма абсолютно бесплатны."
                },
                {
                  question: "Как быстро отвечаете на заявки?",
                  answer: "Обычно отвечаем в течение 15-30 минут в рабочее время. В выходные — в течение часа."
                },
                {
                  question: "Можно ли получить смету без выезда?",
                  answer: "Предварительную смету можем рассчитать дистанционно, но точная стоимость определяется после осмотра участка."
                },
                {
                  question: "В каких районах Крыма работаете?",
                  answer: "Работаем по всей территории Крыма — от Перекопа до Керчи, от Тарханкута до Судака."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;