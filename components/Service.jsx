import React from "react";
import { services } from "@/data/services";
import { getTranslations } from "next-intl/server";

export default async function Service() {
  const t = await getTranslations("savoir-faire");

  return (
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
  );
}
