import { useState } from "react";
import { site } from "../config/site";

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const fallbackMessage =
      "Não foi possível enviar a mensagem. Tente novamente ou chame no WhatsApp.";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || fallbackMessage);
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setErrorMessage(fallbackMessage);
    }
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-red-50/30 py-20 px-4 lg:py-28"
    >
      {/* ================= ÍCONES FLUTUANTES NO FUNDO ================= */}

      {/* 1. Tulipa Superior Esquerda */}
      <div className="absolute top-10 left-6 md:left-12 pointer-events-none z-0 animate-float-slow opacity-50">
        <svg className="w-24 h-24 md:w-32 md:h-32 text-red-400 fill-current" viewBox="0 0 100 100">
          <path d="M50 20 C30 20, 20 40, 20 60 C20 80, 50 90, 50 90 C50 90, 80 80, 80 60 C80 40, 70 20, 50 20 Z" />
          <path d="M50 20 Q40 45 30 65 M50 20 Q60 45 70 65" stroke="#fff" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* 2. Folha Gigante Direita */}
      <div className="absolute top-1/3 -right-10 pointer-events-none z-0 animate-float-reverse opacity-40">
        <svg className="w-36 h-36 md:w-48 md:h-48 text-red-400 fill-current" viewBox="0 0 100 100">
          <path d="M10 80 Q 20 20, 90 10 Q 80 80, 10 80 Z" />
          <path d="M10 80 Q 50 45, 90 10" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* 3. Flor Giratória Inferior Esquerda */}
      <div className="absolute bottom-6 left-8 pointer-events-none z-0 animate-spin-slow opacity-30 hidden md:block">
        <svg className="w-20 h-20 text-red-300 fill-current" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="14" className="text-red-500" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse key={i} cx="50" cy="22" rx="7" ry="16" transform={`rotate(${angle} 50 50)`} />
          ))}
        </svg>
      </div>

      {/* Glow Suave em Vermelho Claro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-3xl pointer-events-none z-0" />

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LADO ESQUERDO: Mapa com Badge Flutuante */}
          <div className="lg:col-span-6 relative pb-8 lg:pb-0">
            {/* Container do Mapa (Substitua o src pela URL de embed do Google Maps da loja) */}
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md border-4 border-white bg-gray-100">
              <iframe
                title="Localização da Floricultura"
                src={site.contact.mapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Badge Flutuante de Endereço (Estilo inspirado na foto) */}
            <div className="absolute -bottom-4 left-4 sm:left-8 bg-red-600 text-white rounded-2xl p-5 shadow-2xl max-w-xs border-4 border-white flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">Venha nos visitar!</h4>
                <p className="text-xs text-red-100 mt-0.5">{site.contact.address}</p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Formulário de Contato */}
          <div className="lg:col-span-6 text-left">
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
              Fale Conosco
            </span>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Vamos criar algo <span className="text-red-600">incrível juntas!</span>
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu Nome"
                    className="w-full rounded-xl bg-white border border-red-100/80 p-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Seu E-mail"
                    className="w-full rounded-xl bg-white border border-red-100/80 p-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Telefone / WhatsApp"
                  className="w-full rounded-xl bg-white border border-red-100/80 p-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Detalhes da mensagem ou pedido..."
                  className="w-full rounded-xl bg-white border border-red-100/80 p-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm resize-none"
                ></textarea>
              </div>

              {status === "success" && (
                <p className="text-sm font-medium text-green-600">
                  Mensagem enviada! Em breve entraremos em contato.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-sm md:text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-red-700/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}