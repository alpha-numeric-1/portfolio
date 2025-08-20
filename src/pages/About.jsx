import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../lib/motion';
import SkillBadge from '../components/SkillBadge';
import { store } from '../data/PortfolioStore';

export default function About() {
  const categories = useMemo(() => {
    const set = new Set(store.skills.map((s) => s.category));
    return ['All', ...Array.from(set)];
  }, []);

  const [selected, setSelected] = useState('All');
  const [query, setQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return store.skills.filter((s) => {
      const inCategory = selected === 'All' || s.category === selected;
      const inQuery = s.name.toLowerCase().includes(query.toLowerCase());
      return inCategory && inQuery;
    });
  }, [selected, query]);

  return (
    <section>
      <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mb-8">
        <h1 className="font-anime text-4xl neon-text">About</h1>
        <p className="mt-3 text-zinc-300">
          I’m {store.site.name}, a {store.site.role}. I enjoy building ML-powered features and
          smooth, anime-inspired web apps. I value clean architecture, performance, and great UX.
        </p>
      </motion.div>

      <motion.div variants={staggerChildren} initial="hidden" animate="show" className="space-y-6">
        <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">Skills</motion.h2>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className={`px-3 py-1.5 rounded-md border text-sm transition ${
                selected === c
                  ? 'bg-neonCyan/20 text-neonCyan border-neonCyan/30'
                  : 'border-white/10 hover:border-sakura hover:text-sakura'
              }`}
            >
              {c}
            </button>
          ))}

          <div className="relative ml-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-56 rounded-md bg-ink border border-white/10 px-3 py-2 text-sm outline-none focus:border-neonCyan/40"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500">⌕</span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
          {filteredSkills.length === 0 && (
            <div className="text-zinc-400">No skills match your filters.</div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}