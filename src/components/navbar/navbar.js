import "./style.css";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function Navbar({ name }) {
  const pillClass =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md";

  const iconPillClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md";

  const ctaClass =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-indigo-200 bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-md";

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex min-w-0 items-center gap-3 transition-all duration-200"
        >
          <div className="relative shrink-0">
            <img
              className="h-10 w-10 rounded-full border border-black/10 object-cover shadow-sm"
              src="./kevin.png"
              alt="Kevs icon"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">
              {name}
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Software Engineer · Builder
            </p>
          </div>
        </a>

        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            className={iconPillClass}
            href="https://www.linkedin.com/in/kevinhernandez05/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn className="h-[18px] w-[18px]" />
          </a>

          <a
            className={iconPillClass}
            href="https://github.com/kevinHernandez05"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="h-[18px] w-[18px]" />
          </a>

          <a
            className={pillClass}
            href="https://blog.kevinhernandez.work/"
            target="_blank"
            rel="noreferrer"
            aria-label="Blog"
            title="Blog"
          >
            <HiOutlineDocumentText className="h-[18px] w-[18px]" />
            <span className="hidden sm:inline">Blog</span>
          </a>

          <a
            className={ctaClass}
            href="resume.pdf"
            download="Kevin Hernandez - Curriculum Vitae.pdf"
            aria-label="Download CV"
            title="Download CV"
          >
            <FaDownload className="h-[14px] w-[14px]" />
            <span>CV</span>
          </a>
        </nav>
      </div>
    </header>
  );
}