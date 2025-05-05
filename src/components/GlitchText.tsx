import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  children, 
  intensity = 'medium' 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [text, setText] = useState(children);

  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const glitchProbability = {
    low: 0.02,
    medium: 0.05,
    high: 0.1,
  }[intensity];

  const glitchDuration = {
    low: 50,
    medium: 100,
    high: 150,
  }[intensity];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const triggerGlitch = () => {
      const shouldGlitch = Math.random() < 0.1;

      if (shouldGlitch && !isGlitching) {
        setIsGlitching(true);

        interval = setInterval(() => {
          const newText = children
            .split('')
            .map((char) =>
              Math.random() < glitchProbability
                ? chars[Math.floor(Math.random() * chars.length)]
                : char
            )
            .join('');

          setText(newText);
        }, 50);

        timeout = setTimeout(() => {
          if (interval) clearInterval(interval);
          setText(children);
          setIsGlitching(false);
        }, glitchDuration);
      }
    };

    const glitchInterval = setInterval(triggerGlitch, 3000);

    return () => {
      if (glitchInterval) clearInterval(glitchInterval);
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [children, glitchProbability, glitchDuration, isGlitching]);

  return (
    <span className="inline-block relative">
      {text}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -ml-1 text-magenta-500 opacity-70 mix-blend-screen">
            {text}
          </span>
          <span className="absolute top-0 left-0 ml-1 text-purple-500 opacity-70 mix-blend-screen">
            {text}
          </span>
        </>
      )}
    </span>
  );
};
