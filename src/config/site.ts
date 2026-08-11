/**
 * Configurações centrais do site — edite apenas este arquivo para
 * atualizar links de contato, redes sociais e agendamento.
 */
export const site = {
  name: "Agência Rocha",
  tagline: "Tráfego • Estratégia • Resultados",
  /** Número no formato internacional, apenas dígitos. Ex: 5511999999999 */
  whatsappNumber: "5571992641675",
  whatsappMessage:
    "Olá! Quero conhecer as estratégias de tráfego pago da Agência Rocha.",
  /** Cole aqui o link do Calendly */
  calendlyUrl: "https://calendly.com/agenciarocha/45min",
  /** Perfil do Instagram */
  instagramUrl: "https://www.instagram.com/renatorochapro/",
} as const;

export const whatsappUrl = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
  : `https://wa.me/?text=${encodeURIComponent(site.whatsappMessage)}`;
