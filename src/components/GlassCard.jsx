import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        bg-white/5 backdrop-blur-md border border-white/10
        rounded-2xl p-8 shadow-xl
        hover:shadow-2xl hover:border-white/20
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
