"use client";

import Footer from "@/components/footer/Footer";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header from "@/components/header/Header";
import Contact from "@/components/Contact";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import { outdoorProjects } from "@/data/outdoorProjects";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import FullscreenVideo from "@/components/FullscreenVideo";
import useScreenSize from "@/hooks/useScreenSize";

export default function SingleOutdoorProject() {
  const params = useParams();
  const t = useTranslations("outdoor");
  const { isMobile } = useScreenSize();

  const project =
    outdoorProjects.filter((p) => p.id == params.id)[0] || outdoorProjects[0];

  const title = `${project.client} – ${project.title} ${project.date}`;
  console.log("title", title);
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header links={menuItems} />
          </nav>
          <main id="main">
            {/* Hero */}
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
                        <div className="mb-20">
                          <a
                            href="/outdoor"
                            className="btn btn-mod btn-small btn-border btn-circle"
                            data-btn-animate="y"
                          >
                            <i className="mi-arrow-left align-center size-18" />{" "}
                            {t("backOutdoor", {
                              defaultValue: "Back to outdoor",
                            })}
                          </a>
                        </div>
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={title} />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              {project.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            {/* Details & Media */}
            <section className="page-section">
              <div className="container position-relative">
                <div className="row">
                  {/* Details */}
                  <div className="col-md-4 mb-sm-40 wow fadeInUp">
                    <div className="block-sticky">
                      <h2 className="h3 mb-20"> {t("details")}</h2>
                      <hr className="mb-20" />
                      <div className="row text-gray small">
                        <div className="col-4">
                          <b>Client :</b>
                        </div>
                        <div className="col-8">{project.client}</div>
                      </div>

                      <hr className="mb-20" />
                      <div className="row text-gray small align-items-center">
                        <div className="col-4">
                          <b>{t("surface")} :</b>
                        </div>
                        <div className="col-8">{project.surface}</div>
                      </div>
                    </div>
                  </div>
                  {/* Media */}
                  <div className="col-md-8">
                    <div className="mb-n30">
                      <div className="mb-30 wow fadeInUp">
                        <iframe
                          src={project.videoSrc}
                          width={"100%"}
                          height={400}
                          allowFullScreen=""
                          style={{ marginBottom: "20px" }}
                        />
                      </div>
                      {project.images.map((img, index) => (
                        <div className="mb-30 wow fadeInUp" key={index}>
                          <Image
                            src={img.imgSrc}
                            alt={img.imgAlt}
                            width={1350}
                            height={865}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="mt-0 mb-0" />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
