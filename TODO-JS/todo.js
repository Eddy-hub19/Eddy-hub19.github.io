let addMessage = document.querySelector(".message"),
    addButton = document.querySelector(".add"),
    todo = document.querySelector(".todo");

let createNewTodo = document.querySelector(".create_new_todo");

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

    let inputs = document.querySelectorAll("input[type=text]");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    todoList.push(newTodo);

    displayMessages();

    localStorage.setItem("todo", JSON.stringify(todoList));
});

function displayMessages() {
    let displayMessage = "";

    if (todoList.length === 0) {
        todo.innerHTML = displayMessage;
    }

    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${
      item.checked ? "checked" : ""
    }>
            <label for='item_${i}'>${item.todo}</label>
            <button id='item_${i}' class="delete" onclick="removeToDo(${i})">&#10006</button>
        </li>
        `;
        todo.innerHTML = displayMessage;
        localStorage.setItem("todo", JSON.stringify(todoList));
    });
}

function removeToDo(index) {
    todoList.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todoList));
    displayMessages();
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