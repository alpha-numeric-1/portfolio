import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';
import { store } from '../data/PortfolioStore';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-ink/60 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-anime text-xl neon-text"> {store.site.name} </Link>
        <button className="sm:hidden p-2 rounded-md border border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
        <nav className="hidden sm:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx('relative font-sans text-sm tracking-wide hover:text-sakura transition', isActive && 'text-neonCyan')
              }
            >
              {({ isActive }) => (
                <span className="inline-flex items-center">
                  {item.label}
                  {isActive && (
                    <motion.span layoutId="active-underline" className="absolute -bottom-1 left-0 h-0.5 w-full bg-neonCyan" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <div className="sm:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-2 border-b border-white/10">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}