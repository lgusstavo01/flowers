import { useState } from "react";

const categories = ["Todos", "Buquês", "Arranjos", "Cestas", "Eventos"];

const galleryItems = [
  {
    id: 1,
    category: "Buquês",
    title: "Buquê Clássico de Rosas Vermelhas",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Arranjos",
    title: "Arranjo de Mesa em Tons de Rosa",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Cestas",
    title: "Cesta Especial Romântica",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Buquês",
    title: "Buquê Mix Flores do Campo",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Eventos",
    title: "Decoração Floral para Festas",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Arranjos",
    title: "Vasos Decorativos com Orquídeas",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=600&auto=format&fit=crop",
  },
];

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("Todos");

  const filteredItems = activeTab === "Todos"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="bg-white py-20 px-4 lg:py-28">
      <div className="mx-auto max-w-screen-xl text-center">
        
        {/* Cabeçalho */}
        <div className="max-w-xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 mb-3 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Galeria de <span className="text-red-600">Encantos</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-3">
            Conheça algumas das nossas criações recentes feitas com amor e flores selecionadas.
          </p>
        </div>

        {/* Filtros por Categoria */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                  : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100"
            >
              {/* Imagem */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Vermelho/Escuro ao Passar o Mouse */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-red-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-lg font-serif font-semibold mb-3">
                  {item.title}
                </h3>
                
                <a
                  href={`https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostei%20do%20${encodeURIComponent(item.title)}%20da%20galeria.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-red-600 px-4 py-2 rounded-full w-fit hover:bg-red-700 transition"
                >
                  Encomendar Igual
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}