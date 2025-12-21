"use client";

import { numberItems } from "@/data/numbers";
import React, { useEffect, useState, useRef } from "react";
import AnimatedText from "./common/AnimatedText";
import { useTranslations } from "next-intl";

const useCountUp = (end, start = 0, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Convertir le délai de chaîne (ex: "0.4s") en millisecondes
    const delayMs =
      typeof delay === "string" ? parseFloat(delay) * 1000 : delay;

    // Extraire la valeur numérique et le symbole
    const match = String(end).match(/^(\d*\.?\d*)([^\d.]*)$/);
    const numericValue = match ? parseFloat(match[1] || 0) : 0;
    const symbol = match ? match[2] : "";

    // Démarrer l'animation après le délai
    const timeoutId = setTimeout(() => {
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Fonction d'accélération (linéaire)
        const easedProgress = progress;

        // Calculer la valeur actuelle
        let currentValue;
        if (numericValue % 1 !== 0) {
          // Pour les valeurs décimales
          currentValue = (numericValue * easedProgress).toFixed(1);
        } else {
          // Pour les entiers
          currentValue = Math.floor(numericValue * easedProgress);
        }

        setCount(`${currentValue}${symbol}`);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end); // S'assurer que la valeur finale est exacte
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, end, duration, delay]);

  return [count, ref];
};

export default function NumbersSection() {
  const t = useTranslations("home");
  return (
    <section className="page-section bg-gray-light-1">
      <div className="container relative pt-30">
        <div className="text-center">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3 className="section-title mb-30">
                <AnimatedText text={t("chiffreTitle")} />
              </h3>
              <div className="row">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                  <p
                    className="section-descr mb-0 wow fadeIn"
                    data-wow-delay="0.2s"
                    data-wow-duration="1.2s"
                  >
                    {t("chiffreDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="numbers-section">
          {numberItems.map((item, index) => {
            const isNumeric = /^\d/.test(item.title);
            const [displayValue, ref] = isNumeric
              ? useCountUp(item.title, 0, 2000, item.delay)
              : [item.title, null];
            return (
              <div
                key={index}
                className="col-sm-6 col-lg-3 wow fadeScaleIn px-2"
                ref={isNumeric ? ref : null}
                data-wow-delay={item.delay}
              >
                <div className="box-shadow text-center h-100 mt-0 p-4">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.title}
                      style={{ maxWidth: 90, marginBottom: 10 }}
                    />
                  ) : (
                    <div
                      className="number-title"
                      style={{
                        fontVariantNumeric: "tabular-nums",
                        minHeight: "1.2em",
                        display: "inline-block",
                      }}
                    >
                      {displayValue}
                    </div>
                  )}
                  {item.suite && (
                    <div className="number-suite mb-10">{item.suite}</div>
                  )}
                  <div className="number-descr">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
