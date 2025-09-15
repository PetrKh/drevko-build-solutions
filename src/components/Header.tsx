
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";

const Header = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="relative">
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1a2ec291-5498-418e-863a-44af5ab64aaa.png" 
                alt="Древ'Ко логотип" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Древ'Ко</h1>
              <p className="text-xs text-muted-foreground">Центр каркасных технологий</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="/reviews" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <Button 
            onClick={() => setIsConsultationOpen(!isConsultationOpen)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Получить консультацию
          </Button>
        </div>
        
        {/* Consultation Form Dropdown */}
        {isConsultationOpen && (
          <div className="absolute top-full right-0 z-50 p-4 bg-background border border-border shadow-lg">
            <div className="w-80">
              <ConsultationForm 
                isOpen={true} 
                onToggle={() => setIsConsultationOpen(false)} 
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
