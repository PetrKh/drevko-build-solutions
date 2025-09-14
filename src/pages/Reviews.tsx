import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

const reviews = [
  {
    id: 1,
    name: "Андрей",
    location: "Евпатория",
    project: "Баня 4×6",
    rating: 5,
    text: "Построили баню за 3 недели — как и обещали. Теперь у нас лучшая парная в посёлке! Ребята работают честно, качественно. Цену не меняли, сроки соблюдали. Рекомендую всем!",
    image: "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png"
  },
  {
    id: 2,
    name: "Ирина", 
    location: "Феодосия",
    project: "Утеплённая бытовка",
    rating: 5,
    text: "Бытовку сделали за 10 дней. Утеплили — зимой не дует. Спасибо за честность и сроки. Работали аккуратно, убрали за собой. Думаем заказать ещё хозблок.",
    image: "/lovable-uploads/6e31a715-f810-49a3-8156-cab6796b0e80.png"
  },
  {
    id: 3,
    name: "Сергей",
    location: "Алушта", 
    project: "Каркасный дом 6×8",
    rating: 5,
    text: "Дом построили за месяц с небольшим. Качество отличное, всё как в договоре. Никаких доплат и сюрпризов. Живём уже год — всё супер! Drevko — лучшие в Крыму.",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png"
  },
  {
    id: 4,
    name: "Ольга",
    location: "Ялта",
    project: "Дом 8×10", 
    rating: 5,
    text: "Построили дом за 38 дней. Всё чётко, без задержек. Теперь живём всей семьёй. Материалы качественные, работа на совесть. Соседи тоже хотят заказать у них дом.",
    image: "/lovable-uploads/70db4e4c-e77c-439a-a079-a9d809a7bcbe.png"
  }
];

const Reviews = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Отзывы клиентов - Реальные отзывы о строительстве в Крыму | Drevko</title>
        <meta name="description" content="Читайте реальные отзывы наших клиентов о строительстве каркасных домов, бань и хозблоков в Крыму. Честные мнения о качестве и сроках." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Что говорят наши клиенты
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные отзывы от людей, которые уже построили дома, бани и хозблоки 
              с нашей командой. Честные мнения о качестве работы и соблюдении сроков.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <Card key={review.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Header with avatar and rating */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={review.image} 
                          alt={`Фото проекта ${review.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-lg">{review.name}</h3>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{review.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {review.project}
                        </div>
                      </div>
                    </div>

                    {/* Review text */}
                    <div className="bg-secondary/30 rounded-lg p-4 relative">
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-secondary/30 rotate-45"></div>
                      <p className="text-foreground italic leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наша статистика</h2>
              <p className="text-muted-foreground">Цифры говорят сами за себя</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "5.0", label: "Средняя оценка", symbol: "★" },
                { number: "137", label: "Довольных клиентов" },
                { number: "98%", label: "Сдаём в срок" },
                { number: "0", label: "Жалоб за 2024 год" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}{stat.symbol}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why clients choose us */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Почему нас выбирают</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Честность",
                  description: "Фиксированная цена в договоре — никаких доплат и сюрпризов"
                },
                {
                  title: "Сроки", 
                  description: "Средний срок строительства 28 дней. Сдаём вовремя в 98% случаев"
                },
                {
                  title: "Качество",
                  description: "Собственная бригада, качественные материалы, гарантия 3 года"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Станьте нашим следующим довольным клиентом</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Оставьте заявку и убедитесь в качестве нашей работы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ConsultationForm 
                isOpen={isConsultationOpen} 
                onToggle={() => setIsConsultationOpen(!isConsultationOpen)} 
              />
              <a 
                href="tel:+79785533097"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors"
              >
                Позвонить нам
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reviews;