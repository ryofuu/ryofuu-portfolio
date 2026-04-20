import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <span className="font-mono text-sm tracking-tight text-[var(--color-muted)]">
          ryofuu<span className="text-[var(--color-accent)]">.</span>dev
        </span>
        <nav className="flex gap-6 text-sm text-[var(--color-muted)]">
          <a className="transition hover:text-[var(--color-fg)]" href="#work">
            Work
          </a>
          <a
            className="transition hover:text-[var(--color-fg)]"
            href="https://github.com/ryofuu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="pt-20 pb-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Portfolio / 2026
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            ryofuu
          </h1>
        </section>

        <section id="work" className="pb-28">
          <div className="mb-10 flex items-end justify-between border-b border-[var(--color-border)] pb-4">
            <h2 className="text-sm font-medium tracking-wide text-[var(--color-muted)]">
              SELECTED WORK
            </h2>
            <span className="font-mono text-xs text-[var(--color-muted)]">
              {String(projects.length).padStart(2, "0")} / projects
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <li
                key={p.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--color-muted)]">
                      {p.year}
                    </span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} を開く`}
                      className="font-mono text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
                    >
                      ↗
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {p.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-fg)]/80">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 flex items-end justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
                    >
                      &lt;/&gt; Code
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-xs text-[var(--color-muted)]">
          <span className="font-mono">© {new Date().getFullYear()} ryofuu</span>
          <span className="font-mono">built with Next.js × Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
