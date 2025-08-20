import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';
import { store } from '../data/PortfolioStore';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(store.site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if Clipboard API is unavailable
      window.prompt('Copy this email address:', store.site.email);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = `Portfolio contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${store.site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="space-y-8">
      <motion.div variants={fadeInUp} initial="hidden" animate="show">
        <h1 className="font-anime text-4xl neon-text">Contact</h1>
        <p className="mt-3 text-zinc-300">
          Feel free to reach out for collaboration, freelancing, job offer, or just to say hi!
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p className="text-zinc-300 mt-2">
            Email: <span className="text-neonCyan">{store.site.email}</span>
          </p>
          <button
            onClick={copyEmail}
            className="mt-3 px-3 py-2 rounded-md border border-white/10 hover:border-neonCyan/40 hover:text-neonCyan transition"
          >
            {copied ? 'Copied ✓' : 'Copy email'}
          </button>

          <div className="mt-6">
            <h3 className="font-semibold">Socials</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {store.site.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md border border-white/10 hover:border-sakura hover:text-sakura transition text-sm"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-5 space-y-4">
          <h2 className="text-xl font-semibold">Send a message</h2>
          <div>
            <label className="text-sm text-zinc-400">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-md bg-ink border border-white/10 px-3 py-2 outline-none focus:border-neonCyan/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-zinc-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-md bg-ink border border-white/10 px-3 py-2 outline-none focus:border-neonCyan/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-zinc-400">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="mt-1 w-full rounded-md bg-ink border border-white/10 px-3 py-2 outline-none focus:border-neonCyan/40"
              placeholder="How can I help?"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-neonCyan/20 text-neonCyan border border-neonCyan/30 hover:bg-neonCyan/30"
          >
            Send via email
          </button>
          <p className="text-xs text-zinc-500">
            Tip: Hook this form to Formspree, Resend, or your API later for direct submissions.
          </p>
        </form>
      </motion.div>
    </section>
  );
}