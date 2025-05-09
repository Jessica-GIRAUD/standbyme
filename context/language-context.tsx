'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type Translations = {
  fr: { [key: string]: string };
  en: { [key: string]: string };
};

const translations: Translations = {
  fr: {
    Contact: 'Contactez-nous',
    Accueil: 'Accueil',
    Réalisations: 'Réalisations',
    'Savoir-faire': 'Savoir-faire',
    'Notre équipe': 'Notre équipe',
    'Extraordinary creative team. Minimalism lovers.':
      'Une équipe créative exceptionnelle.',
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
    'Say hello 2': 'Dites bonjour',
    'Say hello': 'Dites bonjour, et donnons vie à vos projets.',
    Location: 'Localisation',
    Portfolio: 'Nos réalisations',
    'Where every detail counts, our work stands out.':
      'Là où chaque détail compte, notre travail se démarque.',
    Intérieur: 'Intérieur',
    Extérieur: 'Extérieur',
    'Tous les stands': 'Tous les stands',
    'Back to portfolio': 'Retour aux réalisations',
    'Project Details': 'Détails du projet',
    'Contact us': 'N’hésitez pas à nous contacter.',
    'Contact speech':
      'Envie de marquer les esprits avec un stand, un showroom ou un espace immersif ? Parlons-en autour de vos idées, et créons ensemble des expériences qui font la différence.',
    'not found': "La page que vous recherchez n'a pas pu être trouvée.",
    'Back To Home Page': "Retour à la page d'accueil",
    'We are currently under construction.':
      'Cette page est actuellement en construction',
    'en construction':
      'Nous préparons quelque chose de grand. Revenez bientôt pour découvrir notre nouvelle expérience !',
    Sorry: 'Oups !',
    'Offrez une nouvelle dimension à vos espaces.':
      'Offrez une nouvelle dimension à vos espaces.',

    "Jean-Baptiste drives the vision and strategy, blending creativity and leadership to shape every project's success.":
      'Jean-Baptiste porte la vision et la stratégie, alliant créativité et leadership pour garantir le succès de chaque projet.',

    'Vladimir builds strong client relationships and drives business growth with clarity and ambition.':
      'Vladimir construit des relations solides avec les clients et stimule la croissance de l’entreprise avec clarté et ambition.',
    'Candice brings fresh energy and precision, ensuring each project runs smoothly from idea to delivery.':
      'Candice apporte une énergie nouvelle et une grande rigueur, assurant le bon déroulement de chaque projet, de l’idée à la livraison.',
    'Nathalie leads each project with precision, ensuring clarity, coordination, and client satisfaction.':
      'Nathalie dirige chaque projet avec précision, garantissant clarté, coordination et satisfaction client.',
    'Perrine ensures smooth day-to-day operations with precision, care, and unwavering dedication.':
      'Perrine assure le bon fonctionnement quotidien avec rigueur, bienveillance et un engagement sans faille.',
    'Directeur général': 'Directeur général',
    'Directeur commercial': 'Directeur commercial',
    'Cheffe de projet': 'Cheffe de projet',
    'Responsable administrative et opérationnel':
      'Responsable administrative et opérationnel',
    'Découvrez les entreprises qui ont choisi Stand By Me pour sublimer leurs espaces.':
      'Découvrez les entreprises qui ont choisi Stand By Me pour sublimer leurs espaces.',
  },
  en: {
    Contact: 'Contact us',
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
    'Say hello 2': 'Say hello',
    'Say hello': 'Say hello and let’s start the productive work.',
    Location: 'Location',
    Intérieur: 'Indoor',
    Extérieur: 'Outdoor',
    'Tous les stands': 'All',
    'Back to portfolio': 'Back to portfolio',
    'Project Details': 'Project Details',
    'Contact us': "Don't hesitate to reach out to us.",
    'Contact speech':
      'Want to make an impact with a stand, showroom, or immersive space? Let’s talk about your ideas and bring bold experiences to life — together. ',
    'not found': 'The page you were looking for could not be found.',
    'Back To Home Page': 'Back To Home Page',
    'We are currently under construction.':
      'We are currently under construction.',
    'en construction':
      'We’re working hard behind the scenes to build something amazing. Check back soon to discover our new experience!',
    Sorry: 'Oops !',
    'Offrez une nouvelle dimension à vos espaces.':
      'Bring a new dimension to your spaces.',
    "Jean-Baptiste drives the vision and strategy, blending creativity and leadership to shape every project's success.":
      "Jean-Baptiste drives the vision and strategy, blending creativity and leadership to shape every project's success.",
    'Vladimir builds strong client relationships and drives business growth with clarity and ambition.':
      'Vladimir builds strong client relationships and drives business growth with clarity and ambition.',
    'Directeur commercial': 'Commercial Director',
    'Cheffe de projet': 'Project Manager',
    'Responsable administrative et opérationnel':
      'Administrative and Operations Manager',
    'Découvrez les entreprises qui ont choisi Stand By Me pour sublimer leurs espaces.':
      'Discover the companies that have chosen Stand By Me to enhance their spaces.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const defaultLanguage = navigator.language.split('-')[0] || 'fr'; // Par défaut en français

  const [language, setLanguage] = useState<Language>(
    defaultLanguage as Language
  );

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
