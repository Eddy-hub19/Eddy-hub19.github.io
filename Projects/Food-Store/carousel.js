$(document).ready(function() {
    $(".slider").slick({
        slidesToShow: 4,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 2000,
        accessibility: true,
        centerMode: false,
        useCSS: true,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


// Show Hamburger menu
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
hamburger.addEventListener('click', function() {
    menu.classList.toggle('show')
})

// jQuery style

// Close warning class when user click on .close-btn
const warning = document.querySelector(".warning");

document.querySelector(".close-btn").addEventListener("click", function() {
    warning.style.display = "none";
});