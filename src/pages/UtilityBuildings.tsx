import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Phone, MessageCircle, Star, CheckCircle, Clock, Shield, Truck, Zap, Building, Factory } from "lucide-react";

const UtilityBuildings = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Хозблоки и бытовки в Крыму - Древ'Ко | Бытовка за 3 дня от производителя</title>
        <meta name="description" content="Производим деревянные и металлические бытовки, блок-контейнеры в Крыму. Сборка за 3 дня прямо на участке. Цены от производителя. Доставка по всему Крыму." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-background to-background/80">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/new-house-6.jpg" 
            alt="Деревянная бытовка на крымском пейзаже"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img src="/lovable-uploads/new-house-1.jpg" alt="Логотип Древ'Ко" className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Бытовка за 3 дня — <br />
              соберём прямо у вас на участке
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Производим деревянные и металлические бытовки, блок-контейнеры и модульные здания в Крыму. 
              Низкие цены от производителя. Доставка и сборка по всему полуострову.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Позвонить и рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как получить свою бытовку</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              { number: "1", title: "Консультация", text: "Звонок или заявка, бесплатный расчёт", icon: Phone },
              { number: "2", title: "Договор", text: "Подписание, небольшой аванс", icon: CheckCircle },
              { number: "3", title: "Изготовление", text: "От 3 дней (есть в наличии)", icon: Factory },
              { number: "4", title: "Доставка и сборка", text: "Прямо на ваш участок", icon: Truck }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <p className="text-center text-lg text-muted-foreground">
            Весь процесс — от звонка до сборки — занимает меньше недели.
          </p>
          
          <div className="mt-8 text-center">
            <img src="/lovable-uploads/new-house-2.jpg" alt="Процесс сборки на участке" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Types of Buildings */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Выберите подходящий тип</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img src="/lovable-uploads/new-house-3.jpg" alt="Деревянная бытовка" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl">Деревянные бытовки</CardTitle>
                <CardDescription className="text-lg italic">Идеальна для дачи, жилья, сезонного проживания</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Экологичность</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Тепло</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Можно сделать пристройку</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Естественный вид</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img src="/lovable-uploads/new-house-4.jpg" alt="Металлический блок-контейнер" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl">Металлические блок-контейнеры</CardTitle>
                <CardDescription className="text-lg italic">Надёжно, прочно, масштабируемо</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Можно ставить друг на друга</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Долгий срок службы</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Под офисы и склады</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Высокая прочность</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="mr-2 h-5 w-5" />
              Проконсультироваться бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Modular Buildings */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Модульные здания под ключ</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Создаём двухэтажные дома, офисы, магазины, посты охраны и склады из блок-контейнеров. 
                Можно подключить электрику, сантехнику, утеплить и отделать внутри.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Узнать цену на модульное здание
              </Button>
            </div>
            <div>
              <img src="/lovable-uploads/new-house-5.jpg" alt="Модульное здание" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              { icon: Factory, title: "Собственное производство", text: "Цены ниже" },
              { icon: Building, title: "Сборка на участке", text: "Не нужно освобождать место" },
              { icon: Shield, title: "Гарантия 2 года", text: "На конструкцию и покрытие" },
              { icon: Truck, title: "Доставка по Крыму", text: "Включена в стоимость" },
              { icon: Zap, title: "Подключение коммуникаций", text: "Электрика и сантехника" },
              { icon: Clock, title: "Готовые в наличии", text: "Срок от 1 дня" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <p className="text-center text-lg text-muted-foreground mb-8">
            Вы платите за качество, а не за посредников.
          </p>
          
          <div className="text-center">
            <img src="/lovable-uploads/new-house-6.jpg" alt="Производственная площадка" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши объекты по Крыму</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { src: "/lovable-uploads/new-house-7.jpg", alt: "Процесс сборки на участке" },
              { src: "/lovable-uploads/new-house-8.jpg", alt: "Готовая деревянная бытовка" },
              { src: "/lovable-uploads/new-house-9.jpg", alt: "Металлический контейнер" },
              { src: "/lovable-uploads/new-house-10.webp", alt: "Модульное здание" }
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground mb-6">
            Собираем по всему Крыму: от Ялты до Керчи
          </p>
          
          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 h-5 w-5" />
              Посмотреть больше работ в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Что говорят клиенты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Алексей",
                location: "Симферополь",
                text: "Заказали бытовку для рабочих — собрали за один день. Ни одной царапины, всё как в договоре. Спасибо!"
              },
              {
                name: "Ольга",
                location: "Феодосия", 
                text: "Купили для дачи. Через год сделали пристройку — смотрится как дом. Очень довольны!"
              },
              {
                name: "ИП Смирнов",
                location: "Евпатория",
                text: "Нужен был склад — сделали модуль из двух контейнеров. Утеплили, провели свет. Отличное решение!"
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Цены от производителя — без наценок</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Точная цена зависит от размера, материала и комплектации. Вот ориентиры:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span>Деревянная бытовка 3×2 м</span>
                  <span className="font-bold text-lg">от 95 000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span>Металлический блок-контейнер 6×2,4 м</span>
                  <span className="font-bold text-lg">от 110 000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span>Модульное здание (2 этажа)</span>
                  <span className="font-bold text-lg">от 280 000 ₽</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 italic">
                * Цена включает доставку и сборку по Крыму.
              </p>
              
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Phone className="mr-2 h-5 w-5" />
                Узнать точную цену за 5 минут
              </Button>
            </div>
            
            <div>
              <img src="/lovable-uploads/new-house-1.jpg" alt="Интерьер бытовки" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать?</h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Оставьте заявку — мы бесплатно рассчитаем стоимость, предложим оптимальный вариант 
                и пришлём фото готовых моделей.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Сообщение (необязательно)"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Ваши данные никуда не передаются. Ответим в течение 10 минут
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default UtilityBuildings;