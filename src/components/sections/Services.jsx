import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, ArrowDown } from 'lucide-react';
import Section from '../Section';
import { PROCESS_STEPS } from '../../constants/company';

const Process = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Luxurious White & Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      {/* Floating Sparkles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 text-blue-400 opacity-15"
      >
        <Sparkles size={56} />
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 space-y-6 relative z-10"
      >
        {/* Decorative Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full mx-auto mb-6"
        ></motion.div>

        <h2 className="text-5xl md:text-7xl font-bold text-blue-900 leading-tight">
          Our{' '}
          <span className="text-6xl md:text-8xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-blue-700/80 max-w-3xl mx-auto font-light leading-relaxed">
          A simple, proven process to get you qualified leads fast
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 hidden md:block transform -translate-x-1/2"></div>
        
        {/* Mobile Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 md:hidden"></div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:flex-row`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white backdrop-blur-xl border-2 border-blue-200 rounded-2xl p-8 shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/60 hover:border-blue-400 transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Step Number and Title */}
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start relative z-10`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                        0{step.id}
                      </div>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-blue-700/80 leading-relaxed text-base md:text-lg relative z-10">
                    {step.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 rounded-2xl"></div>
                  </div>
                </motion.div>
              </div>

              {/* Center Icon */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring", bounce: 0.5 }}
                  className="relative"
                >
                  {/* Outer Glow Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 w-20 h-20 bg-blue-500/30 rounded-full blur-lg -translate-x-2 -translate-y-2"
                  ></motion.div>

                  {/* Main Circle */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 border-4 border-white">
                    <CheckCircle size={36} className="text-white" strokeWidth={3} />
                  </div>
                </motion.div>

                {/* Connecting Arrow (for mobile) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-12"
                  >
                    <ArrowDown size={24} className="text-blue-500 animate-bounce" />
                  </motion.div>
                )}
              </div>

              {/* Empty Space for Layout (Desktop) */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-24 text-center relative z-10"
      >
        {/* <div className="inline-flex flex-col items-center gap-4 p-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl shadow-blue-500/40 border border-blue-400">
          <Sparkles size={32} className="text-white" />
          <p className="text-white text-xl md:text-2xl font-semibold max-w-xl">
            Ready to experience our proven process?
          </p>
          <p className="text-white/80 text-base">
            Let's get started on your growth journey today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Free Consultation
          </motion.button>
        </div> */}
      </motion.div>
    </Section>
  );
};

export default Process;