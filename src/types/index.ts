// Type definitions for the Isometric Portfolio

export type ZoneType = 'about' | 'skills' | 'projects' | 'experience' | 'contact' | null;

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface CubeProps extends Position3D {
  width: number;
  height: number;
  depth: number;
  color: string;
  className?: string;
}

export interface ProjectItem {
  name: string;
  stack: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  techStack?: string[];
  features?: string[];
  futureEnhancements?: string[];
  link?: string;
  github?: string;
  isCollection?: boolean;
  items?: ProjectItem[];
}

export interface Experience {
  id?: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  description?: string;
  achievements: string[]; // Reverted to achievements based on user update
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface Skill {
  category: string;
  items: string[];
}
