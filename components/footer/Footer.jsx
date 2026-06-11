"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import { Link } from "@/i18n/navigation";
import { navigationLinks } from "@/data/footer";
import { infos } from "@/data/infos";
import { useTranslations } from "next-intl";
import useScreenSize from "@/hooks/useScreenSize";

export default function Footer({ dark = false }) {
  const t = useTranslations("footer");
  const { isMobile } = useScreenSize();

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      } pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/"} className="mb-30">
              <Image
                src="/assets/images/logo-color.webp"
                width={105}
                height={34}
                className="light-mode-logo mb-10"
                alt={infos.company}
              />

              <Image
                src="/assets/images/logo-white.svg"
                width={105}
                height={34}
                className="dark-mode-logo"
                alt={infos.company}
              />
            </Link>
            <p>{t("slogan")}</p>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-6 mt-30">
                <h3 className="fw-title">{t("company")}</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{t(elm.text)}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-6 mt-30">
                <h3 className="fw-title">{t("socialMedia")}</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3"></div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>
              © {infos.company} {new Date().getFullYear()}.
            </b>{" "}
            <Link
              href="/politique-de-confidentialite"
              className="text-gray me-3"
              style={{ fontSize: "0.85rem" }}
            >
              Politique de confidentialité
            </Link>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
