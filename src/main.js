const navToggle = document.querySelector(".nav-toggle");
const primaryHead = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "false")
    : navToggle.setAttribute("aria-expanded", "true");
  primaryNav.toggleAttribute("data-visible");
  primaryNav.toggleAttribute("data-overlay");
});