import { siteData as enSiteData } from "../siteData";

/** Spanish overrides for user-facing copy (schedules & prices stay shared). */
export const spanishContent = {
  siteData: {
    ...enSiteData,
    tagline: "Ponte en forma, hazte fuerte, hazte GUIRIFIT",
    description:
      "Entrenamiento personal y grupal de fitness funcional para todos los niveles en Granada",
  },
  navigation: [
    { name: "Sobre mí", href: "/about" },
    { name: "Servicios", href: "/services" },
    { name: "Horarios", href: "/hours" },
    { name: "Precios", href: "/pricing" },
  ],
  socialMediaComingSoonNote: "Redes sociales próximamente…",
  serviceComingSoonMessage: "Opciones online próximamente",
  contactInfo: [
    {
      icon: "ri-map-pin-line",
      title: "Dirección",
      content: enSiteData.address,
      link: null,
    },
    {
      icon: "ri-whatsapp-line",
      title: "WhatsApp",
      content: enSiteData.phone,
      link: `https://wa.me/${enSiteData.phone.replace(/\D/g, "")}`,
    },
    {
      icon: "ri-mail-line",
      title: "Correo",
      content: enSiteData.email,
      link: `mailto:${enSiteData.email}`,
    },
  ],
  features: [
    {
      title: "Entrenamiento personal",
      description:
        "Entrenamiento uno a uno con Coach Shawn, adaptado a tus objetivos y nivel.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Entrenamiento grupal",
      description:
        "¿Quieres entrenar con amigos o familia? Clases privadas para grupos de 2 a 4 personas.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Entrenamiento al aire libre (temporada)",
      description:
        "Entrena con otros miembros de GUIRIFIT, conoce gente nueva y motivaos mutuamente.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Coaching online",
      description:
        "Entrena a tu ritmo y horario con planes y seguimiento a distancia.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Apoyo nutricional",
      description:
        "Planes de nutrición personalizados que complementan tu entrenamiento.",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Comunidad",
      description:
        "Únete a una comunidad de expats, guiris y aficionados al fitness local.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
    },
  ],
  classes: [
    {
      name: "Entrenamiento personal",
      slug: "personal-training",
      description: "Entrenamiento 1 a 1 con Coach Shawn.",
      detailedDescription:
        "¿Objetivos concretos? Te ayudo a alcanzarlos con un plan personalizado según tus necesidades y nivel.",
      duration: "60 min",
      difficulty: "Todos los niveles",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
      benefits: [
        "Plan personalizado",
        "Entrenos orientados a objetivos",
        "Horario flexible",
        "Orientación nutricional incluida",
      ],
      trainer: "Coach Shawn",
      whatToExpect:
        "Definimos tus objetivos, valoro tu nivel actual y creo un plan adaptado a ti.",
    },
    {
      name: "Entrenamiento grupal",
      slug: "group-training",
      description: "Clases privadas para grupos de 2 a 4 personas.",
      detailedDescription:
        "Entrena con amigos o familia: más responsabilidad compartida y más diversión.",
      duration: "60 min",
      difficulty: "Todos los niveles",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
      benefits: [
        "Entrenamiento privado en grupo",
        "Responsabilidad compartida",
        "Adaptado al grupo",
        "Dinámico y motivador",
      ],
      trainer: "Coach Shawn",
      whatToExpect:
        "Definimos objetivos del grupo, valoro a cada participante y diseño un plan para todos.",
    },
    {
      name: "Entrenamiento al aire libre",
      slug: "outdoor-training",
      description:
        "Entrenamiento grupal de temporada en un parque de calistenia local.",
      detailedDescription:
        "Sesiones al aire libre con la comunidad GUIRIFIT: nuevos amigos, motivación y vitamina D.",
      duration: "60 min",
      difficulty: "Todos los niveles",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
      benefits: [
        "Al aire libre",
        "Grupo y responsabilidad",
        "Variado y divertido",
        "Rutinas distintas cada día",
      ],
      trainer: "Coach Shawn",
      whatToExpect:
        "Donde empezó todo: progresiones para todos los niveles, fitness funcional e HIIT con rutina nueva cada día.",
    },
    {
      name: "Coaching online",
      slug: "online-coaching",
      description:
        "Planes adaptados a ti con feedback y apoyo de Coach Shawn.",
      detailedDescription:
        "Entrena a tu ritmo con un plan personalizado y revisión de forma y progreso conmigo.",
      duration: "30 min por semana",
      difficulty: "Todos los niveles",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
      benefits: [
        "Plan personalizado",
        "Entrenos según objetivos",
        "Horario flexible",
        "Orientación nutricional incluida",
      ],
      trainer: "Coach Shawn",
      whatToExpect:
        "Definimos objetivos, valoro tu nivel y creo un plan adaptado a tus necesidades.",
    },
    {
      name: "Apoyo nutricional",
      slug: "nutrition-support",
      description:
        "Planes de nutrición personalizados para complementar tu entrenamiento.",
      detailedDescription:
        "La salud va más allá del gimnasio. Te ayudo con un plan sostenible y realista según tus objetivos.",
      duration: "60 min",
      difficulty: "Todos los niveles",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
      benefits: [
        "Nutrición personalizada",
        "Comidas según objetivos",
        "Sostenible (sin dietas de moda)",
        "Adaptado a tu estilo de vida",
      ],
      trainer: "Coach Shawn",
      whatToExpect:
        "Cuestionario inicial, plan personalizado y reunión para ajustes según lo que ya disfrutas comiendo.",
    },
    {
      name: "Comunidad",
      slug: "community",
      description:
        "Comunidad de expats, guiris y aficionados al fitness en Granada.",
      detailedDescription:
        "Creo en una comunidad fuerte, sin egos, donde el apoyo mutuo es clave para salud y felicidad.",
      duration: "Para siempre",
      difficulty: "Todos los niveles",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
      benefits: [
        "Comunidad de apoyo",
        "Nuevas amistades",
        "Motivación entre pares",
        "Sin juicios",
      ],
      trainer: "Tus compañeros",
      whatToExpect:
        "No es una clase de pago: grupo de WhatsApp para progreso, dudas, apoyo y quedadas (senderismo, tapas…).",
    },
  ],
  faqs: [
    {
      question: "¿Tengo que estar en forma para entrenar contigo?",
      answer:
        "¡Para nada! Recibo a todos los niveles. Me especializo en ayudarte a empezar y ganar movilidad, fuerza, resistencia y confianza poco a poco.",
    },
    {
      question: "¿Qué debo traer?",
      answer:
        "Poco: agua, toalla, ropa cómoda y energía. Puedes traer tu material, pero tendré extras disponibles.",
    },
    {
      question: "¿Hay prueba antes de comprometerme?",
      answer:
        "Ofrezco una consulta gratuita de 20 minutos online (o presencial si prefieres). En primavera/otoño, la primera sesión al aire libre es gratis si es tu primera vez conmigo.",
    },
    {
      question: "¿Debo comer antes o después de la sesión?",
      answer:
        "Respuesta corta: ¡ambas!\n\nComida ligera con carbohidratos y proteína 1–2 h antes para energía. Después, comida rica en proteína para recuperar y construir músculo.",
    },
    {
      question: "¿Cuál es tu horario?",
      answer:
        "Cambia según la temporada: primavera/otoño (exterior) vs verano/invierno (estudio). Consulta el calendario aquí. Respondo WhatsApp y correo en 24 h.",
      answerLink: { href: "/hours", label: "aquí" },
    },
    {
      question: "¿Puedo entrenar con un compañero?",
      answer:
        "¡Claro! Clases privadas para 2–4 personas y sesiones al aire libre más grandes en primavera/otoño (hasta 10). Ideal para entrenar con alguien y manteneros responsables.",
    },
    {
      question: "¿Ofreces coaching nutricional?",
      answer:
        "Estoy completando la certificación, pero tengo años de experiencia. No promuevo dietas de moda: planes sostenibles y realistas para tus objetivos.",
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Miembro desde hace 2 años",
      content:
        "GUIRIFIT ha transformado mi camino fitness. Los entrenadores son increíbles y la comunidad muy solidaria.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Miembro desde hace 1 año",
      content:
        "¡El mejor entrenamiento en la ciudad! Equipamiento top y horarios que encajan con mi vida.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Miembro desde hace 6 meses",
      content:
        "Me encanta la variedad de clases. Las sesiones HIIT son intensas y muy gratificantes. ¡Recomendado!",
      rating: 5,
    },
  ],
  successStories: [
    {
      name: "Jessica Martinez",
      age: 32,
      duration: "8 meses",
      result: "Perdió 20 kg",
      story:
        "Al principio dudaba, pero GUIRIFIT cambió mi vida. Entrenadores y comunidad me mantuvieron motivada.",
      beforeImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
    },
    {
      name: "David Thompson",
      age: 28,
      duration: "6 meses",
      result: "Ganó 9 kg de músculo",
      story:
        "El programa de fuerza y la nutrición me ayudaron a lograr el físico que buscaba.",
      beforeImage:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
    },
    {
      name: "Lisa Anderson",
      age: 35,
      duration: "1 año",
      result: "Completó su primer maratón",
      story:
        "De no correr a terminar un maratón: los programas de cardio y las clases me dieron resistencia y confianza.",
      beforeImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    },
  ],
  trainers: [
    {
      name: "Shawn Jenkins",
      role: "Coach y entrenador personal",
      specialization: "Fitness funcional e HIIT en circuito",
      experience: "Más de 25 años de experiencia fitness",
      bio: "Entrenador personal recién certificado, especializado en ayudar a personas de todas las edades y niveles. He entrenado HIIT, HYROX, CrossFit, calistenia, TRX, kettlebells, circuitos, running, kickboxing muay thai y yoga. Actualmente completo la certificación en nutrición.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
      certifications: {
        institute: "European Personal Training Institute (EPTI)",
        logo: "epti",
        credentials: [
          "Master Gym Instructor",
          "Master Personal Trainer",
          "Kettlebell Trainer",
          "Suspension (TRX) Trainer",
          "Circuit Trainer",
          "Padwork & Boxing Trainer",
          "Outdoor Trainer",
        ],
      },
      currentlyStudying: [
        {
          institute: "CrossFit",
          logo: "crossfit",
          credentials: ["Level 1 Instructor"],
        },
        {
          institute: "National Academy of Sports Medicine (NASM)",
          logo: "nasm",
          credentials: ["Nutrition Coach"],
        },
      ],
    },
  ],
  history: [
    {
      year: "1998",
      title: "Mis primeros pasos",
      description:
        "Empecé cross y fuerza en el instituto y llevo obsesionado con el fitness desde entonces.",
    },
    {
      year: "2002",
      title: "Subiendo el listón",
      description:
        "Seguí aprendiendo sobre HIIT y técnica en levantamientos pesados para ganar fuerza.",
    },
    {
      year: "2008",
      title: "Competición",
      description:
        "Más enfoque en rendimiento y entrenamiento estructurado.",
    },
    {
      year: "2013",
      title: "Vida de oficina",
      description:
        "Equilibrar trabajo sedentario con entrenamiento constante.",
    },
    {
      year: "2022",
      title: "Volver a entrenar fuerte",
      description:
        "Retomé el entrenamiento intenso con nuevas metas y métodos.",
    },
    {
      year: "2026",
      title: "Pasión convertida en negocio",
      description:
        "Coach certificado ayudando a personas de todos los niveles con fitness funcional, HIIT, calistenia y más, mientras termino la certificación en nutrición.",
    },
  ],
  paymentOptions: {
    methods: [
      "Bizum",
      "Venmo",
      "PayPal",
      "Apple Pay",
      "Google Pay",
      "Transferencia bancaria",
    ],
    categories: [
      {
        title: "Coaching online",
        comingSoonNote: "Todas las opciones por definir",
        plans: [
          {
            type: "Sesión suelta",
            description: "Revisión puntual y ajuste del programa",
          },
          {
            type: "Mensual",
            description:
              "Plan personalizado con feedback semanal y mensajes",
          },
          {
            type: "Bloque 10 semanas",
            description: "Programa estructurado con revisiones de forma",
          },
          {
            type: "Anual",
            description: "Coaching remoto todo el año — consultar detalles",
          },
          {
            type: "Complemento",
            description: "Combinar con entrenamiento presencial (híbrido)",
          },
        ],
      },
    ],
    freeSeasonalClass: {
      title: "Clase grupal de temporada gratis",
      description:
        "¡Clientes nuevos pueden probar una clase de temporada gratis!",
    },
    freeConsultation: {
      title: "Consulta gratuita de 20 minutos",
      description: "Válida solo para entrenamiento personal y grupal.",
    },
  },
  pricingFaqs: [
    {
      question: "¿Puedo cambiar o cancelar mi plan mensual en cualquier momento?",
      answer:
        "Sí, con una semana de aviso antes de fin de mes. Sin contratos a largo plazo.",
    },
    {
      question:
        "Si tengo entrenamiento personal o grupal, ¿incluye clases al aire libre?",
      answer: "No, son opciones separadas.",
    },
    {
      question: "¿Puedo pagar con tarjeta?",
      answer: "De momento no, pero puede haber esa opción en el futuro.",
    },
  ],
  pricingSectionCopy: {
    personalTraining: {
      title: "Entrenamiento personal",
      subtitle: "Tarifa base €30/sesión • Descuentos por volumen hasta 18%",
    },
    groupTraining: {
      title: "Entrenamiento grupal",
    },
    outdoor: {
      title: "Entrenamiento al aire libre (temporada)",
    },
    nutrition: {
      title: "Apoyo nutricional",
    },
    onlineCoaching: {
      title: "Coaching online",
      tbd: "Todas las opciones por definir",
    },
  },
};
