import React from "react";
import { getTranslations } from "next-intl/server";

import Footer from "@/components/footer/Footer";

import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header from "@/components/header/Header";
import AnimatedText from "@/components/common/AnimatedText";
import { services } from "@/data/services";
import Eco from "@/components/Eco";

import Timeline from "@/components/Timeline";
import { menuItems } from "@/data/menu";
import Contact from "@/components/Contact";
import { infos } from "@/data/infos";
import Service from "@/components/Service";

export const metadata = {
  title: `${infos.company} - Savoir-Faire`,
  description:
    "Stand By Me conçoit et réalise des stands sur mesure pour vos événements en France et à l’international. Design épuré, créativité, savoir-faire : faites rayonner votre marque avec un stand à votre image.",
};

export default async function SavoirFaire() {
  const t = await getTranslations("savoir-faire");

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header links={menuItems} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.webp)",
              }}
            >
              <div className="container position-relative pt-50 pb-100 pb-sm-20">
                {/* Section Content */}
                <div className="text-center">
                  <div className="row">
                    {/* Page Title */}
                    <div className="col-md-8 offset-md-2">
                      <h1 className="hs-title-1 mb-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
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
                            {t("title2")}
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

            <Service />

            <section
              className="page-section bg-gradient-gray-light-2 bg-scroll"
              id="title"
            >
              <div className="container pt-50 pb-100 pb-sm-20">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="section-title mb-30">
                      <AnimatedText text={t("title3")} />
                    </h3>
                  </div>
                </div>
              </div>
              <Timeline />
            </section>

            <section className="page-section" id="eco">
              <Eco />
            </section>

            <Contact />
          </main>
          <Footer />
        </div>{" "}
      </div>
    </>
  );
}
