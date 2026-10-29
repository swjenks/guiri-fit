import type { Locale } from "../i18n/config";
import { localizedPath } from "../i18n/paths";
import { getPages } from "../i18n/pages";
import { getUi } from "../i18n/ui";
import * as EN from "./siteData";
import {
  localizeGroupTrainingPackages,
  localizeNutritionPackages,
  localizeOutdoorTrainingPackages,
  localizePersonalTrainingPackages,
} from "./locale/localizePricing";
import { spanishContent } from "./locale/spanishContent";

export type SiteContent = ReturnType<typeof getSiteContent>;

function buildServiceCta(
  locale: Locale,
  slug: string,
  whatsappUrl: string,
  ui: ReturnType<typeof getUi>,
) {
  if (slug === "community") {
    return {
      label: ui.joinWhatsApp,
      href: whatsappUrl || localizedPath(locale, "/contact"),
      external: Boolean(whatsappUrl),
    };
  }
  return {
    label: ui.getStarted,
    href: localizedPath(locale, "/contact"),
    external: false,
  };
}

export function getSiteContent(locale: Locale) {
  const ui = getUi(locale);
  const pages = getPages(locale);
  const contactHref = localizedPath(locale, "/contact");

  if (locale === "en") {
    return {
      ...EN,
      locale,
      ui,
      pages,
      contactHref,
      pricingSectionCopy: {
        personalTraining: {
          title: "Personal Training",
          subtitle: "Base rate €30/session • Volume discounts up to 18%",
        },
        groupTraining: { title: "Group Training" },
        outdoor: { title: "Outdoor Training (Seasonal)" },
        nutrition: { title: "Nutrition Support" },
        onlineCoaching: { title: "Online Coaching", tbd: "All options TBD" },
      },
      serviceCta: (slug: string, _variant?: "home" | "detail") =>
        buildServiceCta(locale, slug, EN.siteData.whatsappCommunityInviteUrl, ui),
      isServiceComingSoon: EN.isServiceComingSoon,
    };
  }

  const es = spanishContent;

  return {
    ...EN,
    ...es,
    locale,
    ui,
    pages,
    contactHref,
    personalTrainingPackages: localizePersonalTrainingPackages(
      locale,
      EN.personalTrainingPackages,
    ),
    groupTrainingPackages: localizeGroupTrainingPackages(
      locale,
      EN.groupTrainingPackages,
    ),
    outdoorTrainingPackages: localizeOutdoorTrainingPackages(
      locale,
      EN.outdoorTrainingPackages,
    ),
    nutritionSupportPackages: localizeNutritionPackages(
      locale,
      EN.nutritionSupportPackages,
    ),
    serviceCta: (slug: string, _variant?: "home" | "detail") =>
      buildServiceCta(locale, slug, EN.siteData.whatsappCommunityInviteUrl, ui),
    isServiceComingSoon: EN.isServiceComingSoon,
  };
}
