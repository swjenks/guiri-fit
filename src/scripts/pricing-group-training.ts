import { syncPricingPackagesTableLayout } from "./pricing-packages-table";

function showGroupPanel(root: HTMLElement, groupId: string) {
  root.querySelectorAll<HTMLElement>("[data-pricing-group-tab]").forEach((tab) => {
    const active = tab.dataset.pricingGroupTab === groupId;
    tab.setAttribute("aria-selected", active ? "true" : "false");
    tab.classList.toggle("is-active", active);
  });

  root.querySelectorAll<HTMLElement>("[data-pricing-group-panel]").forEach((panel) => {
    const show = panel.dataset.pricingGroupPanel === groupId;
    panel.hidden = !show;
    if (show) {
      const tableRoot = panel.querySelector<HTMLElement>(
        "[data-pricing-packages-root]",
      );
      if (tableRoot) syncPricingPackagesTableLayout(tableRoot);
    }
  });
}

export function initPricingGroupTraining(root: HTMLElement) {
  if (root.dataset.pricingGroupInit === "true") return;
  root.dataset.pricingGroupInit = "true";

  const tabs = root.querySelectorAll<HTMLButtonElement>("[data-pricing-group-tab]");
  if (tabs.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const groupId = tab.dataset.pricingGroupTab;
      if (!groupId) return;
      showGroupPanel(root, groupId);
    });
  });

  const initial =
    root.querySelector<HTMLElement>('[data-pricing-group-tab][aria-selected="true"]')
      ?.dataset.pricingGroupTab ?? tabs[0]?.dataset.pricingGroupTab;

  if (initial) showGroupPanel(root, initial);
}

function boot() {
  document
    .querySelectorAll<HTMLElement>("[data-pricing-group-root]")
    .forEach(initPricingGroupTraining);
}

boot();
document.addEventListener("astro:page-load", boot);
