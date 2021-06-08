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
        <input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
        <label for='item_${i}'> ${item.todo}</label>
        <button class="delete">&#10007</button> 
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener("change", function(event) {
    let valueLabel = todo.querySelector(
        "[for=" + event.target.getAttribute("id") + "]"
    ).innerHTML

    todoList.forEach(function(item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem("todo", JSON.stringify(todoList));
        }
    });
});