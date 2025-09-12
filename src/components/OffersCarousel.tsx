import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const offers = [
  {
    id: 1,
    title: "Хочешь жить в доме? Поможем реализовать мечту!",
    subtitle: "Строим дома, бани, гаражи, времянки, веранды и т.п.!",
    buttonText: "→ На выгодных условиях!",
    link: "/uslugi/derevyanie-doma",
    image: "/lovable-uploads/7ab5cb9c-8c9a-416f-87fb-b0fd219886c8.png"
  },
  {
    id: 2,
    title: "Бесплатный выезд на участок",
    subtitle: "Консультация эксперта — без оплаты",
    buttonText: "→ Получить консультацию",
    link: "/contact",
    image: "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png"
  },
  {
    id: 3,
    title: "Гарантия 3 года",
    subtitle: "Официальная гарантия на все работы",
    buttonText: "→ Узнать больше",
    link: "/about",
    image: "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png"
  },
  {
    id: 4,
    title: "Работаем по договору",
    subtitle: "Ваша уверенность на всех этапах",
    buttonText: "→ Подробнее",
    link: "/about",
    image: "/lovable-uploads/6e31a715-f810-49a3-8156-cab6796b0e80.png"
  }
];

const OffersCarousel = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[autoplay.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.reset()}
        >
          <CarouselContent>
            {offers.map((offer) => (
              <CarouselItem key={offer.id}>
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  {/* Background Image with Overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${offer.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-4xl">
                      {offer.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                      {offer.subtitle}
                    </p>
                    <Button 
                      size="lg"
                      onClick={() => window.location.href = offer.link}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {offer.buttonText}
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default OffersCarousel;