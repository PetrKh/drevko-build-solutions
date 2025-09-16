import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Upload } from "lucide-react";

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

  const handleAddPhoto = () => {
    // В реальном приложении здесь бы был код для загрузки фото
    const newPhoto = "/lovable-uploads/d7451940-8ce6-4dd4-afde-8b4b804b715f.png";
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Фото объектов</h2>
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
            </div>
          </Card>
        ))}
        
      </div>
    </div>
  );
};

export default PhotoGallery;