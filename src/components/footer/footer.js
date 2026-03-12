import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="flex items-center gap-2 text-sm text-slate-400">
            Made with <FaHeart className="h-4 w-4 text-cyan-300" /> by Kevin
            Hernandez
          </p>

          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            {new Date().getFullYear()} · Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}