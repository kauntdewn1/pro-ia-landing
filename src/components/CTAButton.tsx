import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  size?: 'default' | 'large';
  variant?: 'primary' | 'secondary';
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  href, 
  size = 'default',
  variant = 'primary' 
}) => {
  // Determine classes based on props
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-500 hover:to-magenta-500 text-white',
    secondary: 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-magenta-400 border border-magenta-500',
  };
  
  const sizeClasses = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  return (
    <a
      href={href}
      className={`
        relative inline-flex items-center justify-center font-bold tracking-wider
        transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]}
        transform hover:scale-105 hover:shadow-[0_0_15px_rgba(204,0,255,0.5)]
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
      `}
    >
      {/* Corner elements for cyberpunk style */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-magenta-500"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-magenta-500"></div>
      
      {children}
      
      {/* Glowing animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-magenta-500/20 to-purple-600/0 opacity-0 group-hover:opacity-100 animate-glow"></div>
    </a>
  );
};