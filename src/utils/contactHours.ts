import { fullSchedule, outdoorFullSchedule } from "@data/siteData";
import {
  scheduleSeasonCopy,
  type ScheduleSeasonKind,
} from "./scheduleSeason";

type DaySchedule = typeof fullSchedule.monday;

function formatSlotLine(slots: DaySchedule): string {
  return slots
    .map((slot) => {
      if (slot.class === "Open Availability") {
        return slot.time;
      }
      return `${slot.time} (${slot.class})`;
    })
    .join(" · ");
}

export function getContactHoursLines(season: ScheduleSeasonKind): string[] {
  const schedule =
    season === "spring-fall" ? outdoorFullSchedule : fullSchedule;
  const seasonLabel =
    season === "spring-fall"
      ? scheduleSeasonCopy.springFall.title
      : scheduleSeasonCopy.summerWinter.title;
  const seasonRange =
    season === "spring-fall"
      ? scheduleSeasonCopy.springFall.description
      : scheduleSeasonCopy.summerWinter.description;

  const weekdayLine = `Mon–Fri: ${formatSlotLine(schedule.monday)}`;
  const saturdayLine =
    schedule.saturday.length > 0
      ? `Sat: ${formatSlotLine(schedule.saturday)}`
      : "Sat: No training";
  const sundayLine = "Sun: No training";

  return [`${seasonLabel} (${seasonRange})`, weekdayLine, saturdayLine, sundayLine];
}
