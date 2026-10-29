type PricingMetric = "sessions" | "effective" | "discount";

const METRIC_HEADERS: Record<PricingMetric, string> = {
  sessions: "Sessions/Month",
  effective: "Effective €/session",
  discount: "Discount",
};

function setCompactMetric(root: HTMLElement, metric: PricingMetric) {
  root.querySelectorAll<HTMLElement>("[data-pricing-metric-tab]").forEach((tab) => {
    const active = tab.dataset.pricingMetricTab === metric;
    tab.setAttribute("aria-selected", active ? "true" : "false");
    tab.classList.toggle("is-active", active);
  });

  const header = root.querySelector<HTMLElement>("[data-pricing-metric-header]");
  if (header) header.textContent = METRIC_HEADERS[metric];

  root.querySelectorAll<HTMLElement>("[data-pricing-metric-value]").forEach((cell) => {
    cell.hidden = cell.dataset.pricingMetricValue !== metric;
  });
}

function isPackagesTableVisible(root: HTMLElement): boolean {
  if (root.closest("[hidden]")) return false;
  return root.getBoundingClientRect().width > 0;
}

function syncPackagesTableLayout(root: HTMLElement) {
  if (!isPackagesTableVisible(root)) return;

  const desktopWrap = root.querySelector<HTMLElement>("[data-pricing-desktop]");
  const compact = root.querySelector<HTMLElement>("[data-pricing-compact]");
  if (!desktopWrap || !compact) return;

  desktopWrap.hidden = false;
  compact.hidden = true;

  const table = desktopWrap.querySelector("table");
  if (!table) return;

  const overflow = table.scrollWidth > desktopWrap.clientWidth + 1;
  desktopWrap.hidden = overflow;
  compact.hidden = !overflow;
}

export function syncPricingPackagesTableLayout(root: HTMLElement) {
  syncPackagesTableLayout(root);
}

export function initPricingPackagesTable(root: HTMLElement) {
  if (root.dataset.pricingInit === "true") return;
  root.dataset.pricingInit = "true";

  const compact = root.querySelector<HTMLElement>("[data-pricing-compact]");
  if (!compact) return;

  const observer = new ResizeObserver(() => syncPackagesTableLayout(root));
  observer.observe(root);
  syncPackagesTableLayout(root);

  compact.querySelectorAll<HTMLButtonElement>("[data-pricing-metric-tab]").forEach(
    (tab) => {
      tab.addEventListener("click", () => {
        const metric = tab.dataset.pricingMetricTab as PricingMetric | undefined;
        if (!metric) return;
        setCompactMetric(root, metric);
      });
    },
  );

  setCompactMetric(root, "sessions");
}

function boot() {
  document
    .querySelectorAll<HTMLElement>("[data-pricing-packages-root]")
    .forEach(initPricingPackagesTable);
}

boot();
document.addEventListener("astro:page-load", boot);
