import React from 'react';
import { CTAButton } from './CTAButton';

export const Bonus: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-black bg-opacity-95 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500 rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2,
              animation: `pulse ${Math.random() * 3 + 2}s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left side with UI Frame */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Main frame */}
              <div className="border-2 border-magenta-500 bg-gray-900 bg-opacity-80 p-8 relative">
                {/* HUD Corner elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-500"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500"></div>
                
                {/* Content */}
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Quer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-magenta-500">mais</span>?
                  </h2>
                  
                  <div className="border border-gray-700 bg-black bg-opacity-60 p-6 mb-8">
                    <ul className="space-y-4 text-left">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-magenta-500 flex items-center justify-center text-white mr-3">✓</div>
                        <span className="text-gray-300">Material avançado com técnicas exclusivas</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-magenta-500 flex items-center justify-center text-white mr-3">✓</div>
                        <span className="text-gray-300">Acesso ao grupo silencioso de praticantes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-magenta-500 flex items-center justify-center text-white mr-3">✓</div>
                        <span className="text-gray-300">Vídeo tutorial passo a passo</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-magenta-500 flex items-center justify-center text-white mr-3">✓</div>
                        <span className="text-gray-300">Modelo de resposta automática</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-white text-lg mb-4">
                    Com apenas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-magenta-500 font-bold">R$47</span> você libera tudo isso
                  </div>
                  
                  <div className="inline-block mb-8 px-4 py-2 border border-yellow-500 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded-full font-medium animate-pulse">
                    🎁 Só hoje, ainda com desconto
                  </div>
                  
                  <div className="flex justify-center">
                    <CTAButton href="https://openpix.com.br/pay/c7991814-c55a-4e99-8edf-215ef856a0bf" variant="secondary">QUERO O VIP</CTAButton>
                  </div>
                </div>
              </div>
              
              {/* Floating HUD elements */}
              <div className="absolute -top-6 left-1/4 p-2 bg-black bg-opacity-80 border border-purple-500 text-purple-500 text-sm font-mono">
                VIP_UNLOCK_v2.5
              </div>
              
              <div className="absolute -bottom-4 right-10 flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-magenta-500 animate-ping"></div>
                <div className="text-xs text-magenta-500 font-mono">LIVE</div>
              </div>
            </div>
          </div>
          
          {/* Right side with digital frame */}
          <div className="md:w-1/2">
            <div className="relative border border-gray-800 bg-gray-900 p-1">
              {/* Screen content */}
              <div className="border border-gray-700 p-6 bg-gradient-to-br from-gray-900 to-black">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm font-mono text-gray-500">// PRO.IA_VIP_MODULE</div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div className="font-mono text-sm text-gray-400">
                    <div className="text-green-400">$</div>
                    <div><span className="text-blue-400">import</span> <span className="text-yellow-400">VipModule</span> <span className="text-blue-400">from</span> <span className="text-green-400">'pro-ia/advanced'</span>;</div>
                    <div className="mt-2"><span className="text-blue-400">const</span> <span className="text-yellow-400">results</span> = <span className="text-blue-400">await</span> VipModule.analyze(market);</div>
                    <div className="mt-2"><span className="text-green-400">// Resultados potenciais:</span></div>
                  </div>
                  
                  <div className="bg-black bg-opacity-50 p-4 border-l-2 border-purple-500">
                    <div className="text-lg text-white font-medium mb-2">Análise de Mercado:</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>→ Média de R$120-350 por serviço básico</li>
                      <li>→ Tempo de entrega: 1-3 dias</li>
                      <li>→ Demanda crescente: +147% em 6 meses</li>
                      <li>→ Concorrência: Baixa a Média</li>
                    </ul>
                  </div>
                  
                  <div className="font-mono text-sm text-gray-400">
                    <div><span className="text-blue-400">const</span> <span className="text-yellow-400">profit</span> = <span className="text-purple-400">calculateROI</span>(investment, timeFrame);</div>
                    <div className="mt-2"><span className="text-green-400">// R$47 → ROI estimado: 6.4x em 30 dias</span></div>
                  </div>
                </div>
              </div>
              
              {/* Frame elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-purple-500"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-purple-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-magenta-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-magenta-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};