import ParallaxContainer from '@/components/common/ParallaxContainer';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { menuItems } from '@/data/menu';
import Home1 from '@/components/home/index';
import Hero from '@/components/Hero';
import { infos } from '@/data/infos';

export const metadata = {
  title: infos.company,
  description:
    'Stand By Me conçoit et réalise des stands sur mesure pour vos événements en France et à l’international. Design épuré, créativité, savoir-faire : faites rayonner votre marque avec un stand à votre image.',
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
            <Header links={menuItems} />
          </nav>
          {/* End Navigation Panel */}
          <main id="main">
            {/* Home Section */}
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  'url(/assets/images/full-width-images/section-bg-1.jpg)',
              }}
              id="home"
            >
              <Hero />
            </ParallaxContainer>
            {/* End Home Section */}

            <Home1 />
          </main>

          {/* Footer */}
          <footer className="page-section footer bg-gray-light-1 pb-30">
            <Footer />
          </footer>
          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
