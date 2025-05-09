'use client';
import ParallaxContainer from '@/components/common/ParallaxContainer';

import Header from '@/components/header/Header';
import AnimatedText from '@/components/common/AnimatedText';
import { menuItems } from '@/data/menu';
import Portfolio from '@/components/portfolio/Portfolio';
import Footer from '@/components/footer/Footer';
import Contact from '@/components/home/Contact';
import { useLanguage } from '@/context/language-context';

export default function Projects() {
  const { t } = useLanguage();
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
                    'url(/assets/images/full-width-images/section-bg-1.jpg)',
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Portfolio" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              {t(
                                'Where every detail counts, our work stands out.'
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            {/* Portfolio Section */}
            <section className="page-section">
              <Portfolio lazyload gridClass="work-grid-3" />
            </section>
            {/* End Portfolio Section */}

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
                          <AnimatedText text="Say hello" />
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
              <Contact />
            </section>
            {/* End Contact Section */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
