import React from 'react';
import { GlitchText } from './GlitchText';
import { CTAButton } from './CTAButton';
import { Terminal } from './Terminal';

export const Obrigado: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      
      {/* Plano de fundo com grid e linhas animadas */}
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

      {/* HUD Elementos de topo */}
      <div className="absolute top-8 right-8 border border-magenta-500 bg-black bg-opacity-50 p-2 text-xs text-magenta-500 z-10 font-mono">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-magenta-500 mr-2 animate-pulse"></div>
          ACESSO LIBERADO
        </div>
      </div>

      <div className="absolute top-8 left-8 border-l-2 border-t-2 border-purple-500 pt-2 pl-2 w-32 h-32 opacity-70 z-10">
        <div className="text-xs text-purple-500 font-mono">PRO.IA.GUIDE.2025</div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-magenta-500 bg-black bg-opacity-50 text-magenta-500 text-sm font-mono">
          PARABÉNS!
        </div>

        <h1 className="mb-6 text-4xl md:text-6xl font-bold text-white leading-tight">
          <GlitchText>ACESSO GARANTIDO</GlitchText>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-magenta-500">
            Comece agora sua jornada com IA
          </span>
        </h1>

        <p className="mb-6 text-lg text-gray-300 max-w-xl mx-auto">
          Você já pode acessar o <strong>Guia PRO.IA</strong> e entrar no nosso grupo com conteúdo VIP.
        </p>

        {/* Botões de ação */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="https://chat.whatsapp.com/JBSRuGOB7WH0UtcaQSuetM">
            ENTRAR NO GRUPO VIP
          </CTAButton>
          <CTAButton href="https://www.canva.com/design/DAGmjvqjOps/32fu3DsJ76iGAyCqxqAe5A/view">
            VER O GUIA
          </CTAButton>
        </div>

        {/* Terminal com mensagens de progresso */}
        <Terminal
          text={[
            'Confirmando pagamento... OK',
            'Liberando conteúdo PRO.IA... OK',
            'Grupo VIP disponível... OK',
            'Jornada iniciada. Seja bem-vindo.'
          ]}
        />
      </div>

      {/* HUD inferior */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="h-px w-40 bg-magenta-500 animate-pulse"></div>
      </div>
    </section>
  );
};
