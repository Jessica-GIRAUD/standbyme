"use client";

import { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import FullscreenVideo from "./FullscreenVideo";

export default function Hero({
  showContent = true,
  scrollTarget = "#about",
  sectionId = "home",
}) {
  const t = useTranslations("home");
  const locale = useLocale();

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const videoSrc =
    locale === "en"
      ? "/assets/videos/video_en.mp4"
      : "/assets/videos/video_fr.mp4";

  return (
    <ParallaxContainer
      className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
      style={{
        backgroundImage:
          "url(/assets/images/full-width-images/section-bg-1.webp)",
      }}
      id={sectionId}
    >
      <section
        className="home-section bg-dark-1 bg-dark-alpha-30 light-content scrollSpysection"
        id={sectionId}
      >
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          {/* Background Video */}
          <div className="bg-video-wrapper">
            <video
              ref={videoRef}
              className="bg-video"
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/videos/video_1.mp4" type="video/mp4" />
            </video>
            <div className="bg-video-overlay bg-dark-alpha-50" />
          </div>
          <a
            onClick={togglePlayPause}
            href="#"
            role="button"
            className="bg-video-button-muted"
          >
            <i className={`mi-${isPlaying ? "pause" : "play"}`} />
            <span className="visually-hidden">Pause</span>
          </a>
          {/* End Background Video */}

          {/* Home Section Content - Conditional */}
          {showContent && (
            <div className="home-content">
              <div className="row">
                {/* Home Section Text */}
                <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
                  <h2 className="hs-title-11 mb-30 mb-xs-10 wow fadeInUp">
                    {t("upperTitle")}
                  </h2>
                  <h1 className="hs-title-12 mb-50 mb-sm-30">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      {t("offerNewDimension")}
                    </span>
                  </h1>
                  <div
                    className="local-scroll wch-unset wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <FullscreenVideo videoSrc={videoSrc}>
                      <button
                        className="btn btn-mod btn-border-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                        data-btn-animate="y"
                      >
                        {t("showreel")}
                      </button>
                    </FullscreenVideo>
                    <a
                      href="#contact"
                      className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                      data-btn-animate="y"
                    >
                      {t("getInTouch")}
                    </a>
                  </div>
                </div>
                {/* End Home Section Text */}
              </div>
            </div>
          )}
          {/* End Home Section Content */}

          {/* Scroll Down */}
          <div
            className="local-scroll scroll-down-wrap wow fadeInUp"
            data-wow-offset={0}
          >
            <a href={scrollTarget} className="scroll-down">
              <i className="mi-chevron-down" />
              <span className="visually-hidden">
                Scroll to the next section
              </span>
            </a>
          </div>
          {/* End Scroll Down */}
        </div>
      </section>
    </ParallaxContainer>
  );
}
