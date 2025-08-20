export const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  export const staggerChildren = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
  };
  
  export const pageTransition = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } }
  };