import { getLatestEnglishPosts } from "@/lib/notionPosts";

export default async function Writing() {
  const posts = await getLatestEnglishPosts();

  return (
    <section className="bg-[#fafaf7] px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl border-t border-black/10 pt-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Recent writing</SectionEyebrow>

            <h2 className="mt-3 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              Thoughts on building, engineering, and product work.
            </h2>
          </div>

          <a
            href="https://blog.kevinhernandez.work"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
          >
            View all posts →
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#eaf8ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                    Blog
                  </span>
                  {post.publishedAt ? (
                    <span className="text-xs font-medium text-neutral-400">
                      {formatDate(post.publishedAt)}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-[-0.03em] text-neutral-950">
                  {post.title}
                </h3>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-neutral-600">
                  {post.summary}
                </p>

                {post.tags.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-neutral-950 transition hover:underline"
                >
                  Read article →
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-600">
              No published posts found yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
      {children}
    </p>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
