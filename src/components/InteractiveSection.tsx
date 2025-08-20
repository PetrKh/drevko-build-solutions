import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, TreePine, Hammer } from "lucide-react";

const InteractiveSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Загородный дом",
      area: "150 м²",
      price: "от 3 500 000 ₽",
      description: "Классический каркасный дом с современной планировкой",
      features: ["3 спальни", "2 санузла", "Гостиная-кухня", "Терраса"],
      icon: <Home className="w-6 h-6" />
    },
    {
      id: 1,
      title: "Дом премиум",
      area: "250 м²",
      price: "от 6 000 000 ₽",
      description: "Просторный дом с панорамным остеклением",
      features: ["4 спальни", "3 санузла", "Кабинет", "Гардеробная", "Сауна"],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Баня-дом",
      area: "80 м²",
      price: "от 2 200 000 ₽",
      description: "Компактный дом с парной и комнатой отдыха",
      features: ["Парная", "Комната отдыха", "Кухня", "Терраса"],
      icon: <TreePine className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Хозблок премиум",
      area: "40 м²",
      price: "от 800 000 ₽",
      description: "Многофункциональное хозяйственное строение",
      features: ["Мастерская", "Склад", "Гараж", "Навес"],
      icon: <Hammer className="w-6 h-6" />
    }
  ];

  return (
    <section id="interactive-section" className="py-20 px-4 bg-gradient-to-b from-background to-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Наши проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите тип строения и узнайте больше о наших возможностях
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Интерактивная панель */}
          <div className="space-y-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeProject === project.id
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setActiveProject(project.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeProject === project.id ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.area}</p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <p className="text-lg font-bold text-primary">{project.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Детальная информация */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {projects[activeProject].title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {projects[activeProject].description}
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span>Площадь: {projects[activeProject].area}</span>
                <span className="text-primary font-semibold">{projects[activeProject].price}</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-3">Особенности:</h4>
              <div className="grid grid-cols-2 gap-2">
                {projects[activeProject].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-primary hover:bg-warm-brown text-primary-foreground"
            >
              Получить расчет стоимости
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;