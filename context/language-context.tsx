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
    'Notre équipe': 'Notre équipe',
    'Extraordinary creative team. Minimalism lovers.':
      'Equipe créative extraordinaire. Simplicité du coeur.',
    'Learn More': 'En savoir plus',
    'They trust us': 'Ils nous font confiance',
    Company: 'À propos',
    'Social Media': 'Réseaux sociaux',
    Slogan:
      'Agence de conceptions d’espaces Stand - Showroom - Retail - Virtuel',
    'Tous droits réservés': 'Tous droits réservés.',
    French: 'Français',
    English: 'Anglais',
    'Get In Touch': 'Prenons contact',
    'Say hello 2': "Dites bonjour",
    'Say hello': 'Dites bonjour, et donnons vie à vos projets.',
    Location: 'Localisation',
  },
  en: {
    Contact: 'Contact',
    Accueil: 'Home',
    Réalisations: 'Achievements',
    'Savoir-faire': 'Know-how',
    'Notre équipe': 'Our Team',
    'Extraordinary creative team. Minimalism lovers.':
      'Extraordinary creative team. Minimalism lovers.',
    'Learn More': 'Learn more',
    'They trust us': 'They trust us',
    Company: 'Company',
    'Social Media': 'Social Media',
    Slogan: 'Space Design Agency – Stand – Showroom – Retail – Virtual',
    'Tous droits réservés': 'All rights reserved.',
    French: 'French',
    English: 'English',
    'Get In Touch': 'Get In Touch',
    'Say hello 2': "Say hello",
    'Say hello': 'Say hello and let’s start the productive work.',
    Location: 'Location',
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
