"use client";

import { clients } from "@/data/clients";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
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
              width={160}
              height={120}
              sizes="(max-width: 768px) 50vw, (max-width: 1199px) 25vw, 16.67vw"
              alt={elm.name}
              className="image-filter"
              style={{
                width: "auto",
                height: "120px",
                maxWidth: "160px",
                objectFit: "contain",
              }}
              priority={i < 6} // Priorité pour les 6 premières images visibles
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </SwiperSlide>
      ))}

      {/* End Team item */}
    </Swiper>
  );
}
