import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import Superate from "./images/superate.png";
import confidential from "./images/confidential.svg";
import ED2 from "./images/ED2.jpg";

const experiences = [
  {
    company: "Confidential Client",
    role: "Full Stack Developer",
    type: "Remote",
    period: "Jul 2023 — Present",
    location: "San José, Costa Rica",
    image: confidential,
    highlights: [
      "Built and maintained production web applications using .NET APIs and modern frontend technologies.",
      "Improved responsiveness and data-access patterns through Redis-based caching.",
      "Implemented real-time communication features using SignalR.",
      "Developed dynamic UI flows with Vue.js for internal and client-facing experiences.",
      "Designed backend solutions around SQL databases and RabbitMQ-supported service communication.",
    ],
  },
  {
    company: "Programa Supérate · Presidencia de la República Dominicana",
    role: "Senior Developer",
    type: "On-site",
    period: "Nov 2021 — Jun 2023",
    location: "Santo Domingo, Dominican Republic",
    image: Superate,
    highlights: [
      "Built and improved internal applications using ASP.NET MVC, .NET Core, React, Angular, and jQuery.",
      "Designed APIs around REST principles and applied patterns such as Repository, Unit of Work, MVC, and MVVM.",
      "Worked extensively with SQL Server, stored procedures, views, and reporting-heavy queries.",
      "Configured Azure DevOps Server pipelines to support CI/CD across development and production environments.",
      "Integrated tools such as Entity Framework, Hangfire, ELMAH, AutoMapper, and NHibernate into day-to-day development workflows.",
    ],
  },
  {
    company: "Programa Supérate · Presidencia de la República Dominicana",
    role: "Junior Developer",
    type: "On-site",
    period: "Jul 2019 — Nov 2021",
    location: "Santo Domingo, Dominican Republic",
    image: Superate,
    highlights: [
      "Developed web applications using ASP.NET MVC5, .NET Core, jQuery, and Angular.",
      "Built new modules and features for internal tools using Razor Pages and ASP.NET MVC.",
      "Worked with SQL Server for stored procedures, joins, data extraction, and application support.",
      "Analyzed and improved existing applications based on operational and user needs.",
      "Strengthened my foundations in backend development, enterprise tooling, and software delivery workflows.",
    ],
  },
  {
    company: "ED2 Partners & Brothers",
    role: "Ionic Developer",
    type: "On-site",
    period: "Oct 2017 — Nov 2018",
    location: "Santo Domingo, Dominican Republic",
    image: ED2,
    highlights: [
      "Developed the Workbefy mobile application using Ionic, Angular, and PHP.",
      "Worked on backend integrations designed around REST principles.",
      "Used MySQL as the relational database layer for the application.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
            02. EXPERIENCE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            A timeline of where I’ve worked and how my engineering journey has
            evolved.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            From mobile apps and internal enterprise platforms to full stack
            systems and backend-heavy architecture, each role helped shape how I
            approach software, scalability, and product execution.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-3 top-0 h-full w-px bg-white/10 sm:left-4" />

          <div className="space-y-10">
            {experiences.map((job, index) => (
              <div
                key={`${job.company}-${job.role}-${index}`}
                className="relative pl-10 sm:pl-12"
              >
                <div className="absolute left-0 top-3">
                  <span className="block h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)] sm:h-8 sm:w-8" />
                </div>

                <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07] sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-sm">
                        <img
                          src={job.image}
                          alt={`${job.company} logo`}
                          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-300">
                          {job.period}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                          {job.role}
                        </h3>

                        <p className="mt-1 text-base text-slate-300">
                          {job.company}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            {job.type}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {job.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                        <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}