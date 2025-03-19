
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  FileText, 
  DownloadCloud, 
  Trash2, 
  Copy,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';

const HistoryItem = ({ 
  title, 
  date, 
  slides, 
  template 
}: { 
  title: string; 
  date: string; 
  slides: number; 
  template: string; 
}) => (
  <div className="bg-white border-2 border-black p-4 hover:shadow-neo transition-all duration-200">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 border border-gray-200 rounded">
          <FileText size={18} />
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar size={12} /> {date}
          </p>
        </div>
      </div>
      <div className="text-xs bg-gray-100 px-2 py-1 rounded">
        {slides} slides
      </div>
    </div>
    
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">{template}</span>
      <div className="flex gap-2">
        <button 
          className={cn(
            "p-1 text-gray-700 hover:text-blue-600 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
          )}
          title="Download"
        >
          <DownloadCloud size={16} />
        </button>
        <button 
          className={cn(
            "p-1 text-gray-700 hover:text-green-600 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-green-200 rounded"
          )}
          title="Duplicate"
        >
          <Copy size={16} />
        </button>
        <button 
          className={cn(
            "p-1 text-gray-700 hover:text-red-600 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-red-200 rounded"
          )}
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  </div>
);

const History = () => {
  // Sample history data
  const historyItems = [
    { 
      id: 1, 
      title: 'Q1 Sales Report', 
      date: 'May 15, 2023', 
      slides: 7, 
      template: 'Neo Brutalism' 
    },
    { 
      id: 2, 
      title: 'Marketing Strategy', 
      date: 'April 22, 2023', 
      slides: 5, 
      template: 'Neo Brutalism' 
    },
    { 
      id: 3, 
      title: 'Product Launch', 
      date: 'March 10, 2023', 
      slides: 8, 
      template: 'Neo Brutalism' 
    },
    { 
      id: 4, 
      title: 'Team Introduction', 
      date: 'February 28, 2023', 
      slides: 6, 
      template: 'Neo Brutalism' 
    },
    { 
      id: 5, 
      title: 'Year in Review', 
      date: 'January 15, 2023', 
      slides: 10, 
      template: 'Neo Brutalism' 
    },
  ];

  return (
    <MainLayout>
      <div className="container max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-display">History</h1>
          <p className="text-gray-600 mt-1">View and manage your previously created carousels</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historyItems.map((item) => (
            <HistoryItem 
              key={item.id}
              title={item.title}
              date={item.date}
              slides={item.slides}
              template={item.template}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default History;
