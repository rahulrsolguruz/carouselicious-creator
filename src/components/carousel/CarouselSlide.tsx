
import React from 'react';
import { CarouselSlide as SlideType, CarouselTemplate } from '@/types/carousel';
import { cn } from '@/lib/utils';

interface CarouselSlideProps {
  slide: SlideType;
  template: CarouselTemplate;
  className?: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ 
  slide, 
  template,
  className 
}) => {
  // Function to get dynamic styles based on template
  const getSlideStyles = () => {
    return {
      container: {
        backgroundColor: slide.backgroundColor || '#FFFFFF',
        borderWidth: `${template.borderWidth}px`,
        borderColor: 'black',
        boxShadow: template.shadowSize === 'sm' 
          ? '3px 3px 0px 0px rgba(0,0,0,0.9)' 
          : template.shadowSize === 'lg' 
            ? '8px 8px 0px 0px rgba(0,0,0,0.9)' 
            : '5px 5px 0px 0px rgba(0,0,0,0.9)',
      },
      title: {
        fontFamily: template.fontPrimary,
        color: '#000000',
      },
      content: {
        fontFamily: template.fontSecondary,
        color: '#333333',
      },
      accent: {
        backgroundColor: template.accentColor,
      }
    };
  };

  const styles = getSlideStyles();

  // Render different content based on slide type
  const renderSlideContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div 
              className="w-16 h-2 mb-4 rounded-sm" 
              style={{ backgroundColor: template.primaryColor }}
            />
            <h1 
              className="text-3xl font-bold mb-3 max-w-[80%]"
              style={styles.title}
            >
              {slide.title}
            </h1>
            {slide.content && (
              <p 
                className="text-lg text-gray-700 max-w-[80%]"
                style={styles.content}
              >
                {slide.content}
              </p>
            )}
            <div 
              className="w-16 h-2 mt-4 rounded-sm" 
              style={{ backgroundColor: template.primaryColor }}
            />
          </div>
        );
        
      case 'content':
        return (
          <div className="flex flex-col h-full p-2">
            {slide.title && (
              <h2 
                className="text-2xl font-bold mb-4"
                style={styles.title}
              >
                {slide.title}
              </h2>
            )}
            <div 
              className="w-12 h-2 mb-6 rounded-sm" 
              style={{ backgroundColor: template.secondaryColor }}
            />
            {slide.content && (
              <p 
                className="text-lg flex-grow"
                style={styles.content}
              >
                {slide.content}
              </p>
            )}
          </div>
        );
        
      case 'bullets':
        return (
          <div className="flex flex-col h-full p-2">
            {slide.title && (
              <h2 
                className="text-2xl font-bold mb-4"
                style={styles.title}
              >
                {slide.title}
              </h2>
            )}
            <div 
              className="w-12 h-2 mb-6 rounded-sm" 
              style={{ backgroundColor: template.primaryColor }}
            />
            <ul className="space-y-4 flex-grow">
              {slide.bullets?.map((bullet, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-lg"
                  style={styles.content}
                >
                  <span 
                    className="w-3 h-3 mt-1.5 flex-shrink-0 rounded-sm"
                    style={{ backgroundColor: template.secondaryColor }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        );
        
      case 'cta':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            {slide.title && (
              <h2 
                className="text-2xl font-bold mb-4"
                style={styles.title}
              >
                {slide.title}
              </h2>
            )}
            {slide.content && (
              <p 
                className="text-lg mb-6 max-w-[80%]"
                style={styles.content}
              >
                {slide.content}
              </p>
            )}
            {slide.cta && (
              <div 
                className="px-6 py-3 font-bold text-white border-2 border-black"
                style={{ backgroundColor: template.primaryColor }}
              >
                {slide.cta}
              </div>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div 
      className={cn(
        "aspect-square overflow-hidden border-2 relative",
        className
      )}
      style={styles.container}
    >
      {renderSlideContent()}
    </div>
  );
};

export default CarouselSlide;
