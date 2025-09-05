import React from "react";
import "@/app/globals.css";

function Hero() {
  return (
    <section className="flex  items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden pt-50">
      <div className="z-10 mt-8 md:mt-4 text-center flex flex-col items-center text-black">
        {/* Title / Greeting */}
        <h1 className="text-4xl md:text-5xl font-medium">
          Hi I'm Gethmi Rathnayaka
        </h1>

        <p className="text-5xl md:text-6xl font-black mt-4">A Developer</p>

        {/* "Play" button like game start */}
        <button className="mt-8 px-6 py-3 bg-pink-400 text-black border-4 border-black rounded-xl font-bold hover:scale-105 transition-transform nes-btn is-primary">
          ▶ Play
        </button>
        <button className="mt-8 px-6 py-3 bg-pink-400 text-black border-4 border-black rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
          ▶ Play
        </button>
      </div>
    </section>
  );
}

export default Hero;
