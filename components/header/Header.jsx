'use client';
import { toggleMobileMenu } from '@/utils/toggleMobileMenu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
import LanguageSelect from './LanguageSelect';
import { useLanguage } from '@/context/language-context';
import { usePathname } from 'next/navigation';
import { infos } from '@/data/infos';

export default function Header({ links }) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isRealPage = pathname.includes('realisations');
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/`} className="logo">
          <Image
            src="/assets/images/logo-color.png"
            alt={infos.company}
            width={105}
            height={34}
            className="light-mode-logo"
          />
          <Image
            src={
              isRealPage
                ? '/assets/images/logo-color.png'
                : '/assets/images/logo-white.png'
            }
            alt={infos.company}
            width={105}
            height={34}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll">
          {/* Item With Sub */}
          <Nav links={links} />
          {/* End Item With Sub */}
        </ul>
        <ul className="items-end clearlist">
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
          <li>
            <Link href="#contact" className="opacity-1 no-hover">
              <span className="link-hover-anim underline" data-link-animate="y">
                <span className="link-strong link-strong-unhovered">
                  {t('Contact')}
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  {t('Contact')}
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
