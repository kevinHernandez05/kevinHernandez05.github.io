import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "FinalRoom",
    status: "Live product",
    year: "2025 — Present",
    image: "/projects/finalroom.png",
    description:
      "A client portal SaaS for freelancers and small service teams, built to manage clients, projects, agreements, deliverables, payments, milestones, and client-facing rooms.",
    tags: ["React", "Supabase", "SaaS", "Client Portal"],
    href: "https://www.finalroom.app",
    caseStudyHref: "/case-studies/finalroom-case-study.pdf",
    featured: true,
  },
  {
    title: "Qiknest",
    status: "Live product",
    year: "2024 — Present",
    image: "/projects/qiknest.png",
    description:
      "A modular business workspace for small teams, combining modules like CRM, metrics, website, store, and data workflows in one operating layer.",
    tags: ["React", "Supabase", "SaaS", "Business Tools"],
    href: "https://qiknest.wbkrd.com",
    caseStudyHref: "/case-studies/qiknest-case-study.pdf",
    featured: true,
  },
  {
    title: "Remotering.dev",
    status: "In active development",
    year: "2025 — Present",
    image: "/projects/the-remotering.png",
    description:
      "A remote job board focused on verified opportunities, cleaner discovery, and a more curated experience for candidates and companies.",
    tags: ["React", "Supabase", "Job Board", "Remote Work"],
    href: "https://remotering.dev",
    caseStudyHref: "/case-studies/remotering-case-study.pdf",
    featured: true,
  },
  {
    title: "FocusZip",
    status: "In active development",
    year: "2026 — Present",
    image: "/projects/focuszip.png",
    description:
      "A lightweight brain-training app built around quick mental games, streaks, social motivation, and mobile-first focus habits.",
    tags: ["React", "Ionic", "TypeScript", "Mobile UX"],
    caseStudyHref: "/case-studies/focuszip-case-study.pdf",
    featured: true,
  },
  {
    title: "NuGet Lens",
    status: "In active development",
    year: "2026 — Present",
    description:
      "A desktop developer tool for visually inspecting dependencies, project references, package relationships, and NuGet version conflicts across .NET solutions.",
    tags: [".NET", "C#", "Tauri", "Rust", "React"],
    featured: false,
  },
];