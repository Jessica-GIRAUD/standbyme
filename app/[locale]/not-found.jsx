import Footer from '@/components/footer/Footer';
import { Link } from '@/i18n/navigation';
import React from 'react';
import Image from 'next/image';
import { infos } from '@/data/infos';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: `${infos.company} - Page Not Found`,
  description:
    'Resonance &mdash; One & Multi Page React Nextjs Creative Template',
};

export default async function NotFound404() {
  const t = await getTranslations('notFound');
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <>
            <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
              <div className="main-nav-sub full-wrapper">
                {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
                <div className="nav-logo-wrap local-scroll">
                  <Link href={`/`} className="logo">
                    <Image
                      src="/assets/images/logo-white.png"
                      alt={infos.company}
                      width={105}
                      height={34}
                      className="logo-white"
                    />
                    <Image
                      src="/assets/images/logo-color.png"
                      alt={infos.company}
                      width={105}
                      height={34}
                      className="logo-dark"
                    />
                  </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="mobile-nav" role="button" tabIndex={0}>
                  <i className="mobile-nav-icon" />
                  <span className="visually-hidden">Menu</span>
                </div>
                {/* Main Menu */}
                <div className="inner-nav desktop-nav">
                  <ul className="clearlist scroll-nav local-scroll justify-content-end">
                    <li className="active">
                      <a href={`mailto:${infos.email}`}>
                        <i className="mi-email align-center" /> {infos.email}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${infos.phoneNumberRef}`}>
                        <i className="mi-call align-center" />{' '}
                        {infos.phoneNumber}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Main Menu */}
              </div>
            </nav>
            {/* End Navigation Panel */}
            <main id="main">
              {/* Home Section */}
              <section
                className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
                style={{
                  backgroundImage:
                    'url(/assets/images/full-width-images/section-bg-3.jpg)',
                }}
                id="home"
              >
                <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
                  {/* Home Section Content */}
                  <div className="home-content">
                    <div className="row">
                      <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="hs-wrap">
                          <div className="wow fadeInUp" data-wow-delay=".1s">
                            <h1 className="hs-title-12 mb-40 mb-sm-30">404</h1>
                          </div>
                          <div
                            className="mb-40 mb-sm-30 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <h2 className="section-descr mb-20">
                              {t('notFound')}
                            </h2>
                          </div>
                          <div
                            className="local-scroll wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <Link
                              href={`/`}
                              className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim"
                            >
                              <i className="mi-arrow-left size-24 align-center" />
                              <span>{t('backHome')}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Home Section Content */}
                </div>
              </section>
              {/* End Home Section */}
            </main>
          </>

          <Footer />
        </div>{' '}
      </div>
    </>
  );
}
