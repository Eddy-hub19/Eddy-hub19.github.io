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




// -CODEWORD-
// let codeWord1 = "янТарь"; 
// let codeWord2 = "огурцы"; 
// let codeWord3 = "маленькие"; 
// let codeWord4 = "неофил"; 
// let codeWord5 = "рай"; 
// let codeWord6 = "виноград"; 
// let codeWord7 = "што пор"; 
// let codeWord8 = "сильный"; 
// let codeWord9 = '❤'

// console.log(
//     codeWord1[2] + //т
//     codeWord2[5] + //ы
//     codeWord7[3] + //
//     codeWord3[0] + // м
//     codeWord3[4] + // н
//     codeWord4[1] + // е
//     codeWord7[3] + //
//     codeWord4[0] + // н
//     codeWord5[0] + // р
//     codeWord5[1] + // а
//     codeWord6[0] + // в
//     codeWord6[1] + // и
//     codeWord7[0] + // ш
//     codeWord8[0] + // с
//     codeWord1[0] + // я
//     codeWord7[3] + //
//     codeWord9
// ); 