const slider = document.querySelector(".swiper")

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,

  // If we need pagination
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },

  // autoHeight: true,

  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
          slidesPerView: 1,
          spaceBetween: 40,
      },
      900: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
  },

  // Navigation arrows
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})