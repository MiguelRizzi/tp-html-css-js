const video = document.getElementById('video');
const botonPlay = document.getElementById('boton-play'); 
const botonPausa = document.getElementById('boton-pausa'); 
const progresoVideo = document.getElementById('progreso-video');
const duracionTotal = document.getElementById('duracion-total'); 

botonPlay.addEventListener('click', function() {
    video.play();
});

botonPausa.addEventListener('click', function() {
    video.pause();
});

// formatea la duración del video a MM:SS
function formatear(duracion) {
    const minutos = Math.floor(duracion / 60); // calcula los minutos redondeando hacia abajo
    const segundos = Math.floor(duracion % 60); // calcula los segundos redondeando hacia abajo
    let duracion_formateada = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    return duracion_formateada // devuelve la duracion con el formato MM:SS
}
// actualizar el tiempo actual y el progreso del video
video.addEventListener('timeupdate', () => {
    const tiempoActualVideo = video.currentTime; // obtiene el tiempo actual 
    const duracionTotalVideo = video.duration; // obtiene la duración 

    progresoVideo.textContent = formatear(tiempoActualVideo);
    duracionTotal.textContent = formatear(duracionTotalVideo); 
});

// actualizar la duración del video al cargar la página
video.addEventListener('loadeddata', () => {
    const duracionTotalVideo = video.duration; // Obtiene la duración

    progresoVideo.textContent = formatear(0); // progreso = 0
    duracionTotal.textContent = formatear(duracionTotalVideo); // actualiza la duración
});

