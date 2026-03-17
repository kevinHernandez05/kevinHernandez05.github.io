import "./style.css";
import ProfilePic from "./images/profile.jpeg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function About({ name }) {
  const technologyGroups = [
    {
      title: "Backend & APIs",
      items: [".NET / C#", "Go", "Node.js", "REST APIs"],
    },
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vue.js", "Tailwind CSS"],
    },
    {
      title: "Data & Storage",
      items: ["PostgreSQL", "SQL Server", "Supabase", "Redis"],
    },
    {
      title: "Architecture & Messaging",
      items: ["Microservices", "RabbitMQ", "Docker", "Kubernetes"],
    },
  ];

  const stats = [
    { label: "Years building software", value: `${calculatingYears(2018)}+` },
    { label: "Main focus", value: "Backend & SaaS" },
    { label: "Current mindset", value: "Build fast, build well" },
  ];

  return (
    <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
            01. ABOUT ME
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Engineer, product builder, and someone who genuinely enjoys
              turning ideas into useful things.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-400 sm:text-lg">
              <p>
                I’m a software engineer with a strong interest in building real
                products—whether that means shipping web apps, designing
                internal tools, improving existing systems, or exploring new
                ideas from scratch.
              </p>

              <p>
                I enjoy working across backend, frontend, and product thinking,
                especially when there’s a real problem to solve and a clear path
                to make things faster, simpler, or more useful.
              </p>

              <p>
                Over the years, I’ve worked on production software, side
                projects, SaaS ideas, and technical experiments. Some are built
                for clients, some are built for businesses, and some are simply
                me following curiosity far enough to make something real.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                Core technologies
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {technologyGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
                      {group.title}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="group relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[30px] bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/20" />
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <img
                  className="h-[360px] w-full rounded-[24px] object-cover grayscale transition duration-300 group-hover:grayscale-0 sm:h-[420px]"
                  src={ProfilePic}
                  alt={`${name} profile`}
                />
              </div>
            </div>

            <div className="mt-6 w-full max-w-sm rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
                Currently building
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                SaaS products, MVPs, and backend systems with product intent.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                I’ve been spending a lot of time working on personal software
                products, experimenting with backend architecture, refining user
                experiences, and pushing ideas from concept to execution
                quickly.
              </p>

              <a
                href="https://github.com/kevinHernandez05"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
              >
                Explore my work
                <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function calculatingYears(firstLaboralYear) {
  return new Date().getFullYear() - firstLaboralYear;
}
