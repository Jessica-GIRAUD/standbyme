"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

const initialState = {
  nom: "",
  prenom: "",
  email: "",
  entreprise: "",
  projet: "",
  message: "",
  rgpd: false,
};

export default function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmed = {
      nom: form.nom.trim(),
      prenom: form.prenom.trim(),
      email: form.email.trim(),
      entreprise: form.entreprise.trim(),
      projet: form.projet.trim(),
      message: form.message.trim(),
    };

    if (trimmed.nom.length < 2) {
      setErrorMsg(t("errorNom"));
      return;
    }
    if (trimmed.prenom.length < 2) {
      setErrorMsg(t("errorPrenom"));
      return;
    }
    if (!EMAIL_REGEX.test(trimmed.email)) {
      setErrorMsg(t("errorEmail"));
      return;
    }
    if (trimmed.entreprise.length < 1) {
      setErrorMsg(t("errorEntreprise"));
      return;
    }
    if (!form.rgpd) {
      setErrorMsg(t("errorRgpd"));
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: trimmed.nom,
          prenom: trimmed.prenom,
          email: trimmed.email,
          entreprise: trimmed.entreprise,
          projet: trimmed.projet || undefined,
          message: trimmed.message || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || t("networkError"));
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || t("networkError"));
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-40">
        <div className="mb-20"></div>
        <h5 className="mb-10">
          <i className="mi-check size-48" style={{ color: "#4CAF50" }} />{" "}
          {t("successTitle")}
        </h5>
        <p className="text-gray">{t("successMessage")}</p>
        <button
          className="btn btn-mod btn-small btn-round mt-20"
          onClick={() => setStatus("idle")}
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6 mb-20 mb-md-10">
          <input
            type="text"
            name="nom"
            autoComplete="family-name"
            className="input-md round form-control"
            placeholder={t("nomPlaceholder")}
            maxLength={100}
            required
            value={form.nom}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6 mb-20 mb-md-10">
          <input
            type="text"
            name="prenom"
            autoComplete="given-name"
            className="input-md round form-control"
            placeholder={t("prenomPlaceholder")}
            maxLength={100}
            required
            value={form.prenom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-20 mb-md-10">
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="input-md round form-control"
            placeholder={t("emailPlaceholder")}
            maxLength={150}
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6 mb-20 mb-md-10">
          <input
            type="text"
            name="entreprise"
            autoComplete="organization"
            className="input-md round form-control"
            placeholder={t("entreprisePlaceholder")}
            maxLength={150}
            required
            value={form.entreprise}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-20 mb-md-10">
        <input
          type="text"
          name="projet"
          className="input-md round form-control"
          placeholder={t("projetPlaceholder")}
          maxLength={200}
          value={form.projet}
          onChange={handleChange}
        />
      </div>
      <div className="mb-20 mb-md-10">
        <textarea
          name="message"
          className="input-md round form-control"
          rows={5}
          placeholder={t("messagePlaceholder")}
          maxLength={1000}
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <div className="mb-20 mb-md-10">
        <label
          className="checkbox-inline d-flex align-items-start gap-2"
          style={{ cursor: "pointer" }}
        >
          <input
            type="checkbox"
            name="rgpd"
            className="form-check-input mt-1 flex-shrink-0"
            required
            checked={form.rgpd}
            onChange={handleChange}
          />
          <span
            className="form-check-label text-gray"
            style={{ fontSize: "0.85rem" }}
          >
            {t("rgpdText")}{" "}
            <Link
              href="/politique-de-confidentialite"
              className="text-inherit"
              style={{ textDecoration: "underline" }}
            >
              {t("rgpdLink")}
            </Link>
            . *
          </span>
        </label>
      </div>
      {status === "error" && (
        <div className="mb-20">
          <p className="text-danger" role="alert">
            {errorMsg}
          </p>
        </div>
      )}

      {/* Send Button */}
      <div className="text-center pt-10">
        <button
          type="submit"
          id="submit_btn"
          aria-controls="result"
          className="submit_btn link-hover-anim link-circle-1 align-middle"
          data-link-animate="y"
        >
          <span className="link-strong link-strong-unhovered">
            {status === "loading" ? t("submitting") : t("submitLabel")}
            <i
              className="mi-arrow-right size-18 align-middle"
              aria-hidden="true"
            ></i>
          </span>
          <span className="link-strong link-strong-hovered" aria-hidden="true">
            {status === "loading" ? t("submitting") : t("submitLabel")}
            <i
              className="mi-arrow-right size-18 align-middle"
              aria-hidden="true"
            ></i>
          </span>
        </button>
      </div>
    </form>
  );
}
