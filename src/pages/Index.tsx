
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CarouselEditor from '@/components/carousel/CarouselEditor';
import { 
  FileText, 
  Plus, 
  ArrowRight 
} from 'lucide-react';
import CustomButton from '@/components/ui/custom-button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <MainLayout>
      <div className="container max-w-7xl px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold font-display">Dashboard</h1>
            <p className="text-gray-600 mt-1">Create and manage your LinkedIn carousels</p>
          </div>
          
          <div className="mt-4 lg:mt-0">
            <CustomButton 
              variant="primary" 
              icon={<Plus size={18} />}
            >
              New Carousel
            </CustomButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <section>
            <h2 className="text-2xl font-bold font-display mb-4">Current Project</h2>
            <div className="bg-white p-6 border-2 border-black shadow-neo">
              <CarouselEditor />
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-display mb-4">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="neo-card p-5 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-gray-100 rounded-md border border-gray-200">
                      <FileText size={20} />
                    </div>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Sample Project {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">5 slides • Neo Brutalism</p>
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
