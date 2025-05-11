'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { parallaxMouseMovement, parallaxScroll } from '@/utils/parallax';
import { init_wow } from '@/utils/initWowjs';
import { headerChangeOnScroll } from '@/utils/changeHeaderOnScroll';

import 'swiper/css';
import '../../public/assets/css/styles.css';
import 'jarallax/dist/jarallax.min.css';
import 'swiper/css/effect-fade';

import 'photoswipe/dist/photoswipe.css';
import 'tippy.js/dist/tippy.css';

export default function ClientLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    const mainNav = document.querySelector('.main-nav');
    if (mainNav?.classList.contains('transparent')) {
      mainNav.classList.add('js-transparent');
    } else if (!mainNav?.classList.contains('dark')) {
      mainNav?.classList.add('js-no-transparent-white');
    }
    window.addEventListener('scroll', headerChangeOnScroll);
    parallaxScroll();

    return () => {
      window.removeEventListener('scroll', headerChangeOnScroll);
    };
  }, [path]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.esm');
    }
  }, []);

  return <>{children}</>;
}
