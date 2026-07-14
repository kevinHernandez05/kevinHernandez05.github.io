import {
  SiDotnet,
  SiSharp,
  SiGo,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
  SiH2Database,
  SiTailwindcss,
  SiRust,
} from "react-icons/si";
import { TbPencil, TbCloud, TbDatabase, TbCode } from "react-icons/tb";

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
  }
];

const strengths = [
  {
    title: "Full Stack Engineering",
    description:
      "Building frontend experiences, APIs, data models, and backend systems that work together.",
    icon: TbCode,
  },
  {
    title: "Product Thinking",
    description:
      "Turning ideas into useful workflows, MVPs, and systems that solve real problems.",
    icon: TbPencil,
  },
  {
    title: "Data & Systems",
    description:
      "Designing business logic, dashboards, metrics, and reliable persistence layers.",
    icon: TbDatabase,
  },
  {
    title: "Cloud-ready Builds",
    description:
      "Shipping practical software with modern tools, clean structure, and scalable foundations.",
    icon: TbCloud,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#fafaf7] px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm sm:p-9 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionEyebrow>About me</SectionEyebrow>

              <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 sm:text-4xl lg:text-5xl">
                Engineer, product builder, and someone who genuinely enjoys
                turning ideas into useful things.
              </h2>

              <div className="mt-6 h-1 w-14 bg-[#ecff00]" />
            </div>

            <div>
              <div className="space-y-5 text-base leading-8 text-neutral-600">
                <p>
                  I’m a Full Stack Software Engineer focused on building reliable
                  software, clean interfaces, and practical systems that help
                  people and businesses move faster.
                </p>

                <p>
                  I enjoy working across the stack, from frontend experiences to
                  backend services, databases, integrations, and product workflows.
                  Most of my work lives at the intersection of engineering,
                  product, and business operations.
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
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a6b300]">
      {children}
    </p>
  );
}