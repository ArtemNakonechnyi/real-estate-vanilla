export function initBurgerMenu() {
  const burger = document.querySelector(".header__mobileNav");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("close-btn");

  if (burger && mobileMenu && closeBtn) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }
}
