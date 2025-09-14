import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Camera, FileText } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import ObjectBlog from "@/components/ObjectBlog";

type ActiveSection = 'photos' | `object-${number}`;

const sidebarItems = [
  { id: 'photos' as const, label: 'Фото объектов', icon: Camera },
  { id: 'object-1' as const, label: 'Объект № 1', icon: FileText },
  { id: 'object-2' as const, label: 'Объект № 2', icon: FileText },
  { id: 'object-3' as const, label: 'Объект № 3', icon: FileText },
  { id: 'object-4' as const, label: 'Объект № 4', icon: FileText },
  { id: 'object-5' as const, label: 'Объект № 5', icon: FileText },
  { id: 'object-6' as const, label: 'Объект № 6', icon: FileText },
  { id: 'object-7' as const, label: 'Объект № 7', icon: FileText },
  { id: 'object-8' as const, label: 'Объект № 8', icon: FileText },
  { id: 'object-9' as const, label: 'Объект № 9', icon: FileText },
  { id: 'object-10' as const, label: 'Объект № 10', icon: FileText }
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('photos');

  const renderContent = () => {
    if (activeSection === 'photos') {
      return <PhotoGallery />;
    }
    
    const objectNumber = parseInt(activeSection.split('-')[1]);
    return <ObjectBlog objectNumber={objectNumber} />;
  };

  return (
    <>
      <Helmet>
        <title>Портфолио - Построенные дома, бани и хозблоки в Крыму | Древ'Ко</title>
        <meta name="description" content="Посмотрите наши реальные проекты - каркасные дома, бани и хозблоки, построенные за последние 2 года по всему Крыму." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Портфолио проектов
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные объекты, построенные нашей командой по всему Крыму. 
              Фотографии, описания и истории строительства каждого проекта.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Left Sidebar */}
              <div className="w-64 flex-shrink-0">
                <Card className="sticky top-4">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4 text-lg">Разделы</h3>
                    <ScrollArea className="h-96">
                      <div className="space-y-2">
                        {sidebarItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Button
                              key={item.id}
                              variant={activeSection === item.id ? "default" : "ghost"}
                              className="w-full justify-start text-left h-auto p-3"
                              onClick={() => setActiveSection(item.id)}
                            >
                              <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </Button>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Right Content */}
              <div className="flex-1 min-w-0">
                {renderContent()}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;