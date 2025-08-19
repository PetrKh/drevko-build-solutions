import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-cream to-background">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Каркасное строительство
          <span className="block text-primary">премиум-класса</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Качественно, честно, прозрачно. Строим дома для занятых людей с полным сервисом и гарантией.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg"
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-warm-brown text-primary-foreground px-8"
          >
            Заказать консультацию
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('interactive-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Посмотреть проекты
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">лет опыта</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">готовых домов</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">поддержка</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;