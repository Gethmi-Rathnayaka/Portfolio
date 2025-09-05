import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="nes-container is-centered is-rounded bg-blue-200">
      <h2 className=" text-black text-5xl font-medium pb-2 justify-center pt-4">
        About Me
      </h2>
      <div className="w-full flex justify-center items-center pl-3 pb-4">
        <div className="text-justify">
          <section className="message-list">
            <section className="message -right ml-30 hover:scale-105">
              <div className="nes-balloon from-right text-black text-sm">
                <p>Hello! I'm Gethmi</p>
              </div>
            </section>
            <section className="message -right mr-5 hover:scale-105">
              <div className="nes-balloon from-right text-black text-sm">
                <p>
                  Building projects that
                  <br /> mix creativity with
                  <br /> engineering
                </p>
              </div>
            </section>
            <section className="message -right ml-10 hover:scale-105">
              <div className="nes-balloon from-right text-black text-sm">
                <p>Curious about game dev</p>
              </div>
            </section>
          </section>
        </div>
        <div className="flex-none hover:scale-105">
          <Image
            src="/avatar.png"
            alt="Gethmi"
            width={200}
            height={200}
          />
        </div>
        <div className="text-justify">
          <section className="message-list">
            <section className="message -left mr-10 hover:scale-105">
              <div className="nes-balloon from-left text-black text-sm">
                <p>
                  Research enthusiast
                  <br /> exploring new ideas in
                  <br /> software development
                </p>
              </div>
            </section>
            <section className="message -left ml-10 hover:scale-105">
              <div className="nes-balloon from-left text-black text-sm">
                <p>
                  3rd year IT undergraduate at
                  <br /> University of Moratuwa
                </p>
              </div>
            </section>
            <section className="message -left mr-10 hover:scale-105">
              <div className="nes-balloon from-left text-black text-sm">
                <p>
                  Open for
                  <br /> collaboration
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
