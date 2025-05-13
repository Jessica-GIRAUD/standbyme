'use client';

import AnimatedText from '@/components/common/AnimatedText';
import Image from 'next/image';
import React, { useState } from 'react';
import { teamMembers } from '@/data/team';
import { useTranslations } from 'next-intl';
import ParallaxContainer from '../common/ParallaxContainer';

export default function Team() {
  const t = useTranslations('home');
  const [showDescription, setShowDescription] = useState({ 0: false });

  return (
    <section className="page-section pt-0 pb-0" id="about">
      <ParallaxContainer
        className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
        style={{
          backgroundImage: 'url(/assets/images/team/team.jpg)',
        }}
      >
        <>
          <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
          <div className="container position-relative pt-50">
            <div className="container position-relative">
              <div className="row justify-content-md-center">
                <div className="col-lg-6 mb-md-60 mb-sm-30">
                <h2 className="section-caption mb-xs-10">{t('ourTeam')}</h2>
                  <h3 className="section-title mb-30">
                    <AnimatedText text={t('extraordinary')} />
                  </h3>

                  <ul
                    className="nav nav-tabs services-tabs wow fadeInUp"
                    data-wow-delay="0.55s"
                    role="tablist"
                  >
                    {teamMembers.map((member, index) => (
                      <li key={`tab-${index}`} role="presentation">
                        <a
                          href={`#services-item-${index + 1}`}
                          className={index === 0 ? 'active' : ''}
                          aria-controls={`services-item-${index + 1}`}
                          role="tab"
                          aria-selected={index === 0 ? 'true' : 'false'}
                          data-bs-toggle="tab"
                        >
                          {member.name.split(' ')[0]}{' '}
                          <span className="number">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="col-lg-4 d-flex wow fadeInLeft"
                  data-wow-delay="0.55s"
                  data-wow-offset={275}
                >
                  <div className="tab-content services-content">
                    {teamMembers.map((member, index) => (
                      <div
                        key={`content-${index} `}
                        className={`tab-pane services-content-item fade ${
                          index === 0 ? 'show active' : ''
                        }`}
                        id={`services-item-${index + 1}`}
                        role="tabpanel"
                      >
                        <div className="services-text">
                          <div className="services-text-container">
                            <h4 className="services-title">
                              {t(member.role)}{' '}
                            </h4>
                            {!showDescription[index] ? (
                              <div
                                onClick={() =>
                                  setShowDescription((prev) => ({
                                    ...prev,
                                    [index]: true,
                                  }))
                                }
                                className="link-hover-anim underline align-middle"
                                data-link-animate="y"
                              >
                                <span className="link-strong link-strong-unhovered">
                                  {t('learnMore')}{' '}
                                  <i
                                    className="mi-arrow-right size-18"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span
                                  className="link-strong link-strong-hovered"
                                  aria-hidden="true"
                                >
                                  {t('learnMore')}{' '}
                                  <i
                                    className="mi-arrow-right size-18"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                            ) : (
                              <p className="text-gray mb-0">
                                {t(member.description)}
                              </p>
                            )}
                          </div>
                        </div>
                        <Image
                          key={member.image}
                          width={400}
                          height={800}
                          loading="lazy"
                          className="services-image"
                          src={member.image}
                          alt={`Photo of ${member.name}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </ParallaxContainer>
    </section>
  );
}
