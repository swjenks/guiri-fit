import type { Locale } from "./config";

const seasonCopy = {
  en: {
    springFall: {
      title: "Spring and Fall",
      description: "March - May | September - November",
    },
    summerWinter: {
      title: "Summer and Winter",
      description: "June - August | December - February",
    },
  },
  es: {
    springFall: {
      title: "Primavera y otoño",
      description: "Marzo - Mayo | Septiembre - Noviembre",
    },
    summerWinter: {
      title: "Verano e invierno",
      description: "Junio - Agosto | Diciembre - Febrero",
    },
  },
} as const;

const dayLabels = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  es: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
} as const;

const classLabels = {
  en: {
    GuiriFit: "GuiriFit",
    "Open Availability": "Open Availability",
    "Outdoor Training": "Outdoor Training",
  },
  es: {
    GuiriFit: "GuiriFit",
    "Open Availability": "Disponibilidad abierta",
    "Outdoor Training": "Entrenamiento al aire libre",
  },
} as const;

export type ScheduleClassKey = keyof typeof classLabels.en;

export function getScheduleSeasonCopy(locale: Locale) {
  return seasonCopy[locale];
}

export function getCalendarDayLabels(locale: Locale) {
  return dayLabels[locale];
}

export function translateScheduleClass(
  locale: Locale,
  className: string,
): string {
  const map = classLabels[locale] as Record<string, string>;
  return map[className] ?? className;
}

export const scheduleClosedLabel = {
  en: "Closed",
  es: "Cerrado",
} as const;

export function getScheduleClosedLabel(locale: Locale) {
  return scheduleClosedLabel[locale];
}

export const scheduleUi = {
  en: {
    activeNow: "Active Now",
    inactive: "Inactive",
    noTraining: "No Training",
  },
  es: {
    activeNow: "Activo ahora",
    inactive: "Inactivo",
    noTraining: "Sin entrenamiento",
  },
} as const;

export function getScheduleUi(locale: Locale) {
  return scheduleUi[locale];
}
