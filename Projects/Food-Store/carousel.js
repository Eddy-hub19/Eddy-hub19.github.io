$(document).ready(function () {
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
    });
  });
  
  
  // Show Hamburger menu
  const hamburger = document.querySelector('.hamburger')
  const menu = document.querySelector('.menu')
  hamburger.addEventListener('click', function ()  {
    menu.classList.toggle('show')
  })

// jQuery style

  // Close warning class when user click on .close-btn
  const warning = document.querySelector(".warning");
  
  document.querySelector(".close-btn").addEventListener("click", function () {
    warning.style.display = "none";
  });