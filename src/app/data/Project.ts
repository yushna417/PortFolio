import { Project } from "@/app/types/types";

export const projects: Project[] = [
  {
    title: "Hire Enumerator",
    technologies: ["TypeScript", "React", "Ant Design", "Firebase"],
    url: "https://hireenumerator.com",
    images: {
      main: "/images/HireEnumerator.png",
    },
    details: {
      reponsibilities: [
        "Redesigned multiple pages for improved UI/UX",
        "Implemented user registration flow",
        "Integrated Firebase for authentication and database",
        "Completed additional core functionalities",
      ],
      description:
        "Hire Enumerator is a platform designed for hiring and managing enumerators. I contributed by redesigning pages and implementing major functionalities including registration, Firebase integration, and database operations.",
    },
  },
  {
    title: "Grafx International",
    technologies: ["JavaScript", "React", "Firebase"],
    url: "https://grafxint.com/",
    images: {
      main: "/images/Grafxint.png",
    },
    details: {
      reponsibilities: [
        "Redesigned and upgraded the complete website",
        "Migrated site to a CMS powered by Firebase",
        "Ensured responsive and modern UI/UX",
        "Enhanced performance and scalability",
      ],
      description:
        "Grafx International is a professional company website that I redesigned and rebuilt from scratch. I transformed it into a CMS-powered site using React and Firebase for easy management and scalability.",
    },
  },
  {
    title: "Anweshan Agro",
    technologies: ["Next.js", "TypeScript"],
    url: "https://anweshanagro-f36a5.web.app/",
    images: {
      main: "/images/AgroAnweshan.png",
    },
    details: {
      reponsibilities: [
        "Designed and implemented the complete frontend UI",
        "Developed responsive and user-friendly layouts",
        "Optimized UI performance with Next.js and TypeScript",
      ],
      description:
        "Anweshan Agro is an agricultural-focused web application where I developed the entire frontend UI using Next.js and TypeScript, ensuring a smooth and responsive experience.",
    },
  },
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
