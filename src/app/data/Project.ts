import { Project } from "@/app/types/types";

export const projects: Project[] = [
  {
    title: "Smart Medicine Dispenser - Innovation Project Module",
    technologies: ["Python", "HTML & CSS", "Flask", "RaspberryPi & Sensors"],
    url: "#",
    images: {
      main: "/images/SmartMedicine.jpg",
      others: [
        "/images/3Ddiagram.png",
        "/images/ConnectionSM.png",
      
      ]
    },
    videoUrl: "/images/Untitled video - Made with Clipchamp (2).mp4",
    details: {
        description: "A full-featured online store with product listings, cart functionality, and checkout process.",

    }
  },
  {
    title: "Weather App",
    technologies: ["Django", "HTML", "Tailwind CSS"],
    url: "#",
    images: {
      main: "/images/WeatherWebAPP.png",
      
    },
    details: {
          description: "A productivity application for organizing tasks with drag-and-drop functionality.",

    }
  }
];
