import React from 'react';
import { getTranslations } from 'next-intl/server';

import Footer from '@/components/footer/Footer';

import ParallaxContainer from '@/components/common/ParallaxContainer';

import Header from '@/components/header/Header';
import AnimatedText from '@/components/common/AnimatedText';
import { services } from '@/data/services';
import Eco from '@/components/Eco';

import Link from 'next/link';
import { features } from '@/data/features';
import Timeline from '@/components/Timeline';
import { menuItems } from '@/data/menu';
import Contact from '@/components/Contact';
import { infos } from '@/data/infos';

export const metadata = {
  title: `${infos.company} - Savoir-Faire`,
  description:
    'Stand By Me conçoit et réalise des stands sur mesure pour vos événements en France et à l’international. Design épuré, créativité, savoir-faire : faites rayonner votre marque avec un stand à votre image.',
};

export default async function SavoirFaire() {
  const t = await getTranslations('savoir-faire');

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header links={menuItems} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
              style={{
                backgroundImage:
                  'url(/assets/images/full-width-images/section-bg-1.jpg)',
              }}
            >
              <div className="container position-relative pt-50 pb-100 pb-sm-20">
                {/* Section Content */}
                <div className="text-center">
                  <div className="row">
                    {/* Page Title */}
                    <div className="col-md-8 offset-md-2">
                      <h1 className="hs-title-1 mb-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text={t('title1')} />
                        </span>
                      </h1>
                      <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                          <p
                            className="section-descr mb-0 wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1.2s"
                          >
                            {t('title2')}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Page Title */}
                  </div>
                </div>
                {/* End Section Content */}
              </div>
            </ParallaxContainer>
            <section className="page-section pt-0" id="services">
              <div className="container position-relative mt-n120 mt-sm-n60">
                <div className="row mb-n30">
                  {services.map((elm, i) => (
                    <div
                      key={i}
                      className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
                    >
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={elm.width}
                              height={elm.height}
                              viewBox={`0 0 ${elm.width} ${elm.height}`}
                              aria-hidden="true"
                            >
                              <path d={elm.path} />
                            </svg>
                          </div>
                          <h3 className="services-3-title">{elm.title}</h3>
                          <h3 className="services-3-text">{elm.text}</h3>
                          <div className="services-3-text text-start d-flex justify-content-center mt-4">
                            <ul className="">
                              {elm.items.map((el, index) => {
                                return <li key={index}>{el}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="page-section bg-gradient-gray-light-2 bg-scroll">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h3 className="section-title mb-50 mb-sm-30">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        {t('title3')}
                      </span>
                    </h3>
                  </div>
                </div>

                <Timeline />
              </div>
            </section>

            <section className="page-section">
              <Eco />
            </section>

            <Contact />
          </main>
          <Footer />
        </div>{' '}
      </div>
    </>
  );
}
