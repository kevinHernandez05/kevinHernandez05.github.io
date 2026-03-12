export default function Header({ name, job }) {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-cyan-400">
            HOWDY, MATE! MY NAME IS
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {name}.
          </h1>

          <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight text-slate-300 sm:text-4xl md:text-5xl">
            I build stuff for the internet.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I’m a software engineer focused on building reliable, scalable, and
            polished digital products. I also enjoy designing thoughtful user
            experiences when needed. Currently, {workingPlace(job)}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="resume.pdf"
              download="Kevin Hernandez - Curriculum Vitae.pdf"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Download CV
            </a>

            <a
              href="https://github.com/kevinHernandez05"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function workingPlace(job) {
  return !job || job.trim() === ""
    ? "I’m building personal projects."
    : `I’m working at ${job}.`;
}
