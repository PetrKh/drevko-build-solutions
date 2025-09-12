import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewHero = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Строим бани, дома и хозблоки в Крыму
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Фиксированная цена. Гарантия 3 года. Под ключ — без скрытых доплат.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg mb-12 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            📞 Рассчитать стоимость бесплатно
          </Button>

          {/* Key benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "⏱️",
                title: "Сроки",
                description: "Сдаем вовремя — среднее время строительства: 28–45 дней"
              },
              {
                icon: "💰",
                title: "Цена",
                description: "Фиксированная — не меняем после начала работ"
              },
              {
                icon: "🛠️",
                title: "Гарантия",
                description: "3 года на постройку — если что-то пойдёт не так, приедем и исправим"
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Additional benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: "🧱",
                title: "Материалы",
                description: "Используем качественные материалы из Крыма — быстрая доставка, адекватные цены"
              },
              {
                icon: "👨‍🔧",
                title: "Бригада",
                description: "Собственная — не сдаём в субподряд, полностью контролируем процесс"
              },
              {
                icon: "📄",
                title: "Договор",
                description: "Оформляем с фиксированной стоимостью и сроками"
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;