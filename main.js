// ----- Cambiar a tema oscuro-------

const btnCambiarTema = document.querySelector("#btnDark");
const body = document.body;
const card = document.querySelector("#tarjeta1");


btnCambiarTema.addEventListener("click", cambiarTema);

function cambiarTema(){
    body.classList.toggle("temaOscuro");
    card.classList.toggle("backCard");
}