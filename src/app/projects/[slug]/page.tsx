import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Project } from '@/app/types/types';
import Link from 'next/link';
import { projects } from '@/data/Project';

const getProjectBySlug = (slug: string) => {
  return projects.find(project =>
    project.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
        
        <div className="mb-8">
          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
            <Image
              src={project.images.main}
              alt={project.title} 
              fill
              className="object-cover"
            />
          </div>
          
          {project.images.others && project.images.others.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {project.images.others.map((image, index) => (
                <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          
          {project.videoUrl && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Video Demo</h2>
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
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Visit Project
              </Link>
            )}
          </div>
          
          {project.details && (
            <div>
              {project.details.features && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.details.challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Challenges</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.details.solutions && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Solutions</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.details.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}