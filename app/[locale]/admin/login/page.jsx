'use client';

import Link from 'next/link';
import ParallaxContainer from '@/components/common/ParallaxContainer';

import Header from '@/components/header/Header';
import AnimatedText from '@/components/common/AnimatedText';
import Image from 'next/image';

import React from 'react';
import { menuItems } from '@/data/menu';
import Account from '@/components/others/Account';
import { useTranslations } from 'use-intl';
import Contact from '@/components/home/Contact';

export default function Admin() {
  const t = useTranslations();

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    'url(/assets/images/full-width-images/page-title-bg-5.jpg)',
                }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative pt-50">
                    <div className="text-center">
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <h1 className="hs-title-1 mb-0">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text={t('login.loginPrompt')} />
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </ParallaxContainer>
            </section>

            {/* Section */}
            <section className="page-section pt-0">
              <Account />
            </section>

            <hr className="mt-0 mb-0" />

            {/* Contact Section */}
            <section className="page-section pt-0 pb-0" id="contact">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    'url(/assets/images/full-width-images/page-title-bg-4.jpg)',
                }}
              >
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                <div className="container position-relative pt-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h3 className="section-title mb-30">
                          <AnimatedText text={t('contact.sayHello')} />
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
