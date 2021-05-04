$("document").ready(function () {
  $("body").append('<a href="http://www.google.com"> GOOGLE </a>');

  $("div").remove();
  $("a").remove();

  let clon;
  clon = $('h1').clone()
  $('body').append(clon)

  clon = $('h1').clone()
  $('body').append(clon)

  clon = $('h1').clone()
  $('body').append(clon)
  
  clon = $('h1').clone()
  $('body').append(clon)
});