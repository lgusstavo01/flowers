import cardImg from "../assets/iv/card.jpeg";
import bannerImg from "../assets/iv/banner.jpeg";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-white py-20 px-4 lg:py-28"
    >
      {/* Elemento Decorativo no lado direito (Folha gigante suave) */}
      <div className="pointer-events-none absolute top-1/2 -right-16 -translate-y-1/2 opacity-15 text-red-400">
        <svg className="w-72 h-72 md:w-96 md:h-96 fill-current" viewBox="0 0 100 100">
          <path d="M10 80 Q 20 20, 90 10 Q 80 80, 10 80 Z" />
          <path d="M10 80 Q 50 45, 90 10" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LADO ESQUERDO: Layout de Fotos Sobrepostas */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start pb-12 lg:pb-0">

          {/* Foto Principal de Fundo */}
          <div className="relative w-4/5 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-stone-50">
            <img
              src={cardImg}
              alt="Malu Flores - Arranjos e Decoração"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foto Sobreposta */}
          <div className="absolute -bottom-6 right-2 sm:right-8 w-3/5 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group">
            <img
              src={bannerImg}
              alt="Apresentação da Malu Flores"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay com tom vermelho escuro ao passar o mouse */}
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-red-950/20 transition-colors duration-300" />
          </div>

          {/* Arco decorativo vermelho */}
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
            Bem-vindo à <span className="font-semibold text-gray-900">Malu Flores</span>! Criamos arranjos únicos que traduzem sentimentos e transformam momentos especiais em memórias inesquecíveis.
          </p>

          {/* Lista com ícones */}
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
            Nosso compromisso na Malu Flores vai além de vender arranjos: cultivamos experiências e entregamos afeto em forma de flores em toda a região.
          </p>
        </div>

      </div>
    </section>
  );
}
