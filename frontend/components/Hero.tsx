import React from 'react';
import { motion } from 'framer-motion';
import SynthwaveBackground from './SynthwaveBackground';
import CallToAction from './CallToAction';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden p-4">
      <SynthwaveBackground />
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 
          className="font-audiowide text-6xl sm:text-7xl md:text-9xl font-extrabold text-white tracking-widest"
          style={{ textShadow: '0 0 8px rgba(255,255,255,0.7), 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff' }}
        >
          TASYA
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-cyan-300" style={{ textShadow: '0 0 5px #00ffff' }}>
          The Future of Digital Art is Here
        </p>
        <CallToAction />
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block" aria-hidden="true">
        <a href="#features" className="group" aria-label="Scroll to features">
          <div className="w-6 h-10 border-2 border-cyan-300/50 group-hover:border-cyan-300 rounded-full flex justify-center items-start p-1 transition-colors">
            <motion.div 
              className="w-1 h-2 bg-cyan-300 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;