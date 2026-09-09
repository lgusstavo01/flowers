import logoCompleta from "../assets/iv/banner.jpeg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-20"
      // style={{
      //   backgroundImage: `url('https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1920&auto=format&fit=crop')`,
      // }}
    >
      {/* Gradiente escuro com toque avermelhado para leitura do texto */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-red-950/30" /> */}
<div className="pointer-events-none absolute top-1/2 -right-16 -translate-y-1/2 opacity-15 text-red-400">
        <svg className="w-72 h-72 md:w-96 md:h-96 fill-current" viewBox="0 0 100 100">
          <path d="M10 80 Q 20 20, 90 10 Q 80 80, 10 80 Z" />
          <path d="M10 80 Q 50 45, 90 10" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        
        {/* Lado Esquerdo: Logo, Textos e Botão */}
        <div className="md:col-span-7 text-left text-gray-600">
          
          {/* Logo posicionada acima do título */}
          <img
            src={logoCompleta}
            alt="Malu Flores Logo"
            className="h-64 w-auto mb-4 object-contain rounded-md"
          />

          {/* <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            Floricultura & Paisagismo
          </span> */}

          <h1 className="mb-4 text-lg font-extrabold tracking-tight md:text-5xl lg:text-6xl leading-tight">
          Flores que <span className="text-red-500">Encantam!</span>
          </h1>

          <p className="mb-8 text-lg font-light text-gray-600 max-w-xl">
            Uma solução completa para transformar sua casa ou evento com a beleza viva das plantas e flores frescas.
          </p>

          <a
            href="#servicos"
            className="inline-block rounded-full bg-red-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-700 hover:shadow-red-700/50 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Nossas Soluções
          </a>
        </div>

        {/* Lado Direito: Círculo Ampliado */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-80 h-80 sm:w-[26rem] sm:h-[26rem] lg:w-[30rem] lg:h-[30rem] rounded-full border-4 border-white shadow-2xl shadow-red-950/50 overflow-hidden transform hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop"
              alt="Jardinagem e Floricultura"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}