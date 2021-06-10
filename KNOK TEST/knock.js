function ToDoItem(task, isCompleted) {
    this.task = ko.observable(task);
    this.isCompleted = ko.observable(isCompleted);
}

function ListViewModel() {
    let self = this;

    self.toDoItems = ko.observableArray([
        new ToDoItem("Walk the dog", false),
        new ToDoItem("Do more stuff", false),
        new ToDoItem("Some stuff that's done", true)
    ]);

    self.addTodoItem = function() {
        self.toDoItems.push(new ToDoItem("", false));
    }

    self.removeTodoItem = function(todoItem) {
        self.toDoItems.remove(todoItem);
    }
}

ko.applyBindings(new ListViewModel());