(function(ko) {
    const ChecklistVievModel = function(checklist) {
        this.checklist = checklist;
        this.newTaskTitle = ko.observable("");
        this.tasks = ko.observableArray();

        this.addTask = function() {
            this.checklist.addTask(this.newTaskTitle());
            this.newTaskTitle("");
            this.tasks(this.checklist.tasks)
        };
    };

    const Checklist = function() {
        this.tasks = [];

        this.addTask = function(taskTitle) {
            this.tasks.push({
                id: this.tasks.length,
                title: taskTitle,
            });

            console.log(this.tasks);
        };
    };

    this.removeTask = function(id) {};
    this.checkTask = function(id) {};

    let checklist = new Checklist();

    ko.applyBindings(
        new ChecklistVievModel(checklist),
        document.getElementById("todoList")
    );
})(ko);