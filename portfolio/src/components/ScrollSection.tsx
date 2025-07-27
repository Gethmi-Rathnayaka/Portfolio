"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollSection() {
  // const sectionRef = useRef(null);
  // const triggerRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const pin = gsap.fromTo(
  //     sectionRef.current,
  //     {
  //       translateX: 0,
  //     },
  //     {
  //       translateX: "-300vw",
  //       ease: "none",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top top",
  //         end: "2000 top",
  //         scrub: 0.6,
  //         pin: true,
  //       },
  //     }
  //   );
  //   return () => {
  //     pin.kill();
  //   };
  // }, []);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const sections = sectionRef.current.querySelectorAll("div");
    const sectionCount = sections.length;
    const pin = gsap.to(sectionRef.current, {
      xPercent: -100 * (sectionCount - 1),
      ease: "none",

      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.6,
        pin: true,
        snap: {
          snapTo: 1 / (sectionCount - 1),
          duration: 4,

          ease: "power1.inOut",
        },
        end: () => `+=${sectionRef.current!.offsetWidth}`,
      },
    });
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex flex-row relative "
        >
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
        </div>
      </div>
    </section>
  );
}
