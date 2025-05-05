import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newHours = prevTime.hours;
        let newMinutes = prevTime.minutes;
        let newSeconds = prevTime.seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format the time values to always have two digits
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex justify-center">
      <div className="inline-flex bg-gray-900 border border-gray-700 p-1">
        {/* Hours */}
        <div className="relative p-4 mx-1 bg-black">
          <div className="text-4xl font-mono text-magenta-500">{formatTime(timeLeft.hours)}</div>
          <div className="absolute -bottom-3 left-0 right-0 mx-auto text-xs text-gray-500 bg-gray-900 px-2 text-center">HORAS</div>
          {/* Corner elements */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-magenta-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-magenta-500"></div>
        </div>
        
        <div className="flex items-center text-white text-2xl px-1">:</div>
        
        {/* Minutes */}
        <div className="relative p-4 mx-1 bg-black">
          <div className="text-4xl font-mono text-magenta-500">{formatTime(timeLeft.minutes)}</div>
          <div className="absolute -bottom-3 left-0 right-0 mx-auto text-xs text-gray-500 bg-gray-900 px-2 text-center">MIN</div>
          {/* Corner elements */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-magenta-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-magenta-500"></div>
        </div>
        
        <div className="flex items-center text-white text-2xl px-1">:</div>
        
        {/* Seconds */}
        <div className="relative p-4 mx-1 bg-black">
          <div className="text-4xl font-mono text-magenta-500">{formatTime(timeLeft.seconds)}</div>
          <div className="absolute -bottom-3 left-0 right-0 mx-auto text-xs text-gray-500 bg-gray-900 px-2 text-center">SEG</div>
          {/* Corner elements */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-magenta-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-magenta-500"></div>
        </div>
      </div>
    </div>
  );
};