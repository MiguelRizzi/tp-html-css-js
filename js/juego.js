const contenedor1 = document.getElementById("contenedor-1");
const contenedor2 = document.getElementById("contenedor-2");
const contenedor3 = document.getElementById("contenedor-3");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
const botonReiniciar = document.getElementById("boton-reiniciar");

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const idImgArrastrada = event.dataTransfer.getData("text");
    const imgArrastrada = document.getElementById(idImgArrastrada);
    event.target.innerHTML = '';
    event.target.appendChild(imgArrastrada);
}

function reiniciarJuego() {
    location.reload();
}

img1.addEventListener("dragstart", dragStart);
img2.addEventListener("dragstart", dragStart);
img3.addEventListener("dragstart", dragStart);
contenedor1.addEventListener("dragover", dragOver);
contenedor1.addEventListener("drop", drop);
contenedor2.addEventListener("dragover", dragOver);
contenedor2.addEventListener("drop", drop);
contenedor3.addEventListener("dragover", dragOver);
contenedor3.addEventListener("drop", drop);
botonReiniciar.addEventListener("click", reiniciarJuego);