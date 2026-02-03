// src/components/ProjectCard.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Project } from "../types/types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();

  return (
    <>
      <div
        className="
          group
          bg-white font-sans dark:bg-slate-800
          rounded-lg overflow-hidden
          shadow-lg
          cursor-pointer
          h-full
          flex flex-col
          border-2 border-blue-950
          min-w-[20vw]
          flex-1
          transform origin-left
          transition-all duration-300 ease-out
          hover:flex-[1.15]
          hover:shadow-2xl
          hover:shadow-gray-400
        "
        onClick={() => router.push(`/projects/${project.id}`)}

      >

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.images.main}
            alt={project.title}
            fill
            className="object-cover object-center "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold mb-1 line-clamp-1">{project.title}</h3>

          <div className="flex flex-row justify-between py-2 items-center">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-1.5 py-0.5 border-[1px] border-slate-400 text-slate-300 text-xs font-sans rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-1 py-0.5 bg-slate-700 text-gray-200 text-xs rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <button 
              className="text-indigo-600 hover:underline text-sm text-right right"
              onClick={() => router.push(`/projects/${project.id}`)}

            >
              View Details
            </button>
          </div>
          
          
          
        </div>
      </div>


    </>
  );
};

export default ProjectCard;