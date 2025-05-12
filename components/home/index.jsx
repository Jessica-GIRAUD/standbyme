import AnimatedText from '@/components/common/AnimatedText';
import ParallaxContainer from '@/components/common/ParallaxContainer';
import Team from './Team';
import ClientSlider from '../others/ClientSlider';
import Contact from '@/components/home/Contact';
import { getTranslations } from 'next-intl/server';

export default async function Home1() {
  const t = await getTranslations('home');
  return (
    <>
      {/* Team Section */}
      <section className="page-section pt-0 pb-0" id="about">
        <ParallaxContainer
          className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
          style={{
            backgroundImage: 'url(/assets/images/team/team.jpg)',
          }}
        >
          <>
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
            <div className="container position-relative pt-50">
              <Team />
            </div>
          </>
        </ParallaxContainer>
      </section>
      {/* End Team Section */}

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
                  <AnimatedText text={t('trust')} />
                </h3>
                <p className="section-descr mb-50 mb-sm-30">
                  {t('trustSubtitle')}
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
                    <AnimatedText text={t('sayHello')} />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </ParallaxContainer>
        <Contact />
      </section>

      {/* End Contact Section */}
    </>
  );
}
