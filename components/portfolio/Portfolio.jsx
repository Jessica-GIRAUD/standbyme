'use client';

import { portfolios } from '@/data/portfolio';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Gallery } from 'react-photoswipe-gallery';

const filters = [
  { name: 'Tous les stands', category: 'all' },
  { name: 'Intérieur', category: 'indoor' },
  { name: 'Extérieur', category: 'outdoor' },
];

export default function Portfolio({ gridClass = '' }) {
  const t = useTranslations('portfolio');

  const [currentCategory, setCurrentCategory] = useState('all');

  const isotopContainer = useRef();
  const isotope = useRef();

  const initIsotop = async () => {
    const Isotope = (await import('isotope-layout')).default;
    const imagesloaded = (await import('imagesloaded')).default;

    if (!isotopContainer.current) return;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: '.work-item',
      layoutMode: 'masonry', // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on('progress', function () {
      // Trigger Isotope layout
      isotope.current?.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentCategory(val);
    isotope.current.arrange({
      filter: val == 'all' ? '*' : '.' + val,
    });
    //   isotope.value.layout();
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    if (typeof window !== 'undefined') {
      initIsotop();
    }
  }, []);

  return (
    <div className="full-wrapper position-relative">
      {/* Works Filter */}
      <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
        {filters.map((elm, i) => (
          <a
            onClick={() => updateCategory(elm.category)}
            key={i}
            className={`filter ${
              currentCategory == elm.category ? 'active' : ''
            }`}
          >
            {t(elm.name)}
          </a>
        ))}
      </div>
      {/* End Works Filter */}
      {/* Works Grid */}
      <ul
        ref={isotopContainer}
        className={`works-grid work-grid-gut clearfix hide-titles hover-white image-lazyload-container ${gridClass} masonry`}
        id="work-grid"
      >
        <Gallery>
          {portfolios.map((item, index) => {
            return (
              <li key={index} className={'work-item mix  ' + item.mix}>
                <Link
                  href={`/realisations/${item.id}`}
                  className={'work-lightbox-link mfp-image'}
                >
                  <div className="work-img">
                    <div className="work-img-bg" />
                    <Image
                      width={650}
                      height={773}
                      src={item.images[0].imgSrc}
                      alt={item.images[0].imgAlt}
                      data-wow-delay="1s"
                    />
                  </div>
                  <div className="work-intro text-center">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.descr}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </Gallery>
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
