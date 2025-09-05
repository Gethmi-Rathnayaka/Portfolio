import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="justify-center items-center h-screen pl-3 mt-20">
      <h1 className="text-4xl font-medium text-black mb-15">Education</h1>
      <div className="flex flex-col items-center gap-6">
        {/* card 1 */}
        <div className="ml-70 flex bg-blue-400 p-1 w-[60%]  hover:shadow-[0_0_20px_#00f] transition-transform duration-300 nes-container is-rounded">
          <div className="pt-3 pl-1.5">
            <h3 className="text-xl pb-2">
              BSc (Hons) in IT <br />
              (CGPA:3.80)
            </h3>
            <p className="text-neutral-200 text-sm">
              Currently a third year undergraduate
              <br /> of University of Moratuwa.
            </p>
          </div>
          <div className="pt-1">
            <Image
              src="/moratuwa.webp"
              alt="UOM logo"
              width={200}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
        <span className="text-3xl">⬇️</span>
        <div className="flex bg-blue-400 p-1 w-[60%] hover:shadow-[0_0_20px_#00f] transition-transform duration-300 nes-container is-rounded">
          <div className="pt-3 pl-1.5">
            <h3 className="text-xl pb-2">
              G.C.E. Advanced Level 
              (2AB)
            </h3>
            <p className="text-neutral-200 text-sm">
              Graduated from Sujatha Vidyalaya Matara
              <br /> in Biological Science Stream.
            </p>
          </div>
          <div className="pt-2 pr-1">
            <Image
              src="/sujatha.png"
              alt="Sujatha Vidyalaya Matara"
              width={200}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
