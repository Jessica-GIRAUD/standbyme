"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const PHONE_REGEX = /^[\d\s().+\-]{6,20}$/;

export default function CallbackPopup({ isOpen, setIsOpen }) {
  const t = useTranslations("callback");
  const [telephone, setTelephone] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
    setStatus("idle");
    setTelephone("");
    setRgpd(false);
    setErrorMsg("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const cleanPhone = telephone.trim();
    if (!PHONE_REGEX.test(cleanPhone)) {
      setStatus("error");
      setErrorMsg(t("errorPhone"));
      return;
    }

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telephone }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setTelephone("");
        setRgpd(false);
      }, 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || t("networkError"));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1060,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          isolation: "isolate",
        }}
      >
        {/* Popup */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: "480px",
            borderRadius: "16px",
            padding: "32px 24px 40px",
            position: "relative",
            margin: "auto",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label={t("closeBtnLabel")}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "none",
              border: "none",
              fontSize: "1.4rem",
              cursor: "pointer",
              color: "#666",
              lineHeight: 1,
              padding: "4px",
            }}
          >
            &times;
          </button>

          {status === "success" ? (
            <div className="text-center py-20">
              <div className="mb-15">
                <i className="mi-check size-40" style={{ color: "#4CAF50" }} />
              </div>
              <h4 className="mb-10" style={{ color: "#1a1a1a" }}>
                {t("successTitle")}
              </h4>
              <p style={{ color: "#666", fontSize: "0.95rem" }}>
                {t("successMessage")}
              </p>
            </div>
          ) : (
            <>
              <h3 style={{ color: "#1a1a1a", fontSize: "1.3rem" }}>
                {t("title")}
              </h3>

              <form onSubmit={handleSubmit} className="form">
                <input
                  type="tel"
                  className="input-md round form-control mb-2"
                  style={{ border: "1px solid #e0e0e0", color: "#1a1a1a" }}
                  placeholder={t("phonePlaceholder")}
                  required
                  value={telephone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d\s().+\-]/g, "");
                    setTelephone(val);
                  }}
                  maxLength={20}
                  autoFocus
                />

                <p
                  className="mb-20"
                  style={{
                    fontSize: "0.8rem",
                    color: "#888",
                    lineHeight: 1.5,
                  }}
                >
                  {t("openTime")}
                  <span className="fw-bold"> 9h – 18h </span>
                </p>

                <div className="mb-20">
                  <label
                    className="d-flex align-items-start gap-2"
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input mt-1 flex-shrink-0"
                      required
                      checked={rgpd}
                      onChange={(e) => setRgpd(e.target.checked)}
                    />
                    <span
                      className="form-check-label"
                      style={{ fontSize: "0.8rem", color: "#666" }}
                    >
                      {t("rgpdText")}{" "}
                      <Link
                        href="/politique-de-confidentialite"
                        className="callback-policy-link"
                      >
                        {t("rgpdLink")}
                      </Link>
                      . *
                    </span>
                  </label>
                </div>

                {status === "error" && (
                  <p
                    className="mb-15"
                    style={{ color: "#e53935", fontSize: "0.875rem" }}
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Send Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    id="submit_btn"
                    aria-controls="result"
                    className="submit_btn link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      {status === "loading"
                        ? t("submitting")
                        : t("submitLabel")}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      {status === "loading"
                        ? t("submitting")
                        : t("submitLabel")}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    )
  );
}
