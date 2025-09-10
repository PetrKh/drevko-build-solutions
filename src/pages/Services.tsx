import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, UtensilsCrossed, Warehouse, TreePine } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Каркасные дома",
    price: "От 1,2 млн руб.",
    description: "Популярные размеры: 6×8, 6×9, 8×10 м. Подходит для постоянного проживания. Полная отделка под ключ.",
    features: [
      "Утепление 200 мм",
      "Окна и двери",
      "Электрика и сантехника",
      "Чистовая отделка"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Бани",
    price: "От 180 000 руб.",
    description: "Готовые проекты: 4×4, 4×5, 4×6 м. Утепление 150 мм, парная, комната отдыха.",
    features: [
      "Парная с полками",
      "Комната отдыха",
      "Предбанник",
      "Печь в комплекте"
    ]
  },
  {
    icon: Warehouse,
    title: "Хозблоки и бытовки",
    price: "От 40 000 руб.",
    description: "Можно утеплить для проживания. Под ключ: с окнами, дверью, электрикой.",
    features: [
      "Каркас из бруса",
      "Утепление по желанию",
      "Окна и двери",
      "Электропроводка"
    ]
  },
  {
    icon: TreePine,
    title: "Беседки и веранды",
    price: "От 25 000 руб.",
    description: "Открытые и закрытые варианты. Различные размеры и дизайны под ваш участок.",
    features: [
      "Открытые беседки",
      "Закрытые веранды",
      "Мангальные зоны",
      "Нестандартные проекты"
    ]
  }
];

const Services = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Услуги - Строительство каркасных домов, бань, хозблоков в Крыму | Drevko</title>
        <meta name="description" content="Полный цикл строительства каркасных домов, бань и хозблоков в Крыму. От проектирования до сдачи под ключ. Гарантия 3 года." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Наши услуги
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Строим под ключ — от фундамента до сдачи. Мы предлагаем полный цикл строительства: 
              проектирование, закупка материалов, монтаж, сдача в эксплуатацию.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {service.price}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={scrollToForm}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Заказать расчёт
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Консультация", desc: "Бесплатный выезд на участок и расчёт стоимости" },
                { step: "02", title: "Договор", desc: "Подписываем договор с фиксированной ценой и сроками" },
                { step: "03", title: "Строительство", desc: "Возводим объект силами собственной бригады" },
                { step: "04", title: "Сдача", desc: "Сдаём готовый объект с гарантией 3 года" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать строительство?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Оставьте заявку и получите точный расчёт стоимости за 24 часа
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToForm} className="bg-primary hover:bg-primary/90">
                Получить расчёт
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+79785533097">Позвонить сейчас</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;