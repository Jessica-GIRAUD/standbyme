'use client';
import ParallaxContainer from '@/components/common/ParallaxContainer';
import Header from '@/components/header/Header';
import AnimatedText from '@/components/common/AnimatedText';
import { menuItems } from '@/data/menu';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { useTranslations } from 'next-intl';

export default function Login() {
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
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5 pb-40"
                style={{
                  backgroundImage:
                    'url(/assets/images/full-width-images/page-title-bg-5.jpg)',
                }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative">
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
            <section className="page-section p-0">
              <LoginRegisterForm />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
