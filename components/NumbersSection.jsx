"use client";

import { numberItems } from "@/data/numbers";
import React, { useEffect, useState, useRef } from "react";
import ParallaxContainer from "./common/ParallaxContainer";

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
    console.log("delay", delay);

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
  const dark = true;

  return (
    <ParallaxContainer
      className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
      style={{
        backgroundImage:
          "url(/assets/images/full-width-images/section-bg-2.jpg)",
      }}
    >
      <div
        className="container d-flex justify-content-center flex-wrap"
        style={{ maxWidth: "100vw" }}
      >
        {numberItems.map((item, index) => {
          const [count, ref] = useCountUp(item.title, 0, 2000, item.delay);
          return (
            <div
              key={index}
              className={`col-sm-6 col-lg-3 wow fadeScaleIn text-center px-4`}
              ref={ref}
              data-wow-delay={item.delay}
            >
              <div
                className="number-title mb-10"
                style={{
                  fontVariantNumeric: "tabular-nums",
                  minHeight: "1.2em",
                  display: "inline-block",
                }}
              >
                {count}
              </div>
              <div className="number-descr">{item.description}</div>
            </div>
          );
        })}
      </div>
    </ParallaxContainer>
  );
}
