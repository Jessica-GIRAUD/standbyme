"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedText from "./common/AnimatedText";
import { useTranslations } from "next-intl";

const CITIES = [
  { name: "Singapore", x: 78, y: 65, ca: 360, m2: 2200 },
  { name: "Paris", x: 48, y: 35, ca: 80000, m2: 2800 },
  { name: "Dubai", x: 62, y: 45, ca: 410, m2: 2600 },
  { name: "Stockholm", x: 52, y: 26, ca: 320, m2: 1800 },
  { name: "Tokyo", x: 87, y: 43, ca: 520, m2: 3200 },
  { name: "New York", x: 27, y: 35, ca: 580, m2: 3500 },
  { name: "London", x: 45, y: 30, ca: 380, m2: 2100 },
  { name: "Sydney", x: 92, y: 83, ca: 290, m2: 1600 },
  { name: "Madrid", x: 46, y: 41, ca: 290, m2: 1600 },
];

export default function MapMonde() {
  const t = useTranslations("international");
  const [hoveredCity, setHoveredCity] = useState(null);

  const getPointSize = (ca) => {
    const maxCa = Math.max(...CITIES.map((c) => c.ca));
    return 12 + (ca / maxCa) * 5;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  return (
    <div
      className="world-map-wrapper wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="1s"
    >
      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
      <div className="container position-relative pt-50 pb-20">
        <div className="text-center">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3 className="section-title mb-30">
                <AnimatedText text={t("title1")} />
              </h3>
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <p
                    className="section-descr mb-0 wow fadeIn"
                    data-wow-delay="0.6s"
                    data-wow-duration="1.2s"
                  >
                    {t("title2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map Container */}
      <div className="map-frame">
        <div className="position-relative w-100 map-viewport">
          <Image
            src="/assets/images/mapmonde.png"
            alt="Interactive world map showing our global presence"
            fill
            className="map-image"
            priority
          />

          {/* Animated Data Points */}
          {CITIES.map((city, index) => {
            const size = getPointSize(city.ca);
            const isHovered = hoveredCity === city.name;

            return (
              <div
                key={city.name}
                className="data-point-wrapper wow fadeIn"
                data-wow-delay={`${index * 0.3}s`}
                data-wow-duration="1s"
                style={{
                  left: `${city.x}%`,
                  top: `${city.y}%`,
                }}
                onMouseEnter={() => setHoveredCity(city.name)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                {/* Pulse rings */}
                <div
                  className="pulse-ring"
                  style={{ width: size * 1.5, height: size * 1.5 }}
                />
                <div
                  className="pulse-ring pulse-ring-delayed"
                  style={{ width: size * 2, height: size * 2 }}
                />

                {/* Main point */}
                <button
                  className="data-point"
                  style={{ width: size, height: size }}
                  aria-label={`${city.name}: ${formatNumber(
                    city.ca
                  )} revenue, ${city.m2} square meters`}
                ></button>

                {/* Tooltip on hover */}
                {isHovered && (
                  <div className="data-tooltip">
                    <div className="tooltip-city">{city.name}</div>
                    <div className="tooltip-stats">
                      <div className="tooltip-stat">
                        <span className="tooltip-stat-label">Revenu:</span>
                        <span className="tooltip-stat-value">
                          {formatNumber(city.ca)}€
                        </span>
                      </div>
                      <div className="tooltip-stat">
                        <span className="tooltip-stat-label">Superficie:</span>
                        <span className="tooltip-stat-value">
                          {city.m2.toLocaleString()} m²
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
