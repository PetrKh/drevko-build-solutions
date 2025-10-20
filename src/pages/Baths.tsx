import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

const Baths = () => {
  return (
    <>
      <Helmet>
        <title>Бани в Крыму - ДревКо | Строительство бань под ключ</title>
        <meta name="description" content="Строим бани в Крыму под ключ. От 180 000 руб. Утепление 150 мм, парная, комната отдыха. Печь в комплекте." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-background to-background/80">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/new-house-5.jpg" 
            alt="Баня"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Бани в Крыму
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Строим качественные бани с утеплением 150 мм. 
              Парная, комната отдыха, печь в комплекте. Готовые проекты под ключ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Посмотреть проекты
              </Button>
              <Button size="lg" variant="outline">
                Узнать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </>
  );
};

export default Baths;