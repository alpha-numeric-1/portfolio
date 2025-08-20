import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { fadeInUp } from '../lib/motion';
import { store } from '../data/PortfolioStore';

export default function Home() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <AnimatedText lines={[store.site.role, store.site.tagline]} />
          <motion.p variants={fadeInUp} initial="hidden" animate="show" className="mt-4 text-zinc-300">
            Based in {store.site.location}. I specialize in ML systems and crafting smooth, animated UIs.
          </motion.p>
          <div className="mt-6 flex gap-3">
            <a href="/experience" className="px-4 py-2 rounded-md bg-neonCyan/20 text-neonCyan border border-neonCyan/30 hover:bg-neonCyan/30">
              View Work
            </a>
            <a href="/contact" className="px-4 py-2 rounded-md border border-white/10 hover:border-sakura hover:text-sakura">
              Contact
            </a>
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="card p-6 text-center animate-floaty"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-neonViolet to-neonCyan p-1 shadow-neon">
              <div className="h-full w-full rounded-full bg-ink flex items-center justify-center">
                {/* Replace emoji with your avatar at /public/avatar.png if you have one */}
                <img
                  src="/avatar.png"
                  alt={`${store.site.name} avatar`}
                  className="h-full w-full object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-5xl select-none">🌸</span>
              </div>
            </div>

            <h2 className="mt-4 font-anime text-2xl neon-text">{store.site.name}</h2>
            <p className="font-jp text-sakura mt-1">開発者 • 機械学習</p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-md border border-white/10 px-3 py-2">
                <div className="text-xl font-semibold text-neonCyan">{store.skills.length}</div>
                <div className="text-xs text-zinc-400">Skills</div>
              </div>
              <div className="rounded-md border border-white/10 px-3 py-2">
                <div className="text-xl font-semibold text-neonCyan">{store.projects.length}</div>
                <div className="text-xs text-zinc-400">Projects</div>
              </div>
              <div className="rounded-md border border-white/10 px-3 py-2">
                <div className="text-xl font-semibold text-neonCyan">{store.experiences.length}</div>
                <div className="text-xs text-zinc-400">Experiences</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}