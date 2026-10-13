export const site = {
  name: "Jona Firman",
  role: "Full-stack Developer",
  tagline: "I build SaaS products that solve real problems.",
  description:
    "Full-stack developer from Indonesia focused on building fast, reliable SaaS products with Next.js, TypeScript and PostgreSQL.",
  location: "Indonesia",
  url: "https://jonafirman.vercel.app",
  github: "https://github.com/jonafirman",
};

export const about = [
  "I'm a full-stack developer who enjoys turning ideas into products people actually use. I care about clean code, fast interfaces and shipping in small, steady steps.",
  "Right now I'm building my first SaaS product in public. This site collects the projects and experiments along the way.",
];

export const skills = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"] },
  { group: "Tools", items: ["Git & GitHub", "Vercel", "Docker", "CI/CD"] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "SaaS Product",
    description: "My first SaaS product, built in public from idea to launch.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "Coming soon",
  },
  {
    title: "Portfolio",
    description: "This website. Built with Next.js and Tailwind CSS, deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/jonafirman/portfolio",
    live: "https://jonafirman.vercel.app",
  },
];
