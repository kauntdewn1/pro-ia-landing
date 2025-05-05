import React, { useState, useEffect } from 'react';

interface TerminalProps {
  text: string[];
}

export const Terminal: React.FC<TerminalProps> = ({ text }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= text.length) return;

    const interval = setInterval(() => {
      if (currentChar < text[currentLine].length) {
        setCurrentChar(currentChar + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedLines([...displayedLines, text[currentLine]]);
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentLine, currentChar, displayedLines, text]);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-md w-full max-w-xl mx-auto font-mono text-sm overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">pro_ia_terminal</div>
        <div></div>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 h-48 overflow-y-auto">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-2">
            <span className="text-green-400">$ </span>
            <span className="text-gray-300">{line}</span>
          </div>
        ))}
        
        {currentLine < text.length && (
          <div className="mb-2">
            <span className="text-green-400">$ </span>
            <span className="text-gray-300">{text[currentLine].substring(0, currentChar)}</span>
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
};