import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-magenta-500 flex items-center justify-center text-white font-bold mr-2">P</div>
              <span className="text-white font-mono tracking-wider">PRO.IA</span>
            </div>
          </div>

          {/* Direitos */}
          <div className="text-gray-500 text-sm font-mono mb-4 md:mb-0 text-center md:text-right">
            <p>&copy; 2025 PRO.IA. Todos os direitos reservados.</p>
            <p className="text-xs opacity-70 mt-1">Resultados podem variar conforme dedicação.</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {/* Instagram */}
            <a href="https://www.instagram.com/flowoff.mkt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Website */}
            <a href="https://proia.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm6.93 6h-3.95a15.269 15.269 0 0 0-1.38-4.62A8.03 8.03 0 0 1 18.93 8zM12 4.07A13.258 13.258 0 0 1 13.78 8H10.22A13.258 13.258 0 0 1 12 4.07zM8.4 8H4.07a8.03 8.03 0 0 1 5.33-4.62A15.269 15.269 0 0 0 8.4 8zm-4.33 2H7.5a17.888 17.888 0 0 0 .55 4H5.08a7.938 7.938 0 0 1-1.01-4zm2.56 6h2.65a13.258 13.258 0 0 1-1.58 3.93A8.03 8.03 0 0 1 6.63 16zm3.59 0h3.56A13.258 13.258 0 0 1 12 19.93 13.258 13.258 0 0 1 10.22 16zm5.15 0h2.65a8.03 8.03 0 0 1-3.07 3.93A13.258 13.258 0 0 1 15.37 16zm.55-2a17.888 17.888 0 0 0 .55-4h3.43a7.938 7.938 0 0 1-1.01 4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-600 text-center font-mono">
          <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;