
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="/lovable-uploads/70db4e4c-e77c-439a-a079-a9d809a7bcbe.png" 
              alt="Древко логотип" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Древко</h1>
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
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-warm-brown text-primary-foreground"
        >
          Получить консультацию
        </Button>
      </div>
    </header>
  );
};

export default Header;
