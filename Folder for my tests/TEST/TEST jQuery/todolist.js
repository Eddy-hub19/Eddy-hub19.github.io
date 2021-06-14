$(function() {
    loadPage();
    // 1. Press Enter to add the data to local storage
    $("#title").on("keyup", function(e) {
        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("please enter something");
            } else {
                // First declare an array to receive locally stored data
                var localDate = getLocalStorage();
                console.log(localDate);
                // append new elements to local storage
                localDate.push({
                    title: $(this).val(),
                    done: false,
                });
                // Update local storage data
                setLocalStorage(localDate);
                // 2. Render the page
                loadPage();
            }
            // Clear the contents of the form
            $(this).val("");
        }
    });

    // 3. Delete button operation
    // The essence is that the data in the local storage is deleted, and the page is re-rendered
    $("#todolist,#donelist").on("click", "a", function() {
        // Get the index number of the current click
        var index = $(this).attr("id");
        console.log(index);
        // read local storage
        var localDate = getLocalStorage();
        // Delete the corresponding data splice (the actual position of the deletion, the number of deletions)
        localDate.splice(index, 1);
        // Update local storage data
        setLocalStorage(localDate);
        // Re-render the page
        loadPage();
    });

    // 4. Click the checkbox to match the status
    // The essence is to click to change the state of the check box in the local storage data to re-render the page
    $("#todolist,#donelist").on("click", "input", function() {
        // Read local storage data
        var localDate = getLocalStorage();
        // Get the index of the clicked element
        var index = $(this).siblings("a").attr("id");
        // change the data
        localDate[index].done = $(this).prop("checked");
        // Update local data
        setLocalStorage(localDate);
        // Re-render the page
        loadPage();
    });

    // 5. Count the number-operate when rendering the page

    // 2. Render locally stored data to the page
    function loadPage() {
        // 2.1 First read the local storage data
        var date = getLocalStorage();
        // Before traversing, clear the content of ul and ol in the page to prevent repeated additions later
        $("#todolist,#donelist").empty();
        // Record the number of completed and in progress
        var toDoCount = 0;
        var doneCount = 0;
        // 2.2 Traverse the local storage data, create as many li as there are as many objects
        $.each(date, function(i, ele) {
            // According to the state of the checkbox, decide which part to add to
            // done is true and added to donelist
            if (ele.done) {
                // Custom attribute id records the location of data in local storage
                $("#donelist").prepend(
                    "<li><input type = 'checkbox' checked><p>" +
                    ele.title +
                    "</p><a href = '#' id=" +
                    i +
                    "></a></li>"
                );
                // Update the number
                doneCount++;
            } else {
                $("#todolist").prepend(
                    "<li><input type = 'checkbox'><p>" +
                    ele.title +
                    "</p><a href = '#' id=" +
                    i +
                    "></a></li>"
                );
                toDoCount++;
            }
        });
        $("#todocount").text(toDoCount);
        $("#donecount").text(doneCount);
    }

    // read locally stored data
    function getLocalStorage() {
        var date = localStorage.getItem("toDoList");
        // Determine whether the local storage is empty
        if (date != null) {
            return JSON.parse(date);
        } else {
            return []; // return an empty array if empty
        }
    }
    // Save locally stored data
    function setLocalStorage(date) {
        localStorage.setItem("toDoList", JSON.stringify(date));
    }
});