
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CustomButton from '@/components/ui/custom-button';
import { CarouselProject, CarouselSlide, defaultProject } from '@/types/carousel';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselFormProps {
  project: CarouselProject;
  onUpdateProject: (project: CarouselProject) => void;
}

const CarouselForm: React.FC<CarouselFormProps> = ({ 
  project, 
  onUpdateProject 
}) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    general: true,
    slides: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateProjectName = (name: string) => {
    onUpdateProject({
      ...project,
      name,
      updatedAt: new Date()
    });
  };

  const updateSlide = (slideId: string, updates: Partial<CarouselSlide>) => {
    const updatedSlides = project.slides.map(slide => 
      slide.id === slideId ? { ...slide, ...updates } : slide
    );
    
    onUpdateProject({
      ...project,
      slides: updatedSlides,
      updatedAt: new Date()
    });
  };

  const addSlide = () => {
    const newSlide: CarouselSlide = {
      id: `slide-${project.slides.length + 1}`,
      type: 'content',
      title: 'New Slide',
      content: 'Add your content here',
      backgroundColor: '#FFFFFF'
    };
    
    onUpdateProject({
      ...project,
      slides: [...project.slides, newSlide],
      updatedAt: new Date()
    });
  };

  const removeSlide = (slideId: string) => {
    if (project.slides.length <= 1) return;
    
    const updatedSlides = project.slides.filter(slide => slide.id !== slideId);
    
    onUpdateProject({
      ...project,
      slides: updatedSlides,
      updatedAt: new Date()
    });
  };

  return (
    <div className="neo-card p-6 divide-y-2 divide-black">
      {/* General Section */}
      <div className="pb-4">
        <button
          onClick={() => toggleSection('general')}
          className="flex items-center justify-between w-full text-left font-display font-bold text-lg mb-4"
        >
          <span>General Information</span>
          {expandedSections.general ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {expandedSections.general && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-sm font-medium mb-1">Project Name</label>
              <Input
                value={project.name}
                onChange={(e) => updateProjectName(e.target.value)}
                className="neo-input"
                placeholder="Enter project name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Created</label>
                <Input
                  value={project.createdAt.toLocaleDateString()}
                  readOnly
                  className="neo-input bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Updated</label>
                <Input
                  value={project.updatedAt.toLocaleDateString()}
                  readOnly
                  className="neo-input bg-gray-50"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Slides Section */}
      <div className="py-4">
        <button
          onClick={() => toggleSection('slides')}
          className="flex items-center justify-between w-full text-left font-display font-bold text-lg mb-4"
        >
          <span>Carousel Slides</span>
          {expandedSections.slides ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {expandedSections.slides && (
          <div className="space-y-6 animate-fade-in">
            {project.slides.map((slide, index) => (
              <div key={slide.id} className="border-2 border-black p-4 bg-white">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-display font-bold">Slide {index + 1}</h3>
                  <button
                    onClick={() => removeSlide(slide.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Remove slide"
                  >
                    <Minus size={18} />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Type</label>
                    <select
                      value={slide.type}
                      onChange={(e) => updateSlide(slide.id, { type: e.target.value as any })}
                      className="neo-input w-full"
                    >
                      <option value="title">Title Slide</option>
                      <option value="content">Content Slide</option>
                      <option value="bullets">Bullet Points</option>
                      <option value="cta">Call to Action</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <Input
                      value={slide.title || ''}
                      onChange={(e) => updateSlide(slide.id, { title: e.target.value })}
                      className="neo-input"
                      placeholder="Enter slide title"
                    />
                  </div>
                  
                  {slide.type !== 'bullets' && slide.type !== 'cta' && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Content</label>
                      <Textarea
                        value={slide.content || ''}
                        onChange={(e) => updateSlide(slide.id, { content: e.target.value })}
                        className="neo-input h-24"
                        placeholder="Enter slide content"
                      />
                    </div>
                  )}
                  
                  {slide.type === 'bullets' && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Bullet Points</label>
                      {(slide.bullets || []).map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-center gap-2 mb-2">
                          <Input
                            value={bullet}
                            onChange={(e) => {
                              const newBullets = [...(slide.bullets || [])];
                              newBullets[bulletIndex] = e.target.value;
                              updateSlide(slide.id, { bullets: newBullets });
                            }}
                            className="neo-input"
                            placeholder={`Bullet point ${bulletIndex + 1}`}
                          />
                          {slide.bullets && slide.bullets.length > 1 && (
                            <button
                              onClick={() => {
                                const newBullets = slide.bullets?.filter((_, i) => i !== bulletIndex);
                                updateSlide(slide.id, { bullets: newBullets });
                              }}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Minus size={16} />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const newBullets = [...(slide.bullets || []), ''];
                          updateSlide(slide.id, { bullets: newBullets });
                        }}
                        className="text-sm flex items-center gap-1 text-blue-600 hover:text-blue-800 mt-1"
                      >
                        <Plus size={14} /> Add bullet point
                      </button>
                    </div>
                  )}
                  
                  {slide.type === 'cta' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <Textarea
                          value={slide.content || ''}
                          onChange={(e) => updateSlide(slide.id, { content: e.target.value })}
                          className="neo-input h-20"
                          placeholder="Enter call to action message"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CTA (Website, Email, etc.)</label>
                        <Input
                          value={slide.cta || ''}
                          onChange={(e) => updateSlide(slide.id, { cta: e.target.value })}
                          className="neo-input"
                          placeholder="www.example.com"
                        />
                      </div>
                    </>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Background Color</label>
                    <div className="flex gap-2">
                      <Input
                        type="color"
                        value={slide.backgroundColor || '#FFFFFF'}
                        onChange={(e) => updateSlide(slide.id, { backgroundColor: e.target.value })}
                        className="w-10 h-10 p-1 cursor-pointer"
                      />
                      <Input
                        value={slide.backgroundColor || '#FFFFFF'}
                        onChange={(e) => updateSlide(slide.id, { backgroundColor: e.target.value })}
                        className="neo-input"
                        placeholder="#FFFFFF"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center">
              <CustomButton 
                variant="secondary"
                onClick={addSlide}
                icon={<Plus size={16} />}
              >
                Add Slide
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselForm;
