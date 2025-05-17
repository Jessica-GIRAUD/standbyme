'use client';

import { infos } from '@/data/infos';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ParallaxContainer from './common/ParallaxContainer';
import AnimatedText from './common/AnimatedText';

export default function Contact() {
  //const t = await getTranslations('contact');

  const t = useTranslations('contact');
  const [address, setAddress] = useState(infos.googleMap1);

  return (
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
                  <AnimatedText text={t('SayHelloTitle')} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </ParallaxContainer>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <h2
                className=" mb-30 mb-xs-20 wow fadeInUp"
                data-wow-duration="1.2s"
              >
                {t('title')}
              </h2>

              <p className="text-gray wow fadeInUp" data-wow-duration="0.8s">
                {t('description')} 🚀
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row mb-60 mb-sm-50">
              {/* Contact Item */}
              <div className="col-sm-5 mb-xs-30 d-flex align-items-stretch">
                <div
                  className="alt-features-item border-left mt-0 wow fadeScaleIn"
                  data-wow-delay=".3s"
                >
                  <div className="alt-features-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                    </svg>
                    <div className="alt-features-icon-s">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="alt-features-title">{t('sayHello')}</h4>
                  <div className="alt-features-descr clearlinks">
                    <div
                      className={`alt-features-descr`}
                      style={{ cursor: 'pointer' }}
                    >
                      {infos.contactName}
                    </div>
                    <div>
                      <a href={`mailto:${infos.email}`}>{infos.email}</a>
                    </div>
                    <div>
                      <a href={`tel:${infos.phoneNumberRef}`}>
                        {infos.phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Contact Item */}
              {/* Contact Item */}
              <div className="col-sm-7 d-flex align-items-stretch">
                <div
                  className="alt-features-item border-left mt-0 wow fadeScaleIn"
                  data-wow-delay=".5s"
                >
                  <div className="alt-features-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                    </svg>
                  </div>
                  <h4 className="alt-features-title">{t('location')}</h4>
                  <div
                    className={`alt-features-descr ${
                      address.includes('Paris') ? 'active' : ''
                    }`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setAddress(infos.googleMap1)}
                    // className="alt-features-descr"
                  >
                    {infos.address1}
                  </div>
                  <div
                    className={`alt-features-descr ${
                      address.includes('Thor') ? 'active' : ''
                    }`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setAddress(infos.googleMap2)}
                    // className="alt-features-descr"
                  >
                    {infos.address2}
                  </div>
                </div>
              </div>
              {/* End Contact Item */}
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="row wow fadeInUp" data-wow-delay="0.5s">
          <div className="col-md-12 d-flex align-items-stretch">
            <div className="map-boxed">
              <iframe
                src={address}
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        {/* End Google Map */}
      </div>
    </section>
  );
}
