const recommendations = [
  {
    name: "Cristian Vargas",
    title: ".NET Developer | Senior Software Engineer | Technical Lead",
    relationship: "Cristian supervised Kevin directly",
    date: "Mar 19, 2025",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQEF4sgEFjhGMQ/profile-displayphoto-scale_100_100/B4EZ7dh1n.KIAY-/0/1781833096348?e=1785369600&v=beta&t=oQxktGwJMIFpJkn5OXtmfr_fhZed2jEhgSiLGvdZSUQ",
    quote:
      "I had the pleasure of working with Kevin for about a year and a half. I was his leader on a team, and from day one, Kevin demonstrated a great attitude towards learning. As the months went by, Kevin adapted so well to the team that he no longer needed help from anyone. He handled everything with professionalism and excellence. A great person and a great professional, it's been a pleasure working with Kevin.",
  },
  {
    name: "Fryann Martínez",
    title:
      "Software Engineer | AWS & Azure | C#, Angular, Svelte | Cloud & Serverless Enthusiast",
    relationship: "Fryann supervised Kevin directly",
    date: "Nov 27, 2021",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQEM0xb_6dR0Qg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1688141092952?e=1785369600&v=beta&t=xiAt6YJqmh7qKVg7kysFaHhqy4i3lQiDEwD-FLApAyk",
    quote:
      "Kevin is such a team player, always moving forward with the best solution and adheres to performance. I had the great opportunity to work side by side with Kevin and it was such a pleasure and learning experience. I highly recommend Kevin as a team player.",
  },
  {
    name: "Rousbel Villar",
    title:
      "Full-Stack Engineer | Angular · Flask · Golang | 5+ Years Experience",
    relationship: "Rousbel studied with Kevin",
    date: "Jul 27, 2021",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQFQ8OeneWhVsw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715486047332?e=1785369600&v=beta&t=QisAZl-S4jk-Dv3czYhpDDZB7FaVzAb25eTcvSTw-n0",
    quote:
      "Reliable and consistent, always tries to find a creative answer to problems.",
  },
  {
    name: "Isaac Mencia",
    title: "Software Quality Assurance Analyst",
    relationship: "Isaac worked with Kevin on the same team",
    date: "Jul 20, 2021",
    avatarUrl: "",
    quote:
      "Kevin es una persona proactiva, orientada a soluciones y con una capacidad de adaptación increíble. Es una persona efectiva, amena, que produce código basado en lineamientos de calidad de manera oportuna, siendo capaz de adaptarse a diversos equipos de trabajo o trabajar independientemente.",
  },
];

export default function Recommendations() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-black/10 pt-16">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
              Recommendations
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              People I’ve worked with.
            </h2>
            <div className="mt-5 h-1 w-14 bg-[#38bdf8]" />{" "}
          </div>

          <p className="max-w-2xl text-base leading-8 text-neutral-600">
            A few recommendations from people who have worked with me directly
            across engineering teams, product work, and collaborative software
            delivery.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {recommendations.map((item) => (
            <article
              key={item.name}
              className="group rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              <div className="flex items-start gap-4">
                <RecommendationAvatar
                  name={item.name}
                  avatarUrl={item.avatarUrl}
                />

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
                      {item.name}
                    </h3>

                    <span className="rounded-full border border-black/10 bg-[#f7f7f4] px-2.5 py-1 text-[11px] font-medium text-neutral-500">
                      LinkedIn
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-neutral-500">
                    {item.title}
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                    {item.relationship} · {item.date}
                  </p>
                </div>
              </div>

              <blockquote className="mt-6 text-[15px] leading-8 text-neutral-700">
                “{item.quote}”
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecommendationAvatar({
  name,
  avatarUrl,
}: {
  name: string;
  avatarUrl?: string;
}) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={`${name} profile photo`}
        referrerPolicy="no-referrer"
        className="h-12 w-12 shrink-0 rounded-full border border-black/10 bg-neutral-100 object-cover"
      />
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
      {getInitials(name)}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
