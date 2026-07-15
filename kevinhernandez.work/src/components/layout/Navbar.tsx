"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";

const navItems = [
  {
    label: "Home",
    href: "#home",
    active: true,
  },
  {
    label: "Work",
    href: "#work",
    active: false,
  },
  {
    label: "Experience",
    href: "#experience",
    active: false,
  },
  {
    label: "Blog",
    href: "https://blog.kevinhernandez.work",
    active: false,
    external: true,
  },
  {
    label: "Contact",
    href: "#contact",
    active: false,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fafaf7]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-black/10 bg-white shadow-sm transition group-hover:-translate-y-0.5">
            <Image
              src="/kevin.png"
              alt="Kevin Hernandez logo"
              fill
              priority
              className="object-cover"
            />
          </div>

          <span className="text-sm font-semibold tracking-tight text-neutral-950">
            Kevin Hernandez
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={getNavItemClass(item.active)}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={getNavItemClass(item.active)}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-950 shadow-sm transition hover:border-neutral-950 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <TbX className="h-5 w-5" /> : <TbMenu2 className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-black/5 bg-[#fafaf7]/95 px-5 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className={getMobileNavItemClass(item.active)}
                >
                  {item.label}
                  <span className="text-neutral-400">↗</span>
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={getMobileNavItemClass(item.active)}
                >
                  {item.label}
                  <span className="text-neutral-400">→</span>
                </a>
              )
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function getNavItemClass(active: boolean) {
  return [
    "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-medium transition duration-200",
    active
      ? "border-neutral-950 bg-neutral-950 text-white shadow-sm"
      : "border-black/10 bg-white/60 text-neutral-600 hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-white hover:text-neutral-950",
  ].join(" ");
}

function getMobileNavItemClass(active: boolean) {
  return [
    "flex h-12 items-center justify-between rounded-2xl border px-4 text-sm font-semibold transition",
    active
      ? "border-neutral-950 bg-neutral-950 text-white shadow-sm"
      : "border-black/10 bg-white text-neutral-700 hover:border-neutral-950 hover:text-neutral-950",
  ].join(" ");
}