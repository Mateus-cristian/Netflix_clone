var swiper = new Swiper(".mySwiper", {
  observer: true,
  observeParents: true,
  freemode: true,
  slidesPerView: "auto",
  loop: true,

  breakpoints: {
    300: {
      centeredSlides: true,
    },
    1024: {
      centeredSlides: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  swiper;
});
