'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    Contact: 'Contactez-nous',
    Accueil: 'Accueil',
    Réalisations: 'Réalisations',
    'Savoir-faire': 'Savoir-faire',
  },
  en: {
    Contact: 'Contact',
    Accueil: 'Home',
    Réalisations: 'Achievements',
    'Savoir-faire': 'Know-how',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
