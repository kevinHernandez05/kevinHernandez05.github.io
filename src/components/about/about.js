import "./style.css";
import ProfilePic from "./images/profile.jpeg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function About({ name }) {
  const technologies = [
    ".NET / C#",
    "Go",
    "React",
    "TypeScript",
    "Ionic",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "Docker",
    "REST APIs",
    "Microservices",
    "RabbitMQ",
    "SQL Server",
    "Redis",
    "Kubernetes",
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
              turning ideas into things people can use.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-400 sm:text-lg">
              <p>
                Hey, I’m {name}. I’m a software engineer with{" "}
                <span className="font-semibold text-slate-200">
                  {calculatingYears(2018)}+ years of experience
                </span>{" "}
                building web apps, APIs, internal tools, and digital products
                that solve real operational and business problems.
              </p>

              <p>
                My background started strongly in the
                <span className="text-slate-200"> Microsoft </span>
                and
                <span className="text-slate-200"> JavaScript </span>
                and over time I’ve expanded deeper into{" "}
                <span className="text-slate-200">
                  Go, backend architecture, distributed systems, APIs, and
                  scalable product development
                </span>
                . I care about maintainability, clarity, performance, and
                shipping software that actually makes life easier for users.
              </p>

              <p>
                Lately, I’ve been especially focused on building SaaS products,
                MVPs, and backend-heavy systems with a strong product mindset. I
                like moving fast, but I also like making sure the foundations
                are solid enough to grow.
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

            <div className="mt-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {tech}
                  </span>
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
