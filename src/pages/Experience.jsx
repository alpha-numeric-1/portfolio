import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../lib/motion';
import { store } from '../data/PortfolioStore';
import ProjectCard from '../components/ProjectCard';

export default function Experience() {
  return (
    <section className="space-y-12">
      <div>
        <motion.h1 variants={fadeInUp} initial="hidden" animate="show" className="font-anime text-4xl neon-text">
          Experience
        </motion.h1>

        <motion.div variants={staggerChildren} initial="hidden" animate="show" className="mt-6 space-y-4">
          {store.experiences.map((exp, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-neonCyan">{exp.role}</h3>
                <div className="text-sm text-zinc-400">{exp.period}</div>
              </div>
              <div className="text-sakura font-jp">{exp.company}</div>
              <p className="mt-3 text-zinc-300">{exp.summary}</p>

              {exp.highlights?.length ? (
                <ul className="mt-3 list-disc list-inside space-y-1 text-zinc-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}

              {exp.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-ink/80">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="show" className="text-2xl font-semibold">
          Projects
        </motion.h2>

        <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mt-6 grid sm:grid-cols-2 gap-5">
          {store.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
          {store.projects.length === 0 && (
            <div className="text-zinc-400">No projects yet—check back soon!</div>
          )}
        </motion.div>
      </div>
    </section>
  );
}