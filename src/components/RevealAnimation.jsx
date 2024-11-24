"use client";

import React, { useEffect, useRef } from "react";

const RevealAnimation = ({
  children,
  fromX = 0, // Initial position on the X-axis
  fromY = 0, // Initial position on the Y-axis
  delay = 0, // Delay before animation starts (in ms)
  duration = 500, // Duration of animation in ms
  initialOpacity = 0, // Initial opacity
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply styles to trigger the animation when in view
          if (element) {
            element.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
            element.style.opacity = "1";
            element.style.transform = "translate(0px, 0px)";
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div
      ref={ref}
      style={{
        opacity: initialOpacity,
        transform: `translate(${fromX}px, ${fromY}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealAnimation;
