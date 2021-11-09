// Song data
const songList = [
    {
        title: "Acoustic Breeze",
        file: "acousticbreeze.mp3",
        cover: "1.png"
    },
    {
        title: "A New Beginning",
        file: "anewbeginning.mp3",
        cover: "2.png"
    },
    {
        title: "Creative Minds",
        file: "creativeminds.mp3",
        cover: "3.png"
    },
]
// Cancion actual

let actualSong = null

//Capturar elementos del DOM para trabajar con JS

const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const prev = document.getElementById("prev")
const play = document.getElementById("play")
const next = document.getElementById("next")

//Cargar canciones y mostrar el listado

function loadSongs(){
    songList.forEach((song, index) => {
        //Crear li
        const li = document.createElement("li")
        //Crear a
        const link = document.createElement("a")
        //Hidratar a
        link.textContent = song.title
        link.href = "#"
        //Escuchar clicks
        link.addEventListener("click",() => loadSong(index))
        //Añadir a li
        li.appendChild(link)
        //Añadir li a ul
        songs.appendChild(li)
    })
}
//Cargar canción seleccionada
function loadSong(songIndex){
    if(songIndex !== actualSong){
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src= "audio/" + songList[songIndex].file
        audio.play()
        updateControls()
        changeCover(songIndex)
        changeSongTitle(songIndex)

    }
}
//Actualizar controles

function updateControls(){
    if (audio.paused){
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    }else{
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")

    }
}

//Cambiar clase activa

function changeActiveClass(lastIndex, newIndex){
    const links = document.querySelectorAll("a")
    if(lastIndex !== null){
        links[lastIndex].classList.remove("activo")
    }
    links[newIndex].classList.add("activo")
}

// Cambiar el cover de la cancion

function changeCover(songIndex){
    cover.src = "img/" + songList[songIndex].cover
}

//Cambiar el titulo de la canción

function changeSongTitle (songIndex){
    title.innerText = songList[songIndex].title
}
// GO
loadSongs()
