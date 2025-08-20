import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import { pageTransition } from './lib/motion';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-midnight bg-grid-neon bg-grid-16">
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-neonViolet/10 via-transparent to-neonCyan/10"></div>
      </div>

      <Navbar />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 pb-16" style={{ paddingTop: '4rem' }}>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}