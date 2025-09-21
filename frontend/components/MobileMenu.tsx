import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSignInClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onSignInClick }) => {
  const handleSignIn = () => {
    onClose();
    onSignInClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#0c011e]/95 shadow-2xl shadow-pink-500/20 flex flex-col items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center space-y-8 text-2xl w-full">
              <a href="#" onClick={onClose} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_#0ff]">Explore</a>
              <a href="#" onClick={onClose} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_#0ff]">Artists</a>
              <a href="#" onClick={onClose} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_#0ff]">About</a>
              <button 
                onClick={handleSignIn}
                className="mt-4 w-full bg-pink-600/50 text-white border border-pink-500 px-6 py-3 rounded-md backdrop-blur-sm hover:bg-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-300"
              >
                Sign In
              </button>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
