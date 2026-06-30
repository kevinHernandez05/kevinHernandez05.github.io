import React, { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCodeBranch,
  FaFilePdf,
} from "react-icons/fa6";

const projects = [
  {
    title: "FinalRoom",
    status: "Live product",
    year: "2025 — Present",
    image: "/projects/finalroom.png",
    description:
      "A client portal SaaS for freelancers and small service teams. It helps manage clients, projects, agreements, deliverables, payments, milestones, and client-facing project rooms from one clean workspace.",
    tags: ["React", "Supabase", "SaaS", "Client Portal", "Product Design"],
    href: "https://www.finalroom.app",
    github: "",
    caseStudyHref: "/case-studies/finalroom-case-study.pdf",
    featured: true,
  },
  {
    title: "Qiknest",
    status: "Live product",
    year: "2024 — Present",
    image: "/projects/qiknest.png",
    description:
      "A modular SaaS platform for business operations, focused on giving small businesses a flexible place to shape systems around KPIs, analytics, operational workflows, and internal tools.",
    tags: ["React", "Supabase", "SaaS", "Analytics", "Business Tools"],
    href: "https://qiknest.wbkrd.com",
    github: "",
    caseStudyHref: "/case-studies/qiknest-case-study.pdf",
    featured: true,
  },
  {
    title: "Remotering.dev",
    status: "In active development",
    year: "2025 — Present",
    image: "/projects/the-remotering.png",
    description:
      "A remote job platform focused on helping candidates and recruiters connect through a cleaner, more curated experience with role filtering, better discovery, and tailored hiring flows.",
    tags: ["React", "Supabase", "Job Board", "Remote Work", "Product Design"],
    href: "https://remotering.dev",
    github: "",
    caseStudyHref: "/case-studies/remotering-case-study.pdf",
    featured: true,
  },
  {
    title: "FocusZip",
    status: "In active development",
    year: "2026 — Present",
    image: "/projects/focuszip.png",
    description:
      "A lightweight brain-training and daily challenge app built around quick mental games, streak-friendly flows, premium features, and a non-intrusive ad experience inspired by casual learning apps.",
    tags: ["React", "Ionic", "TypeScript", "Mobile UX", "Brain Games"],
    href: "",
    github: "",
    caseStudyHref: "/case-studies/focuszip-case-study.pdf",
    featured: true,
  },
  {
    title: "NuGet Lens",
    status: "In active development",
    year: "2026 — Present",
    image: "",
    description:
      "A desktop tool for visually inspecting dependencies across large .NET solutions. It helps surface package relationships, project references, and version conflicts in a way that’s easier to understand than raw project files and terminal output.",
    tags: [".NET", "C#", "Tauri", "Rust", "React", "Developer Tooling"],
    href: "",
    github: "",
    caseStudyHref: "",
    featured: false,
  },
  {
    title: "Mekanico",
    status: "In active development",
    year: "2025 — Present",
    image: "",
    description:
      "A SaaS platform for repair shops that gives customers visibility into their vehicle’s repair progress through timelines, updates, and payment tracking.",
    tags: ["Ionic", "React", "Supabase", "Automotive", "Timeline UX"],
    href: "",
    github: "",
    caseStudyHref: "",
    featured: false,
  },
  {
    title: "Elementary",
    status: "In active development",
    year: "2025 — Present",
    image: "",
    description:
      "A CRM and operations-focused SaaS tailored for agencies, with customer management, campaign history, and workflow visibility across client relationships.",
    tags: ["React", "Supabase", "CRM", "Marketing", "SaaS"],
    href: "",
    github: "",
    caseStudyHref: "",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section className="px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
            03. THINGS I’VE BUILT
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            A selection of products, systems, and experiments I’ve been building.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            These projects reflect the kind of work I enjoy most: building useful
            software, exploring scalable systems, shipping MVPs, and creating
            digital experiences with both technical depth and product intent.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Featured work
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-[15px]">
              A few of the products and tools that best represent how I like to
              build: practical, system-oriented, and grounded in real use cases.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} large />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            More things I’m building
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400 sm:text-[15px]">
            Not everything I build is a polished product or a public launch.
            Some things begin as experiments, side projects, or ideas I care
            enough about to keep pushing forward.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {moreProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }) {
  const [imageError, setImageError] = useState(false);
  const showFallback = !project.image || imageError;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07]">
      <div className="overflow-hidden border-b border-white/10 bg-slate-900/40">
        {showFallback ? (
          <ProjectImageFallback
            title={project.title}
            status={project.status}
            large={large}
          />
        ) : (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            onError={() => setImageError(true)}
            className={`w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
              large ? "h-64 sm:h-72" : "h-52"
            }`}
          />
        )}
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
            {project.status}
          </span>

          <span className="text-sm text-slate-500">{project.year}</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Visit project
              <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="text-sm text-slate-500">
              Private / in progress
            </span>
          )}

          {project.caseStudyHref ? (
            <a
              href={project.caseStudyHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Case study
              <FaFilePdf className="h-3.5 w-3.5" />
            </a>
          ) : null}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              GitHub
              <FaGithub className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectImageFallback({ title, status, large }) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ${
        large ? "h-64 sm:h-72" : "h-52"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[5%] top-[25%] h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-cyan-300">
          <FaCodeBranch className="h-7 w-7" />
        </div>

        <p className="max-w-xs text-lg font-semibold text-white">{title}</p>
        <p className="mt-2 text-sm text-slate-400">{status}</p>
      </div>
    </div>
  );
}