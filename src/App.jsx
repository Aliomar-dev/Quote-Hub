import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱ Loader duration (adjust if needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* App Content */}
      {!loading && (
        <Router>
          <div className="min-h-screen bg-white text-white">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
