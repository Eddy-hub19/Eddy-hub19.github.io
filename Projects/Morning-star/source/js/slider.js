const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    loop: true,
    allowTouchMove: true,
    clickable: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});