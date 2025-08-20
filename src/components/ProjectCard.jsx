export default function ProjectCard({ project }) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="group card overflow-hidden">
        <div className="relative h-40 bg-zinc-900">
          {project.image ? (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-sakura transition">{project.title}</h3>
          <p className="text-sm text-zinc-400 mt-1">{project.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags?.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-ink/80">{t}</span>
            ))}
          </div>
        </div>
      </a>
    );
  }