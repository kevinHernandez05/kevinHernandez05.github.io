import ProfileCard from "@/components/ui/ProfileCard";

export default function Hero() {
  return (
    <section className="bg-[#fafaf7] px-5 py-12 sm:px-6 md:py-16 lg:flex lg:h-[calc(100svh-73px)] lg:min-h-[620px] lg:items-center lg:overflow-hidden lg:px-16 xl:px-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-14">
        <div className="max-w-3xl">
          <p className="text-lg font-light leading-tight tracking-[-0.03em] text-neutral-700 sm:text-xl lg:text-2xl">
            Hey there 👋,
            <br />
            I&apos;m Kevin.
          </p>

          <h1 className="mt-8 max-w-3xl text-[3.25rem] font-light leading-[0.98] tracking-[-0.075em] text-neutral-950 sm:text-[4.25rem] md:text-[4.75rem] lg:mt-10 lg:text-[5rem] xl:text-[5.5rem]">
            I build software,
            <br />
            SaaS products
            <br />
            and{" "}
            <span className="bg-[#ecff00] px-2 font-normal">
              developer
            </span>
            <br />
            <span className="bg-[#ecff00] px-2 font-normal">tools.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 lg:text-lg">
            Full-Stack Software Engineer creating clean, useful digital systems
            with thoughtful UX and reliable backend foundations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black sm:px-6"
            >
              View my work <span className="ml-2">↗</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-950 sm:px-6"
            >
              Download resume <span className="ml-2">↓</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}