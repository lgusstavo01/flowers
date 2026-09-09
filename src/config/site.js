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
    address: "Rua das Flores, 123 - Centro",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975734273295!2d-46.65866868502223!3d-23.561324484682855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr",
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
