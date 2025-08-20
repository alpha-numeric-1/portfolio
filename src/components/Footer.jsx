import { store } from '../data/PortfolioStore';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 text-sm text-zinc-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {store.site.name}. All rights reserved.</p>
        <div className="flex gap-4">
          {store.site.socials.map((s) => (
            <a key={s.name} className="hover:text-neonCyan" href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}