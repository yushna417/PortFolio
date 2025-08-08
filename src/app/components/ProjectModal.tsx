"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "../types/types";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div 
        className="relative bg-white dark:bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
          
          {/* Image Gallery Row */}
          <div className="flex space-x-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {/* Main image */}
            <div className="flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700">
              <Image
                src={project.images.main}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
            
            {project.images.others && (
              <>
                {project.images.others?.map((image, index) => (
                  <div key={index} className="flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </>
            )}

            
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                <div className="space-y-4">
                  {project.technologies && (
                    <div>
                      <h4 className="text-lg font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      Link
                    </a>
                  )}
                </div>
              </div>

              {project.videoUrl && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Video Demo</h3>
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right column - Description and Responsibilities */}
            <div className="space-y-6">
              {project.details?.description && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
                    {project.details.description}
                  </p>
                </div>
              )}

              {project.details?.reponsibilities && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {project.details.reponsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                        <span className="text-slate-600 dark:text-slate-300">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;