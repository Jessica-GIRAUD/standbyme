'use client';

import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import ParallaxContainer from '@/components/common/ParallaxContainer';

import Header from '@/components/header/Header';
import Contact from '@/components/Contact';
import AnimatedText from '@/components/common/AnimatedText';
import { menuItems } from '@/data/menu';
import { portfolios } from '../../../../data/portfolio';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import FullscreenVideo from '@/components/FullscreenVideo';

export default function SingleProject() {
  const params = useParams();
  const t = useTranslations('portfolio');

  const portfolioItem =
    portfolios.filter((elm) => elm.id == params.id)[0] || portfolioItem[0];

  const title = portfolioItem.client + ' – ' + portfolioItem.salon + ' ' + portfolioItem.date;
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
                    'url(/assets/images/full-width-images/section-bg-1.webp)',
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <div className="mb-20">
                          <a
                            href="/realisations"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{' '}
                            {t('backPortfolio')}
                          </a>
                        </div>
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={title} />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              {portfolioItem.location +
                                ' – ' +
                                portfolioItem.surface}
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
            </section>

            {/* Section */}
            <section className="page-section">
              <div className="container position-relative">
                <div className="row">
                  {/* Project Details */}
                  <div className="col-md-4 mb-sm-40 wow fadeInUp">
                    <div className="block-sticky">
                      <h2 className="h3 mb-20"> {t('details')}</h2>
                      <hr className="mb-20" />
                      <div className="row text-gray small">
                        <div className="col-4">
                          <b>{t('salon')} :</b>
                        </div>
                        <div className="col-8">
                          {portfolioItem.salon + ' – ' + portfolioItem.date}
                        </div>
                      </div>
                      <hr className="mb-20" />
                      <div className="row text-gray small">
                        <div className="col-4">
                          <b>Client :</b>
                        </div>
                        <div className="col-8">{portfolioItem.client}</div>
                      </div>

                      <hr className="mb-20" />
                      <div className="row text-gray small align-items-center">
                        <div className="col-4">
                          <b>{t('surface')} :</b>
                        </div>
                        <div className="col-8">{portfolioItem.surface}</div>
                      </div>

                      <hr className="mb-20" />

                      <div className="col-12">
                        {portfolioItem.videoSrc && (
                          <FullscreenVideo
                            videoSrc={portfolioItem.videoSrc}
                            className="w-100"
                          >
                            <span className="badge rounded-pill bg-light text-dark p-2 px-4 video-badge">
                              {t('videoCaptation')}
                            </span>
                          </FullscreenVideo>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* End Project Details */}
                  <div className="col-md-8">
                    <div className="mb-n30">
                      {/* Photo Item */}
                      {portfolioItem.images.map((image, index) => {
                        return (
                          <div className="mb-30 wow fadeInUp" key={index}>
                            <Image
                              src={image.imgSrc}
                              alt={image.imgAlt}
                              width={1350}
                              height={865}
                            />
                          </div>
                        );
                      })}

                      {/* End Photo Item */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Section */}

            {/* Divider */}
            <hr className="mt-0 mb-0" />
            {/* End Divider */}

            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
