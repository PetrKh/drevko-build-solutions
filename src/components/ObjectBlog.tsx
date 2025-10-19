import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Ruler, Edit, Check, Trash2, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ObjectBlogProps {
  objectNumber: number;
}

const blogData = {
  1: {
    date: "15 марта 2024",
    title: "Каркасный дом 6×8 в Алуште",
    location: "Алушта",
    duration: "32 дня",
    size: "6×8 м",
    photos: [
      "/lovable-uploads/new-house-8.jpg",
      "/lovable-uploads/new-house-9.jpg",
      "/lovable-uploads/new-house-10.webp"
    ],
    content: `Завершили строительство каркасного дома для постоянного проживания в живописной Алуште. 

Особенности проекта:
• Утепление базальтовой ватой 200 мм
• Пароизоляция и ветрозащита по всем правилам
• Внешняя отделка имитацией бруса
• Внутренняя отделка вагонкой

Клиенты остались довольны качеством и скоростью выполнения работ. Дом готов к круглогодичному проживанию и полностью соответствует климатическим условиям Крыма.

Фундамент: винтовые сваи с обвязкой брусом 150×150 мм
Каркас: доска 50×150 мм с шагом 600 мм
Кровля: металлочерепица с утеплением 200 мм`
  },
  2: {
    date: "28 февраля 2024",
    title: "Баня 4×6 в Евпатории",
    location: "Евпатория",
    duration: "21 день",
    size: "4×6 м",
    photos: [
      "/lovable-uploads/new-house-1.jpg",
      "/lovable-uploads/new-house-2.jpg"
    ],
    content: `Построили уютную баню для семейного отдыха в Евпатории. Проект включает парную, комнату отдыха и предбанник.

Планировка:
• Парная 2×2 м с печью-каменкой
• Комната отдыха 2×4 м
• Предбанник с местом для переодевания

Все материалы экологически чистые, использовались только качественные породы дерева. Особое внимание уделили пароизоляции и вентиляции парной.

Печь установлена с соблюдением всех требований пожарной безопасности. Дымоход выведен через кровлю с применением специальных проходных элементов.`
  },
  3: {
    date: "10 января 2024",
    title: "Хозблок 3×4 в Симферополе",
    location: "Симферополь",
    duration: "7 дней",
    size: "3×4 м",
    photos: [
      "/lovable-uploads/new-house-3.jpg"
    ],
    content: `Быстро и качественно построили утеплённый хозблок для хранения садового инвентаря и инструментов.

Характеристики:
• Каркас из доски 50×100 мм
• Утепление 100 мм
• OSB-плита для внутренней отделки
• Профлист для внешней отделки

Несмотря на небольшие размеры, хозблок получился очень функциональным. Установили полки и крючки для удобного размещения инструментов.

Проект выполнен за рекордно короткий срок - всего 7 дней от начала работ до полной готовности объекта.`
  }
};

const ObjectBlog = ({ objectNumber }: ObjectBlogProps) => {
  const initialData = blogData[objectNumber as keyof typeof blogData];
  const [data, setData] = useState(initialData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(initialData?.title || "");
  const [editedContent, setEditedContent] = useState(initialData?.content || "");
  const [editedLocation, setEditedLocation] = useState(initialData?.location || "");
  const [editedDuration, setEditedDuration] = useState(initialData?.duration || "");
  const [editedSize, setEditedSize] = useState(initialData?.size || "");
  const [editedDate, setEditedDate] = useState(initialData?.date || "");
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  
  if (!data) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Объект № {objectNumber}</h2>
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">Информация об этом объекте скоро появится</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSaveChanges = () => {
    setData({
      ...data,
      title: editedTitle,
      content: editedContent,
      location: editedLocation,
      duration: editedDuration,
      size: editedSize,
      date: editedDate,
    });
    setIsEditMode(false);
    toast.success("Изменения сохранены");
  };

  const handleCancelEdit = () => {
    setEditedTitle(data.title);
    setEditedContent(data.content);
    setEditedLocation(data.location);
    setEditedDuration(data.duration);
    setEditedSize(data.size);
    setEditedDate(data.date);
    setIsEditMode(false);
  };

  const handleAddPhoto = () => {
    if (!newPhotoUrl.trim()) {
      toast.error("Введите URL фотографии");
      return;
    }
    setData({
      ...data,
      photos: [...data.photos, newPhotoUrl]
    });
    setNewPhotoUrl("");
    toast.success("Фото добавлено");
  };

  const handleDeletePhoto = (index: number) => {
    setData({
      ...data,
      photos: data.photos.filter((_, i) => i !== index)
    });
    toast.success("Фото удалено");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start gap-4">
        {isEditMode ? (
          <Input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-2xl font-bold flex-1"
          />
        ) : (
          <h2 className="text-2xl font-bold">{data.title}</h2>
        )}
        <div className="flex gap-2 flex-shrink-0">
          {isEditMode ? (
            <Input
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
              className="text-sm w-32"
              placeholder="Дата"
            />
          ) : (
            <span className="text-sm text-muted-foreground opacity-70">{data.date}</span>
          )}
          {isEditMode ? (
            <>
              <Button size="sm" onClick={handleSaveChanges}>
                <Check className="w-4 h-4 mr-1" /> Сохранить
              </Button>
              <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                Отмена
              </Button>
            </>
          ) : (
            <Button size="sm" variant="outline" onClick={() => setIsEditMode(true)}>
              <Edit className="w-4 h-4 mr-1" /> Редактировать
            </Button>
          )}
        </div>
      </div>

      {/* Информационные бейджи */}
      <div className="flex flex-wrap gap-2">
        {isEditMode ? (
          <>
            <Input
              value={editedLocation}
              onChange={(e) => setEditedLocation(e.target.value)}
              className="w-32"
              placeholder="Локация"
            />
            <Input
              value={editedDuration}
              onChange={(e) => setEditedDuration(e.target.value)}
              className="w-32"
              placeholder="Срок"
            />
            <Input
              value={editedSize}
              onChange={(e) => setEditedSize(e.target.value)}
              className="w-32"
              placeholder="Размер"
            />
          </>
        ) : (
          <>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {data.location}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {data.duration}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Ruler className="w-3 h-3" />
              {data.size}
            </Badge>
          </>
        )}
      </div>

      {/* Слайдер фотографий */}
      <Card>
        <CardContent className="p-6">
          {isEditMode && (
            <div className="mb-4 flex gap-2">
              <Input
                placeholder="URL новой фотографии"
                value={newPhotoUrl}
                onChange={(e) => setNewPhotoUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddPhoto()}
              />
              <Button onClick={handleAddPhoto}>
                <Plus className="w-4 h-4 mr-2" /> Добавить
              </Button>
            </div>
          )}
          <Carousel className="w-full">
            <CarouselContent>
              {data.photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 md:h-96 overflow-hidden rounded-lg group">
                    <img 
                      src={photo} 
                      alt={`${data.title} - фото ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {isEditMode && (
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleDeletePhoto(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      {/* Текст статьи */}
      <Card>
        <CardContent className="p-6">
          {isEditMode ? (
            <Textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="min-h-[400px] font-normal"
              placeholder="Текст статьи"
            />
          ) : (
            <div className="prose prose-gray max-w-none">
              {data.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ObjectBlog;