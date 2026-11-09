export interface Project {
  id: string;
  title: string;
  category: 'UI/UX Design' | 'Business Analysis' | 'Web & Mobile';
  subtitle: string;
  image: string;
  overview: string;
  problem: string;
  solution: string;
  role: string[];
  tools: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  figmaUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
}
