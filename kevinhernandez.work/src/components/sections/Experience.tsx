import {
  TbApi,
  TbCode,
  TbDatabase,
  TbDeviceMobile,
  TbGitBranch,
  TbServer,
} from "react-icons/tb";

const experience = [
  {
    period: "Jul 2023 — Jun 2026",
    role: "Full Stack Developer / Software Engineer",
    company: "Fortem Dev Services LTDA",
    location: "Remote · San Jose, Costa Rica",
    icon: TbServer,
    summary:
      "Built and maintained production .NET APIs, modern web applications, real-time workflows, and backend services for remote engineering teams.",
    highlights: [
      "Built backend services with ASP.NET Core, SQL Server, Redis, SignalR, and RabbitMQ.",
      "Delivered frontend features with React, Vue, TypeScript, JavaScript, and responsive UI patterns.",
      "Supported CI/CD workflows with Git, Azure DevOps, Docker, and production-oriented releases.",
    ],
    tags: [
      ".NET",
      "ASP.NET Core",
      "SQL Server",
      "Redis",
      "SignalR",
      "RabbitMQ",
      "React",
      "Vue",
      "TypeScript",
      "Docker",
      "Azure DevOps",
    ],
  },
  {
    period: "Nov 2021 — Jun 2023",
    role: "Senior Developer",
    company: "Presidencia de la República Dominicana · Programa Supérate",
    location: "Santo Domingo, Dominican Republic",
    icon: TbApi,
    summary:
      "Led development of internal platforms, business modules, APIs, CMS widgets, and modernization work across enterprise applications.",
    highlights: [
      "Built internal web platforms with ASP.NET MVC, ASP.NET Core, Razor Pages, Angular, C#, and SQL Server.",
      "Created RESTful APIs and backend integrations using Entity Framework, Hangfire, AutoMapper, Sitefinity, and NHibernate.",
      "Contributed to modernization work using React, Node.js, Express, TypeORM, TypeScript, and hexagonal architecture.",
    ],
    tags: [
      "C#",
      "ASP.NET MVC",
      "ASP.NET Core",
      "Angular",
      "SQL Server",
      "Sitefinity",
      "Hangfire",
      "React",
      "Node.js",
      "TypeScript",
    ],
  },
  {
    period: "Jul 2019 — Nov 2021",
    role: "Junior Developer",
    company: "Presidencia de la República Dominicana · Programa Supérate",
    location: "Santo Domingo, Dominican Republic",
    icon: TbDatabase,
    summary:
      "Developed and maintained internal applications, modules, APIs, reports, and SQL-driven workflows for government-facing digital platforms.",
    highlights: [
      "Maintained applications with .NET, C#, SQL Server, Angular, jQuery, and Razor views.",
      "Debugged existing systems, analyzed user needs, and shipped improvements across internal tools.",
      "Created database objects, relational joins, and stored-procedure-based business logic.",
    ],
    tags: [
      ".NET",
      "C#",
      "SQL Server",
      "Angular",
      "jQuery",
      "Razor",
      "Stored Procedures",
    ],
  },
  {
    period: "Oct 2017 — Nov 2018",
    role: "Ionic Developer",
    company: "ED2 Partners & Brothers",
    location: "Santo Domingo, Dominican Republic",
    icon: TbDeviceMobile,
    summary:
      "Worked on early mobile product features for Workbefy, connecting Ionic UI screens with backend services and relational data.",
    highlights: [
      "Developed mobile application screens using Ionic 2 and Angular.",
      "Integrated PHP, MySQL, and REST API principles for early product workflows.",
      "Implemented mobile UI, backend integrations, and relational data access.",
    ],
    tags: ["Ionic", "Angular", "PHP", "MySQL", "REST APIs", "Mobile UI"],
  },
];

const quickStats = [
  {
    label: "Years building",
    value: "7+",
    icon: TbCode,
  },
  {
    label: "Main focus",
    value: "Full Stack",
    icon: TbServer,
  },
  {
    label: "Core backend",
    value: ".NET / APIs",
    icon: TbApi,
  },
  {
    label: "Delivery",
    value: "CI/CD",
    icon: TbGitBranch,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#fafaf7] px-6 py-16 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionEyebrow>Experience</SectionEyebrow>

            <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              A timeline of where I&apos;ve worked and how my engineering path
              has evolved.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-neutral-600">
              From early mobile work to enterprise platforms, production APIs,
              real-time systems, and modern full stack product development.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-neutral-950" />
                    <p className="mt-4 text-xl font-semibold tracking-tight text-neutral-950">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-black/10 md:block" />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <TimelineItem
                key={`${item.company}-${item.period}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-950"
          >
            View full CV <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <article className="relative grid gap-5 md:grid-cols-[180px_1fr] md:pl-12">
      <div className="hidden md:block">
        <div className="sticky top-28">
          <p className="text-sm font-semibold text-neutral-950">
            {item.period}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
            0{index + 1}
          </p>
        </div>
      </div>

      <div className="absolute left-0 top-7 hidden md:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[#fafaf7]">
          <div className="h-3 w-3 rounded-full bg-[#38bdf8] ring-4 ring-neutral-950" />{" "}
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-[#fafaf7] text-neutral-950">
              <Icon className="h-6 w-6" />
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-500 md:hidden">
                {item.period}
              </p>

              <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-neutral-950">
                {item.role}
              </h3>

              <p className="mt-1 text-sm font-medium text-neutral-600">
                {item.company}
              </p>

              <p className="mt-1 text-sm text-neutral-400">{item.location}</p>
            </div>
          </div>

          <span className="w-fit rounded-full border border-black/10 bg-[#fafaf7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
            {item.period}
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
          {item.summary}
        </p>

        <ul className="mt-5 grid gap-3 text-sm leading-7 text-neutral-600 lg:grid-cols-3">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-black/10 bg-[#fafaf7] p-4"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
      {children}
    </p>
  );
}
