"use client";

import { projects } from "../data/Project";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";


export default function ProjectsPage() {
  const router = useRouter();
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
      </div>

      <div className="">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-[12rem] md:max-w-6xl"
        >
          <CarouselContent className="me-1 gap-0.5" >
            {projects.map((project, i) => (
              <CarouselItem key={i} className="basis-1/2 md:basis-1/3">
                <div
                  className="min-w-[calc(100%/3)]"
                >
                  <Card className="relative w-full max-w-[22rem] pt-0 bg-[#1F2B3F] border-[#314157]">
                    <div className="absolute inset-0 z-30 aspect-video" />
                    <img
                      src={project.images.main}
                      alt="Event cover"
                      className="relative z-20 aspect-video w-full object-cover brightness-80 rounded-t-xl dark:brightness-40"
                    />
                    <CardHeader className="mb-0 px-3">
                      <CardTitle className="text-gray-300">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-gray-400 leading-4.5 mb-0">
                        {project.details?.description}
                      </CardDescription>
                      <div className="flex w-full justify-start flex-row gap-1">
                        {project.technologies.map((tech) => (
                          <Badge variant="secondary" className="text-gray-900" key={`id-n12${tech}`}>{tech}</Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardFooter className="flex flex-col px-3">
                      <Button className="w-full hover:bg-gradient-to-r from-blue-950 to-indigo-950 hover:text-white shadow-sm shadow-gray-600" variant="secondary"
                        onClick={() => router.push(`/projects/${project.id}`)}

                      >View Project</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
