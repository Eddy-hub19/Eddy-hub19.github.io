(function(ko) {
    // function AppViewModel() {
    //     let test = "todo"; // The name of the local storage
    //     this.thingList = ko.observableArray();

    //     // Load the stuff from local storage
    //     let stuff = localStorage.getItem(test);
    //     if (stuff) {
    //         stuff = JSON.parse(actors);

    //         for (let i = 0; i < stuff.length; i++) {
    //             this.thingList.push(new Thing(stuff[i]));
    //         }
    //     }
    //     this.thingList.subscribe(function() {
    //         localStorage.setItem(test, ko.toJSON(this.thingList()));
    //     }, this);
    // }

    const ChecklistVievModel = function(checklist) {
        // let self = this;

        this.checklist = checklist;
        this.newTaskTitle = ko.observable("");
        this.tasks = ko.observableArray();

        this.addTask = function() {
            this.checklist.addTask(this.newTaskTitle());
            this.newTaskTitle("");
            this.tasks(this.checklist.tasks);
            AppViewModel();
        };

        this.removeTask = function(taskObject) {
            this.checklist.removeTask(taskObject.id);
            this.tasks(self.checklist.tasks);
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

    this.removeTask = function(id) {
        let taskIndex = this.getIndexById(id, this.tasks);

        if (typeof taskIndex !== "undefined") {
            this.tasks.splice(taskIndex, 1);
        }
    };
    // this.checkTask = function(id) {};

    this.getIndexById = function(id, tasks) {
        let index;

        for (let i = 0, max = tasks.length; i < max; i++) {
            if (tasks[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    };

    let checklist = new Checklist();

    ko.applyBindings(
        new ChecklistVievModel(checklist),
        document.getElementById("todoList")
    );

})(ko);