import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Баня 4×6 в Алуште",
    duration: "21 день",
    description: "Построена за 21 день. Утепление 200 мм. Клиент использует круглый год.",
    image: "/lovable-uploads/new-house-1.jpg"
  },
  {
    title: "Дом 6×8 в Симферополе",
    duration: "32 дня",
    description: "Каркасный дом для постоянного проживания. Полная отделка под ключ.",
    image: "/lovable-uploads/new-house-2.jpg"
  },
  {
    title: "Хозблок 3×4 в Евпатории",
    duration: "7 дней",
    description: "Утеплённый хозблок с электричеством. Быстро и качественно.",
    image: "/lovable-uploads/new-house-3.jpg"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Наши проекты
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные объекты, построенные нашей командой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.duration}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <a href="/portfolio">Посмотреть все проекты</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;