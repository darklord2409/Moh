"use strict";

var swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  mousewheel: {
    evensTarget: ".swiper-slide"
  },
  slidesPerView: 1,
  breakpoints: {
    1030: {
      slidesPerView: 3
    }
  }
});
var headerNav = document.querySelector(".header__nav"),
    mainSocial = document.querySelector(".content .social");

function scrollNav() {
  scrollY > headerNav.clientHeight ? (headerNav.classList.add("scrolled"), mainSocial.classList.add("scrolled")) : (headerNav.classList.remove("scrolled"), mainSocial.classList.remove("scrolled"));
}

window.addEventListener("scroll", function () {
  return scrollNav();
}); // 

var headerBurger = document.querySelector(".header__nav-burger"),
    headerMenu = document.querySelector(".header__nav-menu"),
    body = document.querySelector("body"); // social = document.querySelector("social")

headerBurger.addEventListener("click", function () {
  headerBurger.classList.toggle("open"), headerMenu.classList.toggle("open"), body.classList.toggle("open"); // social.classList.toggle("scrolled")
});