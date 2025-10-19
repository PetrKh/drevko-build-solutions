import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Ruler, Upload, Trash2, Edit, Save, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

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
  const defaultData = blogData[objectNumber as keyof typeof blogData];
  const [data, setData] = useState(defaultData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editedTitle, setEditedTitle] = useState(defaultData?.title || "");
  const [editedLocation, setEditedLocation] = useState(defaultData?.location || "");
  const [editedDuration, setEditedDuration] = useState(defaultData?.duration || "");
  const [editedSize, setEditedSize] = useState(defaultData?.size || "");
  const [editedContent, setEditedContent] = useState(defaultData?.content || "");
  const [photos, setPhotos] = useState<string[]>(defaultData?.photos || []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadObjectData();
  }, [objectNumber]);

  const loadObjectData = async () => {
    try {
      const { data: storageData, error } = await supabase.storage
        .from('portfolio')
        .list(`object-${objectNumber}`, {
          limit: 100,
          offset: 0,
          sortBy: { column: 'created_at', order: 'asc' }
        });

      if (error) throw error;

      if (storageData && storageData.length > 0) {
        const photoUrls = storageData.map(file => {
          const { data: { publicUrl } } = supabase.storage
            .from('portfolio')
            .getPublicUrl(`object-${objectNumber}/${file.name}`);
          return publicUrl;
        });
        setPhotos(photoUrls);
      } else if (defaultData) {
        setPhotos(defaultData.photos);
      }
    } catch (error) {
      console.error('Error loading object data:', error);
      if (defaultData) {
        setPhotos(defaultData.photos);
      }
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsLoading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        if (!file.type.startsWith('image/')) {
          toast({
            title: "Ошибка",
            description: `${file.name} не является изображением`,
            variant: "destructive"
          });
          return null;
        }

        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `object-${objectNumber}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('portfolio')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('portfolio')
          .getPublicUrl(filePath);

        return publicUrl;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      const validUrls = uploadedUrls.filter((url): url is string => url !== null);

      setPhotos(prev => [...prev, ...validUrls]);
      
      toast({
        title: "Успешно",
        description: `Загружено фотографий: ${validUrls.length}`
      });
    } catch (error) {
      console.error('Error uploading photos:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить фотографии",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDeletePhoto = async (photoUrl: string, index: number) => {
    try {
      const urlParts = photoUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const filePath = `object-${objectNumber}/${fileName}`;

      const { error } = await supabase.storage
        .from('portfolio')
        .remove([filePath]);

      if (error) throw error;

      setPhotos(prev => prev.filter((_, i) => i !== index));
      
      toast({
        title: "Успешно",
        description: "Фотография удалена"
      });
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось удалить фотографию",
        variant: "destructive"
      });
    }
  };

  const handleSave = () => {
    setData({
      ...data!,
      title: editedTitle,
      location: editedLocation,
      duration: editedDuration,
      size: editedSize,
      content: editedContent,
      photos: photos
    });
    setIsEditMode(false);
    toast({
      title: "Успешно",
      description: "Изменения сохранены"
    });
  };

  const handleCancel = () => {
    if (data) {
      setEditedTitle(data.title);
      setEditedLocation(data.location);
      setEditedDuration(data.duration);
      setEditedSize(data.size);
      setEditedContent(data.content);
      setPhotos(data.photos);
    }
    setIsEditMode(false);
  };
  
  if (!data && !defaultData) {
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

  const displayData = data || defaultData!;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        {isEditMode ? (
          <Input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-2xl font-bold"
          />
        ) : (
          <h2 className="text-2xl font-bold">{displayData.title}</h2>
        )}
        <div className="flex gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            <Upload className="w-4 h-4 mr-2" />
            {isLoading ? "Загрузка..." : "Загрузить фото"}
          </Button>
          {isEditMode ? (
            <>
              <Button size="sm" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Сохранить
              </Button>
              <Button size="sm" variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Отмена
              </Button>
            </>
          ) : (
            <Button size="sm" variant="outline" onClick={() => setIsEditMode(true)}>
              <Edit className="w-4 h-4 mr-2" />
              Редактировать
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
              placeholder="Локация"
              className="w-32"
            />
            <Input
              value={editedDuration}
              onChange={(e) => setEditedDuration(e.target.value)}
              placeholder="Длительность"
              className="w-32"
            />
            <Input
              value={editedSize}
              onChange={(e) => setEditedSize(e.target.value)}
              placeholder="Размер"
              className="w-32"
            />
          </>
        ) : (
          <>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {displayData.location}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {displayData.duration}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Ruler className="w-3 h-3" />
              {displayData.size}
            </Badge>
          </>
        )}
      </div>

      {/* Слайдер фотографий */}
      <Card>
        <CardContent className="p-6">
          <Carousel className="w-full">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 md:h-96 overflow-hidden rounded-lg group">
                    <img 
                      src={photo} 
                      alt={`${displayData.title} - фото ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {isEditMode && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeletePhoto(photo, index)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Удалить
                        </Button>
                      </div>
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
              className="min-h-[300px]"
            />
          ) : (
            <div className="prose prose-gray max-w-none">
              {displayData.content.split('\n').map((paragraph, index) => (
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