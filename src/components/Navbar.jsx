import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';
import Logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Hook to get current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    if (path === '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const isOnContactPage = location.pathname === '/contact'; // ✅ Check if on contact page

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-blue-200 shadow-xl shadow-blue-100/50'
          : 'bg-white/80 backdrop-blur-md border-b border-blue-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300"
            >
              <img src={Logo} alt="Logo" className="w-12 h-12" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                {COMPANY_INFO.name}
              </h1>
              <p className="text-xs text-blue-600 font-medium">{COMPANY_INFO.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className="relative text-blue-700 hover:text-blue-900 transition-colors duration-300 font-semibold text-sm uppercase tracking-wide group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}

            {/* Phone Number */}
            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-all duration-300 border border-blue-200 hover:border-blue-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold text-sm">{COMPANY_INFO.phone}</span>
            </motion.a>

            {/* CTA Button */}
            <motion.button
              onClick={() => navigate('/contact')}
              className={`px-6 py-3 text-white font-bold text-sm rounded-lg shadow-lg flex items-center gap-2 uppercase tracking-wide transition-all duration-300 ${
                isOnContactPage
                  ? 'bg-blue-600/50 cursor-not-allowed shadow-blue-300/20'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95'
              }`}
              whileHover={!isOnContactPage ? { scale: 1.05 } : {}}
              whileTap={!isOnContactPage ? { scale: 0.95 } : {}}
              disabled={isOnContactPage} // ✅ Disable button on contact page
            >
              <Sparkles size={16} />
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-blue-700 p-2 hover:bg-blue-100 rounded-lg transition-colors duration-300"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/98 backdrop-blur-xl border-t border-blue-200 shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className="block w-full text-left text-blue-700 hover:text-blue-900 transition-colors duration-300 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 text-sm uppercase tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.button>
            ))}

            {/* Phone Number Mobile */}
            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-3 text-blue-700 hover:text-blue-900 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 border border-blue-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Phone size={20} />
              <span className="font-bold">{COMPANY_INFO.phone}</span>
            </motion.a>

            {/* Mobile CTA Button */}
            <motion.button
              onClick={() => navigate('/contact')}
              className={`w-full px-6 py-4 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide transition-all duration-300 ${
                isOnContactPage
                  ? 'bg-blue-600/50 cursor-not-allowed shadow-blue-300/20'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-500/30 hover:shadow-blue-500/50'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileTap={!isOnContactPage ? { scale: 0.95 } : {}}
              disabled={isOnContactPage} // Disable on contact page
            >
              <Sparkles size={18} />
              Get Started
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
