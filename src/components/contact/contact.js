export default function Contact() {
  return (
    <section className="px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
            04. CONTACT
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              Let’s build something great
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Got something interesting in mind?
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              Whether it’s a product idea, a collaboration, a freelance
              opportunity, or just a good tech conversation, feel free to reach
              out. I’m always open to talking about software, systems, and cool
              things on the internet.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:kev.hdez05@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Say hi
              </a>

              <a
                href="https://www.linkedin.com/in/kevinhernandez05/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/5"
              >
                Connect on LinkedIn
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              kev.hdez05@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}