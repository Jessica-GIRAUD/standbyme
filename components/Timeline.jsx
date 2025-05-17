'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

export default function Timeline() {
  const t = useTranslations('savoir-faire');

  const [isPlaying, setIsPlaying] = useState([false, false]);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const togglePlayPause = (index) => {
    const refs = [videoRef1, videoRef2];
    const video = refs[index].current;
    if (!video) return;

    if (isPlaying[index]) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying((prev) => {
      const newStates = [...prev];
      newStates[index] = !prev[index];
      return newStates;
    });
  };

  const timelineItems = [
    {
      title: 'STAND VIRTUEL',
      description:
        "Plongez au cœur de l'action avec notre visite virtuelle du stand, où vous pouvez explorer chaque détail, admirer les produits et ressentir l'ambiance du stand",
      btn: 'Découvrir le stand',
      link: 'https://deltaplus-preventica2023.fr/',
      image: '/assets/images/full-width-images/page-title-bg-5.jpg',
    },
    {
      title: 'CAPTATION VIDEO',
      description:
        'Capturez l’essence de vos événements avec nos prises de vues photo et vidéo, accompagnées d’un montage dynamique',
      videoUrl: '/assets/videos/media_2.mp4',
      ref: videoRef1,
      place: 0,
    },
    {
      title: 'CAMERA INTELLIGENTE',
      description:
        'Optimisez l’impact de votre stand grâce à un outil mesure pensé pour suivre sa performance en temps réel',
      videoUrl: '/assets/videos/media_1.mp4',
      ref: videoRef2,
      place: 1,
    },
  ];

  return (
    <>
      {/* Tab panes */}
      <div className="tab-el tpl-minimal-tabs-cont position-relative">
        {/* Decorative Waves */}
        <div
          className="decoration-10 d-none d-sm-block z-index-n1"
          data-rellax-y=""
          data-rellax-speed="-0.7"
          data-rellax-percentage="0.37"
        >
          <Image
            src="/assets/images/decoration-3.svg"
            className="svg-shape"
            width={148}
            height={148}
            alt="wave"
          />
        </div>
        {/* End Decorative Waves */}

        <div className="timeline-container">
          {/* Paris */}

          {timelineItems.map((el, index) => {
            return (
              <div className="row timeline-item mb-5" key={index}>
                <div
                  className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : ''}`}
                >
                  <div className="timeline-content">
                    <div className="position-relative">
                      {el.videoUrl ? (
                        <video
                          src={el.videoUrl}
                          ref={el.ref}
                          preload="auto"
                          muted
                          loop
                          playsInline
                          width={600}
                          height={400}
                        />
                      ) : (
                        <Image
                          src="/assets/images/full-width-images/page-title-bg-5.jpg"
                          alt="Paris"
                          width={600}
                          height={400}
                          className="img-fluid rounded"
                        />
                      )}

                      <div className="destination-info">
                        <h2>{t(el.title)}</h2>
                        <p>{t(el.description)}</p>
                        {el.btn && (
                          <a
                            href={el.link}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                          >
                            {t(el.btn)} <span>→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-md-1 timeline-date-col">
                  <div className="timeline-date">
                    {el.videoUrl ? (
                      <div className="btn btn-mod btn-large btn-round d-flex">
                        {t(el.title)}
                        <a
                          onClick={() => togglePlayPause(el.place)}
                          role="button"
                          className="d-flex"
                          // className="bg-video-button-muted"
                        >
                          <i
                            className={`mi-${
                              isPlaying[el.place] ? 'pause' : 'play'
                            } ms-3 fs-5`}
                            style={{ color: '#fff' }}
                          />
                          <span className="visually-hidden">Pause</span>
                        </a>
                      </div>
                    ) : (
                      <span className="btn btn-mod btn-large btn-round ms-1 me-1 mt-2 align-middle">
                        {t(el.title)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* End Tab panes */}
    </>
  );
}
