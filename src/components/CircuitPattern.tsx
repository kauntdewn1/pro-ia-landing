import React from 'react';

interface CircuitPatternProps {
  className?: string;
}

export const CircuitPattern: React.FC<CircuitPatternProps> = ({ className = '' }) => {
  return (
    <div className={`${className} circuit-pattern`}>
      {/* Circuit nodes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-500"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.3,
          }}
        >
          {/* Circuit lines */}
          <div
            className="absolute h-px bg-purple-500"
            style={{
              width: `${20 + Math.random() * 80}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              transformOrigin: 'left center',
              opacity: 0.3 + Math.random() * 0.3,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};