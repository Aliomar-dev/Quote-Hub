import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../Section';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-400/10 to-blue-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      {/* Floating Stars */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 text-blue-400 opacity-20"
      >
        <Star size={32} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-20 text-blue-500 opacity-20"
      >
        <Star size={40} fill="currentColor" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-[2rem] p-12 md:p-20 text-center space-y-10 shadow-2xl shadow-blue-500/30 overflow-hidden"
      >
        {/* Decorative Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Ready to Scale Your
            <br />
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Join <span className="font-bold text-white">500+ companies</span> already growing with QuoteHub. Start receiving qualified leads within <span className="font-bold text-white">48 hours</span>.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 justify-center relative z-10"
        >
          <button
            onClick={() => navigate('/contact')}
            className="px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/50 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 group flex items-center justify-center gap-3"
          >
            Get Started Now
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* <button
            onClick={() => {
              const element = document.getElementById('services');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-xl border-2 border-white/40 hover:bg-white/20 hover:border-white/60 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-lg"
          >
            Learn More
          </button> */}
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-10"
        >
          <p className="text-white/80 text-base md:text-lg font-medium">
            No long-term contracts • Cancel anytime • First consultation is absolutely free
          </p>
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full mx-auto relative z-10"
        ></motion.div>
      </motion.div>

      {/* Trust Indicators Below */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10"
      >
        {[
          { number: '500+', label: 'Active Clients' },
          { number: '48hrs', label: 'First Lead Delivery' },
          { number: '99%', label: 'Satisfaction Rate' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            className="text-center space-y-2 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200 shadow-lg"
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div> */}
    </Section>
  );
};

export default CTA;