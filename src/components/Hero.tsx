import React from 'react';
import { GlitchText } from './GlitchText';
import { CTAButton } from './CTAButton';
import { Terminal } from './Terminal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid z-0 opacity-10"></div>
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"
            style={{
              top: `${10 + i * 10}%`,
              left: '0',
              right: '0',
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* HUD Element Top Right */}
      <div className="absolute top-8 right-8 border border-magenta-500 bg-black bg-opacity-50 p-2 text-xs text-magenta-500 z-10 font-mono">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-magenta-500 mr-2 animate-pulse"></div>
          SYSTEM ONLINE
        </div>
      </div>
      
      {/* HUD Element Top Left */}
      <div className="absolute top-8 left-8 border-l-2 border-t-2 border-purple-500 pt-2 pl-2 w-32 h-32 opacity-70 z-10">
        <div className="text-xs text-purple-500 font-mono">ID:PRO.IA.2025</div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-magenta-500 bg-black bg-opacity-50 text-magenta-500 text-sm font-mono">
          NOVA METODOLOGIA
        </div>
        
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          <GlitchText>PRO.IA</GlitchText>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-magenta-500">
            R$300 por dia com IA
          </span>
        </h1>
        
        <p className="mb-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Desafio direto, prático e sem enrolação. Baixe o guia gratuito e comece hoje mesmo.
        </p>
        
        <div className="flex justify-center">
          <CTAButton href="#download">QUERO O GUIA AGORA</CTAButton>
        </div>
        
        <div className="mt-12 md:mt-16 lg:mt-20">
          <Terminal
            text={[
              'Iniciando PRO.IA v3.5...',
              'Carregando algoritmos...',
              'Analisando oportunidades de mercado...',
              'Gerando modelos de negócios...',
              'Buscando clientes potenciais...',
              'Sistema pronto. Aguardando input do usuário...'
            ]}
          />
        </div>
      </div>
      
      {/* HUD Element Bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="h-px w-40 bg-magenta-500 animate-pulse"></div>
      </div>
    </section>
  );
};