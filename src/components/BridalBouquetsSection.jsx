import { useState } from "react";

import { whatsappLink } from "../config/site";
import flor8 from "../assets/img/flor8.jpeg";
import flor10 from "../assets/img/flor10.jpeg";
import flor11 from "../assets/img/flor11.jpeg";
import flor12 from "../assets/img/flor12.jpeg";
import flor13 from "../assets/img/flor13.jpeg";
import flor14 from "../assets/img/flor14.jpeg";

const styles = ["Todos", "Clássico", "Silvestre", "Romântico", "Tropical"];

const bouquets = [
  {
    id: 1,
    name: "Buquê Clássico de Rosas Brancas",
    style: "Clássico",
    description: "Rosas brancas premium e folhagem delicada — o clássico eterno para noivas atemporais.",
    image: flor8,
  },
  {
    id: 2,
    name: "Buquê Silvestre Campo Florido",
    style: "Silvestre",
    description: "Flores do campo, textura solta e ar espontâneo para casamentos ao ar livre.",
    image: flor10,
  },
  {
    id: 3,
    name: "Buquê Romântico Tons Pastel",
    style: "Romântico",
    description: "Peônias, ranúnculos e um toque de eucalipto em uma paleta suave e afetuosa.",
    image: flor11,
  },
  {
    id: 4,
    name: "Buquê Tropical Vibrante",
    style: "Tropical",
    description: "Folhagens exuberantes e flores de cor intensa para uma noiva que quer marcar presença.",
    image: flor12,
  },
  {
    id: 5,
    name: "Buquê Cascata Elegante",
    style: "Clássico",
    description: "Formato cascata alongado, com flores nobres que descem em movimento fluido.",
    image: flor13,
  },
  {
    id: 6,
    name: "Buquê Romântico Vermelho Paixão",
    style: "Romântico",
    description: "Rosas vermelhas e detalhes em bordô para um casamento intenso e apaixonado.",
    image: flor14,
  },
];

const includedItems = [
  {
    title: "Flores frescas do dia",
    description: "Selecionamos e montamos o buquê poucas horas antes da cerimônia.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Prova do buquê",
    description: "Encontro prévio para alinhar formato, flores e paleta de cores com a noiva.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Buquê para o bouquet toss",
    description: "Uma réplica menor de cortesia para o tradicional lançamento do buquê.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Entrega no local",
    description: "Levamos o buquê até você no dia, no horário e endereço combinados.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export function BridalBouquetsSection() {
  const [activeStyle, setActiveStyle] = useState("Todos");

  const filteredBouquets =
    activeStyle === "Todos"
      ? bouquets
      : bouquets.filter((item) => item.style === activeStyle);

  return (
    <section
      id="buques-noiva"
      className="relative overflow-hidden bg-red-50/30 py-20 px-4 lg:py-28"
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

      {/* 3. Aliança Giratória Superior Direita */}
      <div className="absolute top-10 right-1/4 pointer-events-none z-0 animate-spin-slow opacity-25 hidden md:block">
        <svg className="w-24 h-24 text-red-300 fill-current" viewBox="0 0 100 100">
          <circle cx="38" cy="55" r="22" fill="none" stroke="currentColor" strokeWidth="5" />
          <circle cx="62" cy="55" r="22" fill="none" stroke="currentColor" strokeWidth="5" />
          <path d="M44 22 L50 12 L56 22 L50 28 Z" />
        </svg>
      </div>

      {/* 4. Folha Grande Inferior Direita */}
      <div className="absolute -bottom-6 right-4 md:right-16 pointer-events-none z-0 animate-float-reverse opacity-40">
        <svg className="w-32 h-32 md:w-44 md:h-44 text-red-300 fill-current" viewBox="0 0 100 100">
          <path d="M10 80 Q 20 20, 90 10 Q 80 80, 10 80 Z" />
          <path d="M10 80 Q 50 45, 90 10" stroke="#fff" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      {/* Glow Suave em Vermelho Claro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-3xl pointer-events-none z-0" />

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <div className="relative z-10 mx-auto max-w-screen-xl">

        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="inline-block px-3.5 py-1 mb-3 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
            Para o Grande Dia
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Buquês de <span className="text-red-600">Noiva</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3">
            Cada buquê é desenhado a partir da sua história, do vestido e do
            estilo do casamento. Flores frescas, montagem artesanal e o cuidado
            que esse dia merece.
          </p>
        </div>

        {/* Filtros por Estilo */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeStyle === style
                  ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                  : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Grid de Buquês */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredBouquets.map((item) => (
            <div
              key={item.id}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay: sempre visível no mobile, revelado no hover a partir de md */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-red-950/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {item.style}
                </span>
                <h3 className="text-white text-lg font-serif font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="hidden sm:block text-stone-200 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-red-600 px-4 py-2 rounded-full w-fit hover:bg-red-700 transition"
                >
                  Quero Este Buquê
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* O que está incluso */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {includedItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-red-100/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-serif font-semibold text-gray-900 mb-1.5">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Principal */}
        <div className="mt-16 text-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Agendar Conversa sobre meu Buquê
          </a>
        </div>

      </div>
    </section>
  );
}
