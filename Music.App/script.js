const songsToAdd = [
  {
    name: "Terrain",
    artist: "pg.lost",
    album: "Key",
    url: "/Music.App/music/cali.mp3",
    cover_art_url: "http://surl.li/xwou",
  },
  {
    name: "Vorel",
    artist: "Russian Circles",
    album: "Guidance",
    url: "/Music.App/music/Dont-Cry.mp3",
    cover_art_url:
      "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg",
  },
  {
    name: "Intro / Sweet Glory",
    artist: "Jimkata",
    album: "Die Digital",
    url: "/Music.App/music/Our-Last-Night.mp3",
    cover_art_url:
      "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg",
  },
  {
    name: "Offcut #6",
    artist: "Little People",
    album: "We Are But Hunks of Wood Remixes",
    url: "https://521dimensions.com/songs/Offcut6-LittlePeople.mp3",
    cover_art_url:
      "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg",
  },
  {
    name: "Dusk To Dawn",
    artist: "Emancipator",
    album: "Dusk To Dawn",
    url: "https://521dimensions.com/songs/DuskToDawn-Emancipator.mp3",
    cover_art_url: "http://surl.li/xwou",
  },
  {
    name: "Be Somebody",
    artist: "Thousand Foot",
    album: "Krutch",
    url: "Music.App/music/Be-Somebody.mp3",
    cover_art_url: "http://surl.li/xwou",
  },
];

Amplitude.init({
  songs: [
    {
      name: "Risin' High (feat Raashan Ahmad)",
      artist: "Ancient Astronauts",
      album: "We Are to Answer",
      url: "/Music.App/music/Black Atlass - Lie To Me.mp3",
      cover_art_url: "http://surl.li/xwoc",
    },
    {
      name: "Miamor",
      artist: "Adventure",
      album: "Mi",
      url: "/Music.App/music/Miamor - adventure .mp3",
      cover_art_url: "http://surl.li/xwny",
    },
    {
      name: "Anvil",
      artist: "Lorn",
      album: "Anvil",
      url: "https://521dimensions.com/songs/LORN - ANVIL.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg",
    },
    {
      name: "I Came Running",
      artist: "Ancient Astronauts",
      album: "We Are to Answer",
      url: "https://521dimensions.com/songs/ICameRunning-AncientAstronauts.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
    },
    {
      name: "First Snow",
      artist: "Emancipator",
      album: "Soon It Will Be Cold Enough",
      url: "https://521dimensions.com/songs/FirstSnow-Emancipator.mp3",
      cover_art_url:
        "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
    },
  ],
});

/*
    Shows the playlist
  */
document
  .getElementsByClassName("show-playlist")[0]
  .addEventListener("click", function () {
    document
      .getElementById("white-player-playlist-container")
      .classList.remove("slide-out-top");
    document
      .getElementById("white-player-playlist-container")
      .classList.add("slide-in-top");
    document.getElementById("white-player-playlist-container").style.display =
      "block";
  });

/*
    Hides the playlist
  */
document
  .getElementsByClassName("close-playlist")[0]
  .addEventListener("click", function () {
    document
      .getElementById("white-player-playlist-container")
      .classList.remove("slide-in-top");
    document
      .getElementById("white-player-playlist-container")
      .classList.add("slide-out-top");
    document.getElementById("white-player-playlist-container").style.display =
      "none";
  });
const addToPlaylistButtons = document.getElementsByClassName(
  "add-to-playlist-button"
);

for (let i = 0; i < addToPlaylistButtons.length; i++) {
  addToPlaylistButtons[i].addEventListener("click", function () {
    let songToAddIndex = this.getAttribute("song-to-add");
    let newIndex = Amplitude.addSong(songsToAdd[songToAddIndex]);
    appendToSongDisplay(songsToAdd[songToAddIndex], newIndex);
    Amplitude.bindNewElements();

    /*
        Removes the container that contained the add to playlist button.
      */
    let songToAddRemove = document.querySelector(
      '.song-to-add[song-to-add="' + songToAddIndex + '"]'
    );
    songToAddRemove.parentNode.removeChild(songToAddRemove);
  });
}

/*
    Appends the song to the display.
  */
function appendToSongDisplay(song, index) {
  /*
      Grabs the playlist element we will be appending to.
    */
  let playlistElement = document.querySelector(".white-player-playlist");

  /*
      Creates the playlist song element
    */
  let playlistSong = document.createElement("div");
  playlistSong.setAttribute(
    "class",
    "white-player-playlist-song amplitude-song-container amplitude-play-pause"
  );
  playlistSong.setAttribute("data-amplitude-song-index", index);

  /*
      Creates the playlist song image element
    */
  let playlistSongImg = document.createElement("img");
  playlistSongImg.setAttribute("src", song.cover_art_url);

  /*
      Creates the playlist song meta element
    */
  let playlistSongMeta = document.createElement("div");
  playlistSongMeta.setAttribute("class", "playlist-song-meta");

  /*
      Creates the playlist song name element
    */
  let playlistSongName = document.createElement("span");
  playlistSongName.setAttribute("class", "playlist-song-name");
  playlistSongName.innerHTML = song.name;

  /*
      Creates the playlist song artist album element
    */
  let playlistSongArtistAlbum = document.createElement("span");
  playlistSongArtistAlbum.setAttribute("class", "playlist-song-artist");
  playlistSongArtistAlbum.innerHTML = song.artist + " &bull; " + song.album;

  /*
      Appends the name and artist album to the playlist song meta.
    */
  playlistSongMeta.appendChild(playlistSongName);
  playlistSongMeta.appendChild(playlistSongArtistAlbum);

  /*
      Appends the song image and meta to the song element
    */
  playlistSong.appendChild(playlistSongImg);
  playlistSong.appendChild(playlistSongMeta);

  /*
      Appends the song element to the playlist
    */
  playlistElement.appendChild(playlistSong);
}
