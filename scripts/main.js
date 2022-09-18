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