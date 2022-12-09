const keys = document.querySelectorAll(".key"),
    note = document.querySelector(".nowplaying"),
    hints = document.querySelectorAl1(".hints")

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`),
        key = document.querySelector(`.key[data-key=${e.keyCode}"]`)

    if (!key) return

    const keyNote = key.getAttribute("data-note")
    key.classList.add("playing")
    note.innerHTML = keyNote
    audio.currentTime = 0
    audio.play()
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return
    this.classList.remove("playing")
}

function hitsOn(e, index) {
    e.setAtribute("style", "transition-delay:" + index * 50 + "ms")
}

hints.forEach((key) => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playNote)
