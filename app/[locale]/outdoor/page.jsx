import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header from "@/components/header/Header";
import AnimatedText from "@/components/common/AnimatedText";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/Contact";
import MapMonde from "@/components/MapMonde";
import { menuItems } from "@/data/menu";
import { infos } from "@/data/infos";
import { getTranslations } from "next-intl/server";
import SliderVideo from "@/components/SliderVideo";

export const metadata = {
  title: `${infos.company} - Outdoor & International`,
  description:
    "Focus Outdoor & International – Stand By Me, expert en structures événementielles et accompagnement worldwide.",
};

export default async function OutdoorPage() {
  // Namespace keys should exist in messages/outdoor.json translations
  const t = await getTranslations("outdoor");

  return (
    <div className="theme-main">
      <div className="page" id="top">
        {/* Navigation */}
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header links={menuItems} />
        </nav>

        <main id="main">
          {/* ------------------------------------------------------------------ */}
          {/* HERO SECTION */}
          {/* ------------------------------------------------------------------ */}
          <ParallaxContainer
            className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
            style={{
              backgroundImage:
                "url(/assets/images/full-width-images/section-bg-5.jpg)",
            }}
          >
            <div className="container position-relative pt-30 pt-sm-50">
              <div className="text-center">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <h1 className="hs-title-1 mb-30">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        {/* Title: e.g. "Outdoor & International" */}
                        <AnimatedText text={t("title1")} />
                      </span>
                    </h1>
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <p
                          className="section-descr mb-0 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
                          {t("subtitle")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxContainer>

          {/* ------------------------------------------------------------------ */}
          {/* INTERNATIONAL MAP SECTION */}
          {/* ------------------------------------------------------------------ */}
          <section id="international">
            <MapMonde />
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* OUTDOOR STRUCTURE SHOWCASE */}
          {/* ------------------------------------------------------------------ */}
          <section className="page-section pt-0" id="outdoor-showcase">
            <div className="container position-relative pt-50 pb-70">
              <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                  <h3 className="section-title mb-30">
                    <AnimatedText text={t("outdoorShowcaseTitle")} />
                  </h3>
                  <p className="section-descr mb-60">
                    {t("outdoorShowcaseDescr")}
                  </p>
                </div>
              </div>
            </div>
            {/* Slider with example structures (images / videos) */}
            <SliderVideo />
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* CONTACT */}
          {/* ------------------------------------------------------------------ */}
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
