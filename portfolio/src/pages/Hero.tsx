import React from "react";
import "@/app/globals.css";
import HeroText from "@/components/HeroText";
import HeroImage from "@/components/HeroImage";

function Hero() {
  return (
    <section className="flex  items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
      <HeroText />
      <HeroImage />
    </section>
  );
}

export default Hero;
