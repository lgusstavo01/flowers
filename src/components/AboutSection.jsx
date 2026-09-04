import { useState } from "react";

export function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-20 px-4 lg:py-28">
      {/* Elemento Decorativo no lado direito (Folha gigante suave) */}
      <div className="pointer-events-none absolute top-1/2 -right-16 -translate-y-1/2 opacity-15 text-red-400">
        <svg className="w-72 h-72 md:w-96 md:h-96 fill-current" viewBox="0 0 100 100">
          <path d="M10 80 Q 20 20, 90 10 Q 80 80, 10 80 Z" />
          <path d="M10 80 Q 50 45, 90 10" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LADO ESQUERDO: Layout de Fotos Sobrepostas + Player de Vídeo */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start pb-12 lg:pb-0">
          
          {/* Foto Principal de Fundo (Dona na floricultura) */}
          <div className="relative w-4/5 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-stone-50">
            <img
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800&auto=format&fit=crop"
              alt="Dona da loja cuidando das plantas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foto Sobreposta com Botão de Play (Vídeo sobre a loja) */}
          <div className="absolute -bottom-6 right-2 sm:right-8 w-3/5 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group">
            <img
              src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop"
              alt="Apresentação da floricultura"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay com tom vermelho escuro ao passar o mouse */}
            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-red-950/30 transition-colors duration-300" />

            {/* Botão de Play */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl shadow-red-600/40 hover:bg-red-700 hover:scale-110 transition-all duration-300 focus:outline-none"
              aria-label="Assistir vídeo da dona da loja"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Arco decorativo vermelho (replicando o estilo da foto) */}
          <div className="absolute -bottom-10 left-6 sm:left-12 w-36 h-36 border-b-4 border-l-4 border-red-500/80 rounded-bl-full -z-10 pointer-events-none" />
        </div>

        {/* LADO DIREITO: Textos e Diferenciais */}
        <div className="lg:col-span-6 text-left">
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
            Conheça Nossa História
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Amor, dedicação e a beleza das flores em cada detalhe
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            Bem-vindo à nossa floricultura! Crio arranjos únicos que traduzem sentimentos e transformam momentos especiais em memórias inesquecíveis.
          </p>

          {/* Lista com ícones idênticos ao layout enviado */}
          <div className="space-y-5 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 uppercase text-sm tracking-wider">
                FLORES FRESCAS E SELECIONADAS A DEDO
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 uppercase text-sm tracking-wider">
                ATENDIMENTO HUMANO E PERSONALIZADO
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 uppercase text-sm tracking-wider">
                ENTREGA RÁPIDA E CUIDADOSA
              </h4>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-6">
            Nosso compromisso vai além de vender arranjos: cultivamos experiências e entregamos afeto em forma de flores em toda a região.
          </p>
        </div>

      </div>

      {/* MODAL DE VÍDEO (Abre ao clicar no botão de Play) */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Botão Fechar Modal */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 flex items-center justify-center transition"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              {/* Substitua a URL pelo vídeo do YouTube/Vimeo da cliente */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Vídeo sobre a Floricultura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}