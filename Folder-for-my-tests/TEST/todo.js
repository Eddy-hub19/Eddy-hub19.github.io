function appendTaskToList(value) {
    $("#list").append(
        "<li>" +
        value +
        "  <a href='#' class='done-btn'>Done</a> <a href='#' class='cancel-btn'>Cancel Task</a></li>"
    );
}

if (localStorage["tasks"]) {
    let $tasks = JSON.parse(localStorage["tasks"]);
} else {
    let $tasksEmpty = [];
}

for (let i = 0; i < $tasksEmpty.length; i++) {
    appendTaskToList($tasksEmpty[i]);
}

const addTask = function() {
    // get value from #name input
    let val = $("#name").val();

    // add the task to the array
    tasks.push(val);

    // save to local storage
    localStorage["tasks"] = JSON.stringify(tasks);

    // append the name to the list
    appendTaskToList(val);

    // reset the input field and focus it.
    $("#name").val("").focus();
};

$("#add-btn").click(addTask);
$("#name").keyup(function(e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

// // approach 1
// $('.done-btn').click(function() {
//     $(this).parent('li').addClass('done');
// });

// correct approach
$(".done-btn").live("click", function() {
    $(this).parent("li").addClass("done");
});

$(".cancel-btn").live("click", function() {
    $(this).parent("li").fadeOut();
});