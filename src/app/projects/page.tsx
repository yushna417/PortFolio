import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/Project";

export default function ProjectsPage() {
  

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Projects</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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