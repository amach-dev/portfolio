// Centralized content for the portfolio. Edit this file to update copy across the site.
export const name="amach-dev";
export const personalInfo = {
  name: 'Amara achraf',
  titles: ['Backend Developer', 'Spring Boot Developer', 'React Developer', 'Tauri Developer'],
  tagline: 'I build secure, scalable, modern Web and Desktop applications using Java, Spring Boot, React and Tauri.',
  email: 'amaraabdelmounaim@gmail.com',
  location: 'Available for remote & on-site roles',
  resumeUrl: '/Amara-Resume.pdf',
  social: {
    github: 'https://github.com/amach-dev',
    instagram: 'https://instagram.com/achraf_abdelmounaim',
    whatsapp: 'https://wa.me/+213776999170',
  },
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const aboutContent = {
  heading: "Engineering reliable systems, end to end",
  paragraphs: [
    "I'm a backend-focused software engineer who finds real satisfaction in the parts of an application most users never see — the authentication flow that quietly keeps accounts safe, the API contract that makes a frontend team's life easier, the query that used to take four seconds and now takes forty milliseconds.",
    "Most of my work centers on Java and Spring Boot: REST APIs, role-based authorization, JWT and refresh-token authentication, and database design that holds up under real traffic rather than just demo data. I pair that with React on the frontend and Tauri when a project needs to live on the desktop instead of the browser — same engineering discipline, different runtime.",
    "I care about clean architecture because I've maintained the alternative. Clear layering, meaningful naming, and tests that actually catch regressions save weeks over a project's lifetime. I containerize what I build with Docker so environments stop being a source of surprises, and I profile before I optimize so performance work is guided by evidence, not guesses.",
  ],
  focusAreas: [
    'Backend Development', 'REST APIs', 'Authentication', 'Desktop Applications',
    'Database Design', 'Software Architecture', 'Performance Optimization', 'Docker', 'Clean Code', 'Scalable Systems',
  ],
};

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring Security', level: 85 },
      { name: 'REST API', level: 93 },
      { name: 'Hibernate', level: 82 },
      { name: 'JPA', level: 84 },
      { name: 'JWT', level: 88 },
      { name: 'Maven', level: 80 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 80 },
      { name: 'JavaScript', level: 78 },
      { name: 'React', level: 77 },
      { name: 'Axios', level: 75 },
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop',
    icon: 'monitor',
    skills: [
      { name: 'Tauri', level: 60 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'tool',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'Docker', level: 72 },
      { name: 'VS Code', level: 92 },
      {name: 'Eclipse', level: 90},
      { name: 'Postman', level: 88 },
      
    ],
  },
];

export const projects = [
  {
    id: 'job-platform',
    title: 'Job Platform',
    description: 'A full-featured job board connecting recruiters and candidates, with role-based dashboards, application tracking, and secure authentication.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker'],
    demo: 'https://demo.example.com/job-platform',
  },
  
];

export const experience = [
  {
    id: 1,
    title: 'REST API Development',
    period: 'Ongoing',
    description: 'Designing and building versioned, well-documented REST APIs consumed by web and desktop and mobile clients, following clear resource conventions and consistent error handling.',
  },
  {
    id: 2,
    title: 'Authentication Systems',
    period: 'Core specialty',
    description: 'Implementing secure login flows with JWT access tokens, refresh-token rotation, and password hashing best practices across Spring Boot services.',
  },
  {
    id: 3,
    title: 'Role-Based Authorization',
    period: 'Core specialty',
    description: 'Enforcing fine-grained permissions with Spring Security, separating what a user can see from what a user can do at the endpoint and UI level.',
  },
  {
    id: 4,
    title: 'Docker Deployment',
    period: 'Ongoing',
    description: 'Containerizing services and their dependencies for consistent, reproducible environments from local development through to production.',
  },
  {
    id: 5,
    title: 'Database Optimization',
    period: 'Ongoing',
    description: 'Designing relational database schemas using MySQL and PostgreSQL with proper relationships, constraints, and normalization.',
  },
  {
    id: 6,
    title: 'Pagination & Image Upload',
    period: 'Feature work',
    description: 'Building paginated REST endpoints and secure multipart image upload with validation and storage handling.',
  },
  {
    id: 7,
    title: 'Refresh Token Authentication',
    period: 'Feature work',
    description: 'Rotating refresh tokens with revocation support, so sessions stay both long-lived and secure against replay.',
  },
];

export const achievements = [
  { id: 1, value: 20, suffix: '+', label: 'REST APIs Built' },
  { id: 2, value: 1, suffix: '+', label: 'Projects Delivered' },
  { id: 3, value: 100, suffix: '%', label: 'Java & Spring Boot Focus' },
  { id: 4, value: 5, suffix: '+', label: 'Desktop Apps with Tauri' },
];

export const certificates = [
  { id: 1, title: 'Spring Boot Backend Development', issuer: 'Professional Certification', year: '2024', icon: 'award' },
  { id: 2, title: 'Java Programming Masterclass', issuer: 'Professional Certification', year: '2023', icon: 'code' },
  { id: 3, title: 'REST API Design & Security', issuer: 'Professional Certification', year: '2024', icon: 'shield' },
  { id: 4, title: 'React for Frontend Engineers', issuer: 'Professional Certification', year: '2023', icon: 'layers' },
  { id: 5, title: 'Docker & Containerization', issuer: 'Professional Certification', year: '2024', icon: 'box' },
  { id: 6, title: 'Database Design & Optimization', issuer: 'Professional Certification', year: '2023', icon: 'database' },
];

export const githubStats = {
  username: 'amara-dev',
  profileUrl: 'https://github.com/amach-dev',
  repositories: 34,
  contributions: 1280,
  followers: 210,
  latestProjects: [
    { name: 'auth-system', description: 'JWT + refresh-token auth service in Spring Boot', language: 'Java' },
    { name: 'desktop-manager', description: 'Tauri desktop app for infrastructure management', language: 'Rust' },
    { name: 'task-manager', description: 'Kanban-style collaborative task manager', language: 'Java' },
  ],
};

export const contactMethods = [
  { id: 'email', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: 'mail' },
  { id: 'github', label: 'GitHub', value: '@amach-dev', href: personalInfo.social.github, icon: 'github' },
  { id: 'instagram', label: 'Instagram', value: '@achraf_abdelmounaim', href: personalInfo.social.instagram, icon: 'instagram' },
  { id: 'whatsapp', label: 'WhatsApp', value: 'Message me', href: personalInfo.social.whatsapp, icon: 'whatsapp' },
];
