import { motion } from 'framer-motion';
import { Sparkles, Award, Shield, Zap, TrendingUp } from 'lucide-react';
import Section from '../Section';
import { WHY_CHOOSE } from '../../constants/company';

const WhyChoose = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Luxurious White & Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-100 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Sparkles */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-32 text-blue-400 opacity-20"
      >
        <Sparkles size={48} />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-32 text-blue-500 opacity-20"
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
          Why Choose{' '}
          <span className="text-6xl md:text-8xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            QuoteHub
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-blue-700/80 max-w-3xl mx-auto font-light leading-relaxed">
          Join hundreds of businesses that trust us to drive their growth
        </p>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/30 mt-4"
        >
          <Award size={20} className="text-white" />
          <span className="text-white font-bold text-sm uppercase tracking-wider">Industry Leading</span>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 relative z-10">
        {WHY_CHOOSE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group"
          >
            <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-200/50 border-2 border-blue-200 hover:shadow-2xl hover:shadow-blue-300/60 hover:border-blue-400 transition-all duration-500 overflow-hidden">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="space-y-6 relative z-10">
                {/* Stat Badge */}
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
                  className="inline-flex flex-col items-start"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      {item.stat}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <span className="text-blue-700 font-bold text-sm uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-blue-700/80 leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>
                </motion.div>

                {/* Feature Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.5,
                    type: "spring",
                    bounce: 0.5
                  }}
                  className="flex justify-end"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {index === 0 && <Shield size={32} className="text-white" strokeWidth={2.5} />}
                    {index === 1 && <Zap size={32} className="text-white" strokeWidth={2.5} />}
                    {index === 2 && <TrendingUp size={32} className="text-white" strokeWidth={2.5} />}
                    {index === 3 && <Award size={32} className="text-white" strokeWidth={2.5} />}
                  </div>
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
                  delay: index * 0.15 + 0.6 
                }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-20 text-center relative z-10"
      >
        {/* <div className="inline-flex flex-col items-center gap-6 p-10 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl shadow-blue-500/40 border border-blue-400 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Sparkles size={32} className="text-white" />
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              Ready to Experience the Difference?
            </h3>
            <Sparkles size={32} className="text-white" />
          </div>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Join the hundreds of businesses that have already transformed their growth with QuoteHub
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

export default WhyChoose;