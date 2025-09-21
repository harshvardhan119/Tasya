import React from 'react';
// Fix: Import Variants type from framer-motion.
import { motion, Variants } from 'framer-motion';

// Fix: Explicitly type sectionVariants with the Variants type.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const cardHoverEffect = {
  scale: 1.03,
  boxShadow: "0px 0px 30px rgba(236, 72, 153, 0.4)",
  transition: { duration: 0.3 }
};

const cardHoverEffectCyan = {
  scale: 1.03,
  boxShadow: "0px 0px 30px rgba(34, 211, 238, 0.4)",
  transition: { duration: 0.3 }
}


const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0c011e] via-[#12022f] to-[#0c011e] overflow-hidden">
      <div className="absolute inset-0 bg-grid-cyan opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">

        {/* --- For Artists Section --- */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <h2 className="font-audiowide text-4xl md:text-5xl font-bold text-white" style={{ textShadow: '0 0 10px #ff00ff' }}>
            Empowering Artists with AI
          </h2>
          <p className="mt-4 text-lg md:text-xl text-cyan-300 max-w-3xl mx-auto">
            We provide cutting-edge tools to make your artwork shine and connect with a wider audience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
            whileHover={cardHoverEffect}
            custom={1}
            className="p-8 rounded-xl bg-black/20 backdrop-blur-md border border-pink-500/50 shadow-lg shadow-pink-500/10 transition-shadow duration-300"
            onClick={() => window.location.href = 'https://tasya-eight.vercel.app'
            >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-500/20 p-3 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div>
              <h3 className="font-audiowide text-2xl text-white">Studio Quality Enhancement</h3>
            </div>
            <p className="text-gray-300">
              Turn your creations into masterpieces. Our AI enhances colors, sharpness, and lighting to professional gallery standards, ensuring your art looks breathtaking on any screen.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
            whileHover={cardHoverEffectCyan}
            custom={2}
            className="p-8 rounded-xl bg-black/20 backdrop-blur-md border border-cyan-500/50 shadow-lg shadow-cyan-500/10 transition-shadow duration-300"
            onClick={() => window.location.href = 'https://tasya-eight.vercel.app'
            >
            <div className="flex items-center gap-4 mb-4">
               <div className="bg-cyan-500/20 p-3 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div>
              <h3 className="font-audiowide text-2xl text-white">AI-Generated Descriptions</h3>
            </div>
            <p className="text-gray-300">
             Struggle with words? Let our AI generate compelling stories and descriptions for your art. Attract more patrons by telling the unique narrative behind each piece.
            </p>
          </motion.div>
        </div>

        {/* --- For Patrons Section --- */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="flex flex-col lg:flex-row items-center gap-8 md:gap-12"
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="font-audiowide text-4xl md:text-5xl font-bold text-white" style={{ textShadow: '0 0 10px #00ffff' }}>
              Visualize Art in Your Space
            </h2>
            <p className="mt-4 text-lg md:text-xl text-pink-300 max-w-2xl mx-auto lg:mx-0">
              See it before you buy it. Our augmented reality feature lets you preview any artwork on your own wall, ensuring it’s the perfect fit for your home.
            </p>
            <button className="mt-8 bg-pink-600/50 text-white border border-pink-500 px-8 py-3 rounded-md backdrop-blur-sm hover:bg-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-300 transform hover:scale-105">
                Start Browsing
            </button>
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-[#0c011e]">
                    <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" alt="Living room with a sofa and a window" className="h-[156px] md:h-[278px] w-full object-cover" />
                     <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop" alt="Abstract artwork" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 object-contain p-2 bg-white/10 backdrop-blur-sm rounded-md shadow-2xl" />
                </div>
            </div>
            <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
