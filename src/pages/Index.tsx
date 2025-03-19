import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CarouselEditor from '@/components/carousel/CarouselEditor';
import { Plus, FileText, ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/custom-button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-4 md:py-6 max-w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <div>
            <h1 className="text-3xl font-bold font-display">Dashboard</h1>
            <p className="text-gray-600 mt-1">Create and manage your LinkedIn carousels</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <CustomButton 
              variant="primary" 
              icon={<Plus size={18} />}
              className="w-full md:w-auto bg-[#FF5A5F] hover:bg-[#FF4448]"
            >
              New Carousel
            </CustomButton>
          </div>
        </div>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold font-display mb-4">Current Project</h2>
            <div className="bg-white border-2 border-black shadow-neo">
              <CarouselEditor />
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold font-display mb-4">Recent Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="neo-card p-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-gray-100 rounded-md border border-gray-200">
                      <FileText size={isMobile ? 18 : 20} />
                    </div>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Sample Project {item}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">5 slides • Neo Brutalism</p>
                  <Link 
                    to="#" 
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    View Details <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
