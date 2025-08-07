import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  github?: string;
  live?: string;
}

export default function ProjectCard({
  title,
  tags,
  description,
  imageUrl,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-white/30 backdrop-blur-none rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div>
           <img src="/bloodlink.webp" alt={title} className="h-20 w-30" />
        </div>
      
      

      <div className="">
        <div className="">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm bg-gray-800 text-white px-1 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-medium">Bloodlink qefgwnkjbbjsjb</h3>
        <p className="text-sm text-gray-300">I am a second year IT undergraduate living away from home to attend university. I am currently unable to find my own income due to home situation and my studies. But I am in need of improving my knowledge in preparation of entering the industry in the future.
I am committed to my studies and am actively seeking opportunities to improve my circumstances. I kindly request any available a</p>

        <div className="">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-xl hover:text-gray-400" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="text-white text-xl hover:text-gray-400" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
