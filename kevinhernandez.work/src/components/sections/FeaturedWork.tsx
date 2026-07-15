import Image from "next/image";
import {
  SiIonic,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrain,
  TbBriefcase,
  TbChartBar,
  TbRocket,
  TbUsers,
} from "react-icons/tb";

const featuredProjects = [
  {
    title: "FinalRoom",
    category: "Client Portal SaaS",
    description:
      "A client portal SaaS for managing clients, projects, agreements, deliverables, payments, and project rooms.",
    image: "/projects/finalroom.svg",
    productIcon: "/icons/finalroom.png",
    fallbackEmoji: "📁",
    href: "https://www.finalroom.app",
    caseStudyHref: "/case-studies/finalroom-case-study.pdf",
    tags: ["SaaS", "React", "Supabase"],
  },
  {
    title: "Qiknest",
    category: "Growth-Oriented Business Workspace",
    description:
      "A modular workspace where I explore product-led growth patterns, CRM workflows, KPI dashboards, website publishing, store flows, and analytics-ready business systems.",
    image: "/projects/qiknest.png",
    productIcon: "/icons/qiknest.png",
    fallbackEmoji: "📊",
    href: "https://qiknest.com",
    caseStudyHref: "/case-studies/qiknest-case-study.pdf",
    tags: ["Growth Systems", "CRM", "Analytics"],
  },
  {
    title: "Remotering.dev",
    category: "Remote Job Board",
    description:
      "A curated remote job platform focused on verified opportunities, better discovery, and cleaner hiring flows.",
    image: "/projects/the-remotering.png",
    productIcon: "",
    fallbackEmoji: "💼",
    href: "https://remotering.dev",
    caseStudyHref: "/case-studies/remotering-case-study.pdf",
    tags: ["Job Board", "Next.js", "PostgreSQL"],
  },
  {
    title: "FocusZip",
    category: "Brain Training App",
    description:
      "A mobile-first brain-training app with quick games, streaks, social motivation, and focus habits.",
    image: "/projects/focuszip.png",
    productIcon: "/icons/focuszip.png",
    fallbackEmoji: "🧠",
    href: "",
    caseStudyHref: "/case-studies/focuszip-case-study.pdf",
    tags: ["Mobile", "Ionic", "Brain Games"],
  },
];

const tagIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  SaaS: TbRocket,
  React: SiReact,
  Supabase: SiSupabase,
  "Growth Systems": TbChartBar,
  CRM: TbUsers,
  Analytics: TbChartBar,
  "Job Board": TbBriefcase,
  "Next.js": SiNextdotjs,
  PostgreSQL: SiPostgresql,
  Mobile: SiTypescript,
  Ionic: SiIonic,
  "Brain Games": TbBrain,
};

export default function FeaturedWork() {
  return (
    <section className="bg-[#fafaf7] px-5 py-14 sm:px-6 md:py-16 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>Featured work</SectionEyebrow>

            <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.05em] text-neutral-950 sm:text-4xl">
              Products I&apos;ve built
            </h2>
          </div>

          <a
            href="#more"
            className="inline-flex w-fit text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
          >
            View all projects →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    productIcon?: string;
    fallbackEmoji: string;
    href: string;
    caseStudyHref: string;
    tags: string[];
  };
}) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="grid sm:grid-cols-[42%_1fr] md:block">
        <div className="relative h-44 overflow-hidden bg-neutral-100 sm:h-full sm:min-h-[220px] md:h-52 md:min-h-0">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <ProductIcon
              title={project.title}
              icon={project.productIcon}
              fallbackEmoji={project.fallbackEmoji}
            />
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {project.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-950">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-neutral-600 sm:line-clamp-3 md:line-clamp-none xl:line-clamp-4">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-950 hover:underline"
              >
                Visit ↗
              </a>
            ) : null}

            <a
              href={project.caseStudyHref}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-neutral-950 hover:underline"
            >
              Case study
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductIcon({
  title,
  icon,
  fallbackEmoji,
}: {
  title: string;
  icon?: string;
  fallbackEmoji: string;
}) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-lg shadow-black/10 sm:h-12 sm:w-12">
      {icon ? (
        <Image
          src={icon}
          alt={`${title} icon`}
          width={30}
          height={30}
          className="h-7 w-7 object-contain"
        />
      ) : (
        <span className="text-2xl" aria-hidden="true">
          {fallbackEmoji}
        </span>
      )}
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  const Icon = tagIcons[label];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 sm:px-3 sm:text-xs">
      {Icon ? <Icon className="h-3.5 w-3.5 text-neutral-800" /> : null}
      {label}
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
      {children}
    </p>
  );
}
