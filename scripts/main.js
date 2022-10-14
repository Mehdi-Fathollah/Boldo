// Hamburger Menu
const navHam = document.querySelector(".nav-ham-menu");
const mobileNav = document.querySelector(".mobile-nav");

let navOpen = false;
navHam.addEventListener("click", function () {
  if (navOpen) {
    navHam.classList.remove("nav-ham-menu--open");
    mobileNav.classList.remove("mobile-nav--open");

    navOpen = false;
  } else {
    navHam.classList.add("nav-ham-menu--open");
    mobileNav.classList.add("mobile-nav--open");
    navOpen = true;
  }
});

// Header Brands Slider
const container = document.querySelector(".header-brands");
const cards = document.querySelector(".header-brands__img-container");

let isPressedDown = false;
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}
