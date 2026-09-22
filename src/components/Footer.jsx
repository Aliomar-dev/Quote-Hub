import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Facebook, Sparkles, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants/company';
import Logo from '../assets/logo.jpeg'

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30"
              >
                <img src={Logo} alt="Logo" className="w-12 h-12" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">{COMPANY_INFO.name}</h3>
                <p className="text-sm text-blue-300 font-medium">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed text-base">
              Transforming businesses through intelligent lead generation and connection services.
            </p>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <Sparkles size={16} className="text-blue-300" />
              <span className="text-blue-200 font-semibold text-xs uppercase tracking-wider">
                Trusted by 500+ Businesses
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-base"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-6 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <Mail size={20} className="group-hover:text-white" />
                  </div>
                  <span className="text-base">{COMPANY_INFO.email}</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <Phone size={20} className="group-hover:text-white" />
                  </div>
                  <span className="text-base">{COMPANY_INFO.phone}</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-blue-200 text-sm md:text-base order-2 md:order-1">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rehan-shahzad-6540a8335/' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: "spring", bounce: 0.5 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 border border-white/20 hover:border-blue-400 transition-all duration-300 group shadow-lg"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="text-blue-200 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowUp size={20} />
              Back to Top
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;