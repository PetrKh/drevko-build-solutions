import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Каркасный дом 6×8 в Алуште",
    type: "Дом",
    size: "6×8 м",
    duration: "32 дня",
    location: "Алушта",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png",
    description: "Дом для постоянного проживания с утеплением 200 мм"
  },
  {
    id: 2,
    title: "Баня 4×6 в Евпатории", 
    type: "Баня",
    size: "4×6 м",
    duration: "21 день",
    location: "Евпатория",
    image: "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png",
    description: "Баня с парной, комнатой отдыха и предбанником"
  },
  {
    id: 3,
    title: "Хозблок 3×4 в Симферополе",
    type: "Хозблок", 
    size: "3×4 м",
    duration: "7 дней",
    location: "Симферополь",
    image: "/lovable-uploads/70db4e4c-e77c-439a-a079-a9d809a7bcbe.png",
    description: "Утеплённый хозблок для инструментов и садового инвентаря"
  },
  {
    id: 4,
    title: "Бытовка 6×3 в Феодосии",
    type: "Бытовка",
    size: "6×3 м", 
    duration: "10 дней",
    location: "Феодосия",
    image: "/lovable-uploads/6e31a715-f810-49a3-8156-cab6796b0e80.png",
    description: "Утеплённая бытовка для временного проживания рабочих"
  },
  {
    id: 5,
    title: "Дом 8×10 в Ялте",
    type: "Дом",
    size: "8×10 м",
    duration: "45 дней", 
    location: "Ялта",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png",
    description: "Двухэтажный каркасный дом с террасой и балконом"
  },
  {
    id: 6,
    title: "Баня 4×5 в Судаке",
    type: "Баня",
    size: "4×5 м",
    duration: "18 дней",
    location: "Судак", 
    image: "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png",
    description: "Компактная баня с электрической печью"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Дом": return "bg-blue-100 text-blue-800";
    case "Баня": return "bg-green-100 text-green-800";
    case "Хозблок": return "bg-yellow-100 text-yellow-800";
    case "Бытовка": return "bg-purple-100 text-purple-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Портфолио - Построенные дома, бани и хозблоки в Крыму | Drevko</title>
        <meta name="description" content="Посмотрите наши реальные проекты - каркасные дома, бани и хозблоки, построенные за последние 2 года по всему Крыму." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Наши проекты
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные объекты, построенные за последние 2 года по всему Крыму. 
              137 завершённых проектов с соблюдением сроков и качества.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Размер:</span>
                        <span className="font-medium">{project.size}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Срок:</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Локация:</span>
                        <span className="font-medium">{project.location}</span>
                      </div>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "137", label: "Объектов построено" },
                { number: "8", label: "Лет опыта" },
                { number: "28", label: "Средний срок (дней)" },
                { number: "3", label: "Года гарантии" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Хотите такой же проект?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Оставьте заявку и мы рассчитаем стоимость вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors"
              >
                Получить расчёт
              </button>
              <a 
                href="tel:+79785533097"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors"
              >
                Позвонить сейчас
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;