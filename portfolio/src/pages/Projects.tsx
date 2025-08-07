import React from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return <div>
    <div className="grid grid-cols-3 gap-4 p-4">
      <ProjectCard
        title="Bloodlink"
        description="I am a second year IT undergraduate living away from home to attend university. I am currently unable to find my own income due to home situation and my studies. But I am in need of improving my knowledge in preparation of entering the industry in the future. I am committed to my studies and am actively seeking opportunities to improve my circumstances. I kindly request any available assistance or resources that could help me in this regard."
        github="https://github.com/yourusername/bloodlink"
        live="https://bloodlink.example.com"
        tags={["React", "Next.js", "TypeScript"]}
        imageUrl="https://via.placeholder.com/300x200.png?text=Bloodlink"
      />
      
    </div>
  </div>;
}
