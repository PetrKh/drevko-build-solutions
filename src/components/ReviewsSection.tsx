import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Андрей",
    location: "Евпатория",
    text: "Построили баню за 3 недели — как и обещали. Теперь у нас лучшая парная в посёлке!",
    image: "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png",
    rating: 5
  },
  {
    name: "Ирина",
    location: "Феодосия", 
    text: "Бытовку сделали за 10 дней. Утеплили — зимой не дует. Спасибо за честность и сроки.",
    image: "/lovable-uploads/6e31a715-f810-49a3-8156-cab6796b0e80.png",
    rating: 5
  }
];

const ReviewsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground">
            Честные мнения о нашей работе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={review.image} 
                      alt={`Проект для ${review.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold">{review.name}</h3>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-sm">{review.location}</span>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4 relative">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-secondary/30 rotate-45"></div>
                  <p className="text-foreground italic">
                    "{review.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;