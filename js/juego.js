const contenedor1 = document.getElementById("contenedor-1");
const contenedor2 = document.getElementById("contenedor-2");
const contenedor3 = document.getElementById("contenedor-3");
const contenedorImgs = document.getElementById("contenedor-imgs");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("boton-reiniciar");

function mostrarMensaje() {
    let childrenId1 = contenedor1.children[0].id;
    let childrenId2 = contenedor2.children[0].id;
    let childrenId3 = contenedor3.children[0].id;
    
    if (childrenId1 === img2.id && 
        childrenId2 === img1.id && 
        childrenId3 === img3.id){
        mensaje.innerHTML = "Ganaste!!! 😎😎😎";
    } else {
        mensaje.innerHTML = "Perdiste!!! 😞😞😞";
    }
}
function verSiEstaVacio() {
    if (contenedorImgs.children.length === 0) {
        mostrarMensaje();
        console.log(contenedor1)
    }

}

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
    verSiEstaVacio();
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
