const ABOUT_KEY = "music_about_text"
const SONGS_KEY = "music_songs"
const ALBUMS_KEY = "music_albums"

const aboutText = document.getElementById("aboutText")
const saveAbout = document.getElementById("saveAbout")
const songForm = document.getElementById("songForm")
const albumForm = document.getElementById("albumForm")
const songsList = document.getElementById("songsList")
const albumsList = document.getElementById("albumsList")

const defaultAbout =
  "Я создаю музыку как продолжение моего инженерного мышления: атмосфера, ритм и структура. Здесь я собираю релизы, тексты и концепты будущих работ."

const defaultSongs = [
  {
    title: "Demo Track",
    url: "https://soundcloud.com/",
    note: "Замените этой ссылкой свою реальную ссылку с площадки.",
  },
]

const read = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

const write = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const normalizeSpotify = (url) => {
  const m = url.match(/spotify\.com\/(track|album)\/([a-zA-Z0-9]+)/)
  return m ? `https://open.spotify.com/embed/${m[1]}/${m[2]}` : null
}

const normalizeYouTube = (url) => {
  const m = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : null
}

const normalizeSoundCloud = (url) => {
  if (!url.includes("soundcloud.com")) return null
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&visual=true`
}

const createEmbed = (url) => {
  const spotify = normalizeSpotify(url)
  if (spotify) return `<iframe class="music-embed" height="152" src="${spotify}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`

  const youtube = normalizeYouTube(url)
  if (youtube) return `<iframe class="music-embed" height="250" src="${youtube}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  const soundcloud = normalizeSoundCloud(url)
  if (soundcloud) return `<iframe class="music-embed" height="190" src="${soundcloud}" allow="autoplay"></iframe>`

  return ""
}

const renderCards = (items, root) => {
  root.innerHTML = ""

  items.forEach((item, index) => {
    const card = document.createElement("article")
    card.className = "music-card"

    const embed = createEmbed(item.url || "")

    card.innerHTML = `
      <h3>${item.title || "Без названия"}</h3>
      ${item.note ? `<p>${item.note}</p>` : ""}
      ${embed || ""}
      ${item.url ? `<a class="music-link" target="_blank" rel="noopener" href="${item.url}">Открыть на площадке</a>` : ""}
      <button class="music-btn" data-remove="${index}" type="button">Удалить</button>
    `

    root.appendChild(card)
  })

  root.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-remove"))
      const key = root === songsList ? SONGS_KEY : ALBUMS_KEY
      const itemsNow = read(key, [])
      itemsNow.splice(i, 1)
      write(key, itemsNow)
      renderCards(itemsNow, root)
    })
  })
}

const init = () => {
  aboutText.value = localStorage.getItem(ABOUT_KEY) || defaultAbout

  const songs = read(SONGS_KEY, defaultSongs)
  const albums = read(ALBUMS_KEY, [])

  renderCards(songs, songsList)
  renderCards(albums, albumsList)
}

saveAbout?.addEventListener("click", () => {
  localStorage.setItem(ABOUT_KEY, aboutText.value.trim())
})

songForm?.addEventListener("submit", (e) => {
  e.preventDefault()

  const title = document.getElementById("songTitle").value.trim()
  const url = document.getElementById("songUrl").value.trim()
  const note = document.getElementById("songNote").value.trim()

  const songs = read(SONGS_KEY, defaultSongs)
  songs.unshift({ title, url, note })
  write(SONGS_KEY, songs)
  renderCards(songs, songsList)
  songForm.reset()
})

albumForm?.addEventListener("submit", (e) => {
  e.preventDefault()

  const title = document.getElementById("albumTitle").value.trim()
  const url = document.getElementById("albumUrl").value.trim()
  const note = document.getElementById("albumNote").value.trim()

  const albums = read(ALBUMS_KEY, [])
  albums.unshift({ title, url, note })
  write(ALBUMS_KEY, albums)
  renderCards(albums, albumsList)
  albumForm.reset()
})

init()
