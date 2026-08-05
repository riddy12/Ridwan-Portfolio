const menuButton = document.querySelector("#menu-button");
const navigationLinks = document.querySelector("#navigation-links");

if (menuButton && navigationLinks) {
  menuButton.addEventListener("click", () => {
    const menuIsOpen = navigationLinks.classList.toggle("open");

    menuButton.classList.toggle("active", menuIsOpen);
    menuButton.setAttribute("aria-expanded", menuIsOpen);
  });

  navigationLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigationLinks.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navigationLinks.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}