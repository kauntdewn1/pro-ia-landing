import React from 'react';
import { CircuitPattern } from './CircuitPattern';

export const Authority: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-black bg-opacity-95 overflow-hidden">
      <CircuitPattern className="absolute inset-0 opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Avatar Section */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              {/* Avatar Frame */}
              <div className="w-48 h-48 border-2 border-purple-500 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-gray-900 to-black rounded-full overflow-hidden flex items-center justify-center">
                  {/* FOTO DO NETTO */}
                  <img
                    src="https://res.cloudinary.com/dgyocpguk/image/upload/v1746429691/NETTOFLOW293_o3ps8p_vrneib.jpg"
                    alt="Netto Mello"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* HUD Elements around avatar */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-purple-500"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-purple-500"></div>

              <div className="absolute -top-2 right-0 text-xs text-magenta-500 font-mono">ID.45892</div>
              <div className="absolute -bottom-2 left-0 text-xs text-purple-500 font-mono">STATUS: ONLINE</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-8">
            <div className="bg-gray-900 bg-opacity-70 border-l-2 border-purple-500 p-6 relative">
              {/* Terminal Header */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center px-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">terminal ~ experience.sh</div>
              </div>

              <div className="mt-6 pl-4 border-l border-gray-700 font-mono">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <span className="text-green-400">$ </span>
                  <span className="text-magenta-500">PRO.IA &gt; </span>
                  Mais de 18 anos no marketing, mas nunca vi uma ferramenta tão poderosa pra gerar renda do zero.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <span className="text-green-400">$ </span>
                  <span className="text-magenta-500">PRO.IA &gt; </span>
                  Por isso criei o PRO.IA — um guia direto, com 5 passos + bônus pra você começar agora mesmo, sem frescura e sem fórmula.
                </p>
                <p className="text-gray-300 text-sm opacity-50">
                  [System]: Metodologia validada. Resultados sujeitos a dedicação do usuário.
                </p>
              </div>

              {/* Terminal decorative elements */}
              <div className="absolute bottom-2 right-2 text-xs text-purple-500 opacity-50 font-mono">~/PRO.IA/v3.5</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
