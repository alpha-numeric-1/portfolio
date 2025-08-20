export default function SkillBadge({ skill }) {
    return (
      <div className="card px-3 py-2 flex items-center gap-2 hover:shadow-neon transition">
        <span aria-hidden="true">{skill.icon}</span>
        <div>
          <div className="text-sm font-semibold">{skill.name}</div>
          <div className="text-xs text-zinc-400">{skill.category} • {skill.level}</div>
        </div>
      </div>
    );
  }