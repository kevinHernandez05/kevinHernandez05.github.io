import Image from "next/image";

const featuredProjects = [
  {
    title: "FinalRoom",
    category: "Client Portal SaaS",
    description:
      "A client portal SaaS for managing clients, projects, agreements, deliverables, payments, and project rooms.",
    image: "/projects/finalroom.png",
    href: "https://www.finalroom.app",
    caseStudyHref: "/case-studies/finalroom-case-study.pdf",
    tags: ["SaaS", "React", "Supabase"],
  },
  {
    title: "Qiknest",
    category: "Business Workspace",
    description:
      "A modular workspace for small businesses, combining CRM, metrics, website, store, and data workflows.",
    image: "/projects/qiknest.png",
    href: "https://qiknest.com",
    caseStudyHref: "/case-studies/qiknest-case-study.pdf",
    tags: ["SaaS", "Business Tools", "Analytics"],
  },
  {
    title: "Remotering.dev",
    category: "Remote Job Board",
    description:
      "A curated remote job platform focused on verified opportunities, better discovery, and cleaner hiring flows.",
    image: "/projects/the-remotering.png",
    href: "https://remotering.dev",
    caseStudyHref: "/case-studies/remotering-case-study.pdf",
    tags: ["Job Board", "Remote Work", "Product"],
  },
  {
    title: "FocusZip",
    category: "Brain Training App",
    description:
      "A mobile-first brain-training app with quick games, streaks, social motivation, and focus habits.",
    image: "/projects/focuszip.png",
    href: "",
    caseStudyHref: "/case-studies/focuszip-case-study.pdf",
    tags: ["Mobile", "Ionic", "Brain Games"],
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#fafaf7] px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Featured work</SectionEyebrow>

            <h2 className="mt-3 text-4xl font-medium tracking-[-0.05em] text-neutral-950">
              Products I&apos;ve built
            </h2>
          </div>

          <a
            href="#more"
            className="text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
          >
            View all projects →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
    href: string;
    caseStudyHref: string;
    tags: string[];
  };
}) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden bg-neutral-100">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-950">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
            >
              {tag}
            </span>
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
    </article>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a6b300]">
      {children}
    </p>
  );
}