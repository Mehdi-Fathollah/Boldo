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
const brands = document.querySelector(".header-brands__img-container");

let isPressedDown = false;
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - brands.offsetLeft;
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
  brands.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const containerRect = container.getBoundingClientRect();
  const brandsRect = brands.getBoundingClientRect();

  if (parseInt(brands.style.left) > 0) {
    brands.style.left = 0;
  } else if (brandsRect.right < containerRect.right) {
    brands.style.left = `-${brandsRect.width - containerRect.width}px`;
  }
}

// Testimonials Box Slider
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: false,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
  },
});

// Customer Call Center Accordion
const accordionContent = document.querySelectorAll(
  ".customer-call-center__contents-option"
);

accordionContent.forEach((item, index) => {
  let upper = item.querySelector(
    ".customer-call-center__contents-option__upper"
  );
  upper.addEventListener("click", () => {
    item.classList.toggle("customer-call-center__contents-option--open");

    let description = item.querySelector(
      ".customer-call-center__contents-option__description"
    );
    if (
      item.classList.contains("customer-call-center__contents-option--open")
    ) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector(
        ".customer-call-center__contents-option__icon-wrapper"
      ).style.transform = "rotate(-180deg)";
    } else {
      description.style.height = "0px";
      item.querySelector(
        ".customer-call-center__contents-option__icon-wrapper"
      ).style.transform = "rotate(360deg)";
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("customer-call-center__contents-option--open");

      let des = item2.querySelector(
        ".customer-call-center__contents-option__description"
      );
      des.style.height = "0px";
      item2.querySelector(
        ".customer-call-center__contents-option__icon-wrapper"
      ).style.transform = "rotate(360deg)";
    }
  });
}

// RSS Validation And Alert
let email = document.querySelector(".rss-news-form__email-input");
let success = document.querySelector(".successful-alert-overlay");
let formButton = document.querySelector(".rss-news-form__submitation-button");
let validEmail = document.querySelector(".rss-news-form-valid-alert-text");
let inValidEmail = document.querySelector(".rss-news-form-failed-alert-text");
let danger = document.querySelector(".rss-news-form-empty-field-alert-text");
let successClose = document.querySelector(".successful-alert__button");
let form = document.querySelector(".rss-news-form__form");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

formButton.onclick = function () {
  if (email.value.length === 0) {
    danger.classList.add("rss-news-form-empty-field-alert-text--show");
    validEmail.classList.remove("rss-news-form-valid-alert-text--show");
    inValidEmail.classList.remove("rss-news-form-failed-alert-text--show");
  } else {
    success.classList.add("successful-alert-overlay--show");
    document.body.style.overflowY = "hidden";
  }
};

form.addEventListener("input", () => {
  if (email.value.length === 0) {
    formButton.disabled = false;
  }
});

email.oninput = function () {
  if (email.value.match(pattern)) {
    validEmail.classList.add("rss-news-form-valid-alert-text--show");
    inValidEmail.classList.remove("rss-news-form-failed-alert-text--show");
    danger.classList.remove("rss-news-form-empty-field-alert-text--show");
    formButton.disabled = false;
  } else {
    inValidEmail.classList.add("rss-news-form-failed-alert-text--show");
    validEmail.classList.remove("rss-news-form-valid-alert-text--show");
    danger.classList.remove("rss-news-form-empty-field-alert-text--show");
    formButton.disabled = true;
  }
};

// Functional Buttons
successClose.onclick = function () {
  success.classList.remove("successful-alert-overlay--show");
  danger.classList.remove("rss-news-form-empty-field-alert-text--show");
  validEmail.classList.remove("rss-news-form-valid-alert-text--show");
  inValidEmail.classList.remove("rss-news-form-failed-alert-text--show");
  formButton.classList.add("rss-news-form__submitation-button--disabled");
  document.body.style.overflowY = "auto";
  formButton.disabled = true;
  email.disabled = true;
  email.value = "";
};

// Preventing 'form' from refreshing the page
function refresher() {
  event.preventDefault();
}
