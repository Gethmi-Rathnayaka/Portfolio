import React from "react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="z-10 mt-10 md:mt-13 text-center self-center md:self-start md:text-right rounded-3xl md:ml-20">
      <Image
        src="/girl.png"
        alt="Gethmi"
        width={400}
        height={400}
        className="rounded-xl"
      />
    </div>
  );
}
