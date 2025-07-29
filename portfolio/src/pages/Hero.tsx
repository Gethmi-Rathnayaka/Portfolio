import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import HeroText from "@/components/HeroText";

function Hero() {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      {/* <div className="pr-4">
          <Image
            src="/girl.png"
            alt="Gethmi"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div> */}
    </section>
  );
}

export default Hero;
