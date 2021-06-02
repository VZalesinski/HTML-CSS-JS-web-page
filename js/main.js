// slider swiper

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  loopedSlides: 3,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  }
});

// burger-menu

const menuBurger = document.querySelector('.header__burger');
if (menuBurger) {
  const navList = document.querySelector('.nav__list');
  menuBurger.addEventListener("click", function() {
    document.body.classList.toggle('_lock');
    menuBurger.classList.toggle('_active');
    navList.classList.toggle('_active');
  })
}