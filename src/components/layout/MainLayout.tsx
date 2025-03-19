
import React from 'react';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen bg-[#FCFCFC]">
        <Sidebar />
        
        <main className="flex-1 pt-4 md:pt-0 overflow-auto transition-all duration-300 animate-fade-in">
          {isMobile && (
            <div className="px-4 pb-4">
              <SidebarTrigger />
            </div>
          )}
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
