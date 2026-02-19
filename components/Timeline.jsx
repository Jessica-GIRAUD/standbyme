"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import FullscreenVideo from "./FullscreenVideo";
import useScreenSize from "@/hooks/useScreenSize";
import { timelineItems } from "@/data/timeline";

export default function Timeline() {
  const t = useTranslations("savoir-faire");
  const { isMobile } = useScreenSize();

  return (
    <div className="timeline-container">
      {timelineItems.map((el, index) => {
        return (
          <div
            className="row timeline-item wow fadeInUp mb-5"
            key={index}
            data-wow-delay={`${index * 0.12}s`}
          >
            <div className={`col-md-6 ${index % 2 === 0 ? "order-md-2" : ""}`}>
              <div className="timeline-content">
                <div className="position-relative">
                  {el.videoUrl ? (
                    <FullscreenVideo videoSrc={el.videoUrl}>
                      <div className="position-relative">
                        <Image
                          src={el.thumbnail}
                          alt={el.title}
                          width={600}
                          height={400}
                          className="img-fluid rounded cursor-pointer"
                          style={{
                            height: isMobile ? "auto" : "250px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </FullscreenVideo>
                  ) : (
                    <Image
                      src={el.image}
                      alt={el.title}
                      width={600}
                      height={400}
                      className="img-fluid rounded"
                      style={{
                        height: isMobile ? "auto" : "250px",
                        objectFit: "cover",
                      }}
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
                  <FullscreenVideo videoSrc={el.videoUrl}>
                    <button className="btn btn-mod btn-large btn-round d-flex ms-1 me-1 mt-2 align-middle">
                      {t(el.title)}{" "}
                      <i
                        className="mi-play ms-2 fs-5"
                        style={{ color: "#fff" }}
                      />
                    </button>
                  </FullscreenVideo>
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
