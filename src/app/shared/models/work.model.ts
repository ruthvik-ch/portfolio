export interface WorkItem {
  duration: string;
  company: string;
  role: string;
  bullets: string[];
  logo: string;
  link?: {
    label: string;
    url: string;
  };
}
