import Recommendations from "@/components/sections/Recommendations";
import Image from "next/image";

//Sections
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Experience from "@/components/sections/Experience";
import Writing from "@/components/sections/Writing";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const experiments = [
  {
    title: "NuGet Lens",
    description:
      "A desktop developer tool for visually inspecting .NET solution dependencies, package references, and NuGet version conflicts.",
    tags: [".NET", "C#", "Tauri", "React"],
  },
  {
    title: "Mekanico",
    description:
      "A SaaS concept for repair shops, focused on timelines, repair visibility, customer updates, and payment tracking.",
    tags: ["Ionic", "React", "Supabase"],
  },
  {
    title: "Elementary",
    description:
      "A CRM and operations-focused SaaS tailored for agencies, campaign history, and workflow visibility.",
    tags: ["CRM", "SaaS", "React"],
  },
];

export const revalidate = 3600;
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf7] text-neutral-950">
      <Navbar />

      <SectionAnchor id="home">
        <Hero />
      </SectionAnchor>

      <SectionAnchor id="about">
        <About />
      </SectionAnchor>

      <SectionAnchor id="work">
        <FeaturedWork />
      </SectionAnchor>

      <SectionAnchor id="more">
        <MoreThings />
      </SectionAnchor>

      <SectionAnchor id="experience">
        <Experience />
      </SectionAnchor>

      <SectionAnchor id="recommendations">
        <Recommendations />
      </SectionAnchor>

      <SectionAnchor id="writing">
        <Writing />
      </SectionAnchor>

      <SectionAnchor id="contact">
        <ContactFooter />
      </SectionAnchor>
    </main>
  );
}

function MoreThings() {
  return (
    <section id="more" className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
            <div>
              <SectionEyebrow>More things I’m building</SectionEyebrow>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                Experiments, tools, and systems in progress.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {experiments.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-black/10 bg-[#f7f7f4] p-5"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer
      id="contact"
      className="mt-16 bg-[#101010] px-6 py-12 text-white sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
            Let&apos;s Connect
            <br />
            There
          </h2>

          <a
            href="mailto:hello@kevinhernandez.work"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/10 p-1 pr-5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b1b1b] text-xl text-white transition group-hover:bg-black">
              ↗
            </span>
            Hire Me Now!
          </a>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-white">
                <Image
                  src="/kevin.png"
                  alt="Kevin Hernandez logo"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-2xl font-semibold tracking-tight">
                Kevin Hernandez
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Full Stack Software Engineer building SaaS products, developer
              tools, and digital systems with clean UX and reliable backend
              foundations.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/kevinHernandez05"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white hover:text-black"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/kevinhernandez05/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white hover:text-black"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/kevo_codes"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white hover:text-black"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Location</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Santo Domingo,
              <br />
              Dominican Republic
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Email Address</h3>
            <div className="mt-4 text-sm text-white/55">
              <a
                href="mailto:hello@kevinhernandez.work"
                className="block transition hover:text-white"
              >
                hello@kevinhernandez.work
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/55">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>
              <a href="#work" className="transition hover:text-white">
                Work
              </a>
              <a href="#experience" className="transition hover:text-white">
                CV
              </a>
              <a
                href="https://blog.kevinhernandez.work"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Blog
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-7 text-center text-sm text-white/45">
          © 2026 Kevin Hernandez. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a6b300]">
      {children}
    </p>
  );
}

function TwitterIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function SectionAnchor({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      {children}
    </div>
  );
}
