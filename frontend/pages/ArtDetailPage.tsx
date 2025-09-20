import React from 'react';
import { motion } from 'framer-motion';
import { ArtPiece } from '../types';

interface ArtDetailPageProps {
    artPiece: ArtPiece;
    onBack: () => void;
}

const ArtDetailPage: React.FC<ArtDetailPageProps> = ({ artPiece, onBack }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-dotted pt-20"
        >
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.button 
                    onClick={onBack} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
                    whileHover={{ x: -5 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-[-2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Gallery
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    <motion.div 
                        className="w-full h-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
                    >
                        <img src={artPiece.imageUrl} alt={artPiece.title} className="w-full h-auto object-contain rounded-2xl shadow-2xl shadow-black/50" />
                    </motion.div>
                    
                    <motion.div 
                        className="flex flex-col text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } }}
                    >
                        <div className="flex justify-between items-start">
                           <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center">
                                    {/* Placeholder for artist avatar */}
                                    <span className="font-bold text-2xl">{artPiece.artistName.charAt(0)}</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">{artPiece.artistName}</h2>
                                    <a href="#" className="text-sm text-cyan-400 hover:underline">More from this Artist</a>
                                </div>
                           </div>
                           <div className="text-3xl font-audiowide text-cyan-300" style={{ textShadow: '0 0 8px #00ffff' }}>
                                ${artPiece.price.toFixed(2)}
                           </div>
                        </div>

                        <div className="relative mt-6">
                            <h1 className="text-5xl font-bold font-audiowide relative z-10">{artPiece.title}</h1>
                             <div className="absolute -top-2 -left-4 w-48 h-12 bg-pink-600/70 rounded-md transform -skew-x-12 z-0"></div>
                        </div>

                        <p className="mt-8 text-gray-300 leading-relaxed">
                            {artPiece.longDescription}
                        </p>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <span className="text-sm text-gray-400">Category : <span className="font-semibold text-pink-400">{artPiece.category}</span></span>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button className="w-full sm:w-auto flex-1 bg-pink-600/80 text-white font-bold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all duration-300 transform hover:scale-105">
                                Request Ownership
                            </button>
                             <button className="w-full sm:w-auto flex-1 bg-cyan-500/30 text-cyan-300 border border-cyan-500/50 font-bold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-cyan-500/50 hover:text-white transition-all duration-300 transform hover:scale-105">
                                Chat with Owner
                            </button>
                        </div>

                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
};

export default ArtDetailPage;
