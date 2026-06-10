import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { menuItems } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import AnimatedText from "@/components/common/AnimatedText";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Politique de confidentialité — Stand By Me",
  description:
    "Découvrez comment Stand By Me collecte, utilise et protège vos données personnelles conformément au RGPD.",
  robots: { index: true, follow: true },
};

export default async function PolitiqueDeConfidentialite() {
  const t = await getTranslations("privacyPolicy");

  return (
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
                          <AnimatedText text={t("privacyPolicy")} />
                        </span>
                      </h1>
                      <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                          <p
                            className="section-descr mb-0 wow fadeIn"
                            data-wow-delay="0.2s"
                            data-wow-duration="1.2s"
                          >
                            {t("everyDetailCounts")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxContainer>
          </section>

          <section className="page-section">
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <p className="text-gray mb-30">{t("intro")}</p>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s1Title")}
                  </h2>
                  <p>{t("s1Intro")}</p>
                  <ul className="text-gray mb-30">
                    <li>
                      <strong>Stand By Me</strong>
                    </li>
                    <li>{t("s1FormeJuridique")}</li>
                    <li>{t("s1Address")}</li>
                    <li>{t("s1Email")}</li>
                  </ul>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s2Title")}
                  </h2>
                  <p className="text-gray mb-10">{t("s2Intro")}</p>
                  <ul className="text-gray mb-30">
                    <li>{t("s2Item1")}</li>
                    <li>{t("s2Item2")}</li>
                    <li>{t("s2Item3")}</li>
                    <li>{t("s2Item4")}</li>
                    <li>{t("s2Item5")}</li>
                  </ul>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s3Title")}
                  </h2>
                  <p className="text-gray mb-10">{t("s3Intro")}</p>
                  <ul className="text-gray mb-20">
                    <li>{t("s3Item1")}</li>
                    <li>{t("s3Item2")}</li>
                    <li>{t("s3Item3")}</li>
                  </ul>
                  <p className="text-gray mb-30">{t("s3NoConsent")}</p>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s4Title")}
                  </h2>
                  <p className="text-gray mb-10">{t("s4Intro")}</p>
                  <ul className="text-gray mb-30">
                    <li>{t("s4Item1")}</li>
                    <li>{t("s4Item2")}</li>
                  </ul>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s5Title")}
                  </h2>
                  <p className="text-gray mb-10">{t("s5Intro")}</p>
                  <ul className="text-gray mb-30">
                    <li>{t("s5Item1")}</li>
                    <li>{t("s5Item2")}</li>
                  </ul>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s6Title")}
                  </h2>
                  <p className="text-gray mb-30">
                    {t("s6TextBefore")} <strong>{t("s6Years")}</strong>{" "}
                    {t("s6TextAfter")}
                  </p>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s7Title")}
                  </h2>
                  <p className="text-gray mb-10">{t("s7Intro")}</p>
                  <ul className="text-gray mb-20">
                    <li>{t("s7Item1")}</li>
                    <li>{t("s7Item2")}</li>
                    <li>{t("s7Item3")}</li>
                    <li>{t("s7Item4")}</li>
                  </ul>
                  <p className="text-gray mb-10">
                    {t("s7Contact")} <strong>projets@standbyme.fr</strong>
                  </p>
                  <p className="text-gray mb-30">
                    {t("s7Cnil")}
                    <a
                      href="https://www.cnil.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.cnil.fr
                    </a>
                    ).
                  </p>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s8Title")}
                  </h2>
                  <p className="text-gray mb-30">{t("s8Text")}</p>

                  <h2 className="section-title-small mb-20 mt-50">
                    {t("s9Title")}
                  </h2>
                  <p className="text-gray mb-50">
                    {t("s9Text")} <strong>{t("s9Date")}</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
