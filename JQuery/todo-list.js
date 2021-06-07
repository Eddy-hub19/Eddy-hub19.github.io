$("document").ready(function() {
    let $tasksList = $("#tasksList");
    let $taskInput = $("#taskInput");
    let $notification = $("#notification");

    const displayNotification = function() {
        if (!$tasksList.children().length) {
            $notification.fadeIn("fast");
        } else {
            $notification.css("display", "none");
        }
    };

    $("#taskAdd").on("click", function() {
        if (!$taskInput.val()) {
            return false;
        }

        $tasksList.append(
            "<li>" +
            $taskInput.val() +
            "<button class='delete'> &#10006</button></li>"
        );

        $taskInput.val("");

        displayNotification();

        $(".delete").on("click", function() {
            let $parent = $(this).parent();
            const btnDelete = function() {
                $parent.remove();
            };
            btnDelete();
        });
    });
    $("#todo-form").submit(function(event) {
        event.preventDefault();
    });
});

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