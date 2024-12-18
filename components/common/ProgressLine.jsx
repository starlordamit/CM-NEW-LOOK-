"use client";
import { useEffect, useRef, useState } from "react";

export default function ProgressLine({
  progress,
  className = "progress-bar wow fadeInLeft",
}) {
  const targetElement = useRef(null);
  const [counted, setCounted] = useState(0);

  const animateCount = (startValue, endValue, duration = 2000) => {
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const fraction = Math.min(elapsed / duration, 1);
      const newValue = Math.floor(
        startValue + (endValue - startValue) * fraction
      );

      setCounted((prev) => (prev !== newValue ? newValue : prev));

      if (fraction < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          // Start counting only when element is visible
          animateCount(0, progress);
          // Unobserve once we start the animation to prevent repeated triggers
          observer.unobserve(entry.target);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      // Cleanup if component unmounts
      observer.disconnect();
    };
  }, [progress]);

  return (
    <div
      className={className}
      ref={targetElement}
      style={{ width: `${counted}%`, transition: "width 0.3s ease-out" }}
    ></div>
  );
}
