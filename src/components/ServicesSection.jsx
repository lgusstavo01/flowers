import { whatsappLink } from "../config/site";

// Lista de serviços atualizada
const services = [
  {
    title: "Buquês",
    description: "Buquês exclusivos e personalizados, criados com flores frescas selecionadas para surpreender em momentos especiais.",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z M12 8v8 M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Arranjos",
    description: "Arranjos florais elegantes e sofisticados, desenhados para harmonizar e trazer vida a qualquer ambiente.",
    bgColor: "bg-red-100/70",
    iconColor: "text-red-700",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Eventos",
    description: "Decoração floral sob medida para transformar casamentos, festas corporativas e celebrações inesquecíveis.",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-red-50/30 py-24 px-4"
    >
      {/* ================= ELEMENTOS DECORATIVOS ================= */}

      {/* 1. Tulipa Superior Esquerda */}
      <div className="absolute top-8 left-4 md:left-12 pointer-events-none z-0 animate-float-slow opacity-60">
        <svg className="w-24 h-24 md:w-32 md:h-32 text-red-400 fill-current" viewBox="0 0 100 100">
          <path d="M50 20 C30 20, 20 40, 20 60 C20 80, 50 90, 50 90 C50 90, 80 80, 80 60 C80 40, 70 20, 50 20 Z" />
          <path d="M50 20 Q40 45 30 65 M50 20 Q60 45 70 65" stroke="#fff" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* 2. Pétala Flutuante Meio-Esquerda */}
      <div className="absolute top-1/2 left-2 md:left-8 pointer-events-none z-0 animate-float-reverse opacity-50">
        <svg className="w-14 h-14 text-rose-300 fill-current" viewBox="0 0 100 100">
          <path d="M50 10 C20 40, 20 70, 50 90 C80 70, 80 40, 50 10 Z" />
        </svg>
      </div>

      {/* 3. Folha Grande Inferior Esquerda */}
      <div className="absolute -bottom-4 left-2 md:left-12 pointer-events-none z-0 animate-float-reverse opacity-40">
        <svg className="w-32 h-32 md:w-44 md:h-44 text-red-300 fill-current" viewBox="0 0 100 100">
          <path d="M10 80 Q 20 20, 90 10 Q 80 80, 10 80 Z" />
          <path d="M10 80 Q 50 45, 90 10" stroke="#fff" strokeWidth="2.5" fill="none" />
          <path d="M40 50 Q 55 40, 70 45" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* 4. Flor Giratória Superior Centro/Direita */}
      <div className="absolute top-10 right-1/3 pointer-events-none z-0 animate-spin-slow opacity-30 hidden md:block">
        <svg className="w-20 h-20 text-red-300 fill-current" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="15" className="text-red-500" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="20"
              rx="8"
              ry="18"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      </div>

      {/* 5. Galho Suspenso Superior Direito */}
      <div className="absolute top-0 right-6 md:right-24 pointer-events-none z-0 animate-swing opacity-60">
        <svg className="w-28 h-56 md:w-36 md:h-72 text-red-900/30" viewBox="0 0 100 200" fill="none" stroke="currentColor">
          <path d="M50 0 V130" strokeWidth="2.5" strokeDasharray="5 5" />
          <circle cx="50" cy="140" r="15" fill="currentColor" />
          <path d="M50 160 C35 160, 25 175, 25 190 C25 200, 50 205, 50 205 C50 205, 75 200, 75 190 C75 175, 65 160, 50 160 Z" fill="#dc2626" opacity="0.6" />
        </svg>
      </div>

      {/* 6. Flor Rosa Flutuante Meio-Direita */}
      <div className="absolute top-1/2 right-4 md:right-10 pointer-events-none z-0 animate-float-slow opacity-60">
        <svg className="w-20 h-20 md:w-28 md:h-28 text-red-400 fill-current" viewBox="0 0 100 100">
          <path d="M50 15 C35 15, 20 35, 20 55 C20 75, 50 88, 50 88 C50 88, 80 75, 80 55 C80 35, 65 15, 50 15 Z" />
          <circle cx="50" cy="50" r="10" className="text-white" />
        </svg>
      </div>

      {/* 7. Folha Inferior Direita */}
      <div className="absolute bottom-6 right-8 md:right-28 pointer-events-none z-0 animate-float-reverse opacity-40">
        <svg className="w-28 h-28 md:w-36 md:h-36 text-red-500 fill-current" viewBox="0 0 100 100">
          <path d="M30 90 Q 10 30, 80 20 Q 90 80, 30 90 Z" />
          <path d="M30 90 Q 50 50, 80 20" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Glow Suave em Vermelho Claro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-3xl pointer-events-none z-0" />

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-wide">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Oferecemos soluções completas para transformar espaços e momentos especiais com a beleza única das flores.
          </p>
        </div>

        {/* Grid dos Cards de Serviço */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center border border-red-100/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center group"
            >
              <div className={`w-20 h-20 rounded-full ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-inner`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= BOTÃO DO WHATSAPP ================= */}
        <div className="mt-16 text-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}