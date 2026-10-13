import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-foreground/30">
      <div className="mb-2 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {project.status && (
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {project.status}
          </span>
        )}
      </div>
      <p className="mb-4 text-muted">{project.description}</p>
      <ul className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-xs">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-4 text-sm font-medium">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="hover:text-accent">
            Code →
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-accent">
            Live →
          </a>
        )}
      </div>
    </article>
  );
}
