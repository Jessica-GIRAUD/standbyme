"use client";

import { clients } from "@/data/clients";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ClientSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={6}
      breakpoints={{
        1199: {
          slidesPerView: 6, // When window width is <= 1199px
        },

        768: {
          slidesPerView: 4, // When window width is <= 768px
        },
        0: {
          slidesPerView: 2, // When window width is <= 480px
        },
      }}
      watchSlidesProgress
      modules={[Autoplay]}
      autoplay
      resizeObserver
      className="small-item-carousel black owl-carousel mb-0 autoplay owl-theme"
      style={{
        opacity: 1,
        display: "block",
      }}
    >
      {/* Team item */}
      {[...clients, ...clients].map((elm, i) => (
        <SwiperSlide className="owl-item" key={i}>
          <div className="logo-item">
            <Image
              src={elm.imgSrc}
              width={0}
              height={0}
              sizes="100vw"
              alt={elm.name}
              className="image-filter"
              style={{
                width: "auto",
                height: "120px",
                maxWidth: "160px",
                objectFit: "contain",
              }}
            />
          </div>
        </SwiperSlide>
      ))}

      {/* End Team item */}
    </Swiper>
  );
}
