document.addEventListener('DOMContentLoaded', () => {
  const megaTrigger = document.querySelector("[data-mega-trigger]");
  const aboutTrigger = document.querySelector("[data-about-trigger]");
  const mobileTrigger = document.querySelector("[data-mobile-trigger]");
  const mobileLabel = mobileTrigger
    ? mobileTrigger.querySelector(".hamburger-button__label")
    : null;
  const megaMenu = document.querySelector("#mega-menu");
  const aboutMenu = document.querySelector("#about-menu");
  const mobileMenu = document.querySelector("#mobile-menu");
  const siteHeader = document.querySelector(".site-header");

  const setHeaderHeight = () => {
    if (!siteHeader) return;
    const height = Math.round(siteHeader.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--header-height", `${height}px`);
  };

  const setScrollbarWidth = () => {
    const width = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--scrollbar-width", `${width}px`);
  };

  const updateOverlayState = () => {
    const isOpen =
      (megaMenu && megaMenu.classList.contains("is-open")) ||
      (aboutMenu && aboutMenu.classList.contains("is-open")) ||
      (mobileMenu && mobileMenu.classList.contains("is-open"));
    if (isOpen) {
      setScrollbarWidth();
      document.body.classList.add("is-overlay-open");
      return;
    }
    document.body.classList.remove("is-overlay-open");
    document.documentElement.style.setProperty("--scrollbar-width", "0px");
  };

  const openMegaMenu = () => {
    if (!megaMenu || !megaTrigger) return;
    if (aboutMenu) closeAboutMenu();
    megaMenu.classList.add("is-open");
    megaMenu.setAttribute("aria-hidden", "false");
    megaTrigger.setAttribute("aria-expanded", "true");
    updateOverlayState();
  };

  const closeMegaMenu = () => {
    if (!megaMenu || !megaTrigger) return;
    megaMenu.classList.remove("is-open");
    megaMenu.setAttribute("aria-hidden", "true");
    megaTrigger.setAttribute("aria-expanded", "false");
    updateOverlayState();
  };

  const openAboutMenu = () => {
    if (!aboutMenu || !aboutTrigger) return;
    if (megaMenu) closeMegaMenu();
    aboutMenu.classList.add("is-open");
    aboutMenu.setAttribute("aria-hidden", "false");
    aboutTrigger.setAttribute("aria-expanded", "true");
    updateOverlayState();
  };

  const closeAboutMenu = () => {
    if (!aboutMenu || !aboutTrigger) return;
    aboutMenu.classList.remove("is-open");
    aboutMenu.setAttribute("aria-hidden", "true");
    aboutTrigger.setAttribute("aria-expanded", "false");
    updateOverlayState();
  };

  const openMobileMenu = () => {
    if (!mobileMenu || !mobileTrigger) return;
    if (megaMenu) closeMegaMenu();
    if (aboutMenu) closeAboutMenu();
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileTrigger.setAttribute("aria-expanded", "true");
    if (mobileLabel) mobileLabel.textContent = "close";
    updateOverlayState();
  };

  const closeMobileMenu = () => {
    if (!mobileMenu || !mobileTrigger) return;
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileTrigger.setAttribute("aria-expanded", "false");
    if (mobileLabel) mobileLabel.textContent = "menu";
    updateOverlayState();
  };

  if (megaTrigger) {
    megaTrigger.addEventListener("click", () => {
      const isOpen = megaMenu && megaMenu.classList.contains("is-open");
      if (isOpen) {
        closeMegaMenu();
        return;
      }
      openMegaMenu();
    });
  }

  if (aboutTrigger) {
    aboutTrigger.addEventListener("click", () => {
      const isOpen = aboutMenu && aboutMenu.classList.contains("is-open");
      if (isOpen) {
        closeAboutMenu();
        return;
      }
      openAboutMenu();
    });
  }

  if (mobileTrigger) {
    mobileTrigger.addEventListener("click", () => {
      const isOpen = mobileMenu && mobileMenu.classList.contains("is-open");
      if (isOpen) {
        closeMobileMenu();
        return;
      }
      openMobileMenu();
    });
  }

  window.addEventListener("resize", setHeaderHeight);
  setHeaderHeight();
});
