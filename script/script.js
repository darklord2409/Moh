const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  grabCursor: true,
  mousewheel: {
    evensTarget: ".swiper-slide"
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 1.5,
  breakpoints: {
    780: {
      slidesPerView: 2.5
    }
  }
});
