'use client';
import React from 'react';
import Image from 'next/image';
import FooterSocials from './FooterSocials';
import Link from 'next/link';
import { footerLinks, navigationLinks } from '@/data/footer';
import { useLanguage } from '@/context/language-context';

export default function Footer({ dark = false }) {
  const { t } = useLanguage();

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? 'bg-dark-2 light-content dark' : 'bg-gray-light-1'
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={'/'} className="mb-30">
              <Image
                src="/assets/images/logo-color.png"
                width={105}
                height={34}
                className="light-mode-logo mb-10"
                alt="Stand By Me"
              />

              <Image
                src="/assets/images/logo-white.svg"
                width={105}
                height={34}
                className="dark-mode-logo"
                alt="Stand By Me"
              />
            </Link>
            <p>{t('Slogan')}</p>
            <div className="clearlinks">
              <strong>Vladimir Gomel - </strong>
              <a href="tel:+33611271690">06 11 27 16 90</a>
            </div>
            <div className="clearlinks">
              <a href="mailto:ibthemes21@gmail.com">projets@standbyme.fr</a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-6 mt-30">
                <h3 className="fw-title">{t('Company')}</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-6 mt-30">
                <h3 className="fw-title">{t('Social Media')}</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3"></div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>© Stand By Me {new Date().getFullYear()}.</b>{' '}
            <b>{t('Tous droits réservés')}</b>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
