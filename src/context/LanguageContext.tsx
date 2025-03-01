import { createContext, useContext, useState, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../translations/en.json';
import trMessages from '../translations/tr.json';

type Language = 'en' | 'tr';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type RecursiveRecord = {
  [key: string]: string | RecursiveRecord;
};

type Messages = {
  [key in Language]: RecursiveRecord;
};

const messages: Messages = {
  en: enMessages,
  tr: trMessages,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang as Language) || 'en';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      <IntlProvider 
        messages={messages[language] as any} 
        locale={language} 
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};