import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArtPiece } from '../types';

interface ArtCardProps {
  piece: ArtPiece;
  onClick: () => void;
  className?: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ piece, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatStat = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: Math.random() * 0.2 } }}
      exit={{ opacity: 0 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <img src={piece.imageUrl} alt={piece.title} className="w-full h-full object-cover" />
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" 
           style={{ boxShadow: 'inset 0px 0px 30px 10px rgba(0, 0, 0, 0.6), 0px 0px 30px 5px rgba(236, 72, 153, 0.5)' }}>
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 flex flex-col justify-end pointer-events-none"
          >
            <h3 className="text-white font-bold text-xl drop-shadow-lg">{piece.title}</h3>
            <p className="text-gray-300 text-sm drop-shadow-lg">{piece.artistName}</p>
            <p className="text-gray-400 text-xs mt-2 line-clamp-2 drop-shadow-lg">{piece.description}</p>
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                  <span className="text-xs font-semibold">{formatStat(piece.likes)}</span>
                </div>
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-3.13L5 18V4z" /></svg>
                  <span className="text-xs font-semibold">{formatStat(piece.saves)}</span>
                </div>
              </div>
              
              <div className="bg-white/90 text-black font-semibold px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 pointer-events-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                Follow Artist
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ArtCard;
