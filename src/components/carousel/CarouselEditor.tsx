
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
    <div className="container py-6">
      <h1 className="text-3xl font-bold font-display mb-6">Create Your LinkedIn Carousel</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="order-2 lg:order-1">
          <CarouselForm 
            project={project} 
            onUpdateProject={handleUpdateProject} 
          />
        </div>
        
        <div className="order-1 lg:order-2">
          <CarouselPreview project={project} />
        </div>
      </div>
    </div>
  );
};

export default CarouselEditor;
