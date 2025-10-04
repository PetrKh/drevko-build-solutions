import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Каркасные дома",
    price: "От 1,2 млн руб.",
    sizes: "6×8, 6×9, 8×10 м",
    description: "Подходит для постоянного проживания",
    image: "/lovable-uploads/new-house-4.jpg",
    features: ["Утепление 200 мм", "Под ключ", "Чистовая отделка"]
  },
  {
    title: "Бани",
    price: "От 180 000 руб.",
    sizes: "4×4, 4×5, 4×6 м",
    description: "Утепление 150 мм, парная, комната отдыха",
    image: "/lovable-uploads/new-house-5.jpg",
    features: ["Готовые проекты", "Печь в комплекте", "Под ключ"]
  },
  {
    title: "Хозблоки и бытовки",
    price: "От 40 000 руб.",
    sizes: "различные размеры",
    description: "Можно утеплить — для проживания",
    image: "/lovable-uploads/new-house-6.jpg",
    features: ["С окнами и дверью", "Электрика", "Под ключ"]
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (index: number) => {
    if (index === 0) {
      navigate('/frame-houses');
    } else if (index === 1) {
      navigate('/baths');
    } else if (index === 2) {
      navigate('/uslugi/bytovki');
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Строим под ключ — от фундамента до сдачи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => handleServiceClick(index)}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-bold text-lg">{service.price}</div>
                  <div className="text-white/80 text-sm">{service.sizes}</div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(index);
                  }}
                  className="w-full bg-primary hover:bg-primary/90"
                  variant="default"
                >
                  {index === 0 ? "Подробнее" : index === 1 ? "Посмотреть проекты" : "Рассчитать стоимость"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;