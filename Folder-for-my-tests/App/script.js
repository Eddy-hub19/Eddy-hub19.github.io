Amplitude.init({
  songs: [
    {
      name: "Song Name 1",
      artist: "Artist Name",
      album: "Album Name",
      url: "https://521dimensions.com/song/Vorel-RussianCircles.mp3",
      cover_art_url:
        "https://media-exp3.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk",
    },
    {
      name: "Song Name 2",
      artist: "Artist Name",
      album: "Album Name",
      url: "/song/url.mp3",
      cover_art_url: "/cover/art/url.jpg",
    },
    {
      name: "Song Name 3",
      artist: "Artist Name",
      album: "Album Name",
      url: "/song/url.mp3",
      cover_art_url: "/cover/art/url.jpg",
    },
  ],
});

// set variables
let currentSong = 0,
  maxSong,
  playing = false,
  position = 0,
  maxPosition = 1800,
  pause = false;

const elements = {
  images: document.getElementsByClassName("album-art"),
  songs: document.getElementsByClassName("song"),
  artists: document.getElementsByClassName("artist"),
  play: document.getElementById("play-button"),
  previous: document.getElementById("previous-button"),
  next: document.getElementById("next-button"),
  currentSong: document.getElementById("current-song"),
  slider: document.getElementById("slider"),
};

// controlling the DOM
function next() {
  updateDOM("remove");
  currentSong++;
  if (currentSong > maxSong) {
    currentSong = 0;
  }
  updateDOM("add");
  elements.slider.value = 0;
  position = 0;
}

function previous() {
  updateDOM("remove");
  currentSong--;
  if (currentSong < 0) {
    currentSong = maxSong;
  }
  updateDOM("add");
  elements.slider.value = 0;
}

function updateDOM(action) {
  elements.currentSong.innerHTML = currentSong + 1;
  if (action === "add") {
    elements.images[currentSong].classList.add("active");
    elements.songs[currentSong].classList.add("active");
    elements.artists[currentSong].classList.add("active");
  } else {
    elements.images[currentSong].classList.remove("active");
    elements.songs[currentSong].classList.remove("active");
    elements.artists[currentSong].classList.remove("active");
  }
}

function playBar() {
  if (!pause) {
    setTimeout(function () {
      elements.slider.value = position++;
      if (position > maxPosition) {
        position = 0;
        next();
      }
      playBar();
    }, 10);
  }
}

function play() {
  if (!playing) {
    pause = false;
    playBar();
    elements.play.classList.add("pause");
  } else {
    pause = true;
    elements.play.classList.remove("pause");
  }
  playing = !playing;
}

function sliderChange() {
  position = elements.slider.value;
}

// initial setup
function init() {
  // setup first image
  elements.images[currentSong].classList.toggle("active");
  elements.songs[currentSong].classList.toggle("active");
  elements.artists[currentSong].classList.toggle("active");
  maxSong = elements.images.length - 1;
  // event listeners for controls
  elements.next.addEventListener("click", function () {
    next();
  });
  elements.previous.addEventListener("click", function () {
    previous();
  });
  elements.play.addEventListener("click", function () {
    play();
  });
  elements.slider.oninput = sliderChange;
}

init();
