
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="mt-12 w-full max-w-2xl flex flex-col sm:flex-row items-center gap-4">
      <div className="relative w-full group">
        <input
          type="search"
          placeholder="Search for artists, art, or collections"
          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-cyan-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm transition-all duration-300"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <button className="w-full sm:w-auto flex-shrink-0 bg-cyan-500/80 text-black font-bold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 transform hover:scale-105">
        Explore
      </button>
    </div>
  );
};

export default CallToAction;
