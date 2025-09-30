'use client';

import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // Vérifie si window est défini (évite les erreurs côté serveur)
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        height: window.innerHeight,
        isMobile: width < 768,         // Téléphone
        isTablet: width >= 768 && width < 1024, // Tablette
        isDesktop: width >= 1024,      // Bureau
      });
    };

    // Appel initial
    handleResize();

    // Écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
