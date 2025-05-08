'use client';
import AnimatedText from '@/components/common/AnimatedText';
import ParallaxContainer from '@/components/common/ParallaxContainer';
import Service from './Service';
import ClientSlider from './ClientSlider';
import { useLanguage } from '@/context/language-context';
import Contact from '@/components/home/Contact';

export default function Home1({ onePage = false, dark = false }) {
  const { t } = useLanguage();
  return (
    <>
      <section className="page-section pt-0 pb-0" id="home">
        <ParallaxContainer
          className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
          style={{
            backgroundImage: 'url(/assets/images/team/team.jpg)',
          }}
        >
          <>
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
            <div className="container position-relative pt-50">
              <Service />
            </div>
          </>
        </ParallaxContainer>
      </section>
      {/* Divider */}
      <hr className="mt-0 mb-0" />
      {/* End Divider */}

      {/* Logotypes Section */}
      <section
        className="page-section bg-dark bg-dark-alpha-70 light-content"
        style={{
          backgroundImage:
            'url(/assets/images/full-width-images/section-bg-4.jpg)',
        }}
      >
        <div className="container relative">
          <div className="row wow fadeInUpShort">
            <div className="row text-center wow fadeInUp">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <h3 className="section-title mb-30">
                  <AnimatedText text="They trust us" />
                </h3>
                <p className="section-descr mb-50 mb-sm-30">
                  Découvrez les entreprises qui ont choisi Stand By Me pour
                  sublimer leurs espaces.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <ClientSlider />
            </div>
          </div>
        </div>
      </section>
      {/* End Logotypes */}

      {/* Divider */}
      <hr className="mt-0 mb-0" />
      {/* End Divider */}

      <hr className={`mt-0 mb-0 ${dark ? 'white' : ''}`} />

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
            {/* Section Content */}
            <div className="text-center">
              <div className="row">
                {/* Page Title */}
                <div className="col-md-8 offset-md-2">
                  <h1 className="hs-title-1 mb-0">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      {t("Say hello")}
                    </span>
                  </h1>
                </div>
                {/* End Page Title */}
              </div>
            </div>
            {/* End Section Content */}
          </div>
        </ParallaxContainer>
      </section>

      {/* Contact Section */}
      <section className="page-section pt-0" >
        <Contact />
      </section>
    </>
  );
}
