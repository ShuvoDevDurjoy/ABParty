"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealBatch = ({ selector = ".reveal", children }) => {
  useEffect(() => {
    ScrollTrigger.batch(selector, {
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        }),
      onLeave: batch =>
        gsap.to(batch, { opacity: 0, y: 50, stagger: 0.15 }),
      onEnterBack: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        }),
      onLeaveBack: batch =>
        gsap.to(batch, { opacity: 0, y: 50, stagger: 0.15 }),
      start: "top 90%",
      end: "bottom 3%",
      once: false,
    });

    // Optional: clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);

  return children;
};

export default RevealBatch;
