import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <motion.img
        src={logo}
        alt="QuoteHub Loading"
        className="mb-8"
        style={{ width: '200px' }} // 🎯 Perfect mid-size
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        draggable={false}
      />

      {/* Fixed loading bar */}
      <div className="relative w-56 h-[5px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ x: ['-65%', '65%', '-65%'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent,
                rgba(11, 57, 156, 0.5),
                rgba(25, 69, 189, 0.9),
                rgba(4, 31, 90, 0.5),
                transparent
              )
            `,
            filter: 'blur(0.6px)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
