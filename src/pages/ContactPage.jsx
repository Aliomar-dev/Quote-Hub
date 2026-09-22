import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/sections/ContactForm';
import { COMPANY_INFO } from '../constants/company';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: COMPANY_INFO.phone,
      href: `tel:${COMPANY_INFO.phone}`,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
      href: null,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'United States',
      href: null,
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden px-4 lg:px-16">
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
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-32 text-blue-400 opacity-20"
        >
          <Sparkles size={56} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-32 left-32 text-blue-500 opacity-20"
        >
          <Sparkles size={64} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-900 leading-tight">
            Let's{' '}
            <span className="text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-700/80 leading-relaxed font-light max-w-3xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss how we can help you achieve your goals
          </p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-8 flex-wrap text-blue-700/60 text-sm font-medium pt-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>No Obligations</span>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Contact Info Cards Section */}
      <Section className="relative overflow-hidden px-4 lg:px-16">
        {/* Luxurious White & Blue Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white -z-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 relative z-10">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative min-h-[260px] flex flex-col justify-between bg-white backdrop-blur-xl rounded-2xl p-8 shadow-xl shadow-blue-200/50 border-2 border-blue-200 hover:shadow-2xl hover:shadow-blue-300/60 hover:border-blue-400 transition-all duration-500 overflow-hidden">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="text-center space-y-5 relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.2,
                        type: 'spring',
                        bounce: 0.6,
                      }}
                      className="inline-flex"
                    >
                      <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <Icon size={30} className="text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                      <div className="text-xs text-blue-600 uppercase tracking-wider mb-3 font-bold">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-blue-800 text-base md:text-lg font-semibold hover:text-blue-600 transition-colors duration-300 block break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-blue-800 text-base md:text-lg font-semibold break-words">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1 + 0.4,
                    }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
};

export default ContactPage;
