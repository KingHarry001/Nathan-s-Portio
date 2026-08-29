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
  role: 'Senior Full Stack Engineer & UI Architect',
  shortBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  status: 'Open for high-impact roles & technical consulting',
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
    title: 'Precision & Performance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    iconName: 'Zap',
  },
  {
    title: 'Accessible & Inclusive',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    iconName: 'Sparkles',
  },
  {
    title: 'Scalable Architecture',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    iconName: 'Cpu',
  },
  {
    title: 'Fluid Craftsmanship',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
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
    tags: ['Functions', 'Aritemtric Operators', 'Loops'],
    description: 'Python is a high level languages. (HLL)',
    isFavorite: true,
  },
];

export const interestsData: Interest[] = [
  {
    id: 'gaming',
    title: 'Gaming',
    category: 'Creative Tech',
    iconName: 'Cpu',
    tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    highlights: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor'],
    color: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30',
    stats: { label: 'Shader Demos', value: '25+' },
  },
  {
    id: 'open-source',
    title: 'Basketball',
    category: 'Ecosystem',
    iconName: 'Terminal',
    tagline: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    highlights: ['Duis aute irure dolor in', 'Reprehenderit in voluptate', 'Velit esse cillum dolore'],
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
    stats: { label: 'OS Contributions', value: '180+' },
  },
];

export const experienceData: ExperienceMilestone[] = [
  {
    period: '2023 - Present',
    role: 'Staff / Lead Full Stack Engineer',
    company: 'Nexus Cloud Systems',
    location: 'Remote / London',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    achievements: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker', 'Google Cloud'],
  },
  {
    period: '2021 - 2023',
    role: 'Senior Frontend Engineer',
    company: 'Aetheric Interactive',
    location: 'London, UK',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    achievements: [
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.',
    ],
    technologies: ['React', 'Next.js', 'Framer Motion', 'GraphQL', 'Tailwind CSS', 'Playwright'],
  },
  {
    period: '2019 - 2021',
    role: 'Full Stack Software Engineer',
    company: 'Vanguard Digital Lab',
    location: 'British Columbia, Canada',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    achievements: [
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.',
      'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Redis', 'Docker'],
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

