import content from '../../data/portfolio.json';

export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  dates: string;
  category: string;
  current: boolean;
  summary: string;
  tags: string[];
  headline: string;
  overview: string;
  sections: { title: string; text: string }[];
  stack: string[];
  document?: { path: string; label: string };
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  label: string;
  title: string;
  originalTitle?: string;
  institution: string;
  description: string;
  problem: string;
  contribution: string;
  technologyGroups: { title: string; items: string[] }[];
  url?: string;
  demoUrl?: string;
  document?: string;
  linkLabel?: string;
  evidence: string;
  workflowTitle: string;
  workflow: string[];
  workflowCaption: string;
  experienceSlug?: string;
  images?: { src: string; alt: string; caption: string; fit?: string }[];
}

export interface Portfolio {
  name: string;
  fullName: string;
  age: number;
  title: string;
  location: string;
  intro: string;
  about: string[];
  social: { linkedin: string; github: string };
  education: { degree: string; detail: string }[];
  languages: { name: string; level: string }[];
  projects: Project[];
  skills: { number: string; symbol: string; title: string; description: string; tags: string[] }[];
  experiences: Experience[];
}

export const portfolio = content satisfies Portfolio;

// Astro aplica la misma base a las páginas y a los recursos compilados.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const url = (pathname = '') => `${base}${pathname.replace(/^\/+/, '')}`;
export const homeUrl = url('index.html');
export const experienceUrl = (slug: string) => url(`experiencia/${slug}.html`);
export const projectUrl = (slug: string) => url(`proyectos/${slug}.html`);
export const number = (index: number) => String(index + 1).padStart(2, '0');
