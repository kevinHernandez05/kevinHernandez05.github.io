import {
  SiDotnet,
  SiSharp,
  SiGo,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiRust,
} from "react-icons/si";
import {
  TbBuildingStore,
  TbChartBar,
  TbCloud,
  TbCode,
  TbDatabase,
  TbPencil,
  TbTrendingUp,
} from "react-icons/tb";

const technologies = [
  {
    name: ".NET",
    icon: SiDotnet,
  },
  {
    name: "C#",
    icon: SiSharp,
  },
  {
    name: "Go",
    icon: SiGo,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
  },
  {
    name: "SQL Server",
    icon: TbDatabase,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Rust",
    icon: SiRust,
  },
  {
    name: "SaaS",
    icon: TbCloud,
  },
  {
    name: "Product Design",
    icon: TbPencil,
  },
];

const strengths = [
  {
    title: "Growth Engineering",
    description:
      "Building landing pages, conversion flows, product experiments, and useful web experiences that help people discover and try software.",
    icon: TbTrendingUp,
  },
  {
    title: "Marketing Systems",
    description:
      "Connecting content, analytics, CRM workflows, and product data into systems that help teams move faster.",
    icon: TbChartBar,
  },
  {
    title: "Full Stack Product Work",
    description:
      "Shipping frontend experiences, APIs, dashboards, data models, and backend logic across complete product flows.",
    icon: TbCode,
  },
  {
    title: "Small Business SaaS",
    description:
      "Designing tools around real business needs: leads, metrics, websites, stores, workflows, and operational visibility.",
    icon: TbBuildingStore,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#fafaf7] px-6 py-16 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm sm:p-9 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionEyebrow>About me</SectionEyebrow>
              <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 sm:text-4xl lg:text-5xl">
                I build full stack products at the intersection of engineering,
                product, and growth.
              </h2>
              <div className="mt-6 h-1 w-14 bg-[#38bdf8]" />{" "}
            </div>

            <div>
              <div className="space-y-5 text-base leading-8 text-neutral-600">
                <p>
                  I’m a Full Stack Software Engineer building SaaS products,
                  developer tools, and growth-oriented web systems.
                </p>

                <p>
                  My work sits at the intersection of engineering, product, and
                  marketing: landing pages, internal tools, dashboards, content
                  workflows, analytics-ready experiences, and the backend logic
                  that makes them useful.
                </p>

                <p>
                  Lately, I’ve been building Qiknest, a modular business
                  workspace for small teams where I explore product-led growth,
                  CRM workflows, KPI dashboards, website building, store flows,
                  and practical systems that help small businesses understand
                  and grow their operations.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {strengths.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-black/10 bg-[#fafaf7] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-neutral-950">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-neutral-950">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-neutral-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-black/10 pt-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
              Tech I work with
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fafaf7] px-4 py-2 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-white hover:text-neutral-950"
                  >
                    <Icon className="h-4 w-4 text-neutral-950" />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
      {children}
    </p>
  );

}
