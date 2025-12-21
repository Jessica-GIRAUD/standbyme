"use client";
import React from "react";
import { services } from "@/data/services";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslations } from "next-intl";

export default function Service() {
  const t = useTranslations("savoir-faire");

  const { isMobile } = useScreenSize();

  return !isMobile ? (
    <>
      <div className="container position-relative mt-n120 mt-sm-n60">
        <ul
          className="nav nav-tabs tpl-alt-tabs my-20 mb-xs-0 wow fadeInUp bg-gray-light-1 bg-light-alpha-90"
          role="tablist"
        >
          {services.map((service, index) => {
            return (
              <li className="nav-item" role="presentation" key={index}>
                <a
                  href={`#service-${index}`}
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#service-${index}`}
                  role="tab"
                  aria-controls={`service-${index}`}
                  aria-selected={index === 0}
                  style={{ paddingTop: "30px" }}
                >
                  <div className="services-3-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={service.width}
                      height={service.height}
                      viewBox={`0 0 ${service.width} ${service.height}`}
                      aria-hidden="true"
                    >
                      <path d={service.path} />
                    </svg>
                  </div>
                  {t(service.title)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* End Nav tabs */}
      {/* Tab panes */}
      <div className="tab-content tpl-tabs-cont">
        {services.map((service, index) => {
          const id = `service-${index}`;
          const isActive = index === 0;
          return (
            <div
              key={index}
              className={`tab-pane fade ${isActive ? "show active" : ""}`}
              id={id}
              role="tabpanel"
            >
              <div className="w-50 mx-auto my-5 ">
                <h2 className="services-3-title text-center mb-5">
                  {t(service.title)}
                </h2>
                <h3
                  className="services-3-text"
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{
                    __html: t(service.text),
                  }}
                />
                <h3 className="services-3-text mt-30 fw-bold">
                  👉 {t(service.objectif)}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <section className="page-section pt-0" id="services">
      <div className="container position-relative mt-n120 mt-sm-n60">
        <div className="row mb-n30">
          {services.map((elm, i) => {
            if (i < 3) {
              return (
                <div
                  key={i}
                  className="col-md-6 col-lg-4 d-flex align-items-stretch mx-auto mb-30"
                >
                  <div className="services-3-item round text-center">
                    <div className="wow fadeInUpShort" data-wow-offset={50}>
                      <div className="services-3-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={elm.width}
                          height={elm.height}
                          viewBox={`0 0 ${elm.width} ${elm.height}`}
                          aria-hidden="true"
                        >
                          <path d={elm.path} />
                        </svg>
                      </div>
                      <h3 className="services-3-title">{t(elm.title)}</h3>
                      <h3
                        className="services-3-text"
                        dangerouslySetInnerHTML={{
                          __html: t(elm.text),
                        }}
                      />
                      <h3 className="services-3-text mt-30 fw-bold">
                        👉 {t(elm.objectif)}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center justify-content-center mt-30 mx-auto">
          <div className="services-3-item round text-center">
            <div className="wow fadeInUpShort" data-wow-offset={50}>
              <div className="services-3-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={services[3].width}
                  height={services[3].height}
                  viewBox={`0 0 ${services[3].width} ${services[3].height}`}
                  aria-hidden="true"
                >
                  <path d={services[3].path} />
                </svg>
              </div>
              <h3 className="services-3-title">{t(services[3].title)}</h3>
              <h3
                className="services-3-text"
                dangerouslySetInnerHTML={{
                  __html: t(services[3].text),
                }}
              />
              <h3 className="services-3-text fw-bold">
                👉 {t(services[3].objectif)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
