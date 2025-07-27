"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testsection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
      snap: {
        snapTo: 1 / 5,
        duration: 0.5,
        ease: "power1.inOut",
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <div className="h-screen w-screen flex justify-center items-center">
        <h3 className="uppercase">Section 1</h3>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h3 className="uppercase">Section 2</h3>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h3 className="uppercase">Section 3</h3>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h3 className="uppercase">Section 4</h3>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h3 className="uppercase">Section 5</h3>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h3 className="uppercase">Section 6</h3>
      </div>
    </div>
  );
}
