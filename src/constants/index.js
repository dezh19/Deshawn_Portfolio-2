import {
  web,
  fullstack,
  backend,
  network,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  nextjs,
  postgresql,
  expressjs,
  threejs,
  linden,
  gphc,
  fiber,
  project1,
  project2,
  project3,
  project4,
  project5,
  github,
  linkedin,
  twitter,
} from "../assets";
import {
  SiGit,
  SiGithub as SiGithubIcon,
  SiFigma as SiFigmaIcon,
  SiSass as SiSassIcon,
  SiVite as SiViteIcon,
  SiNetlify,
  SiPostman,
  SiVercel,
  SiBlender,
} from "react-icons/si";
import { DiVisualstudio, DiTerminal, DiPhotoshop } from "react-icons/di";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/dezh19", icon: github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/deshawn-mitchell-58b561201/",
    icon: linkedin,
  },
  { name: "Twitter", url: "https://twitter.com/D35hawnM1tch3ll", icon: twitter },
];

const services = [
  {
    title: "Full Stack Developer",
    description: "Shipping complete products end-to-end, from database to UI.",
    icon: fullstack,
  },
  {
    title: "Web Developer",
    description: "Building responsive, full-stack apps with React and modern frameworks.",
    icon: web,
  },
  {
    title: "Backend Developer",
    description: "Designing APIs and services with Node.js, Express, and SQL/NoSQL databases.",
    icon: backend,
  },
  {
    title: "Systems & Network Support",
    description: "Hands-on experience keeping infrastructure and networks running reliably.",
    icon: network,
  },
  {
    title: "Graphic Designer",
    description: "Crafting clean visual interfaces with an eye for layout and detail.",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },
  { name: "Node JS", icon: nodejs },
  { name: "Express", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
];

// Kept as flat icons (not 3D balls) to stay under the browser's simultaneous
// WebGL-context limit — each tech ball mounts its own <Canvas>.
const tools = [
  { name: "VS Code", Icon: DiVisualstudio },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithubIcon },
  { name: "Figma", Icon: SiFigmaIcon },
  { name: "Sass", Icon: SiSassIcon },
  { name: "Vite", Icon: SiViteIcon },
  { name: "Terminal", Icon: DiTerminal },
  { name: "Netlify", Icon: SiNetlify },
  { name: "Vercel", Icon: SiVercel },
  { name: "Postman", Icon: SiPostman },
  { name: "Blender", Icon: SiBlender },
  { name: "Photoshop", Icon: DiPhotoshop },
];

const experiences = [
  {
    title: "Information Technology Officer",
    company_name: "Georgetown Public Hospital Corporation",
    icon: gphc,
    iconBg: "#383E56",
    date: "June 2025 - Present · Hybrid",
    points: [
      "Provide IT support and systems administration across hospital departments.",
      "Maintain and troubleshoot computer hardware for hospital staff.",
      "Support internal digital systems, including hospital forms and workflow tools.",
      "Skills: Computer Hardware, Computer Maintenance, and more.",
    ],
  },
  {
    title: "DevOps Jr.",
    company_name: "Georgetown Public Hospital Corporation",
    icon: gphc,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Support build, deployment, and release processes for internal applications.",
      "Assist with maintaining development and staging environments.",
      "Help monitor application health and troubleshoot deployment issues.",
    ],
  },
  {
    title: "Store Supervisor",
    company_name: "Linden Utility Services Co-op Society Ltd",
    icon: linden,
    iconBg: "#383E56",
    date: "January 2024 - December 2024",
    points: [
      "Recruited, trained, and supervised store staff, including shift scheduling.",
      "Oversaw inventory levels, ordering, and merchandise storage/display.",
      "Handled customer service, complaints, and inquiries.",
      "Implemented sales strategies and reported on sales and staff performance.",
    ],
  },
  {
    title: "Cashier",
    company_name: "Linden Utility Services Co-op Society Ltd",
    icon: linden,
    iconBg: "#E6DEDD",
    date: "December 2023 - Present",
    points: [
      "Handled cash, credit, and check transactions with customers.",
      "Verified pricing and issued change, receipts, and refunds.",
      "Balanced cash drawers at the start and end of every shift.",
      "Resolved customer complaints and processed returns.",
    ],
  },
  {
    title: "Fiber Technician",
    company_name: "Jdcorn",
    icon: fiber,
    iconBg: "#383E56",
    date: "April 2023 · Contract",
    points: [
      "Installed and troubleshot fiber optic connections.",
      "Short-term contract engagement focused on hands-on fiber work.",
    ],
  },
  {
    title: "Management Information Systems Officer",
    company_name: "Linden Utility Services Co-op Society Ltd",
    icon: linden,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Manage and maintain the organization's network infrastructure.",
      "Run help desk operations, resolving staff IT issues day to day.",
      "Monitor network security across the organization.",
      "Troubleshoot and repair computer hardware and systems.",
    ],
  },
  {
    title: "Computer Technician",
    company_name: "Linden Utility Service Co-op Society Ltd",
    icon: linden,
    iconBg: "#383E56",
    date: "December 2021 - Present · Contract",
    points: [
      "Manage and maintain computer networking infrastructure.",
      "Perform ongoing hardware maintenance and repairs.",
      "Provide on-site technical support in Linden, Guyana under a long-term contract.",
      "Skills: Computer Networking, Computer Maintenance, and more.",
    ],
  },
  {
    title: "Graphic and Sales Clerk",
    company_name: "Linden Utility Services Co-op Society Ltd",
    icon: linden,
    iconBg: "#E6DEDD",
    date: "December 2021 - September 2022",
    points: [
      "Greeted and assisted customers, upselling based on their needs.",
      "Restocked merchandise and organized items in storage.",
      "Arranged promotional and clearance displays for maximum visibility.",
      "Provided customers with guidance and support using Photoshop for signage.",
    ],
  },
];

const projects = [
  {
    name: "The Vlog",
    description:
      "A personal blogging platform with a Next.js frontend and a Strapi backend for publishing and managing vlog content.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "strapi", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/dezh19/The_Vlog",
  },
  {
    name: "Fuh Deh Food App",
    description:
      "A mobile-first food delivery app for browsing local vendors, viewing menus, and managing a cart, built with React, TypeScript, and Vite.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/dezh19/Fuh-Deh-Food-App",
    live_demo_link: "https://deshawnmitchell.github.io/Fuh-Deh-Food-App/",
  },
  {
    name: "Smart Bin",
    description:
      "A smart waste management app aimed at making recycling and waste collection more seamless and efficient.",
    tags: [
      { name: "scss", color: "blue-text-gradient" },
      { name: "uiux", color: "green-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/dezh19/Smart-Bin",
  },
  {
    name: "GPHC Form-System",
    description:
      "Enterprise forms management system for Georgetown Public Hospital Corporation — digitizes hospital forms with multi-step approval workflows across 8 roles, cost-based routing, SLA tracking, and an analytics dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: project4,
    source_code_link: "https://github.com/DeshawnMitchell/Form-System",
  },
  {
    name: "Hospital Purchase Request App",
    description:
      "A full-stack purchase and internal-request management system for hospital departments, with a multi-stage approval workflow, role-based access, file attachments, and an analytics dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/DeshawnMitchell/Hospital-Purchase-Request-App-2",
  },
];

export { services, technologies, tools, experiences, projects, github };
