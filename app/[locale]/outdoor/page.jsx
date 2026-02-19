import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import OutdoorPortfolio from "@/components/OutdoorPortfolio";
import { menuItems } from "@/data/menu";
import { infos } from "@/data/infos";
import MapMonde from "@/components/MapMonde";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import AnimatedText from "@/components/common/AnimatedText";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: `${infos.company} - Outdoor & Structures`,
  description:
    "Découvrez nos structures outdoor : bois, métal, tentes AirClad et Algéco. Stand By Me conçoit et réalise vos espaces événementiels extérieurs sur mesure.",
};

export default async function OutdoorPage() {
  const t = await getTranslations("portfolio");
  return (
    <div className="theme-main">
      <div className="page" id="top">
        {/* Navigation */}
        <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
          <Header links={menuItems} />
        </nav>

        <main id="main">
          {/* Hero Video Section - Sans contenu texte */}
          <Hero
            showContent={false}
            scrollTarget="#outdoor-content"
            sectionId="home"
          />

          <section className="page-section pt-0 pb-0" id="home">
            <ParallaxContainer
              className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.webp)",
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
                          <AnimatedText text={t("outdoor")} />
                        </span>
                      </h1>
                      <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                          <p
                            className="section-descr mb-0 wow fadeIn"
                            data-wow-delay="0.2s"
                            data-wow-duration="1.2s"
                          >
                            {t("solutions_outdoor")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxContainer>
          </section>

          {/* Outdoor Portfolio Section */}
          <div id="outdoor-content">
            <OutdoorPortfolio gridClass="work-grid-3" />
          </div>
          {/* INTERNATIONAL MAP SECTION */}
          <section id="international">
            <MapMonde />
          </section>

          {/* Contact Section */}
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
