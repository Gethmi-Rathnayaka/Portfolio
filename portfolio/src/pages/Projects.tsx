import React from "react";
import Image from "next/image";

const projects = [
  {
    name: "BloodLink",
    description: "Description of project 1.",
    image: "/bloodlink.webp",
  },
  {
    name: "Project 2",
    description: "Description of project 2.",
    image: "/bloodlink.webp",
  },
  {
    name: "Project 2",
    description: "Description of project 2.",
    image: "/bloodlink.webp",
  },
  {
    name: "Project 2",
    description: "Description of project 2.",
    image: "/bloodlink.webp",
  },
  
  // add more projects here
];

export default function Projects() {
  return (
    <div className="ml-3 mx-auto">
      <h1 className="text-4xl font-medium text-black mb-15">Projects</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-sky-200 nes-container !p-0 is-rounded flex flex-col items-center w-64 h-85 hover:shadow-[0_0_15px_#00f]"
          >
            <div className="relative w-full h-40 rounded-lg mb-4">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-black text-center mb-2">
              {project.name}
            </h2>
            <p className="text-black text-sm text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
