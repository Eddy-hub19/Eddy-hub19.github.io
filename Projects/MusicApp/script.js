const songsToAdd = [{
        name: "Дождь",
        artist: "Mkt.san & Tabasco",
        album: "Monori",
        url: "/Projects/MusicApp/music/Дождь.mp3",
        cover_art_url: "/Projects/MusicApp/music/Rain.jpg",
    },
    {
        name: "Жизнь Комедия",
        artist: "Mkt.san",
        album: "Monori",
        url: "/Projects/MusicApp/music/Жизнь комедия - Mkt.san.mp3",
        cover_art_url: "#",
    },
    {
        name: "Моя сонная мелодия",
        artist: "Mkt.san",
        album: "Monori",
        url: "/Projects/MusicApp/music/Моя сонная мелодия.mp3",
        cover_art_url: "#",
    },
    {
        name: "Arigato",
        artist: "Mkt.san & Mr.Benjiro",
        album: "Monori",
        url: "/Projects/MusicApp/music/Arigato.mp3",
        cover_art_url: "http://surl.li/xwou",
    },
];

Amplitude.init({
    songs: [{
            name: "Arigato",
            artist: "Mkt.san & Mr.Benjiro",
            album: "Monori",
            url: "/Projects/MusicApp/music/Arigato.mp3",
            cover_art_url: "https://media.istockphoto.com/vectors/arigato-ink-brush-vector-lettering-thank-you-in-japanese-modern-vector-id1270607235",
        },
        {
            name: "Муза",
            artist: "Mkt.san & Mr.Benjiro",
            album: "Monori",
            url: "/Projects/MusicApp/music/Муза.mp3",
            cover_art_url: "/Projects/MusicApp/music/vetka.jpg",
        },
        {
            name: "Vecher",
            artist: "Mkt.san & Mr.Benjiro",
            album: "Monori",
            url: "/Projects/MusicApp/music/Vecher.mp3",
            cover_art_url: "/Projects/MusicApp/music/vecher.jpg",
        },
        {
            name: "Моя сонная мелодия",
            artist: "Mkt.san",
            album: "Monori",
            url: "/Projects/MusicApp/music/Моя сонная мелодия.mp3",
            cover_art_url: "/Projects/MusicApp/music/my sleepy melody.jpg",
        },
        {
            name: "Жизнь Комедия",
            artist: "Mkt.san",
            album: "Monori",
            url: "/Projects/MusicApp/music/Жизнь комедия - Mkt.san.mp3",
            cover_art_url: "/Projects/MusicApp/music/Life.jpg",
        },
        {
            name: "Monori",
            artist: "Mkt.san",
            album: "Monori",
            url: "/Projects/MusicApp/music/MONORI.mp3",
            cover_art_url: "/Projects/MusicApp/music/Monori.jpg",
        },
    ],
});

/* Shows the playlist */
document
    .getElementsByClassName("show-playlist")[0]
    .addEventListener("click", function() {
        document
            .getElementById("white-player-playlist-container")
            .classList.remove("slide-out-top");
        document
            .getElementById("white-player-playlist-container")
            .classList.add("slide-in-top");
        document.getElementById("white-player-playlist-container").style.display =
            "block";
    });

/* Hides the playlist */
document
    .getElementsByClassName("close-playlist")[0]
    .addEventListener("click", function() {
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
    addToPlaylistButtons[i].addEventListener("click", function() {
        let songToAddIndex = this.getAttribute("song-to-add");
        let newIndex = Amplitude.addSong(songsToAdd[songToAddIndex]);
        appendToSongDisplay(songsToAdd[songToAddIndex], newIndex);
        Amplitude.bindNewElements();

        /* Removes the container that contained the add to playlist button. */
        let songToAddRemove = document.querySelector(
            '.song-to-add[song-to-add="' + songToAddIndex + '"]'
        );
        songToAddRemove.parentNode.removeChild(songToAddRemove);
    });
}

/* Appends the song to the display. */
function appendToSongDisplay(song, index) {
    /* Grabs the playlist element we will be appending to. */
    let playlistElement = document.querySelector(".white-player-playlist");

    /* Creates the playlist song element */
    let playlistSong = document.createElement("div");
    playlistSong.setAttribute(
        "class",
        "white-player-playlist-song amplitude-song-container amplitude-play-pause"
    );
    playlistSong.setAttribute("data-amplitude-song-index", index);

    /* Creates the playlist song image element */
    let playlistSongImg = document.createElement("img");
    playlistSongImg.setAttribute("src", song.cover_art_url);

    /* Creates the playlist song meta element */
    let playlistSongMeta = document.createElement("div");
    playlistSongMeta.setAttribute("class", "playlist-song-meta");

    /* Creates the playlist song name element */
    let playlistSongName = document.createElement("span");
    playlistSongName.setAttribute("class", "playlist-song-name");
    playlistSongName.innerHTML = song.name;

    /* Creates the playlist song artist album element */
    let playlistSongArtistAlbum = document.createElement("span");
    playlistSongArtistAlbum.setAttribute("class", "playlist-song-artist");
    playlistSongArtistAlbum.innerHTML = song.artist + " &bull; " + song.album;

    /* Appends the name and artist album to the playlist song meta. */
    playlistSongMeta.appendChild(playlistSongName);
    playlistSongMeta.appendChild(playlistSongArtistAlbum);

    /* Appends the song image and meta to the song element */
    playlistSong.appendChild(playlistSongImg);
    playlistSong.appendChild(playlistSongMeta);

    /* Appends the song element to the playlist */
    playlistElement.appendChild(playlistSong);
}