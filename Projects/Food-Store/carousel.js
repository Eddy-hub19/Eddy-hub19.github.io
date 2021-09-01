$(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      accessibility: true,
      mobileFirst: true,
      infinite: true,
    });
  });
  
  
  const hamburger = document.querySelector('.hamburger')
  const menu = document.querySelector('.menu')
  
  
  hamburger.addEventListener('click', function ()  {
    menu.classList.toggle('show')
  })
  
  
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
  
  const warning = document.querySelector(".warning");
  
  document.querySelector(".close-btn").addEventListener("click", function () {
    warning.style.display = "none";
  });