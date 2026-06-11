import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { menuItems } from "@/data/menu";
import { infos } from "@/data/infos";
import ContactForm from "@/components/ContactForm";
import HeroCarousel from "@/components/HeroCarousel";
import { getTranslations } from "next-intl/server";
import ClientSection from "@/components/ClientSection";
import Link from "next/link";
import NumbersSection from "@/components/NumbersSection";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Stand sur mesure pour salon professionnel — Stand By Me Paris",
  description:
    "Concepteur et fabricant de stands sur mesure pour salons professionnels. Design 3D, fabrication, logistique, montage/démontage. Devis gratuit sous 24h.",
  keywords:
    "stand sur mesure salon professionnel, standiste Paris, fabrication stand exposition, stand événementiel sur mesure, conception stand salon",
  openGraph: {
    title: "Stand sur mesure pour salon professionnel — Stand By Me",
    description:
      "De la conception 3D à la remise des clés : stands sur mesure pour tous vos salons professionnels. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "Stand By Me",
  },
  alternates: {
    canonical:
      "https://www.standbyme.fr/fr/stand-sur-mesure-salon-professionnel",
  },
};

const ETAPES_ICONS = [
  "mi-edit",
  "mi-layers",
  "mi-settings",
  "mi-send",
  "mi-home",
  "mi-archive",
];

export default async function StandSurMesurePage() {
  const t = await getTranslations("landing");

  const etapes = [
    { icon: ETAPES_ICONS[0], title: t("etape1Title"), desc: t("etape1Desc") },
    { icon: ETAPES_ICONS[1], title: t("etape2Title"), desc: t("etape2Desc") },
    { icon: ETAPES_ICONS[2], title: t("etape3Title"), desc: t("etape3Desc") },
    { icon: ETAPES_ICONS[3], title: t("etape4Title"), desc: t("etape4Desc") },
    { icon: ETAPES_ICONS[4], title: t("etape5Title"), desc: t("etape5Desc") },
    { icon: ETAPES_ICONS[5], title: t("etape6Title"), desc: t("etape6Desc") },
  ];

  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
          <Header links={menuItems} />
        </nav>

        <main id="main">
          {/* ── BLOC 1 : HERO ── */}
          <section
            className="home-section light-content"
            style={{
              position: "relative",
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <HeroCarousel />
            <div
              className="container"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="row align-items-center min-height-100vh pt-100 pb-80">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h1 className="hs-title-1 mb-20 wow fadeInUp">
                    {t("heroTitle")}
                  </h1>
                  <p
                    className="section-descr mb-50 wow fadeInUp"
                    data-wow-delay="0.15s"
                    style={{
                      fontSize: "1.2rem",
                      maxWidth: "680px",
                      margin: "0 auto 40px",
                    }}
                  >
                    {t("heroSubtitle")}
                  </p>
                  <div
                    className="local-scroll wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Link
                      href="#contact"
                      className="btn btn-mod btn-w btn-large btn-round ms-2 me-2 mt-2"
                      data-btn-animate="y"
                    >
                      {t("heroCta")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ── FIN HERO ── */}

          {/* ── BLOC 2 : PREUVES IMMÉDIATES ── */}
          <NumbersSection />
          <ClientSection />
          <section className="page-section bg-gray-light-1">
            <div className="container">
              {/* Témoignage */}
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <blockquote
                    className="wow fadeInUp"
                    style={{ borderLeft: "none", padding: 0 }}
                  >
                    <Image
                      src="/assets/images/quotation-mark.svg"
                      alt=""
                      width={40}
                      height={32}
                      className="mb-20"
                    />
                    <p
                      className="mb-20"
                      style={{
                        fontSize: "1.15rem",
                        fontStyle: "italic",
                        lineHeight: 1.7,
                      }}
                    >
                      {t("testimonial")}
                    </p>
                    <cite
                      style={{
                        fontStyle: "normal",
                        fontSize: "0.9rem",
                        color: "#888",
                      }}
                    >
                      — Antoine Berthoud, HOKA
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
          {/* ── FIN PREUVES ── */}

          {/* ── BLOC 3 : RÉALISATIONS ── */}

          <Portfolio
            gridClass="work-grid-3"
            withFilters={false}
            slice={6}
            withButton
          />

          {/* ── FIN RÉALISATIONS ── */}

          {/* ── BLOC 4 : SAVOIR-FAIRE ── */}
          <section
            className="page-section light-content"
            style={{
              backgroundImage:
                "url(/assets/images/full-width-images/page-title-bg-4.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="bg-dark-alpha-80">
              <div
                className="container"
                style={{ position: "relative", zIndex: 1 }}
              >
                <div className="text-center mb-60 mb-sm-40 wow fadeInUp">
                  <h2 className="section-title">{t("savoirFaireTitle")}</h2>
                  <p className="section-descr">{t("savoirFaireDescr")}</p>
                </div>
                <div className="row">
                  {etapes.map((e, i) => (
                    <div
                      key={i}
                      className="col-md-6 col-lg-4 mb-40 wow fadeInUp"
                      data-wow-delay={`${i * 0.08}s`}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            backgroundColor: "#d3701d",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i
                            className={`${e.icon} size-22`}
                            style={{ color: "#fff" }}
                          />
                        </div>
                        <div>
                          <h3
                            className="mb-10"
                            style={{ fontSize: "1rem", fontWeight: 700 }}
                          >
                            {e.title}
                          </h3>
                          <p
                            className="text-gray mb-0"
                            style={{ fontSize: "0.9rem", lineHeight: 1.6 }}
                          >
                            {e.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* ── FIN SAVOIR-FAIRE ── */}

          {/* ── BLOC 5 : FORMULAIRE ── */}
          <section className="page-section" id="contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="text-center mb-50 wow fadeInUp">
                    <h2 className="section-title">{t("formTitle")}</h2>
                    <p className="section-descr">{t("formDescr")}</p>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ── FIN FORMULAIRE ── */}

          {/* ── BLOC 6 : CTA FINAL ── */}
          <section
            className="page-section bg-dark-1 light-content"
            style={{
              backgroundImage:
                "url(/assets/images/full-width-images/section-bg-3.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-dark-alpha-70" style={{ padding: "80px 0" }}>
              <div className="container text-center">
                <h2 className="section-title light-content mb-20 wow fadeInUp">
                  {t("ctaTitle")}
                </h2>
                <p
                  className="section-descr light-content mb-50 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {t("ctaDescr")}
                </p>
                <div
                  className="local-scroll wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <Link
                    href="#contact"
                    className="btn btn-mod btn-w btn-large btn-round ms-2 me-2 mt-2"
                    data-btn-animate="y"
                  >
                    {t("ctaCta")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* ── FIN CTA FINAL ── */}
        </main>

        <Footer />
      </div>
    </div>
  );
}
