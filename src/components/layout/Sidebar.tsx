
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  History, 
  Palette, 
  Settings, 
  HelpCircle, 
  LogOut
} from 'lucide-react';

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(
      "flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200",
      "hover:bg-neobrutalism-primary/10 focus:outline-none focus:ring-2 focus:ring-neobrutalism-primary/20",
      isActive 
        ? "bg-neobrutalism-primary text-white font-medium shadow-neo-sm" 
        : "text-gray-700"
    )}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="w-64 border-r-2 border-black h-screen bg-[#FFFAF5] flex flex-col">
      <div className="p-5 border-b-2 border-black">
        <h1 className="text-lg font-display font-bold">LinkedIn Carousel</h1>
        <p className="text-xs text-gray-600">Create & Export</p>
      </div>
      
      <div className="flex flex-col gap-2 p-4 flex-grow">
        <NavItem to="/" icon={<LayoutGrid size={20} />} label="Dashboard" />
        <NavItem to="/templates" icon={<Palette size={20} />} label="Templates" />
        <NavItem to="/history" icon={<History size={20} />} label="History" />
        
        <div className="mt-auto pt-4 border-t border-gray-200">
          <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
          <NavItem to="/help" icon={<HelpCircle size={20} />} label="Help" />
        </div>
      </div>
      
      <div className="p-4 border-t-2 border-black">
        <button className="flex items-center gap-2 px-4 py-2 w-full text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
