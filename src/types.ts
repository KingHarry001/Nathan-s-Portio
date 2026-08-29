export interface NavItem {
  label: string;
  href: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'design' | 'architecture';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'architecture';
  level: number; // 1-100
  experience: string;
  iconName: string;
  tags: string[];
  description: string;
  isFavorite?: boolean;
}

export interface Interest {
  id: string;
  title: string;
  category: string;
  iconName: string;
  tagline: string;
  description: string;
  highlights: string[];
  color: string;
  stats?: { label: string; value: string };
}

export interface ExperienceMilestone {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  handle: string;
}
