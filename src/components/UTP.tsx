import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Award, Phone, FileText } from "lucide-react";

const UTP = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Качественно",
      description: "Используем только проверенные материалы и технологии"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Честно и прозрачно",
      description: "Открытое ценообразование без скрытых платежей"
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "С полным отчетом",
      description: "Детальные отчеты на каждом этапе строительства"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Премиум сервис",
      description: "Индивидуальный подход и высокий уровень сервиса"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Гарантия качества",
      description: "Официальная гарантия на все выполненные работы"
    },
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: "Всегда на связи",
      description: "Круглосуточная поддержка на всех этапах"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Почему выбирают нас?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Для занятых людей, которые ценят качество и хотят получить готовый дом без хлопот
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow bg-background">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Наше уникальное предложение
            </h3>
            <p className="text-lg text-muted-foreground">
              лучшее будущее
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UTP;