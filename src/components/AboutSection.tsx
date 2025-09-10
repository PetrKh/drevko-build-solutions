import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              О нас
            </h2>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Мы — команда крымчан с 8-летним опытом.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Строим только в Крыму.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    У нас своя бригада — не сдаём в субподряд.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Мы отвечаем за каждый этап.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png" 
                    alt="Команда Drevko"
                    className="rounded-lg w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">137</div>
                    <div className="text-sm">объектов</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">лет опыта</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">года гарантии</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;