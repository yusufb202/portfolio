import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useIntl } from 'react-intl';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const intl = useIntl();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { key: 'Home', path: '/', label: intl.formatMessage({ id: 'nav.home' }) },
    { key: 'About', path: '/about', label: intl.formatMessage({ id: 'nav.about' }) },
    { key: 'Projects', path: '/projects', label: intl.formatMessage({ id: 'nav.projects' }) },
    { key: 'Skills', path: '/skills', label: intl.formatMessage({ id: 'nav.skills' }) },
    { key: 'Contact', path: '/contact', label: intl.formatMessage({ id: 'nav.contact' }) },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isDarkMode 
        ? 'dark:bg-[linear-gradient(135deg,rgba(7,15,56,0.98)_0%,rgba(16,23,89,0.97)_25%,rgba(11,15,51,0.95)_50%,rgba(8,47,112,0.93)_75%,rgba(12,71,145,0.9)_100%)]'
        : 'bg-gradient-to-r from-indigo-950/95 via-slate-900/95 to-indigo-950/95'
      }
      backdrop-blur-sm shadow-lg border-b border-indigo-500/10`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center py-4 relative">
          {/* Mobile menu button - positioned absolutely */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden absolute left-4 focus:outline-none text-white hover:text-blue-200 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Control buttons - positioned absolutely on the right */}
          <div className="absolute right-4 flex items-center space-x-2">
            {/* Language toggle button */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="p-2 text-white hover:text-blue-200 transition-colors duration-300 rounded-full 
                hover:bg-white/10 bg-gray-800/50 dark:bg-white/10"
              aria-label="Toggle language"
            >
              <span className="text-sm font-medium">
                {language === 'en' ? 'TR' : 'EN'}
              </span>
            </button>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-white hover:text-blue-200 transition-colors duration-300 rounded-full 
                hover:bg-white/10 bg-gray-800/50 dark:bg-white/10"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`relative text-white hover:text-blue-200 transition-colors duration-300 py-2 group ${
                  location.pathname === item.path 
                    ? 'text-blue-200' 
                    : ''
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`block text-white hover:text-blue-200 hover:bg-blue-800/50 py-2 px-4 rounded transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'bg-blue-800/50 text-blue-200'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;