const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">Д</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Древ'Ко</h3>
                <p className="text-sm opacity-80">Центр каркасных технологий</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Качественное каркасное строительство для людей, которые ценят время и комфорт.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>+7 (978) 553-30-97</p>
              <p>info@drevko-crimea.ru</p>
              <p>Режим работы: 8:00-20:00</p>
              <p>Без выходных</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>Каркасные дома</p>
              <p>Бани и сауны</p>
              <p>Хозяйственные постройки</p>
              <p>Проектирование</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 Центр каркасных технологий "Древ'Ко". Все права защищены.
            </p>
            <div className="flex space-x-4 text-sm opacity-80">
              <a href="/privacy" className="hover:opacity-100 transition-opacity">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
