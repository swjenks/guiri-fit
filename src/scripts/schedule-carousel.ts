export function initScheduleCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>(".schedule-mobile-track");
  const tabs = root.querySelectorAll<HTMLButtonElement>(
    "[data-schedule-day-tab]",
  );
  const slides = root.querySelectorAll<HTMLElement>(".schedule-mobile-slide");

  if (!track || slides.length === 0) return;

  let scrollRaf = 0;

  const activeIndex = () => {
    const width = track.clientWidth;
    if (width <= 0) return 0;
    return Math.max(
      0,
      Math.min(slides.length - 1, Math.round(track.scrollLeft / width)),
    );
  };

  const syncUi = () => {
    const index = activeIndex();
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.classList.toggle("is-active", selected);
    });
  };

  const scrollToIndex = (index: number, smooth: boolean) => {
    const width = track.clientWidth;
    track.scrollTo({
      left: index * width,
      behavior: smooth ? "smooth" : "instant",
    });
  };

  track.addEventListener(
    "scroll",
    () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        syncUi();
        scrollRaf = 0;
      });
    },
    { passive: true },
  );

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Number.parseInt(tab.dataset.index ?? "0", 10);
      scrollToIndex(index, true);
    });
  });

  const todayIndex = () => {
    const jsDay = new Date().getDay();
    return jsDay === 0 ? 6 : jsDay - 1;
  };

  const initial = Math.min(todayIndex(), slides.length - 1);
  scrollToIndex(initial, false);
  syncUi();

  window.addEventListener("resize", () => {
    scrollToIndex(activeIndex(), false);
    syncUi();
  });
}

function boot() {
  document
    .querySelectorAll<HTMLElement>("[data-schedule-carousel]")
    .forEach(initScheduleCarousel);
}

boot();

document.addEventListener("astro:page-load", boot);
