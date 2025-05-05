import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  intensity = 'medium'
}) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';

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

  const [isGlitching, setIsGlitching] = useState(false);
  const [text, setText] = useState(typeof children === 'string' ? children : '');

  useEffect(() => {
    if (typeof children !== 'string') return;

    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

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
          clearInterval(interval);
          setText(children);
          setIsGlitching(false);
        }, glitchDuration);
      }
    };

    const glitchInterval = setInterval(triggerGlitch, 3000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [children, isGlitching]);

  if (typeof children !== 'string') {
    return <span className="text-white">{children}</span>;
  }

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
