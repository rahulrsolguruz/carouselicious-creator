
import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[#FCFCFC]">
      <Sidebar />
      
      <main className="flex-1 overflow-auto transition-all duration-300 animate-fade-in">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
