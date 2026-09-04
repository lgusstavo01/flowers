export function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-20"
      style={{
        // Imagem de fundo com arranjo floral
        backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      {/* Gradiente escuro com toque avermelhado para leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-red-950/30" />

      <div className="relative mx-auto max-w-screen-xl px-4 py-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        
        {/* Lado Esquerdo: Textos e Botão em Vermelho e Branco */}
        <div className="md:col-span-7 text-left text-white">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            Floricultura & Paisagismo
          </span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl leading-tight">
            Arranjos & Soluções em <br />
            <span className="text-red-500">Paisagismo</span>
          </h1>

          <p className="mb-8 text-lg font-light text-stone-200 max-w-xl">
            Uma solução completa para transformar sua casa ou evento com a beleza viva das plantas e flores frescas.
          </p>

          {/* Botão Vermelho com texto Branco */}
          <a
            href="#servicos"
            className="inline-block rounded-full bg-red-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-700 hover:shadow-red-700/50 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Nossas Soluções
          </a>
        </div>

        {/* Lado Direito: Imagem Circular com Borda Branca */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white shadow-2xl shadow-red-950/50 overflow-hidden transform hover:scale-105 transition duration-500">
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