import React, { useMemo } from 'react';

const Particles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 2 + 1; // 1px to 3px
      const top = Math.random() * 100; // 0% to 100%
      const left = Math.random() * 100; // 0% to 100%
      const animationDuration = Math.random() * 3 + 2; // 2s to 5s
      const animationDelay = Math.random() * 3; // 0s to 3s

      return (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-300/80"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `twinkle ${animationDuration}s linear ${animationDelay}s infinite`,
            boxShadow: '0 0 6px 1px rgba(0, 255, 255, 0.5)'
          }}
        />
      );
    });
  }, []);

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div className="absolute inset-0 z-0">
        {particles}
      </div>
    </>
  );
};

export default Particles;
