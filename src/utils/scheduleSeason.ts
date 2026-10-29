/** Local business timezone for seasonal outdoor hours (Granada). */
export const SCHEDULE_TIMEZONE = "Europe/Madrid";

/** Spring & Fall = outdoor block; Summer & Winter = studio block. */
export type ScheduleSeasonKind = "spring-fall" | "summer-winter";

/** Spring & Fall schedule: March–May and September–November (inclusive). */
export function isSpringFallSeason(date: Date = new Date()): boolean {
  const month = getMadridMonth(date);
  return (month >= 3 && month <= 5) || (month >= 9 && month <= 11);
}

/** @deprecated alias used by season init script */
export function isOutdoorSeason(date: Date = new Date()): boolean {
  return isSpringFallSeason(date);
}

export function getMadridMonth(date: Date = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SCHEDULE_TIMEZONE,
    month: "numeric",
  }).formatToParts(date);

  const month = parts.find((part) => part.type === "month")?.value;
  return month ? Number.parseInt(month, 10) : date.getMonth() + 1;
}

export const scheduleSeasonCopy = {
  springFall: {
    title: "Spring and Fall",
    description: "March - May | September - November",
  },
  summerWinter: {
    title: "Summer and Winter",
    description: "June - August | December - February",
  },
} as const;
