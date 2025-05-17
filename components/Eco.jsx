'use client';
import { ecoFeatures } from '@/data/features';
import React, { useEffect, useRef } from 'react';
import ParallaxContainer from './common/ParallaxContainer';
import AnimatedText from './common/AnimatedText';
import { useTranslations } from 'next-intl';

export default function Eco() {
  const t = useTranslations('savoir-faire');

  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import('isotope-layout')).default;
    const imagesloaded = (await import('imagesloaded')).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: '.col-md-6',
      layoutMode: 'masonry', // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      'progress',
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <>
      <ParallaxContainer
        className="page-section bg-gray-light-1 bg-light-alpha-70 parallax-5"
        style={{
          backgroundImage:
            'url(/assets/images/full-width-images/page-title-bg-5.jpg)',
        }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
        <div className="container position-relative pt-50">
          <div className="text-center">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h3 className="section-title mb-30">
                  <AnimatedText text={t('eco')} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </ParallaxContainer>

      <div className="container position-relative">
        <div className="row">
          {/* Section Text */}
          <div className="col-lg-5 col-xl-5 offset-xl-1 d-flex align-items-center mb-md-60 mb-sm-40">
            <div className="w-100">
              <h3 className="section-title mb-30">
                Des engagements concrets pour un avenir durable
              </h3>
              <p className="section-descr mb-50 mb-sm-30">
                Stand By Me s’engage dans une démarche responsable, durable et
                innovante, portée par des actions concrètes et mesurables.
              </p>
              {/* Numbers
              <div className="row mt-sm-n10">
                <div className="col-md-6 mt-sm-10">
                  <div className="number-3-title black">2023</div>
                  <div className="number-3-descr">
                    Intégration au réseau Excellence BPI France
                  </div>
                </div>
                <div className="col-md-6 mt-sm-10">
                  <div className="number-3-title black">2024</div>
                  <div className="number-3-descr">
                    Premier bilan carbone avec KIKO ???
                  </div>
                </div>
              </div>
              {/* End Numbers */}
            </div>
          </div>
          {/* End Section Text */}
          {/* Benefits Grid */}
          <div className="col-lg-7 col-xl-6 d-flex align-items-center order-lg-first">
            <div className="w-100 position-relative">
              <div
                ref={isotopContainer}
                className="row masonry mb-n30 wow fadeInUp"
              >
                {/* Benefits Item */}
                {ecoFeatures.map((elm, i) => (
                  <div
                    key={i}
                    className={`col-md-6 ${
                      i == 1 ? 'mt-50 mt-sm-0' : ''
                    } mb-30`}
                  >
                    <div className="alt-features-item box-shadow text-center mt-0">
                      <div className="alt-features-icon mb-10">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path d={elm.svgPath} />
                        </svg>
                      </div>
                      <h4 className="alt-features-title">{elm.title}</h4>
                      <div className="alt-features-descr">
                        {elm.description}
                      </div>
                    </div>
                  </div>
                ))}
                {/* End Benefits Item */}
              </div>
            </div>
          </div>
          {/* Benefits Grid */}
        </div>
      </div>
    </>
  );
}
