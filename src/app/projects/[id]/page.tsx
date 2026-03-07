import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../data/Project";
import { ArrowLeft, ExternalLink, Play, Calendar, Users } from "lucide-react";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen py-24 font-sans">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
        <Link
          href="/projects"
          className="inline-flex border-2 p-3 items-center gap-2 text-gray-600 hover:text-gray-200 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                  Project #{project.id}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
                {project.details?.description || "A detailed project showcasing innovative solutions and modern technologies."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Visit Live Project</span>
                    </a>
                  )}
                  
                </div>
              </div>
            </div>
          </div>

          {/* Main Image Gallery */}
          <div className="mb-12">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.images.main}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Thumbnail Gallery */}
            {project.images.others && project.images.others.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.images.others.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                          View {i + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1">
              <div className=" rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-200">Tech Stack</h2>
                </div>
                
                {project.technologies && (
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-200 to-slate-500 text-gray-800 font-medium rounded-lg border border-gray-700 hover:border-blue-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Responsibilities Section */}
            {project.details?.reponsibilities && project.details.reponsibilities.length > 0 && (
              <div className="mb-16 lg:col-span-2">
                <div className=" rounded-2xl p-8 border border-blue-100">
                  <h2 className="text-2xl font-bold text-gray-200 mb-6">Key Responsibilities & Achievements</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.details.reponsibilities.map((responsibility, i) => (
                      <div
                        key={i}
                        className=" rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{i + 1}</span>
                          </div>
                          <p className="text-gray-500 leading-relaxed">{responsibility}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>


          

       
        </div>
      </div>
    </div>
  );
}