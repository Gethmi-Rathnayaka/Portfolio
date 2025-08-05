"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "@/pages/About";
import Education from "@/pages/Education";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Other from "@/pages/Other";
import Contact from "@/pages/Contact";

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
    <div>
      <div ref={sectionRef} className="overflow-hidden">
        <div className="h-screen flex justify-center items-center">
          <About />
        </div>
        <div className="h-screen flex justify-center items-center">
          <Education />
        </div>
        <div className="h-screen flex justify-center items-center">
          <Projects />
        </div>
        <div className="h-screen flex justify-center items-center">
          <Skills />
        </div>
        <div className="h-screen flex justify-center items-center">
          <Other />
        </div>
        <div className="h-screen flex justify-center items-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}
