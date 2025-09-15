import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Shield, Award, MapPin } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>О нас - Команда Drevko, строители каркасных домов в Крыму</title>
        <meta name="description" content="Познакомьтесь с командой Drevko - местные строители с 8-летним опытом. 137 построенных объектов, честная работа, гарантия 3 года." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Мы — Древ'Ко
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Команда местных строителей с 8-летним опытом.
            </p>
          </div>
        </section>

        {/* Main Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наша история</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Мы — команда местных строителей с 8-летним опытом.
                  </p>
                  <p>
                    Почему мы не сдаём в субподряд? Потому что видели, как "стройфирмы" подводят клиентов: 
                    срывают сроки, меняют цену, строят с ошибками.
                  </p>
                  <p>
                    Мы работаем честно, прозрачно, по договору. И отвечаем за результат.
                  </p>
                  <p>
                    Наша миссия — строить качественные каркасные дома, бани и хозблоки для крымчан 
                    и тех, кто выбрал наш полуостров для жизни.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png" 
                  alt="Команда Drevko на строительном объекте"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Чем мы отличаемся</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Собственная бригада",
                  description: "Не сдаём в субподряд. Полностью контролируем качество и сроки на каждом этапе."
                },
                {
                   icon: MapPin,
                   title: "Качественные материалы",
                   description: "Мы используем северный лес из Архангельска. Строим тёплые и долговечные дома."
                 },
                {
                  icon: Clock,
                  title: "Соблюдаем сроки",
                  description: "Средний срок строительства 28 дней. Сдаём вовремя в 98% случаев."
                },
                {
                  icon: Shield,
                  title: "Фиксированная цена",
                  description: "Цену в договоре не меняем. Никаких скрытых доплат и неприятных сюрпризов."
                },
                {
                  icon: Award,
                  title: "Гарантия 3 года",
                  description: "Полная гарантия на все виды работ. Если что-то пойдёт не так — приедем и исправим."
                },
                {
                  icon: CheckCircle,
                  title: "Честность",
                  description: "Говорим как есть. Не обещаем невозможного. Делаем так, как договорились."
                }
              ].map((item, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Coverage Area */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">География работы</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Работаем по всему Крыму — от Симферополя до Ялты, Феодосии, Евпатории
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {["Симферополь", "Ялта", "Евпатория", "Феодосия", "Алушта", "Судак", "Керчь", "Севастополь"].map((city, index) => (
                <div key={index} className="bg-card p-3 rounded-lg text-sm font-medium">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;