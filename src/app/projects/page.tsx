"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/Project";

const ITEMS_PER_VIEW = 2; // desktop

export default function ProjectsPage() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, projects.length - ITEMS_PER_VIEW);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  

  return (
    <section
      id="project"
      className="container mx-auto px-14 py-32"
    >
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-left">
          <span className="bg-gradient-to-r from-blue-600 to-purple-950 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* CONTROLS */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className="px-4 py-2 rounded-md bg-slate-800 text-white disabled:opacity-40"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="px-4 py-2 rounded-md bg-slate-800 text-white disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>

      {/* VIEWPORT */}
        <div className="overflow-hidden rounded-2xl p-5 ">
        <div
          className="
            flex gap-10
            transition-transform duration-500 ease-out
          "
          style={{
            transform: `translateX(-${index * (100 / ITEMS_PER_VIEW)}%)`,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="min-w-[calc(100%/3)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
