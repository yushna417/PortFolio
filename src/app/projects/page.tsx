import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/Project";

export default function ProjectsPage() {
  

  return (
    <div id="project" className="container mx-auto px-14 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-left">
            <span className="bg-gradient-to-r from-blue-600 to-purple-950 bg-clip-text text-transparent"> Projects
            </span>
          </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}