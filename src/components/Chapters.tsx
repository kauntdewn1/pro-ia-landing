import React from 'react';

export const Chapters: React.FC = () => {
  const chapters = [
    { number: '01', title: 'A nova onda da IA', description: 'Conheça as ferramentas e oportunidades do momento.' },
    { number: '02', title: 'Ferramentas que qualquer um pode usar', description: 'Sem conhecimento técnico necessário.' },
    { number: '03', title: 'Como prestar serviços e cobrar', description: 'Templates de propostas e precificação.' },
    { number: '04', title: 'Onde encontrar clientes', description: 'Estratégias validadas de prospecção.' },
    { number: '05', title: 'Ação em 3 dias com mensagens prontas', description: 'Roteiro passo a passo para implementação.' },
  ];

  return (
    <section className="relative py-20 px-4 bg-gray-950 overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gray-800"
            style={{ left: `${20 + i * 15}%` }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que você vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-magenta-500">aprender</span>
          </h2>
          <div className="h-1 w-20 bg-magenta-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chapter list */}
          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <div 
                key={index} 
                className="relative pl-16 pr-4 py-4 border-l-2 border-purple-500 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
              >
                {/* Chapter number */}
                <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-magenta-500">
                  <span className="font-mono text-xl font-bold text-white">{chapter.number}</span>
                </div>
                
                {/* Chapter content */}
                <h3 className="text-xl font-bold text-white mb-1">{chapter.title}</h3>
                <p className="text-gray-400">{chapter.description}</p>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 border-t-2 border-r-2 border-magenta-500 w-4 h-4"></div>
              </div>
            ))}
          </div>
          
          {/* PDF Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* PDF Frame */}
              <div className="aspect-[3/4] bg-gray-900 border border-gray-700 rounded shadow-lg p-4 transform rotate-3 relative z-10">
                {/* Header bar */}
                <div className="bg-gray-800 h-8 mb-4 flex items-center px-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                  <div className="ml-auto text-xs text-gray-400 font-mono">PRO.IA_guia.pdf</div>
                </div>
                
                {/* Content placeholder */}
                <div className="space-y-3">
                  {/* Title */}
                  <div className="h-8 bg-gradient-to-r from-purple-500 to-magenta-500 rounded"></div>
                  
                  {/* Text lines */}
                  <div className="h-3 bg-gray-700 rounded w-full"></div>
                  <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-700 rounded w-4/5"></div>
                  
                  {/* Section */}
                  <div className="h-5 bg-gray-800 rounded w-1/2 mt-6 mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-full"></div>
                  <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                  
                  {/* Image placeholder */}
                  <div className="h-20 bg-gray-800 rounded mt-4 flex items-center justify-center">
                    <div className="text-2xl text-purple-500 font-mono">PRO.IA</div>
                  </div>
                  
                  {/* More text */}
                  <div className="h-3 bg-gray-700 rounded w-full mt-4"></div>
                  <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-700 rounded w-full"></div>
                </div>
                
                {/* Page number */}
                <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-mono">01/15</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gray-900 border border-gray-800 rounded shadow-lg transform -rotate-3 z-0"></div>
              
              {/* HUD corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-500"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-magenta-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};