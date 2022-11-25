let bamh = document.querySelector('.abrir-modal-header');
let mbh = document.querySelector('.div-header');
let bcmh = document.querySelector('.boton-cerrar-modal-header');

bamh.addEventListener("click", () => {
    mbh.classList.add('magia');
});

bcmh.addEventListener("click", () => {
    mbh.classList.remove('magia');
});