function openPage(pageName, element, color) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink")
    for (o = 0; o < tablinks.length; o++) {
        tablinks[o].style.backgroundColor = ""
    }

    // Show the specific tab content

    document.getElementById(pageName).style.display = "block"

    // Add the specific color to the button used to open the tab content
    element.style.backgroundColor = color

    // Hide elements

    document.addEventListener("click", function (event) {
        let tablink = document.querySelector(".tablink")
        let tab = document.querySelectorAll(".tabcontent")

        if (!tablink.contains(event.target)) {
            tab.style.display = "block"
        } else {
            tab.style.display = "none"
        }
    })
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
