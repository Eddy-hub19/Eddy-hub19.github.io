(function() {
    // "use strict";

    const ENTER_KEY = 13;
    const ESCAPE_KEY = 27;

    function keyhandlerBindingFactory(keyCode) {
        return {
            init: function(
                element,
                valueAccessor,
                allBindingsAccessor,
                data,
                bindingContext
            ) {
                let wrappedHandler, newValueAccessor;

                wrappedHandler = function(data, event) {
                    if (event.keyCode === keyCode) {
                        valueAccessor().call(this, data, event);
                    }
                };
                newValueAccessor = function() {
                    return {
                        keyup: wrappedHandler,
                    };
                };

                ko.bindingHandlers.event.init(
                    element,
                    newValueAccessor,
                    allBindingsAccessor,
                    data,
                    bindingContext
                );
            },
        };
    }

    ko.bindingHandlers.enterKey = keyhandlerBindingFactory(ENTER_KEY);

    ko.bindingHandlers.escapeKey = keyhandlerBindingFactory(ESCAPE_KEY);

    ko.bindingHandlers.selectAndFocus = {
        init: function(
            element,
            valueAccessor,
            allBindingsAccessor,
            bindingContext
        ) {
            ko.bindingHandlers.hasFocus.init(
                element,
                valueAccessor,
                allBindingsAccessor,
                bindingContext
            );
            ko.utils.registerEventHandler(element, "focus", function() {
                element.focus();
            });
        },
        update: function(element, valueAccessor) {
            ko.utils.unwrapObservable(valueAccessor());
            setTimeout(function() {
                ko.bindingHandlers.hasFocus.update(element, valueAccessor);
            }, 0);
        },
    };

    const Todo = function(title, completed) {
        this.title = ko.observable(title);
        this.completed = ko.observable(completed);
        this.editing = ko.observable(false);
    };
    const ViewModel = function(todos) {
        this.todos = ko.observableArray(
            todos.map(function(todo) {
                return new Todo(todo.title, todo.completed);
            })
        );

        this.current = ko.observable();

        this.showMode = ko.observable("all");

        this.filteredTodos = ko.computed(
            function() {
                switch (this.showMode()) {
                    case "active":
                        return this.todos().filter(function(todo) {
                            return !todo.completed();
                        });
                    case "completed":
                        return this.todos().filter(function(todo) {
                            return todo.completed();
                        });
                    default:
                        return this.todos();
                }
            }.bind(this)
        );

        // add a new todo
        this.add = function() {
            let current = this.current().trim();
            if (current) {
                this.todos.push(new Todo(current));
                this.current("");
            }
        }.bind(this);

        // remove todo
        this.remove = function(todo) {
            this.todos.remove(todo);
        }.bind(this);

        this.removeCompleted = function() {
            this.todos.remove(function(todo) {
                return todo.completed();
            });
        }.bind(this);

        this.completedCount = ko.computed(
            function() {
                return this.todos().filter(function(todo) {
                    return todo.completed();
                }).length;
            }.bind(this)
        );

        this.remainingCount = ko.computed(
            function() {
                return this.todos().length - this.completedCount();
            }.bind(this)
        );

        this.allCompleted = ko.computed({
            read: function() {
                return !this.remainingCount();
            }.bind(this),
            write: function(newValue) {
                this.todos().forEach(function(todo) {
                    todo.completed(newValue);
                });
            }.bind(this),
        });

        this.getLabel = function(count) {
            return ko.utils.unwrapObservable(count) === 1 ? "item" : "items";
        }.bind(this);

        ko.computed(
            function() {
                localStorage.setItem("todos-knockoutjs", ko.toJSON(this.todos));
            }.bind(this)
        ).extend({
            rateLimit: { timeout: 50, method: "notifyWhenChangesStop" },
        });
    };

    let todos = ko.utils.parseJson(localStorage.getItem("todos-knockoutjs"));

    let viewModel = new ViewModel(todos || []);
    ko.applyBindings(viewModel);
})();