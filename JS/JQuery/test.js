$("document").ready(function () {
  // $("body").append('<a href="http://www.google.com"> GOOGLE </a>');
  // $("a").remove();
  // let clone;
  // clone = $("h1").clone();
  // $('body').append(clone);

  //let test = prompt('What is your name?','')
  // let test = confirm('Удалиить всё со страницы?')

  // let a1 = 555;

  // if (a1 == 551) {
  //   alert("good");
  // } else {
  //   alert("bad");
  // }

  // $("input").on("keyup", function () {
  //   let value1, value2;

  //   value1 = $("#val1").val();
  //   value2 = $("#val2").val();

  //   let value3 = value1 * value2;

  //   $("#result").html(value3);
  // });

  let weather = prompt("Введите погоду", "cloud,sun");
  if (weather == "sun") {
    alert("Можно ехать на пикник");
  } else {
    alert("Возьмите дождь погодка не очень");
  }
});
