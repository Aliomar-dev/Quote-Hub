import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';
import Section from '../Section';
import { TESTIMONIALS } from '../../constants/company';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

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
          Client{' '}
          <span className="text-6xl md:text-8xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-blue-700/80 max-w-3xl mx-auto font-light leading-relaxed">
          Hear from businesses that have transformed their growth with QuoteHub
        </p>
      </motion.div>

      {/* Testimonial Carousel */}
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          >
            <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl shadow-blue-200/50 border-2 border-blue-200 overflow-hidden">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-tr-full"></div>

              {/* Large Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                className="absolute top-8 left-8"
              >
                <Quote size={64} className="text-blue-500/20" strokeWidth={3} />
              </motion.div>

              <div className="space-y-8 relative z-10">
                {/* Star Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-2 justify-center"
                >
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring", bounce: 0.5 }}
                    >
                      <Star size={28} className="fill-blue-500 text-blue-500 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed text-center italic font-light"
                >
                  "{TESTIMONIALS[currentIndex].content}"
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center pt-8 border-t-2 border-blue-200"
                >
                  <div className="font-bold text-blue-900 text-xl md:text-2xl mb-2">
                    {TESTIMONIALS[currentIndex].name}
                  </div>
                  <div className="text-blue-600 font-semibold text-lg mb-1">
                    {TESTIMONIALS[currentIndex].role}
                  </div>
                  <div className="text-blue-700/70 text-base font-medium">
                    {TESTIMONIALS[currentIndex].company}
                  </div>
                </motion.div>

                {/* Decorative Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/30">
                    <Sparkles size={18} className="text-white" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      Verified Client
                    </span>
                    <Sparkles size={18} className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 rounded-3xl pointer-events-none"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 backdrop-blur-sm border-2 border-blue-300 rounded-full flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={28} className="text-white" strokeWidth={3} />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex gap-3">
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30'
                    : 'w-3 bg-blue-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 backdrop-blur-sm border-2 border-blue-300 rounded-full flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={28} className="text-white" strokeWidth={3} />
          </motion.button>
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {currentIndex + 1} of {TESTIMONIALS.length}
          </span>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10"
      >
        {[
          { number: '500+', label: 'Satisfied Clients' },
          { number: '4.9/5', label: 'Average Rating' },
          { number: '98%', label: 'Would Recommend' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="text-center space-y-3 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-blue-200 shadow-lg shadow-blue-200/40"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Testimonials;