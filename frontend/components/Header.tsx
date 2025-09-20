import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  onSignInClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignInClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-30 p-6 md:p-8">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-audiowide text-2xl md:text-3xl font-bold tracking-wider text-white" style={{ textShadow: '0 0 5px #f0f, 0 0 10px #f0f' }}>
            TASYA
          </div>
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_#0ff]">Explore</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_#0ff]">Artists</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_#0ff]">About</a>
            <button 
              onClick={onSignInClick}
              className="bg-pink-600/50 text-white border border-pink-500 px-6 py-2 rounded-md backdrop-blur-sm hover:bg-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-300"
            >
              Sign In
            </button>
          </div>
          <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-white focus:outline-none z-50" aria-label="Open menu">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
          </div>
        </nav>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onSignInClick={onSignInClick} />
    </>
  );
};

export default Header;