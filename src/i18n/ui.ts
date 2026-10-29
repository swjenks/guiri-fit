import type { Locale } from "./config";

export type UiStrings = {
  navContact: string;
  languageNavLabel: string;
  footerQuickLinks: string;
  footerContact: string;
  footerHome: string;
  footerRights: string;
  getStarted: string;
  joinWhatsApp: string;
  startYourJourney: string;
  aboutMe: string;
  more: string;
  comingSoonOverlay: string;
  socialComingSoon: string;
  faqTitle: string;
  faqStillQuestions: string;
  faqContact: string;
  contactFormSubmit: string;
  contactFormNotice: string;
  contactFormFullName: string;
  contactFormEmail: string;
  contactFormWhatsApp: string;
  contactFormMessage: string;
  contactFormNamePlaceholder: string;
  contactFormEmailPlaceholder: string;
  contactFormWhatsAppPlaceholder: string;
  contactFormMessagePlaceholder: string;
  heroCoachName: string;
  heroCoachRole: string;
  pricingTable: {
    package: string;
    total: string;
    sessionsPerMonth: string;
    sessionsShort: string;
    effectivePerSession: string;
    effectiveShort: string;
    discount: string;
    whatsIncluded: string;
    price: string;
    service: string;
    ariaPricingDetails: string;
  };
  notFound: {
    title: string;
    home: string;
    contact: string;
  };
};

const en: UiStrings = {
  navContact: "Contact",
  languageNavLabel: "Language",
  footerQuickLinks: "Quick Links",
  footerContact: "Contact Me",
  footerHome: "Home",
  footerRights: "All rights reserved.",
  getStarted: "Get Started",
  joinWhatsApp: "Join us on WhatsApp",
  startYourJourney: "Start Your Journey",
  aboutMe: "About Me",
  more: "More",
  comingSoonOverlay: "Online Options Coming Soon",
  socialComingSoon: "Social Media to come eventually...",
  faqTitle: "Frequently Asked Questions",
  faqStillQuestions: "Still have questions?",
  faqContact: "Contact Me",
  contactFormSubmit: "Send Message",
  contactFormNotice:
    "This form is still under construction. For now, please email me directly at",
  contactFormFullName: "Full Name",
  contactFormEmail: "Email Address",
  contactFormWhatsApp: "WhatsApp",
  contactFormMessage: "Message",
  contactFormNamePlaceholder: "John Doe",
  contactFormEmailPlaceholder: "john@example.com",
  contactFormWhatsAppPlaceholder: "+34 600 000 000",
  contactFormMessagePlaceholder: "Tell me about your fitness goals…",
  heroCoachName: "Coach Shawn",
  heroCoachRole: "Your Guiri Trainer",
  pricingTable: {
    package: "Package",
    total: "Total",
    sessionsPerMonth: "Sessions/Month",
    sessionsShort: "Sessions",
    effectivePerSession: "Effective €/session",
    effectiveShort: "€/session",
    discount: "Discount",
    whatsIncluded: "What's Included",
    price: "Price",
    service: "Service",
    ariaPricingDetails: "Pricing details for",
  },
  notFound: {
    title: "Page Not Found",
    home: "Back to Home",
    contact: "Contact Me",
  },
} as const;

const es: UiStrings = {
  navContact: "Contacto",
  languageNavLabel: "Idioma",
  footerQuickLinks: "Enlaces",
  footerContact: "Contacto",
  footerHome: "Inicio",
  footerRights: "Todos los derechos reservados.",
  getStarted: "Empezar",
  joinWhatsApp: "Únete en WhatsApp",
  startYourJourney: "Empieza tu camino",
  aboutMe: "Sobre mí",
  more: "Más",
  comingSoonOverlay: "Opciones online próximamente",
  socialComingSoon: "Redes sociales próximamente…",
  faqTitle: "Preguntas frecuentes",
  faqStillQuestions: "¿Sigues con dudas?",
  faqContact: "Contacto",
  contactFormSubmit: "Enviar mensaje",
  contactFormNotice:
    "Este formulario está en construcción. Por ahora, escríbeme directamente a",
  contactFormFullName: "Nombre completo",
  contactFormEmail: "Correo electrónico",
  contactFormWhatsApp: "WhatsApp",
  contactFormMessage: "Mensaje",
  contactFormNamePlaceholder: "Tu nombre",
  contactFormEmailPlaceholder: "tu@correo.com",
  contactFormWhatsAppPlaceholder: "+34 600 000 000",
  contactFormMessagePlaceholder: "Cuéntame tus objetivos fitness…",
  heroCoachName: "Coach Shawn",
  heroCoachRole: "Tu entrenador Guiri",
  pricingTable: {
    package: "Paquete",
    total: "Total",
    sessionsPerMonth: "Sesiones/mes",
    sessionsShort: "Sesiones",
    effectivePerSession: "€/sesión efectivo",
    effectiveShort: "€/sesión",
    discount: "Descuento",
    whatsIncluded: "Qué incluye",
    price: "Precio",
    service: "Servicio",
    ariaPricingDetails: "Detalles de precios para",
  },
  notFound: {
    title: "Página no encontrada",
    home: "Volver al inicio",
    contact: "Contacto",
  },
};

export function getUi(locale: Locale) {
  return locale === "es" ? es : en;
}
