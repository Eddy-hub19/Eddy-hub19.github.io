const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    allowTouchMove: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});