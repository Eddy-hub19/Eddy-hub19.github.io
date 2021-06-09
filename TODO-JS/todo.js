let addMessage = document.querySelector(".message"),
    addButton = document.querySelector(".add"),
    todo = document.querySelector(".todo");

let todoList = [];

if (localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    displayMessages();
}

addButton.addEventListener("click", function() {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
    };

    todoList.push(newTodo);

    displayMessages();

    localStorage.setItem("todo", JSON.stringify(todoList));
});

function displayMessages() {
    let displayMessage = "";

    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${
      item.checked ? "checked" : ""
    }>
            <label for='item_${i}'>${item.todo}</label>
            <button id='item_${i}' class="delete" onclick="removeToDo(i)">&#10007</button>
        </li>
        `;
        todo.innerHTML = displayMessage;
        localStorage.setItem("todo", JSON.stringify(todoList));
    });
}

function removeToDo(index) {
    // 1) remove todo from the todoList;
    // 2) update local storage with new todoList;
    // 3) run displayMessages();

}

todo.addEventListener("change", function(event) {
    let idInput = event.target.getAttribute("id");
    let valueLabel = todo.querySelector("[for=" + idInput + "]").innerHTML;

    todoList.forEach(function(item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem("todo", JSON.stringify(todoList));
        }
    });
});