export interface PortfolioData {
  featuredProjects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  links: Links;
  contact: Contact;
  icons: Icons;
  resume: string;
  summary: string;
  projectReadMeUrl: string;
  heroImageUrl: string;
}

export interface Link {
  url: string;
  label: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  logo: string;
  bullets: string[];
  link?: Link;
}

export interface Education {
  institution: string;
  role: string;
  duration: string;
  logo: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: Link;
}
export interface Links {
  linkedin: string;
  github: string;
  portfolio: string;
  instagram: string;
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface Icons {
  linkedIn: string;
  github: string;
  portfolio: string;
  pdf: string;
  email: string;
  instagram: string;
}
