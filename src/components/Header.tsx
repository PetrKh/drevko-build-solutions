import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">Д</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Древко</h1>
            <p className="text-xs text-muted-foreground">Центр каркасных технологий</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            О компании
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
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