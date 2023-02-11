/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}

// Show Hamburger menu
const hamburger = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
    body.classList.toggle('overflow-hidden')
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        let dropdowns = document.getElementsByClassName("dropdown-content")
        let i
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i]
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show")
            }
        }
    }
}
