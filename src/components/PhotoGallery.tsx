import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Upload } from "lucide-react";

const defaultPhotos = [
  "/lovable-uploads/34880b26-a206-4e6a-b2b5-ffe6e9430c67.png",
  "/lovable-uploads/c929eb6d-83aa-4911-9e7a-af37e66f4eb0.png",
  "/lovable-uploads/70db4e4c-e77c-439a-a079-a9d809a7bcbe.png",
  "/lovable-uploads/6e31a715-f810-49a3-8156-cab6796b0e80.png",
  "/lovable-uploads/0114cde6-37ca-400c-8ad2-a9547987c29c.png",
  "/lovable-uploads/756d4553-ca6b-4c5b-bbc9-00ce0b9616ef.png"
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