$(document).ready(function () {
    $(".carousel").slick({
      slidesToShow: 2,
      dots: true,
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
  
  const warning = document.querySelector(".warning");
  
  document.querySelector(".close-btn").addEventListener("click", function () {
    warning.style.display = "none";
  });