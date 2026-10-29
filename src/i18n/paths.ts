import { getRelativeLocaleUrl } from "astro:i18n";
import type { Locale } from "./config";

/** Path without locale prefix (e.g. `/es/about` → `/about`). */
export function stripLocaleFromPath(pathname: string): string {
  if (pathname === "/es" || pathname === "/es/") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname;
}

export function localizedPath(locale: Locale, pathname: string): string {
  const path = stripLocaleFromPath(pathname);
  return getRelativeLocaleUrl(locale, path);
}
