"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const projects = [
  {
    title: "BloodLink",
    img: "/bloodlink.webp",
    description: "Emergency blood donation platform.",
  },
  {
    title: "Project 2",
    img: "/project2.webp",
    description: "Another cool project.",
  },
  {
    title: "Project 3",
    img: "/project3.webp",
    description: "Yet another one.",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    img: string;
    description: string;
  } | null>(null);
  const imgRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { autoAlpha: 0, x: 100 },
      { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [current]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (project: {
    title: string;
    img: string;
    description: string;
  }) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative w-full max-w-2xl h-[65vh] overflow-hidden rounded-xl">
        <div ref={imgRef} className="absolute inset-0">
          <button
            onClick={() => openModal(projects[current])}
            className="w-full h-full relative"
          >
            <Image
              src={projects[current].img}
              alt={projects[current].title}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="absolute bottom-0 w-full bg-black/40 text-white text-center py-3 text-lg font-semibold">
              {projects[current].title}
            </div>
          </button>
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-1 -translate-y-1/2 bg-white/30 p-1 rounded-full hover:bg-white/50 z-10"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-1 -translate-y-1/2 bg-white/30 p-1 rounded-full hover:bg-white/50 z-10"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-0.5 h-0.5 rounded-full ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <Image
              src={selectedProject.img}
              alt={selectedProject.title}
              width={800}
              height={450}
              className="rounded-md mb-4 object-contain"
            />
            <p className="text-gray-700">{selectedProject.description}</p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
