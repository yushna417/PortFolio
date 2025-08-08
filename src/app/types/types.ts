// src/types/types.ts
export type Skill = {
  name: string;
  level: number;
  icon: string; // Add icon field
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Project = {
  title: string;
  technologies: string[];
  url?: string;
  images: {
    main: string;
    others?: string[];
  };
  videoUrl?: string;
  details?: {
    reponsibilities?: string[];
    description?: string
  };
};