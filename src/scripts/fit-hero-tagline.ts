const TAGLINE_SELECTOR = ".hero-tagline";

function fitHeroTagline(root: HTMLElement) {
  const lines = root.querySelectorAll<HTMLElement>(".hero-tagline-line");
  if (lines.length === 0) return;

  root.style.fontSize = "";
  const maxWidth = root.clientWidth;
  if (maxWidth <= 0) return;

  let low = 14;
  let high = 96;
  let best = low;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    root.style.fontSize = `${mid}px`;

    const widest = Math.max(
      ...Array.from(lines, (line) => line.scrollWidth),
    );

    if (widest <= maxWidth) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  root.style.fontSize = `${Math.max(14, best - 1)}px`;
}

function init() {
  document.querySelectorAll<HTMLElement>(TAGLINE_SELECTOR).forEach((el) => {
    fitHeroTagline(el);
  });
}

const observed = new WeakSet<Element>();

function observeElements() {
  document.querySelectorAll<HTMLElement>(TAGLINE_SELECTOR).forEach((el) => {
    if (observed.has(el)) return;
    observed.add(el);

    const resizeObserver = new ResizeObserver(() => fitHeroTagline(el));
    resizeObserver.observe(el);
    if (el.parentElement) {
      resizeObserver.observe(el.parentElement);
    }
  });
}

function boot() {
  const run = () => {
    init();
    observeElements();
  };

  if (document.fonts?.ready) {
    document.fonts.ready.then(run);
  } else {
    run();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

document.addEventListener("astro:page-load", boot);
