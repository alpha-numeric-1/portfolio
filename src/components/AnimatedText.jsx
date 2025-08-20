import { motion } from 'framer-motion';
import { staggerChildren, fadeInUp } from '../lib/motion';

export default function AnimatedText({ lines = [] }) {
  return (
    <motion.div variants={staggerChildren} initial="hidden" animate="show" className="space-y-2">
      {lines.map((line, i) => (
        <motion.h1
          key={i}
          variants={fadeInUp}
          className="text-3xl sm:text-5xl font-anime neon-text leading-tight"
        >
          {line}
        </motion.h1>
      ))}
    </motion.div>
  );
}