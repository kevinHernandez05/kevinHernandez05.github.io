import Image from "next/image";
import { TbMapPin, TbSparkles } from "react-icons/tb";

export default function ProfileCard() {
  return (
    <div className="relative w-full max-w-[315px] sm:max-w-[360px] xl:max-w-[390px]">
      <div className="absolute -left-4 top-16 z-10 h-3.5 w-3.5 bg-[#38bdf8] sm:-left-6 sm:top-20 sm:h-4 sm:w-4" />
      <div className="absolute -right-6 top-24 h-20 w-20 rounded-full border border-sky-200 sm:-right-8 sm:top-28 sm:h-24 sm:w-24" />

      <article className="relative overflow-hidden rounded-[1.75rem] border border-sky-200 bg-[#eaf8ff] shadow-[0_20px_60px_rgba(14,165,233,0.14)]">
        <div className="h-28 bg-[#7dd3fc] sm:h-32" />

        <div className="-mt-20 flex justify-center sm:-mt-24">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-[5px] border-neutral-950 bg-white sm:h-48 sm:w-48">
            <Image
              src="/images/kevin-portrait.png"
              alt="Kevin Hernandez portrait"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="px-5 pb-6 pt-5 text-center sm:px-6 sm:pb-7">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            Kevin Hernandez
          </h2>

          <p className="mt-2 text-sm text-neutral-600">
            Software Engineer · Product Builder
          </p>

          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-white/70 px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
              <TbMapPin className="h-3.5 w-3.5 text-sky-500" />
               <Image
                className="h-3.5 w-3.5"
                width={14}
                height={14}
                src="/flags/dominican-republic.png"
                alt="Dominican Republic flag"
              />
              Santo Domingo, DR
            </span>
          </div>

          <div className="mt-5 rounded-2xl border border-sky-100 bg-white/75 p-4 text-left shadow-sm backdrop-blur sm:mt-6">
            <div className="flex items-center gap-2">
              <TbSparkles className="h-4 w-4 text-sky-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                Currently building
              </p>
            </div>

            <p className="mt-2 text-sm font-medium leading-6 text-neutral-950">
              SaaS products, dev tools, and useful digital systems.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}