
import React, { useState } from 'react';
import { CarouselProject } from '@/types/carousel';
import CarouselSlide from './CarouselSlide';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomButton from '../ui/custom-button';

interface CarouselPreviewProps {
  project: CarouselProject;
}

const CarouselPreview: React.FC<CarouselPreviewProps> = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideTransition, setSlideTransition] = useState<'slide-in' | 'slide-out' | null>(null);

  const totalSlides = project.slides.length;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setSlideTransition('slide-out');
      setTimeout(() => {
        setCurrentSlide(prevSlide => prevSlide + 1);
        setSlideTransition('slide-in');
      }, 300);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setSlideTransition('slide-out');
      setTimeout(() => {
        setCurrentSlide(prevSlide => prevSlide - 1);
        setSlideTransition('slide-in');
      }, 300);
    }
  };

  const handleDownload = () => {
    // This is a placeholder for future functionality
    alert('Download functionality will be implemented in the future.');
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold font-display">Preview</h2>
        <CustomButton
          variant="primary"
          size="sm"
          icon={<Download size={16} />}
          onClick={handleDownload}
          className="bg-[#FF5A5F] hover:bg-[#FF4448]"
        >
          Download
        </CustomButton>
      </div>
      
      <div className="relative w-full max-w-md mx-auto border-2 border-black">
        <div 
          className={cn(
            "relative w-full overflow-hidden",
            slideTransition === 'slide-in' && 'animate-slide-in',
            slideTransition === 'slide-out' && 'animate-slide-out'
          )}
        >
          <CarouselSlide 
            slide={project.slides[currentSlide]} 
            template={project.template}
            className="w-full aspect-square"
          />
          
          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2">
            <button 
              onClick={goToPrevSlide}
              className={cn(
                "p-2 bg-white border-2 border-black rounded-full shadow-neo-sm transition-all pointer-events-auto",
                "hover:-translate-y-1 hover:shadow-neo active:translate-y-0 active:shadow-none",
                currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
              )}
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNextSlide}
              className={cn(
                "p-2 bg-white border-2 border-black rounded-full shadow-neo-sm transition-all pointer-events-auto",
                "hover:-translate-y-1 hover:shadow-neo active:translate-y-0 active:shadow-none",
                currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""
              )}
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-4 mb-2">
          {project.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide 
                  ? "bg-[#FF5A5F] scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Slide info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Slide {currentSlide + 1} of {totalSlides}
        </p>
      </div>
    </div>
  );
};

export default CarouselPreview;
