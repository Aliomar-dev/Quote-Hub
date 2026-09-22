import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Assuming you have these components defined elsewhere
import Button from '../Button'; 
import Section from '../Section'; 

// Lazy loading a component from the new code structure
const FloatingShapes = lazy(() => import('../FloatingShapes'));

// --- START: PASTED ANIMATED COMPONENTS (JSX) ---

// Floating particles for atmosphere
function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated line component (JSX version)
function AnimatedLine({ x1, y1, x2, y2, delay, gradient, duration = 2.5 }) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={`url(#${gradient})`}
      strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ 
        pathLength: { duration, delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        opacity: { duration: 0.5, delay }
      }}
    />
  );
}

// Enhanced 3D floating node (JSX version) - Blue/White theme
function FloatingNode3D({ x, y, size, delay, rotationSpeed }) {
  size = size || 100;
  rotationSpeed = rotationSpeed || 10;

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.9, 0.9],
        scale: [0, 1, 1],
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        y: { duration: 5, delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <motion.div
        animate={{ 
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{
          rotateY: { duration: rotationSpeed, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))',
          }}
        >
          <defs>
            <linearGradient id={`nodeGrad${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.9 }} />
            </linearGradient>
            <radialGradient id={`nodeRadial${delay}`}>
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#60a5fa', stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.5 }} />
            </radialGradient>
          </defs>
          
          <path
            d="M 50,8 L 85,28 L 85,72 L 50,92 L 15,72 L 15,28 Z"
            fill={`url(#nodeGrad${delay})`}
            stroke="#60a5fa"
            strokeWidth="3"
            opacity="0.85"
          />
          <path
            d="M 50,20 L 73,35 L 73,65 L 50,80 L 27,65 L 27,35 Z"
            fill={`url(#nodeRadial${delay})`}
            opacity="0.9"
          />
          <path
            d="M 50,30 L 65,40 L 65,60 L 50,70 L 35,60 L 35,40 Z"
            fill={`url(#nodeGrad${delay})`}
            opacity="0.95"
          />
          <circle cx="50" cy="50" r="10" fill="#ffffff" opacity="1" />
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="1" />
          <circle cx="50" cy="8" r="5" fill="#ffffff" opacity="0.95" />
          <circle cx="85" cy="28" r="5" fill="#ffffff" opacity="0.95" />
          <circle cx="85" cy="72" r="5" fill="#ffffff" opacity="0.95" />
          <circle cx="50" cy="92" r="5" fill="#ffffff" opacity="0.95" />
          <circle cx="15" cy="72" r="5" fill="#ffffff" opacity="0.95" />
          <circle cx="15" cy="28" r="5" fill="#ffffff" opacity="0.95" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// Central hub component with energy rings - Blue/White theme
function CentralHub() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Energy rings */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border-4 border-blue-500/40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border-4 border-blue-400/40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border-4 border-blue-600/40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 2 }}
      />

      {/* Central hexagon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="180" height="180" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="centralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#60a5fa', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.8 }} />
            </linearGradient>
            <filter id="centralGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path
            d="M 50,5 L 90,27.5 L 90,72.5 L 50,95 L 10,72.5 L 10,27.5 Z"
            fill="url(#centralGrad)"
            stroke="#60a5fa"
            strokeWidth="3"
            filter="url(#centralGlow)"
          />
          <path
            d="M 50,20 L 75,35 L 75,65 L 50,80 L 25,65 L 25,35 Z"
            fill="url(#centralGrad)"
            opacity="0.7"
          />
          <circle cx="50" cy="50" r="12" fill="#ffffff" opacity="1" />
          <circle cx="50" cy="50" r="8" fill="#3b82f6" opacity="0.9" />
        </svg>
      </motion.div>
    </div>
  );
}

// NEW Animated Scene Component for the right side
function Enhanced3DScene() {
  return (
    <div className="absolute inset-0">
      {/* Floating 3D hexagonal nodes */}
      <FloatingNode3D delay={0} x="15%" y="15%" size={140} rotationSpeed={10} />
      <FloatingNode3D delay={0.3} x="82%" y="20%" size={110} rotationSpeed={12} />
      <FloatingNode3D delay={0.6} x="12%" y="70%" size={100} rotationSpeed={8} />
      <FloatingNode3D delay={0.9} x="85%" y="75%" size={130} rotationSpeed={15} />
      <FloatingNode3D delay={1.2} x="50%" y="10%" size={90} rotationSpeed={11} />
      <FloatingNode3D delay={1.5} x="50%" y="88%" size={95} rotationSpeed={9} />
      <FloatingNode3D delay={0.4} x="35%" y="45%" size={80} rotationSpeed={13} />
      <FloatingNode3D delay={0.8} x="65%" y="50%" size={85} rotationSpeed={14} />

      {/* Central hub with pulsing energy */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CentralHub />
      </motion.div>

      {/* Animated connection network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-70">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <AnimatedLine x1="15%" y1="15%" x2="50%" y2="50%" delay={0.5} gradient="lineGrad1" />
        <AnimatedLine x1="82%" y1="20%" x2="50%" y2="50%" delay={0.8} gradient="lineGrad2" />
        <AnimatedLine x1="12%" y1="70%" x2="50%" y2="50%" delay={1.1} gradient="lineGrad1" />
        <AnimatedLine x1="85%" y1="75%" x2="50%" y2="50%" delay={1.4} gradient="lineGrad2" />
        <AnimatedLine x1="50%" y1="10%" x2="50%" y2="50%" delay={0.6} gradient="lineGrad1" />
        <AnimatedLine x1="50%" y1="88%" x2="50%" y2="50%" delay={1.2} gradient="lineGrad2" />
        <AnimatedLine x1="35%" y1="45%" x2="50%" y2="50%" delay={0.9} gradient="lineGrad1" />
        <AnimatedLine x1="65%" y1="50%" x2="50%" y2="50%" delay={1.5} gradient="lineGrad2" />
        
        {/* Interconnecting lines between nodes */}
        <AnimatedLine x1="15%" y1="15%" x2="50%" y2="10%" delay={1.8} gradient="lineGrad2" duration={3} />
        <AnimatedLine x1="82%" y1="20%" x2="85%" y2="75%" delay={2.1} gradient="lineGrad1" duration={3.5} />
        <AnimatedLine x1="12%" y1="70%" x2="50%" y2="88%" delay={2.4} gradient="lineGrad2" duration={3} />
      </svg>

      {/* Floating particles */}
      <Particles />
    </div>
  );
}

// --- END: PASTED ANIMATED COMPONENTS ---

// The main Hero component - Luxurious White & Blue Theme
const MarketingHero = () => {
  const navigate = useNavigate();

  return (
    <Section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Luxurious White & Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      
      {/* Elegant Glows */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Right Column: Animated Data Network Scene */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-90 hidden lg:block">
        <Enhanced3DScene />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Marketing Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 leading-tight">
              Transform Leads Into{' '}
              <span className="text-6xl md:text-8xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Revenue
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-800 font-semibold leading-relaxed">
              We connect, you close
            </p>
            <p className="text-lg text-blue-700/80 max-w-xl leading-relaxed">
              Connect with high-quality leads who are actively seeking your services.
              Our intelligent platform delivers pre-qualified prospects directly to you,
              so you can focus on what you do best.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 group flex items-center justify-center gap-3"
            >
              Book Free Consultation
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-lg"
            >
              Explore Services
            </button>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-8 pt-8 flex-wrap"
          >
            <div className="space-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">100+</div>
              <div className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="w-px h-16 bg-blue-300"></div>
            <div className="space-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">92%</div>
              <div className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Close Rate</div>
            </div>
            <div className="w-px h-16 bg-blue-300"></div>
            <div className="space-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">$500K+</div>
              <div className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Revenue Enabled</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: This is now empty because Enhanced3DScene covers the space absolutely */}
        <div className="hidden lg:block"></div> 
      </div>
    </Section>
  );
};

export default MarketingHero;