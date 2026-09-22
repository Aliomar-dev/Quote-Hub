import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Phone, User, Building, Sparkles } from 'lucide-react';
import Section from '../Section';
import { sendConsultationRequest } from '../../services/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const result = await sendConsultationRequest(formData);

    if (result.success) {
      setStatus({ type: 'success', message: result.message });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } else {
      setStatus({ type: 'error', message: result.message });
    }

    setIsSubmitting(false);
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Luxurious Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Sparkle Decorations */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-blue-400 opacity-20"
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-20 text-blue-500 opacity-20"
      >
        <Sparkles size={32} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-6 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full mx-auto mb-6"></div>
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 bg-clip-text text-transparent leading-tight">
          Book Your Free
          <br />
          <span className="text-6xl md:text-8xl">Consultation</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-800/70 max-w-2xl mx-auto font-light">
          Ready to elevate your business? Let's discuss how we can help you achieve excellence
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-200/50 border border-blue-100 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-tr-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-3"
                >
                  <label htmlFor="name" className="text-blue-900 font-semibold flex items-center gap-2 text-sm uppercase tracking-wide">
                    <div className="p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                      <User size={16} className="text-white" />
                    </div>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
                    placeholder="John Smith"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-3"
                >
                  <label htmlFor="email" className="text-blue-900 font-semibold flex items-center gap-2 text-sm uppercase tracking-wide">
                    <div className="p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                      <Mail size={16} className="text-white" />
                    </div>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="space-y-3"
                >
                  <label htmlFor="phone" className="text-blue-900 font-semibold flex items-center gap-2 text-sm uppercase tracking-wide">
                    <div className="p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                      <Phone size={16} className="text-white" />
                    </div>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="space-y-3"
                >
                  <label htmlFor="company" className="text-blue-900 font-semibold flex items-center gap-2 text-sm uppercase tracking-wide">
                    <div className="p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                      <Building size={16} className="text-white" />
                    </div>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
                    placeholder="Your Company"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="space-y-3"
              >
                <label htmlFor="message" className="text-blue-900 font-semibold text-sm uppercase tracking-wide">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none font-medium"
                  placeholder="Tell us about your business and what you're looking to achieve..."
                />
              </motion.div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-5 rounded-xl border-2 ${
                    status.type === 'success'
                      ? 'bg-green-50 border-green-300 text-green-700'
                      : 'bg-red-50 border-red-300 text-red-700'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={22} />
                        Send Consultation Request
                      </>
                    )}
                  </span>
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap text-blue-700/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-500" />
              <span>No Obligations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-500" />
              <span>Quick Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactForm;