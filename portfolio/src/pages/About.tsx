import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full flex gap-2 justify-center items-center h-screen pl-3">
      <div className="flex-none">
        <Image
          src="/girl.png"
          alt="Gethmi"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>
      <div className="text-justify">
        <h2 className="text-5xl font-medium pb-2">About Me</h2>
        <p className="text-2xl text-neutral-300">
          Hi! I’m Gethmi Rathnayaka, a full-stack developer from Sri Lanka with
          a strong passion for building smooth, engaging web experiences. I work
          mainly with the MERN stack, MUI, Tailwind CSS, and Redux, focusing on
          clean UI, responsive design, and functional backends.
          <br /> Outside of development, I enjoy blending creativity and
          tech—drawing inspiration from anime, cyberpunk, and retro Japanese
          art. I also love playing guitar, baking, and crocheting.
          <br /> I'm always exploring new tools and ideas, and I’m excited to
          grow as a developer while building things that feel alive.{" "}
        </p>
      </div>
    </div>
  );
}
