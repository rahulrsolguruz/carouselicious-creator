
import React, { useState } from 'react';
import { CarouselProject, defaultProject } from '@/types/carousel';
import CarouselForm from './CarouselForm';
import CarouselPreview from './CarouselPreview';
import { toast } from 'sonner';

const CarouselEditor: React.FC = () => {
  const [project, setProject] = useState<CarouselProject>({
    ...defaultProject,
    name: 'My LinkedIn Carousel'
  });

  const handleUpdateProject = (updatedProject: CarouselProject) => {
    setProject(updatedProject);
    toast.success('Project updated');
  };

  return (
    <div className="w-full p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold font-display mb-4">Create Your LinkedIn Carousel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="order-2 md:order-1">
          <CarouselForm 
            project={project} 
            onUpdateProject={handleUpdateProject} 
          />
        </div>
        
        <div className="order-1 md:order-2">
          <CarouselPreview project={project} />
        </div>
      </div>
    </div>
  );
};

export default CarouselEditor;
