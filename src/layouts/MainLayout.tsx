import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen w-full 
      bg-[linear-gradient(135deg,rgba(254,226,226,0.95)_0%,rgba(254,249,195,0.97)_25%,rgba(254,243,199,0.95)_50%,rgba(255,237,213,0.93)_75%,rgba(254,215,170,0.9)_100%)]
      dark:bg-[linear-gradient(135deg,rgba(7,15,56,0.98)_0%,rgba(16,23,89,0.97)_25%,rgba(11,15,51,0.95)_50%,rgba(8,47,112,0.93)_75%,rgba(12,71,145,0.9)_100%)]
      text-gray-900 dark:text-gray-100 
      transition-all duration-300">
      <Navbar />
      <main className="flex-grow w-full pt-16">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;