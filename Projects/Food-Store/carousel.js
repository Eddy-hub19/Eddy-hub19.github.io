$(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 3,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      accessibility: true,
      mobileFirst: true,
    });
  });
  
  
  const hamburger = document.querySelector('.hamburger')
  const menu = document.querySelector('.menu')
  
  
  hamburger.addEventListener('click', function ()  {
    menu.classList.toggle('show')
  })
  
  const warning = document.querySelector(".warning");
  
  document.querySelector(".close-btn").addEventListener("click", function () {
    warning.style.display = "none";
  });