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
      image: '/assets/images/delta_vr.png',
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
      poster: '/assets/images/cam.png',
    },
  ];

  return (
    <div className="timeline-container">
      {timelineItems.map((el, index) => {
        return (
          <div className="row timeline-item mb-5" key={index}>
            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : ''}`}>
              <div className="timeline-content">
                <div className="position-relative">
                  {el.videoUrl ? (
                    <video
                      poster={el.poster || undefined}
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
                      src={el.image}
                      alt="Paris"
                      width={600}
                      height={400}
                      className="img-fluid rounded"
                    />
                  )}

                  <div className="destination-info">
                    <h2>{t(el.title)}</h2>
                    <p>{t(el.description)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-1 timeline-date-col">
              <div className="timeline-date">
                {el.videoUrl ? (
                  <div className="btn btn-mod btn-large btn-round d-flex ms-1 me-1 mt-2 align-middle">
                    {t(el.title)}
                    <a
                      onClick={() => togglePlayPause(el.place)}
                      role="button"
                      className="d-flex"
                    >
                      <i
                        className={`mi-${
                          isPlaying[el.place] ? 'pause' : 'play'
                        } ms-2 fs-5`}
                        style={{ color: '#fff' }}
                      />
                      <span className="visually-hidden">Pause</span>
                    </a>
                  </div>
                ) : el.btn ? (
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-mod btn-large btn-round ms-1 me-1 mt-2 align-middle"
                  >
                    {t(el.title)} <span className="ms-2">→</span>
                  </a>
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
  );
}
