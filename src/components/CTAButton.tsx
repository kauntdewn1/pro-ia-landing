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
  variant = 'primary',
}) => {
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-500 hover:to-magenta-500 text-white',
    secondary:
      'bg-gray-900 border border-magenta-500 text-magenta-400 hover:bg-gray-800',
  };

  const sizeClasses = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center rounded-md font-bold tracking-wide
        transition-all duration-300 ease-in-out ${sizeClasses[size]} ${variantClasses[variant]}
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-magenta-500
      `}
    >
      {/* Estilo Cyberpunk nos cantos */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-magenta-500" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-magenta-500" />

      <span className="relative z-10">{children}</span>

      {/* Animação de brilho suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-magenta-500/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
    </a>
  );
};
