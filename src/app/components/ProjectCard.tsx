// src/components/ProjectCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "../types/types";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white font-sans dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-full flex flex-col p-5"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image with fixed aspect ratio */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.images.main}
            alt={project.title}
            fill
            className="object-cover object-center rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="py-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold mb-1 line-clamp-1">{project.title}</h3>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:text-blue-950 text-xs rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1 py-0.5 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 text-xs rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <button 
            className="text-blue-600 hover:underline text-sm self-start"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            View Details
          </button>
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
};

export default ProjectCard;