import AnimatedText from '@/components/common/AnimatedText';
import Slider from './Slider';
import { useTranslations } from 'next-intl';

export default function ClientSection() {
  const t = useTranslations('home');
  return (
    <section
      className="page-section bg-dark bg-dark-alpha-70 light-content"
      style={{
        backgroundImage:
          'url(/assets/images/full-width-images/section-bg-4.webp)',
      }}
    >
      <div className="container relative">
        <div className="row wow fadeInUpShort d-flex justify-content-center">
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
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
}
