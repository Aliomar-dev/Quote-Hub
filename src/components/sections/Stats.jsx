import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, DollarSign, Sparkles } from 'lucide-react';
import Section from '../Section';
import { STATS } from '../../constants/company';

const icons = {
  0: TrendingUp,
  1: Users,
  2: Target,
  3: DollarSign,
};

const Stats = () => {
  return (
    <Section className="py-20 relative overflow-hidden">
      {/* Luxurious White & Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 -z-10"></div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Floating Sparkles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 text-white/20"
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-10 left-20 text-white/20"
      >
        <Sparkles size={48} />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
        {STATS.map((stat, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-900/30 border-2 border-white/50 hover:border-white hover:shadow-blue-900/50 transition-all duration-500 overflow-hidden">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-center space-y-4 md:space-y-5 relative z-10">
                  {/* Icon Container */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15 + 0.2,
                        type: "spring",
                        bounce: 0.6
                      }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center border-2 border-blue-300 shadow-xl shadow-blue-500/40 group-hover:shadow-2xl group-hover:shadow-blue-500/60 transition-all duration-500"
                    >
                      <Icon size={32} className="text-white md:w-9 md:h-9" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Stat Value */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15 + 0.3 
                    }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>

                  {/* Stat Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15 + 0.4 
                    }}
                    className="text-blue-700 font-semibold text-sm md:text-base uppercase tracking-wide"
                  >
                    {stat.label}
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 rounded-2xl md:rounded-3xl"></div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15 + 0.5 
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Optional Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16 relative z-10"
      >
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <Sparkles size={20} className="text-white" />
          <p className="text-white font-bold text-base md:text-lg uppercase tracking-wider">
            Numbers That Speak for Themselves
          </p>
          <Sparkles size={20} className="text-white" />
        </div>
      </motion.div>
    </Section>
  );
};

export default Stats;