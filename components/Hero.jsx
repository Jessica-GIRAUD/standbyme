'use client';

import { useRef, useState } from 'react';
import { infos } from '@/data/infos';
import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();
  console.log('locale', locale);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  // const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  /* 
  const toggleMuteUnmute = () => {
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  }; */

  const playFullscreenVideo = () => {
    const videoContainer = document.createElement('div');
    videoContainer.style.position = 'fixed';
    videoContainer.style.top = '0';
    videoContainer.style.left = '0';
    videoContainer.style.width = '100vw';
    videoContainer.style.height = '100vh';
    videoContainer.style.zIndex = '10000';
    videoContainer.style.backgroundColor = 'black';
    videoContainer.style.display = 'flex';
    videoContainer.style.justifyContent = 'center';
    videoContainer.style.alignItems = 'center';

    const video = document.createElement('video');
    video.src =
      locale === 'en'
        ? '/assets/videos/video_en.mp4'
        : '/assets/videos/video_fr.mp4';
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = '100%';
    video.style.maxHeight = '100%';
    video.style.objectFit = 'contain';
    video.style.outline = 'none';
    videoContainer.appendChild(video);

    // Bouton de fermeture (mobile friendly)
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.fontSize = '2rem';
    closeButton.style.background = 'rgba(0, 0, 0, 0.5)';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '40px';
    closeButton.style.height = '40px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10001';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    closeButton.addEventListener('click', () => exitFullscreen());
    videoContainer.appendChild(closeButton);

    document.body.appendChild(videoContainer);

    const cleanup = () => {
      video.pause();
      videoContainer.remove();
      document.removeEventListener('fullscreenchange', handleFsChange);
    };

    const exitFullscreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => cleanup());
      } else {
        cleanup();
      }
    };

    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        cleanup();
      }
    };

    document.addEventListener('fullscreenchange', handleFsChange);

    videoContainer.requestFullscreen().catch((err) => {
      console.error('Fullscreen error:', err);
      cleanup();
    });
  };

  return (
    <section
      className="home-section bg-dark-1 bg-dark-alpha-30 light-content scrollSpysection"
      id="home"
    >
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Background Video */}
        {/* Please replace the video file in folder "video" with your own file */}
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
        {/*  <a
          onClick={toggleMuteUnmute}
          href="#"
          role="button"
          className="bg-video-button-muted"
        >
          <i className={`mi-volume-${isMuted ? 'up' : 'off'}`} />
          <span className="visually-hidden">Volume On</span>
        </a> */}
        <a
          onClick={togglePlayPause}
          href="#"
          role="button"
          className="bg-video-button-muted"
        >
          <i className={`mi-${isPlaying ? 'pause' : 'play'}`} />
          <span className="visually-hidden">Pause</span>
        </a>
        {/* End Background Video */}
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
              <h2 className="hs-title-11 mb-30 mb-xs-10 wow fadeInUp">
                {infos.company}
              </h2>
              <h1 className="hs-title-12 mb-50 mb-sm-30">
                <span className="wow charsAnimIn" data-splitting="chars">
                  {t('offerNewDimension')}
                </span>
              </h1>
              <div
                className="local-scroll wch-unset wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <button
                  onClick={playFullscreenVideo}
                  className="btn btn-mod btn-border-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                  data-btn-animate="y"
                >
                  {t('showreel')}
                </button>
                <a
                  href="#contact"
                  className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                  data-btn-animate="y"
                >
                  {t('getInTouch')}
                </a>
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}

        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap wow fadeInUp"
          data-wow-offset={0}
        >
          <a href="#about" className="scroll-down">
            <i className="mi-chevron-down" />
            <span className="visually-hidden">Scroll to the next section</span>
          </a>
        </div>
        {/* End Scroll Down */}
      </div>
    </section>
  );
}
