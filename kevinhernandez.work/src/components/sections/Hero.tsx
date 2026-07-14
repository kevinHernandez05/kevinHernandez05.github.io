import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex h-[calc(100svh-73px)] min-h-[620px] items-center overflow-hidden bg-[#fafaf7] px-6 py-8 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-14">
        <div className="max-w-3xl">
          <p className="text-lg font-light leading-tight tracking-[-0.03em] text-neutral-700 sm:text-xl lg:text-2xl">
            Hey there 👋,
            <br />
            I&apos;m Kevin.
          </p>

          <h1 className="mt-10 max-w-3xl text-[3.75rem] font-light leading-[0.98] tracking-[-0.075em] text-neutral-950 sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
            I build software,
            <br />
            SaaS products
            <br />
            and{" "}
            <span className="bg-[#ecff00] px-2 font-normal">
              developer
            </span>
            <br />
            <span className="bg-[#ecff00] px-2 font-normal">
              tools.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 lg:text-lg">
            Full Stack Software Engineer creating clean, useful digital systems
            with thoughtful UX and reliable backend foundations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black"
            >
              View my work <span className="ml-2">↗</span>
            </a>

            <a
              href="/Kevin-Hernandez-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-950"
            >
              Download CV <span className="ml-2">↓</span>
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

function ProfileCard() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[360px] xl:max-w-[390px]">
      <div className="absolute -left-6 top-20 z-10 h-4 w-4 bg-[#ecff00]" />

      <div className="absolute -right-8 top-28 h-24 w-24 rounded-full border border-neutral-300" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#e9f8d8] shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
        <div className="h-32 bg-[#b5ee9d]" />

        <div className="-mt-24 flex justify-center">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-[5px] border-neutral-950 bg-white sm:h-48 sm:w-48">
            <Image
              src="/images/kevin-portrait.png"
              alt="Kevin Hernandez portrait"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="px-6 pb-7 pt-5 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            Kevin Hernandez
          </h2>

          <p className="mt-2 text-sm text-neutral-600">
            Software Engineer · Product Builder
          </p>

          <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4 text-left shadow-sm backdrop-blur">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
              Currently building
            </p>

            <p className="mt-2 text-sm font-medium leading-6 text-neutral-950">
              SaaS products, dev tools, and useful digital systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}