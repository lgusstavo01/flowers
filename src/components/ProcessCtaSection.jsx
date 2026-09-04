import React from "react";

const steps = [
  {
    number: "01",
    title: "Escolha seu Arranjo",
    description: "Selecione o modelo ideal no catálogo ou envie sua ideia personalizada.",
    bgColor: "bg-red-100/80",
    iconColor: "text-red-600",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=400&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personalização",
    description: "Escolha as flores, cores e o cartão especial que acompanhará o presente.",
    bgColor: "bg-rose-100/80",
    iconColor: "text-rose-600",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Montagem Artesanal",
    description: "Nossa florista prepara tudo com flores frescas colhidas no dia.",
    bgColor: "bg-red-100/80",
    iconColor: "text-red-600",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=400&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Entrega Especial",
    description: "Entregamos no endereço e horário combinados com todo o cuidado.",
    bgColor: "bg-rose-100/80",
    iconColor: "text-rose-600",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13C10.832 19.477 9.246 19 7.5 19S4.168 19.477 3 20.253V7.253C4.168 6.477 5.754 6 7.5 6s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
];

export function ProcessCtaSection() {
  return (
    <section className="relative overflow-hidden bg-red-50/30 py-20 px-4 lg:py-28">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(8deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-8deg); }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 7s ease-in-out infinite 1s;
        }
        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }
      `}</style>

      {/* ================= ÍCONES FLUTUANTES NO FUNDO CLARO ================= */}

      {/* 1. Tulipa Superior Esquerda */}
      <div className="absolute top-10 left-6 md:left-12 pointer-events-none z-0 animate-float-slow opacity-60">
        <svg className="w-24 h-24 md:w-32 md:h-32 text-red-400 fill-current" viewBox="0 0 100 100">
          <path d="M50 20 C30 20, 20 40, 20 60 C20 80, 50 90, 50 90 C50 90, 80 80, 80 60 C80 40, 70 20, 50 20 Z" />
          <path d="M50 20 Q40 45 30 65 M50 20 Q60 45 70 65" stroke="#fff" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* 2. Flor Giratória Centro-Esquerda */}
      <div className="absolute top-1/2 left-4 md:left-10 pointer-events-none z-0 animate-spin-slow opacity-30 hidden md:block">
        <svg className="w-20 h-20 text-red-300 fill-current" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="14" className="text-red-500" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse key={i} cx="50" cy="22" rx="7" ry="16" transform={`rotate(${angle} 50 50)`} />
          ))}
        </svg>
      </div>

      {/* 3. Folha Inferior Esquerda */}
      <div className="absolute -bottom-4 left-8 md:left-20 pointer-events-none z-0 animate-float-reverse opacity-40">
        <svg className="w-28 h-28 md:w-36 md:h-36 text-red-300 fill-current" viewBox="0 0 100 100">
          <path d="M10 80 Q 20 20, 90 10 Q 80 80, 10 80 Z" />
          <path d="M10 80 Q 50 45, 90 10" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* 4. Pétala Rosa Superior Direita */}
      <div className="absolute top-12 right-10 md:right-20 pointer-events-none z-0 animate-float-reverse opacity-50">
        <svg className="w-20 h-20 md:w-28 md:h-28 text-rose-300 fill-current" viewBox="0 0 100 100">
          <path d="M50 10 C20 40, 20 70, 50 90 C80 70, 80 40, 50 10 Z" />
        </svg>
      </div>

      {/* 5. Flor Inferior Direita */}
      <div className="absolute bottom-8 right-6 md:right-16 pointer-events-none z-0 animate-float-slow opacity-60">
        <svg className="w-24 h-24 md:w-32 md:h-32 text-red-400 fill-current" viewBox="0 0 100 100">
          <path d="M50 15 C35 15, 20 35, 20 55 C20 75, 50 88, 50 88 C50 88, 80 75, 80 55 C80 35, 65 15, 50 15 Z" />
          <circle cx="50" cy="50" r="10" className="text-white" />
        </svg>
      </div>

      {/* Glow Suave em Vermelho Claro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-3xl pointer-events-none z-0" />

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <div className="relative z-10 mx-auto max-w-screen-xl text-center">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            O passo a passo para encomendar seu <span className="text-red-600">presente perfeito</span>
          </h2>
        </div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              {/* Ícone com Círculo de Número Sobreposto */}
              <div className="relative mb-4">
                <div className={`w-20 h-20 rounded-full ${step.bgColor} ${step.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-inner`}>
                  {step.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center shadow-md border-2 border-white">
                  {step.number}
                </span>
              </div>

              {/* Título da Etapa */}
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5 max-w-xs">
                {step.description}
              </p>

              {/* Card de Imagem Ilustrativa da Etapa */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-white shadow-sm border border-red-100/80 group-hover:shadow-xl group-hover:border-red-200 transition-all duration-300">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          ))}
        </div>

        {/* ================= BOTÃO DE CTA PRINCIPAL ================= */}
        <div className="pt-4">
          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20de%20flores."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-red-600 px-9 py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/40 hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Fazer Pedido no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}