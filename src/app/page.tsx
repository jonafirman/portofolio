import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { about, projects, site, skills } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-24">
          <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">{site.name}</h1>
          <p className="mb-6 text-2xl text-muted sm:text-3xl">{site.tagline}</p>
          <p className="mb-10 max-w-xl text-muted">{site.description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              GitHub
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-8 sm:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.group}>
                <h3 className="mb-3 font-semibold">{skill.group}</h3>
                <ul className="space-y-2 text-muted">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-6 max-w-xl text-lg text-muted">
            Open to collaboration, freelance work and early feedback on my SaaS. The fastest way to
            reach me is on GitHub.
          </p>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium text-accent hover:underline"
          >
            github.com/jonafirman →
          </a>
        </Section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © 2026 {site.name}. Built with Next.js and deployed on Vercel.
      </footer>
    </>
  );
}
