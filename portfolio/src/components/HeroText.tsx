import React from "react";

export default function HeroText() {
  return (
    <div className="z-10 mt-20 text-center  md:text-left rounded-3xl bg-clip-text">
      {/* Desktopview */}
      <div className="flex-col hidden md:flex c-space">
        <h1 className="text-4xl font-medium">Hi I'm Gethmi</h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl font-medium text-neutral-300">
            A Developer <br /> omw to heaven
          </p>
          {/* <div>get flip word from acertinity</div> */}
        </div>
      </div>
      {/* Mobileview */}
      <div className="flex flex-col space-y-6 md:hidden">
        <h1 className="text-4xl font-medium">Hi I'm Gethmi</h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl font-black text-neutral-300">
            A Developer <br /> omw to heaven
          </p>
          {/* <div>get flip word from acertinity</div> */}
        </div>
      </div>
    </div>
  );
}
