const hamburguesa = document.getElementById("hamburguesa");
const menu = document.querySelector(".menu-plegable");

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('mostrar-menu');
});
