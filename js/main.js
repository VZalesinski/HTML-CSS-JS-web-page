// slider swiper

const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 800,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 70,
        },
        624: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1201: {
            slidesPerView: 3,
            spaceBetween: 40,

        },
    },

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