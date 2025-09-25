'use client';

import { jarallax } from 'jarallax';
import { useEffect, useRef } from 'react';

export default function ParallaxContainer({ className = '', children, ...props }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const isMobile = window.innerWidth < 768;
    const isTeam = containerRef.current.closest('.team-parallax-container') !== null;
    
    jarallax(containerRef.current, {
      speed: 0.5,
      imgPosition: isTeam && isMobile ? '30%' : 'center',
    });
    
    // Nettoyage
    return () => {
      if (containerRef.current) {
        jarallax(containerRef.current, 'destroy');
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`jarallax ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
