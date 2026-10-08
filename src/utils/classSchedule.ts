import { fullSchedule } from "@data/siteData";

export type ScheduleSlot = {
  time: string;
  class: string;
  type: string;
};

export const scheduleDays: ScheduleSlot[][] = [
  fullSchedule.monday,
  fullSchedule.tuesday,
  fullSchedule.wednesday,
  fullSchedule.thursday,
  fullSchedule.friday,
  fullSchedule.saturday,
  fullSchedule.sunday,
];

function parseTimeLabel(time: string): number {
  const isPM = time.includes("PM");
  const [hourPart, minutePart] = time
    .replace(" AM", "")
    .replace(" PM", "")
    .split(":");
  let hour = parseInt(hourPart, 10);
  const minute = parseInt(minutePart, 10);
  if (isPM && hour !== 12) hour += 12;
  if (!isPM && hour === 12) hour = 0;
  return hour * 60 + minute;
}

export function getSortedScheduleTimes(): string[] {
  const allTimes = new Set<string>();

  for (const day of scheduleDays) {
    for (const slot of day) {
      allTimes.add(slot.time);
    }
  }

  return Array.from(allTimes).sort(
    (a, b) => parseTimeLabel(a) - parseTimeLabel(b),
  );
}

export function findSlotsForTime(
  daySchedule: ScheduleSlot[],
  time: string,
): ScheduleSlot[] {
  return daySchedule.filter((slot) => slot.time === time);
}
