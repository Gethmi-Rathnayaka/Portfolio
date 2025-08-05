import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div>
      <h1 className="text-4xl font-medium">Education</h1>
      <div className="flex gap-3">
        {/* card 1 */}
        <div className="flex bg-linear-to-bl from-cyan-700 via-blue-500 to-blue-900 p-1 rounded-md h-20 w-35">
          <div className="pt-3 pl-1.5">
            <h3 className="text-2xl pb-2">
              BSc (Hons) in IT <br />
              (CGPA:3.80)
            </h3>
            <p className="text-neutral-200">
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
        <div className="flex bg-linear-to-bl from-cyan-700 via-blue-500 to-blue-900 p-1 rounded-md h-20 w-35">
          <div className="pt-3 pl-1.5">
            <h3 className="text-2xl pb-2">
              G.C.E. Advanced Level <br />
              (2AB)
            </h3>
            <p className="text-neutral-200">
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
