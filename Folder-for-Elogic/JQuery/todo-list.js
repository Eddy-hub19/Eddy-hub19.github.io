$("document").ready(function() {
    let $tasksList = $("#tasksList");
    let $taskInput = $("#taskInput");
    let $notification = $("#notification");


    // LOCAL STORAGE

    // localStorage.clear();

    // let $todoForm = $("#todo-form");

    // localStorage.setItem('todo', JSON.stringify($todoList));

    // let $todoList = [];

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
            "<button class='add'> &#10003</button>" +
            $taskInput.val() +
            "<button class='delete'> &#10007</button>  </li>"
        );
        displayNotification();

        $taskInput.val("");

        $(".delete").on("click", function() {
            let $parent = $(this).parent();
            const btnDelete = function() {
                $parent.remove();
            };
            btnDelete();
        });

        $(".add").on("click", function() {
            let $parent = $(this).parent();
            const btnCheck = function() {
                $parent.toggleClass("done");
            };
            btnCheck();
        });
    });
    $("#todo-form").submit(function(event) {
        event.preventDefault();
    });
});