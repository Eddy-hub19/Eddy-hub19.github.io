offset = 0; // смещение от левого края

const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function() {
    offset = offset + 230;
    if (offset > 1000) {
        offset = 0
    }
    sliderLine.style.left = offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function() {
    offset = offset - 230;
    if (offset < 0) {
        offset = 1130
    }
    sliderLine.style.left = -offset + "px";
});

const test = document.querySelector('.warning')

document.querySelector(".close-btn").addEventListener("click", function() {
    test.style.display = "none"
})