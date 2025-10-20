import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности - ДревКо</title>
        <meta name="description" content="Политика в отношении обработки персональных данных компании ДревКо" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-foreground mb-8">Политика в отношении обработки персональных данных</h1>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Общие положения</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению их безопасности.
            </p>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Оператор сайта <strong>drevko-crimea.ru</strong> (далее — Оператор) ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <strong>https://drevko-crimea.ru</strong>.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Основные понятия, используемые в Политике</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-foreground/80"><strong>Автоматизированная обработка персональных данных</strong> — обработка персональных данных с помощью средств вычислительной техники.</li>
              <li className="text-foreground/80"><strong>Блокирование персональных данных</strong> — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</li>
              <li className="text-foreground/80"><strong>Сайт</strong> — совокупность веб-страниц, объединённых общим доменным именем, расположенных в сети Интернет по адресу <strong>drevko-crimea.ru</strong>.</li>
              <li className="text-foreground/80"><strong>Пользователь</strong> — посетитель сайта, оставляющий свои данные через формы обратной связи.</li>
              <li className="text-foreground/80"><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Оператор может обрабатывать следующие персональные данные Пользователя</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-foreground/80">Фамилия, имя, отчество</li>
              <li className="text-foreground/80">Номер телефона</li>
              <li className="text-foreground/80">Адрес электронной почты</li>
              <li className="text-foreground/80">IP-адрес, данные файлов cookie, информация о браузере</li>
            </ul>
            <p className="text-foreground/80 mb-2 font-medium">Цели обработки персональных данных:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li className="text-foreground/80">Осуществление связи с Пользователем (обратная связь по заявкам, консультации).</li>
              <li className="text-foreground/80">Уточнение деталей заказа.</li>
              <li className="text-foreground/80">Предоставление информации о товарах и услугах.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Принципы обработки персональных данных</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Обработка персональных данных осуществляется на законной и справедливой основе. Оператор не раскрывает персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Хранение и защита персональных данных</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Персональные данные Пользователя хранятся в течение срока, необходимого для выполнения целей обработки. Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Права субъекта персональных данных</h2>
            <p className="text-foreground/80 mb-2">Пользователь имеет право:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-foreground/80">Получать информацию о своих персональных данных.</li>
              <li className="text-foreground/80">Требовать уточнения, блокирования или удаления своих данных.</li>
              <li className="text-foreground/80">Отозвать согласие на обработку в любой момент.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Контактные данные Оператора</h2>
            <p className="text-foreground/80 mb-2">Если у вас есть вопросы по обработке персональных данных, вы можете обратиться:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-foreground/80"><strong>Оператор:</strong> Индивидуальный предприниматель</li>
              <li className="text-foreground/80"><strong>ФИО:</strong> Харькин Петр Николаевич</li>
              <li className="text-foreground/80"><strong>ИНН:</strong> 111603366951</li>
              <li className="text-foreground/80"><strong>ОГРНИП/ОГРН:</strong> 323920000011270</li>
              <li className="text-foreground/80"><strong>Адрес:</strong> Республика Крым, г. Симферополь</li>
              <li className="text-foreground/80"><strong>Email:</strong> info@drevko-crimea.ru</li>
              <li className="text-foreground/80"><strong>Телефон:</strong> +7 (978) 553-30-97</li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
};

export default Privacy;