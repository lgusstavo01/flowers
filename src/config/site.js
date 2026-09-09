// Configuração central do site — dados que se repetem em várias seções.
// Trocar os valores placeholder pelos dados reais da loja.

export const site = {
  brand: {
    name: "Malu Flores",
    nameParts: { first: "Malu", highlight: "Flores" },
  },

  // Somente dígitos, com DDI + DDD. Ex.: "5511999999999"
  whatsappNumber: "5571982953846",

  // Mensagem padrão pré-preenchida ao abrir o WhatsApp.
  whatsappDefaultMessage: "Olá! Vim através da Landing Page e tenho interesse",

  contact: {
    phoneDisplay: "(71) 98295-3846",
    email: "contato@maluflores.com.br",
    address:
      "Salvador Norte Shopping - Piso L1, em frente à Melissa - Salvador/BA, 41510-000",
    // Embed sem chave de API (Google Maps aceita ?q=...&output=embed em iframe).
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Salvador%20Norte%20Shopping%2C%20Salvador%20-%20BA%2C%2041510-000&z=16&hl=pt-BR&output=embed",
  },

  hours: [
    { label: "Segunda a Sexta", value: "08h às 18h" },
    { label: "Sábado", value: "08h às 14h" },
    { label: "Domingo & Feriados", value: "Sob encomenda", highlight: true },
  ],

  social: {
    instagram: "#",
    facebook: "#",
  },

  nav: [
    { href: "#home", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#buques-noiva", label: "Buquês de Noiva" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ],
};

// Monta um link de WhatsApp. Sem argumento, usa a mensagem padrão do site.
// Passe `null` para abrir sem nenhuma mensagem.
export function whatsappLink(message = site.whatsappDefaultMessage) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
