
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Palette } from 'lucide-react';
import { defaultTemplate } from '@/types/carousel';
import CustomButton from '@/components/ui/custom-button';

const Templates = () => {
  return (
    <MainLayout>
      <div className="container max-w-7xl px-4 py-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold font-display">Templates</h1>
            <p className="text-gray-600 mt-1">Choose a template for your LinkedIn carousel</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Neo Brutalism Template Card */}
          <div className="neo-card p-6 hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold font-display">Neo Brutalism</h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
            </div>
            
            <div className="aspect-square bg-gray-100 mb-4 overflow-hidden border-2 border-black shadow-neo-sm">
              <div className="w-full h-full bg-white p-4 flex flex-col items-center justify-center">
                <div className="w-12 h-2 bg-neobrutalism-primary mb-3"></div>
                <h4 className="text-lg font-bold mb-2 font-display">Sample Title</h4>
                <p className="text-sm text-center text-gray-700">
                  This is a sample of the Neo Brutalism template style for your LinkedIn carousels.
                </p>
                <div className="w-12 h-2 bg-neobrutalism-primary mt-3"></div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: defaultTemplate.primaryColor }}></div>
              <div className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: defaultTemplate.secondaryColor }}></div>
              <div className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: defaultTemplate.accentColor }}></div>
            </div>
            
            <div className="text-sm text-gray-600 mb-4">
              <p>Bold typography with high contrast. Sharp edges, vibrant colors, and minimal UI.</p>
            </div>
            
            <CustomButton
              variant="primary"
              className="w-full"
              icon={<Palette size={16} />}
            >
              Use Template
            </CustomButton>
          </div>
          
          {/* Coming Soon Template Cards */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-medium text-gray-500 mb-2">Coming Soon</h3>
              <p className="text-sm text-gray-400">New template designs will be available here</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Templates;
