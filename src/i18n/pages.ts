import type { Locale } from "./config";

const en = {
  home: {
    heroLines: [
      { text: "Get healthy" },
      { text: "get strong" },
      { text: "get ", suffixBrand: true },
    ],
    ctaTitle: "Ready to start your fitness journey?",
    ctaBody: "Sometimes, all you need is a little nudge to hit this button...",
    ctaButton: "Start Your Adventure",
    faqSubtitle: "Everything you need to know about GUIRIFIT",
    aboutIntro: {
      title: "What is GUIRIFIT?",
      lead:
        "GUIRIFIT is based in functional fitness, which is a training classification designed to prepare the body for real-life movements and daily activities by simulating common tasks like walking, pushing, pulling, bending, and squatting. Unlike traditional isolation exercises that target specific muscles for aesthetic purposes, functional fitness focuses on compound movements that engage multiple muscle groups and joints simultaneously to improve overall coordination, stability, and strength.",
      cards: [
        {
          title: "Real-World Application",
          description:
            "Exercises mimic activities such as lifting objects, climbing stairs, or carrying groceries, making everyday tasks easier and safer.",
        },
        {
          title: "Increased Health and Injury Prevention",
          description:
            "By strengthening core muscles, improving balance, and enhancing mobility, this approach reduces the risk of injury during daily life.",
        },
        {
          title: "Efficiency and Adaptability",
          description:
            "It targets multiple muscle groups at once, providing a time-efficient workout that boosts cardiovascular health and calorie burn without requiring specialized equipment.",
        },
      ],
    },
  },
  about: {
    metaDescription: "Meet Coach Shawn and learn about the mission behind GUIRIFIT",
    heroTitle: "About Me",
    heroSubtitle: "Get to know your Guiri Coach",
    specializedIn: "Specialized in",
    missionTitle: "My Mission",
    missionBody:
      "I provide expert guidance and a supportive environment that empowers everyone that trains with me to push their limits and achieve extraordinary results.",
    valuesTitle: "My Values",
    values: [
      {
        title: "Health",
        body: "Training and habits that support long-term wellbeing—not quick fixes or burnout",
      },
      {
        title: "Fitness",
        body: "Building strength, stamina, and skill at a level that fits your life and goals",
      },
      {
        title: "Community",
        body: "A supportive circle where people show up, encourage each other, and stay accountable",
      },
    ],
    journeyTitle: "My Journey",
    certificationsTitle: "Certifications",
    certificationsInstitution: "Institution",
    certificationsCertification: "Certification",
    certificationsStatus: "Status",
    certificationCertified: "Certified",
    certificationInProgress: "In Progress",
  },
  contact: {
    metaDescription: "Get in touch with us to start your fitness journey",
    heroTitle: "Contact Me",
    heroSubtitle:
      "We're here to help you on your fitness journey. Get in touch today!",
    getInTouch: "Get In Touch",
    hoursTitle: "Hours",
    hoursNote: "Seasonal hours — see the Hours page for the full schedule.",
    viewHours: "View hours",
    mapTitle: "Find Me in Granada",
    mapPlaceholder: "Map loading…",
  },
  hours: {
    metaDescription: "Weekly training hours and class schedule in Granada",
    heroTitle: "Hours",
    heroSubtitle:
      "There are two seasonal calendars, the active one always appears first. Times are shown in CET.",
    disclaimer: "Times subject to change based on client needs and gym availability.",
  },
  pricing: {
    metaDescription: "Training packages, group rates, and payment options",
    heroTitle: "Pricing",
    heroSubtitle: "Flexible pricing options to fit your lifestyle and fitness goals",
    paymentTitle: "Payment Options",
    paymentMethodsTitle: "Accepted Payment Methods",
    faqSectionTitle: "Common Payment Questions",
    ctaTitle: "Ready to Get Started?",
    ctaBody: "Contact us today to schedule a tour and start your fitness journey",
    ctaButton: "Contact Me",
  },
  features: {
    title: "What I Offer",
    subtitle: "Whatever your fitness goals, I've got you covered",
  },
  services: {
    metaDescription: "Personal training, groups, outdoor sessions, and more in Granada",
    heroTitle: "Services",
    heroSubtitle: "Training options tailored to your goals and schedule",
  },
};

export type PageCopy = typeof en;

const es: PageCopy = {
  home: {
    heroLines: [
      { text: "Ponte en forma" },
      { text: "hazte fuerte" },
      { text: "hazte ", suffixBrand: true },
    ],
    ctaTitle: "¿Listo para empezar tu camino fitness?",
    ctaBody: "A veces solo hace falta un pequeño empujón para pulsar este botón…",
    ctaButton: "Empieza tu aventura",
    faqSubtitle: "Todo lo que necesitas saber sobre GUIRIFIT",
    aboutIntro: {
      title: "¿Qué es GUIRIFIT?",
      lead:
        "GUIRIFIT se basa en el fitness funcional: un enfoque de entrenamiento que prepara el cuerpo para movimientos de la vida real y actividades cotidianas, simulando tareas como caminar, empujar, tirar, agacharse o levantarse. A diferencia de ejercicios aislados orientados sobre todo a la estética, el fitness funcional prioriza movimientos compuestos que activan varios grupos musculares y articulaciones a la vez para mejorar coordinación, estabilidad y fuerza general.",
      cards: [
        {
          title: "Aplicación en la vida real",
          description:
            "Los ejercicios imitan acciones como levantar objetos, subir escaleras o llevar la compra, para que el día a día sea más fácil y seguro.",
        },
        {
          title: "Salud y prevención de lesiones",
          description:
            "Al fortalecer el core, mejorar el equilibrio y la movilidad, reduces el riesgo de lesiones en la vida diaria.",
        },
        {
          title: "Eficiencia y adaptabilidad",
          description:
            "Trabaja varios grupos musculares a la vez: entrenamientos eficientes que mejoran la salud cardiovascular y el gasto calórico sin necesidad de equipamiento especializado.",
        },
      ],
    },
  },
  about: {
    metaDescription:
      "Conoce a Coach Shawn y la misión detrás de GUIRIFIT",
    heroTitle: "Sobre mí",
    heroSubtitle: "Conoce a tu entrenador Guiri",
    specializedIn: "Especializado en",
    missionTitle: "Mi misión",
    missionBody:
      "Ofrezco orientación experta y un entorno de apoyo para que quien entrena conmigo supere sus límites y logre resultados extraordinarios.",
    valuesTitle: "Mis valores",
    values: [
      {
        title: "Salud",
        body: "Hábitos y entrenamiento que cuidan el bienestar a largo plazo, sin atajos ni agotamiento",
      },
      {
        title: "Fitness",
        body: "Ganar fuerza, resistencia y habilidad a un ritmo que encaje con tu vida y tus objetivos",
      },
      {
        title: "Comunidad",
        body: "Un círculo de apoyo donde la gente se presenta, se anima mutuamente y mantiene la constancia",
      },
    ],
    journeyTitle: "Mi trayectoria",
    certificationsTitle: "Certificaciones",
    certificationsInstitution: "Institución",
    certificationsCertification: "Certificación",
    certificationsStatus: "Estado",
    certificationCertified: "Certificado",
    certificationInProgress: "En progreso",
  },
  contact: {
    metaDescription: "Ponte en contacto y empieza tu camino fitness",
    heroTitle: "Contacto",
    heroSubtitle:
      "Estoy aquí para ayudarte en tu camino fitness. ¡Escríbeme hoy!",
    getInTouch: "Hablemos",
    hoursTitle: "Horario",
    hoursNote: "Horario según temporada — consulta la página de Horarios.",
    viewHours: "Ver horarios",
    mapTitle: "Encuéntrame en Granada",
    mapPlaceholder: "Cargando mapa…",
  },
  hours: {
    metaDescription: "Horarios semanales y calendario de entrenamiento en Granada",
    heroTitle: "Horarios",
    heroSubtitle:
      "Hay dos calendarios según la temporada; el activo aparece siempre primero. Horas en CET.",
    disclaimer:
      "Los horarios pueden cambiar según necesidades de clientes y disponibilidad.",
  },
  pricing: {
    metaDescription: "Tarifas de entrenamiento personal, grupal y opciones de pago",
    heroTitle: "Precios",
    heroSubtitle:
      "Opciones flexibles que se adaptan a tu estilo de vida y objetivos",
    paymentTitle: "Formas de pago",
    paymentMethodsTitle: "Métodos de pago aceptados",
    faqSectionTitle: "Preguntas habituales sobre pagos",
    ctaTitle: "¿Listo para empezar?",
    ctaBody: "Escríbeme hoy para empezar tu camino fitness",
    ctaButton: "Contacto",
  },
  features: {
    title: "Lo que ofrezco",
    subtitle: "Sea cual sea tu objetivo, tengo opciones para ti",
  },
  services: {
    metaDescription:
      "Entrenamiento personal, grupos, exterior y más en Granada",
    heroTitle: "Servicios",
    heroSubtitle: "Opciones de entrenamiento adaptadas a tus objetivos y horarios",
  },
};

export function getPages(locale: Locale) {
  return locale === "es" ? es : en;
}
