import React from 'react';
import Particles from './Particles';

const SynthwaveBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e034a] via-[#2d0b5a] to-[#0c011e]"></div>
      
      <Particles />

      {/* Glowing Horizon */}
      <div className="absolute bottom-1/2 left-0 w-full h-1 bg-pink-500/80 blur-md"></div>
      
      {/* Pulsating Sun */}
      <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-pink-500/60 animate-pulse-glow"></div>
      </div>
      
      {/* Perspective wrapper for grid */}
      <div className="absolute inset-0" style={{ perspective: '300px' }}>
        {/* Moving Grid */}
        <div 
          className="absolute inset-0 animate-move-grid"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'rotateX(60deg) scale(1.5)',
            transformOrigin: 'bottom',
            bottom: '-20%',
          }}
        ></div>
      </div>

      {/* Mountain Silhouettes */}
      <div className="absolute bottom-1/2 left-0 w-full h-1/4 bg-no-repeat bg-bottom bg-contain" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230c011e' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`}}></div>
       <div className="absolute bottom-1/2 left-0 w-full h-1/3 bg-no-repeat bg-bottom bg-contain" style={{transform: 'scaleX(-1)', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230c011e' fill-opacity='1' d='M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,208C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`}}></div>
      
       {/* Foreground Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0c011e] to-transparent"></div>
    </div>
  );
};

export default SynthwaveBackground;