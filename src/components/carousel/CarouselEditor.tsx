
import React, { useState } from 'react';
import { CarouselProject, defaultProject } from '@/types/carousel';
import CarouselForm from './CarouselForm';
import CarouselPreview from './CarouselPreview';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

const CarouselEditor: React.FC = () => {
  const [project, setProject] = useState<CarouselProject>({
    ...defaultProject,
    name: 'My LinkedIn Carousel'
  });
  const isMobile = useIsMobile();

  const handleUpdateProject = (updatedProject: CarouselProject) => {
    setProject(updatedProject);
    toast.success('Project updated');
  };

  return (
    <div className="w-full py-2 md:py-6">
      <h1 className="text-2xl md:text-3xl font-bold font-display mb-4 md:mb-6">Create Your LinkedIn Carousel</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Reverse order only on mobile */}
        <div className={`${isMobile ? "order-2" : "order-1"}`}>
          <CarouselForm 
            project={project} 
            onUpdateProject={handleUpdateProject} 
          />
        </div>
        
        <div className={`${isMobile ? "order-1" : "order-2"}`}>
          <CarouselPreview project={project} />
        </div>
      </div>
    </div>
  );
};

export default CarouselEditor;
