import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import Process from '../components/sections/Services';


const ServicesPage = () => {
  const navigate = useNavigate();

  const benefits = [
  'Direct access to decision-makers through human-led outreach',
  'High-intent, sales-ready leads tailored to your ideal customer profile',
  'Instant live transfers with pre-qualified prospects',
  'Inbound and outbound call handling with precision and care',
  'Real-time engagement via 24/7 chat support',
  'Improved conversion rates through strategic lead qualification',
  'Scalable solutions aligned with your sales goals',
  'Transparent pricing with measurable ROI',
];


  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        {/* Luxurious White & Blue Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Sparkles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-32 text-blue-400 opacity-20"
        >
          <Sparkles size={56} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-32 left-32 text-blue-500 opacity-20"
        >
          <Sparkles size={64} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8 max-w-5xl px-4"
        >

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-900 leading-tight">
            Premium Lead Generation{' '}
            <span className="block mt-2 text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-700/80 leading-relaxed max-w-3xl mx-auto font-light">
            Comprehensive solutions designed to connect you with high-quality prospects
            who are ready to become your next customers
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 group flex items-center justify-center gap-3"
            >
              Get Started Today
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-8 flex-wrap text-blue-700/60 text-sm font-medium pt-4"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-500" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-500" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-500" />
              <span>Money-Back Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </Section>


      {/* Process Section */}
      <Process />

      {/* What's Included Section */}
      <Section className="relative overflow-hidden">
        {/* Luxurious White & Blue Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-100 -z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        {/* Header */}
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
            What's{' '}
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Included
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-700/80 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to grow your business with qualified leads
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto relative z-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="flex items-center gap-4 bg-white backdrop-blur-xl border-2 border-blue-200 rounded-2xl p-6 md:p-7 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 relative overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Check Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08 + 0.2,
                      type: "spring",
                      bounce: 0.6
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300"
                  >
                    <CheckCircle size={24} className="text-white" strokeWidth={2.5} />
                  </motion.div>
                </div>

                {/* Benefit Text */}
                <span className="text-blue-800 text-base md:text-lg font-semibold relative z-10">
                  {benefit}
                </span>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center relative z-10"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl shadow-blue-500/40 border border-blue-400">
            <Sparkles size={32} className="text-white" />
            <p className="text-white text-xl md:text-2xl font-semibold max-w-xl">
              Ready to start generating quality leads?
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              Get Your Free Consultation
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div> */}
      </Section>

      {/* Why Choose Section */}
      {/* <WhyChoose /> */}
      
      {/* Final CTA Section */}
      {/* <CTA /> */}
    </main>
  );
};

export default ServicesPage;