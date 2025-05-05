import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  children, 
  intensity = 'medium' 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [text, setText] = useState(children as string);
  
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  // Set intensity factors
  const glitchProbability = {
    low: 0.02,
    medium: 0.05,
    high: 0.1
  }[intensity];
  
  const glitchDuration = {
    low: 50,
    medium: 100,
    high: 150
  }[intensity];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    // Random glitch trigger
    const triggerGlitch = () => {
      const shouldGlitch = Math.random() < 0.1;
      
      if (shouldGlitch && !isGlitching) {
        setIsGlitching(true);
        
        // Run the glitch effect
        interval = setInterval(() => {
          const originalText = children as string;
          const newText = originalText
            .split('')
            .map((char, idx) => {
              if (Math.random() < glitchProbability) {
                return chars[Math.floor(Math.random() * chars.length)];
              }
              return char;
            })
            .join('');
          
          setText(newText);
        }, 50);
        
        // Stop after a short duration
        timeout = setTimeout(() => {
          clearInterval(interval);
          setText(children as string);
          setIsGlitching(false);
        }, glitchDuration);
      }
    };
    
    // Trigger the effect periodically
    const glitchInterval = setInterval(triggerGlitch, 3000);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [children, isGlitching, glitchProbability, glitchDuration]);

  return (
    <span className="inline-block relative">
      {text}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -ml-1 text-magenta-500 opacity-70 mix-blend-screen">{text}</span>
          <span className="absolute top-0 left-0 ml-1 text-purple-500 opacity-70 mix-blend-screen">{text}</span>
        </>
      )}
    </span>
  );
};