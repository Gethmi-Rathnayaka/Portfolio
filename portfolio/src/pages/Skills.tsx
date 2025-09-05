import React from "react";

const techs = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  { name: "Tailwind", icon: "/avatar.webp" },
  { name: "MUI", icon: "/avatar.webp" },
  { name: "JavaScript", icon: "/avatar.webp" },
  { name: "React", icon: "/bloodlink.webp" },
  { name: "Node.js", icon: "/avatar.webp" },
  { name: "Tailwind", icon: "/avatar.webp" },
  { name: "MUI", icon: "/avatar.webp" },
  { name: "JavaScript", icon: "/avatar.webp" },
  // add more techs
];

export default function Skills() {
  return (
    <div className="ml-3 mx-auto mt-8">
      <h1 className="text-4xl font-medium text-black mb-15">Skills</h1>
      <div className="w-[60%] mx-auto mt-8">
        <h3 className="text-md !-mb-3 font-semibold text-neutral-200 rounded-t-2xl bg-[url('/wood.jpeg')] nes-container !p-2 w-[170px] overflow-hidden">
          Inventory
        </h3>

        <div className=" nes-container bg-[url('/wood.jpeg')] rounded-2xl">
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {techs.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex flex-col items-center w-24 h-24 bg-black nes-container !p-0 is-rounded hover:shadow-[0_0_15px_#0ff]  hover:scale-105">
                  <div className="relative w-full h-full text-sm">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-sm mt-2 text-center text-neutral-200">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
