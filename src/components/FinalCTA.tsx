import React from 'react';
import { CTAButton } from './CTAButton';
import { CountdownTimer } from './CountdownTimer';

export const FinalCTA: React.FC = () => {
  return (
    <section id="download" className="relative py-20 px-4 bg-gray-950 overflow-hidden">
      {/* Code line background - seguro e estilizado */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <pre
            key={i}
            className="font-mono text-xs text-purple-500 whitespace-nowrap"
            style={{
              position: 'absolute',
              top: `${(i * 5) + Math.random() * 2}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateX(-${Math.random() * 50}%)`,
              opacity: 0.2 + Math.random() * 0.8,
            }}
          >
            {'function generateIncome(effort, knowledge) { return Math.min(300, effort * knowledge * market.demand); }'}
          </pre>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Top section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              O novo mercado já tá acontecendo.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-magenta-500">
                A única pergunta é: você vai assistir de longe ou começar hoje?
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Baixe o guia agora e comece seu desafio de R$300/dia.
            </p>

            {/* Security badge */}
            <div className="inline-block bg-gray-900 border border-gray-700 px-4 py-2 rounded-full mb-10">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-sm text-gray-300">Download seguro e sem compromisso</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-gray-900 border border-purple-500 p-8 relative">
              {/* HUD corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-500"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-purple-500"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-purple-500"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500"></div>

              <div className="mb-8">
                <CountdownTimer hours={24} />
              </div>

              <div className="flex justify-center">
                <CTAButton href="https://openpix.com.br/pay/c7991814-c55a-4e99-8edf-215ef856a0bf" size="large">
                  BAIXAR GUIA
                </CTAButton>
              </div>

              <div className="mt-6 flex items-center justify-center space-x-6">
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Acesso Imediato</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">PDF Otimizado</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Guia Completo</span>
                </div>
              </div>
            </div>

            {/* WhatsApp group access */}
            <div className="mt-12">
              <div className="inline-block border border-gray-700 bg-gray-900 p-4 font-mono text-sm text-gray-300">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-green-500">WhatsApp Community Access</span>
                </div>
                <code className="block text-purple-400 opacity-80">
                  // Acesso ao grupo de implementação<br />
                  // Disponível após download do guia
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
