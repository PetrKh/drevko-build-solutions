import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Trash2, Edit, Save, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const defaultPhotos = [
  "/lovable-uploads/new-house-1.jpg",
  "/lovable-uploads/new-house-2.jpg",
  "/lovable-uploads/new-house-3.jpg",
  "/lovable-uploads/new-house-4.jpg",
  "/lovable-uploads/new-house-5.jpg",
  "/lovable-uploads/new-house-6.jpg",
  "/lovable-uploads/new-house-7.jpg",
  "/lovable-uploads/new-house-8.jpg",
  "/lovable-uploads/new-house-9.jpg",
  "/lovable-uploads/new-house-10.webp"
];

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load photos from Supabase Storage
  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('portfolio')
        .list('gallery', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'created_at', order: 'desc' }
        });

      if (error) throw error;

      if (data) {
        const photoUrls = data.map(file => {
          const { data: { publicUrl } } = supabase.storage
            .from('portfolio')
            .getPublicUrl(`gallery/${file.name}`);
          return publicUrl;
        });
        setPhotos(photoUrls);
      }
    } catch (error) {
      console.error('Error loading photos:', error);
      // If no photos exist yet, use default photos
      setPhotos(defaultPhotos);
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
        const filePath = `gallery/${fileName}`;

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

      setPhotos(prev => [...validUrls, ...prev]);
      
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
      // Extract file path from URL
      const urlParts = photoUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const filePath = `gallery/${fileName}`;

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Фото объектов</h2>
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
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            <Upload className="w-4 h-4 mr-2" />
            {isLoading ? "Загрузка..." : "Загрузить фото"}
          </Button>
          <Button
            variant={isEditMode ? "destructive" : "outline"}
            onClick={() => setIsEditMode(!isEditMode)}
          >
            {isEditMode ? (
              <>
                <X className="w-4 h-4 mr-2" />
                Отменить
              </>
            ) : (
              <>
                <Edit className="w-4 h-4 mr-2" />
                Редактировать
              </>
            )}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={photo} 
                alt={`Объект ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;