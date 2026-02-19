import React from "react";
import { services } from "@/data/services";
import { getTranslations } from "next-intl/server";

export default async function Service() {
  const t = await getTranslations("savoir-faire");
  return (
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
