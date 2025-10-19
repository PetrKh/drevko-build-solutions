import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, Edit, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
  const [photos, setPhotos] = useState(defaultPhotos);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  const handleAddPhoto = () => {
    if (!newPhotoUrl.trim()) {
      toast.error("Введите URL фотографии");
      return;
    }
    setPhotos([...photos, newPhotoUrl]);
    setNewPhotoUrl("");
    toast.success("Фото добавлено");
  };

  const handleDeletePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
    toast.success("Фото удалено");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Фото объектов</h2>
        <Button
          variant={isEditMode ? "default" : "outline"}
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {isEditMode ? <><Check className="w-4 h-4 mr-2" /> Готово</> : <><Edit className="w-4 h-4 mr-2" /> Редактировать</>}
        </Button>
      </div>

      {isEditMode && (
        <Card className="bg-primary/5">
          <CardContent className="p-4">
            <div className="flex gap-2">
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
          </CardContent>
        </Card>
      )}
      
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;