import { FC, ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:ml-64">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;