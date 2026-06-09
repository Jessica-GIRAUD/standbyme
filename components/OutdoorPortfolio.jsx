"use client";

import { outdoorProjects } from "@/data/outdoorProjects";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Gallery } from "react-photoswipe-gallery";
import { useTranslations } from "next-intl";

const filters = [
  { name: "Tous", category: "all" },
  { name: "Bois", category: "Bois" },
  { name: "Métal", category: "Métal" },
  { name: "Tente AirClad", category: "Tente AirClad" },
  { name: "Algéco", category: "Algéco" },
];

export default function OutdoorPortfolio({ gridClass = "" }) {
  const t = useTranslations("portfolio");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);

  const isotopContainer = useRef();
  const isotope = useRef();

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    if (!isotopContainer.current) return;

    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".outdoor-item",
      layoutMode: "fitRows",
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.current?.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentCategory(val);
    isotope.current.arrange({
      filter: val == "all" ? "*" : "." + val.replace(/\s+/g, "-"),
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      initIsotop();
    }
  }, []);

  return (
    <section className="page-section">
      <div className="full-wrapper position-relative">
        {/* Works Filter */}
        {/* <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
          {filters.map((elm, i) => (
            <a
              onClick={() => updateCategory(elm.category)}
              key={i}
              className={`filter ${
                currentCategory == elm.category ? "active" : ""
              }`}
            >
              {t(elm.name)}
            </a>
          ))}
        </div> */}
        {/* End Works Filter */}

        {/* Outdoor Grid */}
        <ul
          ref={isotopContainer}
          className={`works-grid work-grid-gut clearfix hide-titles hover-white image-lazyload-container ${gridClass} masonry`}
          id="work-grid"
        >
          <Gallery>
            {outdoorProjects.map((item, index) => {
              const categoryClass = item.type.replace(/\s+/g, "-");
              return (
                <li
                  key={index}
                  className={`outdoor-item ${categoryClass} work-item mix`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="outdoor-card">
                    {/* Image Container with Hover Effect */}
                    <div className="outdoor-image-wrapper">
                      <Image
                        src={item.images[0].imgSrc}
                        alt={item.images[0].imgAlt}
                        width={600}
                        height={400}
                        className={`outdoor-image ${
                          hoveredItem === item.id ? "fade-out" : "fade-in"
                        }`}
                      />
                      <Image
                        src={item.images[1].imgSrc}
                        alt={item.images[1].imgAlt}
                        width={600}
                        height={400}
                        className={`outdoor-image outdoor-image-hover ${
                          hoveredItem === item.id ? "fade-in" : "fade-out"
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <div className="outdoor-title">
                      {/* SVG Icon */}
                      <div className="outdoor-icon">
                        <Image
                          src={item.svg}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="svg-icon"
                        />
                      </div>
                      <h3>{t(item.name)}</h3>
                    </div>
                  </div>
                </li>
              );
            })}
          </Gallery>
        </ul>
        {/* End Outdoor Grid */}
      </div>
    </section>
  );
}
