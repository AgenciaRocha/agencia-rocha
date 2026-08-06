/**
 * Configurações centrais do site — edite apenas este arquivo para
 * atualizar links de contato, redes sociais e agendamento.
 */
export const site = {
  name: "Agência Rocha",
  tagline: "Tráfego • Estratégia • Resultados",
  /** Número no formato internacional, apenas dígitos. Ex: 5511999999999 */
  whatsappNumber: "",
  whatsappMessage:
    "Olá! Quero conhecer as estratégias de tráfego pago da Agência Rocha.",
  /** Cole aqui o link do Calendly (ex: https://calendly.com/sua-conta/consultoria) */
  calendlyUrl: "https://calendly.com/",
  /** Perfil do Instagram */
  instagramUrl: "https://instagram.com/",
} as const;

export const whatsappUrl = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
  : `https://wa.me/?text=${encodeURIComponent(site.whatsappMessage)}`;
