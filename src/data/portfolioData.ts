import {
  NavItem,
  Skill,
  Interest,
  ExperienceMilestone,
  ValueCard,
  SocialLink,
} from '../types';

export const personalInfo = {
  name: 'Nathan Adenekan',
  role: 'Developer & Game Creator',
  shortBio: 'I specialize in coding, building modern responsive websites, and creating engaging game experiences.',
  tagline: 'Passionate about coding, web development, and interactive game design.',
  status: 'Open for projects, collaboration & opportunities',
  location: 'British Columbia, Canada / Remote Worldwide',
  email: 'adenekannathan@gmail.com',
  github: 'https://github.com/nathan1268',
  yearsExperience: '0',
  projectsCompleted: '3',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Interests', href: '#interests' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { label: 'Years of Craft', value: '0' },

];

export const values: ValueCard[] = [
  {
    title: 'Clean Code & Performance',
    description: 'Writing readable, maintainable code and optimizing runtime performance across web apps and games.',
    iconName: 'Zap',
  },
  {
    title: 'Interactive Experiences',
    description: 'Designing intuitive user interfaces, fluid animations, and engaging interactive mechanics.',
    iconName: 'Sparkles',
  },
  {
    title: 'Scalable Systems',
    description: 'Structuring robust frontend and backend architectures that grow smoothly as features expand.',
    iconName: 'Cpu',
  },
  {
    title: 'Creative Craftsmanship',
    description: 'Blending technology, game design, and visual aesthetics to build memorable digital projects.',
    iconName: 'Palette',
  },
];

export const skillsData: Skill[] = [
  
  // Backend
  {
    name: 'Python Basics',
    category: 'backend',
    level: 86,
    experience: '6 wks',
    iconName: 'Server',
    tags: ['Functions', 'Arithmetic Operators', 'Loops'],
    description: 'Python is a high-level programming language used for scripting, backend logic, and automation.',
    isFavorite: true,
  },
];

export const interestsData: Interest[] = [
  {
    id: 'gaming',
    title: 'Game Development',
    category: 'Creative Tech',
    iconName: 'Cpu',
    tagline: 'Designing gameplay mechanics, physics, and interactive worlds.',
    description: 'Passionate about coding games, experimenting with game logic, mechanics, audio integration, and interactive storytelling.',
    highlights: ['Game Mechanics & Systems', 'Physics & Player Controls', 'Interactive Prototyping'],
    color: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30',
    stats: { label: 'Prototypes', value: '3+' },
  },
  {
    id: 'open-source',
    title: 'Basketball',
    category: 'Ecosystem',
    iconName: 'Terminal',
    tagline: 'Staying active on the court and building team discipline.',
    description: 'Playing basketball to stay sharp, focused, and energized both on and off the court.',
    highlights: ['Teamwork & Communication', 'Strategic Thinking', 'Active Lifestyle'],
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
    stats: { label: 'Weekly Runs', value: '4+' },
  },
];

export const experienceData: ExperienceMilestone[] = [
  {
    period: 'August 2026 - Present',
    role: 'Software Developer & Game Creator',
    company: 'Independent Projects',
    location: 'British Columbia, Canada',
    description: 'Developing custom web applications, responsive websites, and interactive game prototypes.',
    achievements: [
      'Engineered responsive web applications focusing on usability and clean design.',
      'Developed interactive game mechanics and logic prototypes.',
      'Authored modular, reusable code components with modern development tools.',
    ],
    technologies: ['Python', 'TypeScript', 'React', 'HTML5/CSS3', 'Tailwind CSS', 'Git'],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/nathan1268',
    iconName: 'Github',
    handle: '@nathan1268',
  },
  {
    name: 'Email',
    url: 'mailto:adenekannathan@gmail.com',
    iconName: 'Mail',
    handle: 'adenekannathan@gmail.com',
  },
];

