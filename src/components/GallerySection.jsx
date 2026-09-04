import { useState } from "react";

import flor5 from "../assets/img/flor5.jpeg";
import flor6 from "../assets/img/flor6.jpeg";
import flor7 from "../assets/img/flor7.jpeg";
import flor9 from "../assets/img/flor9.jpeg";
import arranjo1 from "../assets/img/arranjo1.jpeg";
import arranjo2 from "../assets/img/arranjo2.jpeg";

const categories = ["Todos", "Buquês", "Arranjos", "Cestas"];

const galleryItems = [
  {
    id: 1,
    title: "Buquê Encanto de Rosas",
    category: "Buquês",
    image: flor5,
  },
  {
    id: 2,
    title: "Buquê Primavera Delicada",
    category: "Buquês",
    image: flor6,
  },
  {
    id: 3,
    title: "Arranjo Floral de Mesa",
    category: "Arranjos",
    image: arranjo1,
  },
  {
    id: 4,
    title: "Arranjo Premium Sofisticado",
    category: "Arranjos",
    image: arranjo2,
  },
  {
    id: 5,
    title: "Cesta de Flores & Afeto",
    category: "Cestas",
    image: flor7,
  },
  {
    id: 6,
    title: "Decoração Especial para Eventos",
    category: "Buquês",
    image: flor9,
  },
];

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("Todos");

  const filteredItems =
    activeTab === "Todos"
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
                  href={`https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostei%20do%20${encodeURIComponent(
                    item.title
                  )}%20da%20galeria.`}
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