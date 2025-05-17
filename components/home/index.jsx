import AnimatedText from '@/components/common/AnimatedText';
import Team from '@/components/Team';
import ClientSlider from '@/components/ClientSlider';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import { getTranslations } from 'next-intl/server';

export default async function Home1() {
  const t = await getTranslations('home');
  return (
    <>
      {/* Team Section */}
      <Team />
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

      <section className="page-section">
        <Testimonials />
      </section>
      {/* Divider */}
      <hr className="mt-0 mb-0" />
      {/* End Divider */}

      {/* Contact Section */}
      <Contact />
      {/* End Contact Section */}
    </>
  );
}
