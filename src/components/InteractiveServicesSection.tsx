import { Home, Waves, Building, Wrench, TreePine, Mountain, Container, PenTool } from "lucide-react";

const services = [
  {
    title: "Деревянные дома",
    icon: Home,
    link: "/uslugi/derevyanie-doma",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png"
  },
  {
    title: "Бани",
    icon: Waves,
    link: "/uslugi/bani",
    image: "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png"
  },
  {
    title: "Мобильные бани",
    icon: Building,
    link: "/uslugi/mobilnye-bani",
    image: "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png"
  },
  {
    title: "Домокомплекты",
    icon: Wrench,
    link: "/uslugi/domokomplekty",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png"
  },
  {
    title: "Малые постройки",
    icon: TreePine,
    link: "/uslugi/malye-postroyki",
    image: "/lovable-uploads/70db4e4c-e77c-439a-a079-a9d809a7bcbe.png"
  },
  {
    title: "Сруб",
    icon: Mountain,
    link: "/uslugi/srub",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png"
  },
  {
    title: "Бытовки",
    icon: Container,
    link: "/uslugi/bytovki",
    image: "/lovable-uploads/70db4e4c-e77c-439a-a079-a9d809a7bcbe.png"
  },
  {
    title: "Индивидуальные проекты",
    icon: PenTool,
    link: "/uslugi/individualnye-proekty",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png"
  }
];

const InteractiveServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Наши услуги
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                className="group flex flex-col items-center p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-16 h-16 mb-3 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesSection;