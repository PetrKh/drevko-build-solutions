import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Каркасные дома",
    image: "/lovable-uploads/7ab5cb9c-8c9a-416f-87fb-b0fd219886c8.png",
    link: "/uslugi/derevyanie-doma"
  },
  {
    id: 2,
    title: "Бани",
    image: "/lovable-uploads/0ac841fc-2c4a-49ac-9845-c8463b91c123.png",
    link: "/uslugi/bani"
  },
  {
    id: 3,
    title: "Мобильные бани",
    image: "/lovable-uploads/756d4553-ca6b-4c5b-bbc9-00ce0b9616ef.png",
    link: "/uslugi/mobilnye-bani"
  },
  {
    id: 4,
    title: "Домокомплекты",
    image: "/lovable-uploads/0114cde6-37ca-400c-8ad2-a9547987c29c.png",
    link: "/uslugi/domokomplekty"
  },
  {
    id: 5,
    title: "Малые постройки",
    image: "/lovable-uploads/d7451940-8ce6-4dd4-afde-8b4b804b715f.png",
    link: "/uslugi/malye-postroyki"
  },
  {
    id: 6,
    title: "Бытовки",
    image: "/lovable-uploads/d86b8609-a032-4086-bbe1-51444f874c38.png",
    link: "/uslugi/bytovki"
  },
  {
    id: 7,
    title: "Индивидуальные проекты",
    image: "/lovable-uploads/2be17eab-5b75-4839-ae97-c33ebcd64567.png",
    link: "/uslugi/individualnye-proekty"
  }
];

const ServicesNavigation = () => {
  return (
    <section className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-foreground mb-4 text-center">
          Наши услуги
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group flex flex-col items-center p-3 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-3 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-foreground text-center leading-tight">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNavigation;