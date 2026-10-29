import { fullSchedule, outdoorFullSchedule } from "@data/siteData";

export type ScheduleSlot = {
  time: string;
  class: string;
};

export type FullWeekSchedule = typeof fullSchedule;

export const CALENDAR_DAY_LABELS = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
] as const;

export function scheduleDaysFromFull(full: FullWeekSchedule): ScheduleSlot[][] {
  return [
    full.monday,
    full.tuesday,
    full.wednesday,
    full.thursday,
    full.friday,
    full.saturday,
    full.sunday,
  ];
}

export const scheduleDays = scheduleDaysFromFull(fullSchedule);
export const outdoorScheduleDays = scheduleDaysFromFull(outdoorFullSchedule);

export type CalendarDay = {
  label: string;
  slots: ScheduleSlot[];
  /** Sunday — no sessions */
  closed?: boolean;
};

export function toCalendarDays(
  days: ScheduleSlot[][],
  labels: readonly string[] = CALENDAR_DAY_LABELS,
): CalendarDay[] {
  return days.map((slots, index) => ({
    label: labels[index] ?? `Day ${index + 1}`,
    slots,
    closed: index === 6,
  }));
}

function parseTimeLabel(time: string): number {
  const dashIndex = time.search(/[–-]/);
  const startRaw =
    dashIndex === -1 ? time.trim() : time.slice(0, dashIndex).trim();
  const afterDash = dashIndex === -1 ? "" : time.slice(dashIndex + 1).trim();

  let label = startRaw;
  if (!/\s(AM|PM)$/i.test(label)) {
    const endPeriod = afterDash.match(/\s(AM|PM)$/i)?.[1];
    if (endPeriod) {
      const hour = parseInt(label.split(":")[0], 10);
      if (hour === 12 && endPeriod.toUpperCase() === "PM") {
        label = `${label} PM`;
      } else if (time.toUpperCase().includes("PM") && hour >= 1 && hour <= 7) {
        label = `${label} PM`;
      } else if (time.toUpperCase().includes("AM")) {
        label = `${label} AM`;
      } else {
        label = `${label} ${endPeriod}`;
      }
    }
  }

  const isPM = label.toUpperCase().includes("PM");
  const [hourPart, minutePart] = label
    .replace(/\sAM/i, "")
    .replace(/\sPM/i, "")
    .trim()
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

function parseClock(clock: string, rangeHint: string): number {
  let label = clock.trim();
  if (!/\s(AM|PM)$/i.test(label)) {
    const endPeriod = rangeHint.match(/\s(AM|PM)$/i)?.[1];
    if (endPeriod) {
      const hour = parseInt(label.split(":")[0], 10);
      if (hour === 12 && endPeriod.toUpperCase() === "PM") {
        label = `${label} PM`;
      } else if (
        rangeHint.toUpperCase().includes("PM") &&
        hour >= 1 &&
        hour <= 7
      ) {
        label = `${label} PM`;
      } else if (rangeHint.toUpperCase().includes("AM")) {
        label = `${label} AM`;
      } else {
        label = `${label} ${endPeriod}`;
      }
    }
  }
  return parseTimeLabel(label);
}

export function parseSlotRange(time: string): { start: number; end: number } {
  const dashIndex = time.search(/[–-]/);
  if (dashIndex === -1) {
    const start = parseTimeLabel(time);
    return { start, end: start + 60 };
  }
  const startPart = time.slice(0, dashIndex).trim();
  const endPart = time.slice(dashIndex + 1).trim();
  return {
    start: parseClock(startPart, time),
    end: parseClock(endPart, time),
  };
}

/** Grid step — matches 10-minute gaps between classes in siteData */
export const CALENDAR_STEP_MINUTES = 10;

/** Equal inset above first slot and below last slot (in minutes on the timeline) */
export const CALENDAR_EDGE_PADDING_MINUTES = 30;

export type CalendarRange = { start: number; end: number };

export function getCalendarRange(daySchedules: ScheduleSlot[][]): CalendarRange {
  let start = Number.POSITIVE_INFINITY;
  let end = Number.NEGATIVE_INFINITY;

  for (const day of daySchedules) {
    for (const slot of day) {
      const range = parseSlotRange(slot.time);
      start = Math.min(start, range.start);
      end = Math.max(end, range.end);
    }
  }

  if (!Number.isFinite(start)) {
    start = 7 * 60;
    end = 20 * 60;
  }

  start =
    Math.floor(start / CALENDAR_STEP_MINUTES) * CALENDAR_STEP_MINUTES;
  end = Math.ceil(end / CALENDAR_STEP_MINUTES) * CALENDAR_STEP_MINUTES;
  return { start, end };
}

export function getCalendarMetrics(range: CalendarRange) {
  const contentMinutes = range.end - range.start;
  const edgePadding = CALENDAR_EDGE_PADDING_MINUTES;
  const timelineMinutes = contentMinutes + edgePadding * 2;
  return { contentMinutes, edgePadding, timelineMinutes };
}

/** Vertical position (0–100) for a minute on the padded timeline */
export function layoutMinutePercent(
  minute: number,
  range: CalendarRange,
): number {
  const { edgePadding, timelineMinutes } = getCalendarMetrics(range);
  return ((edgePadding + (minute - range.start)) / timelineMinutes) * 100;
}

/** Block position from slot time string — derived from data, not fixed clock positions */
const WEEK_TAB_LETTERS = ["M", "T", "W", "T", "F", "S", "S"] as const;

const WEEK_TAB_SHORT = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;

/** Single-letter tab (small phones). */
export function dayTabLetter(label: string, index: number, totalDays: number) {
  if (totalDays === WEEK_TAB_LETTERS.length) {
    return WEEK_TAB_LETTERS[index] ?? label.charAt(0).toUpperCase();
  }

  const normalized = label.toLowerCase();
  if (normalized.includes("sun")) return "S";
  if (normalized.includes("sat")) return "S";
  if (normalized.includes("fri")) return "F";
  if (normalized.includes("thu")) return "T";
  if (normalized.includes("wed")) return "W";
  if (normalized.includes("tue")) return "T";
  if (normalized.includes("mon")) return "M";

  return label.charAt(0).toUpperCase();
}

/** Three-letter tab (larger phones, still below md). */
export function dayTabShort(label: string, index: number, totalDays: number) {
  if (totalDays === WEEK_TAB_SHORT.length) {
    return WEEK_TAB_SHORT[index] ?? label.slice(0, 3);
  }

  const normalized = label.toLowerCase();
  if (normalized.includes("mon")) return "MON";
  if (normalized.includes("tue")) return "TUE";
  if (normalized.includes("wed")) return "WED";
  if (normalized.includes("thu")) return "THU";
  if (normalized.includes("fri")) return "FRI";
  if (normalized.includes("sat")) return "SAT";
  if (normalized.includes("sun")) return "SUN";

  return label.slice(0, 3).toUpperCase();
}

export function layoutSlotPercent(
  time: string,
  range: CalendarRange,
): { top: number; height: number } {
  const { start, end } = parseSlotRange(time);
  const { timelineMinutes } = getCalendarMetrics(range);
  const top = layoutMinutePercent(start, range);
  const height = ((end - start) / timelineMinutes) * 100;
  return { top, height };
}

export function getHourMarkers(rangeStart: number, rangeEnd: number): number[] {
  const markers: number[] = [];
  for (let minute = rangeStart; minute < rangeEnd; minute += 60) {
    markers.push(minute);
  }
  // Show the closing hour when availability ends on the hour (e.g. 20:00).
  if (
    rangeEnd % 60 === 0 &&
    rangeEnd >= rangeStart &&
    markers[markers.length - 1] !== rangeEnd
  ) {
    markers.push(rangeEnd);
  }
  return markers;
}

/** 24-hour labels for the calendar time gutter (e.g. 07:00, 14:30). */
export function formatMinutes(totalMinutes: number): string {
  const hour24 = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  const hour = hour24.toString().padStart(2, "0");
  const min = minute.toString().padStart(2, "0");
  return `${hour}:${min}`;
}
