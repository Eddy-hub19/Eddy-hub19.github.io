$(document).ready(function() {
    $(".slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        accessibility: true,
        mobileFirst: true,
        infinite: true,
    });
});

// for carousel JS

// offset = 0; // смещение от левого края

// const sliderLine = document.querySelector(".slider-line");

// document.querySelector(".slider-next").addEventListener("click", function() {
//     offset = offset + 230;
//     if (offset > 1000) {
//         offset = 0;
//     }
//     sliderLine.style.left = offset + "px";
// });

// document.querySelector(".slider-prev").addEventListener("click", function() {
//     offset = offset + 230;
//     if (offset < 0) {
//         offset = 230;
//     } else {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + "px";
// });

// const test = document.querySelector(".warning");

// document.querySelector(".close-btn").addEventListener("click", function() {
//     test.style.display = "none";
// });