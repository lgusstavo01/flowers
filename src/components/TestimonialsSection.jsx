const testimonials = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "Cliente Frequente",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    text: "Encomendei um buquê de rosas para o aniversário da minha mãe e fiquei impressionada! As flores vieram super frescas e o arranjo durou mais de uma semana intacto. Atendimento nota 1000!",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Pedido no WhatsApp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "Precisei de uma entrega de última hora para nossa data de namoro. Resolveram tudo pelo WhatsApp em minutos e entregaram exatamente no horário combinado. Salvou a minha surpresa!",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Mendes",
    role: "Decoração de Evento",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    text: "Fizeram toda a parte floral do meu mini wedding. O cuidado com as cores e a montagem das mesas foi impecável. Todo mundo elogiou bastante a beleza dos arranjos!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="bg-red-50/30 py-20 px-4 lg:py-28 relative overflow-hidden"
    >
      {/* Elemento Decorativo no Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-screen-xl text-center">
        
        {/* Cabeçalho */}
        <div className="max-w-xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            O que dizem os nossos <span className="text-red-600">Clientes</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3">
            A satisfação de quem já recebeu o carinho e o perfume das nossas flores.
          </p>
        </div>

        {/* Grid com os 3 Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-red-100/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              <div>
                {/* Ícone de Aspas no topo do card */}
                <div className="text-red-200 group-hover:text-red-400 transition-colors mb-4">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Estrelas */}
                <div className="flex gap-1 mb-4 text-red-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed italic mb-8">
                  "{item.text}"
                </p>
              </div>

              {/* Perfil do Autor */}
              <div className="flex items-center gap-4 pt-4 border-t border-red-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
                />
                <div>
                  <h4 className="font-serif font-semibold text-gray-900 text-base">
                    {item.name}
                  </h4>
                  <span className="text-xs text-red-600 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}