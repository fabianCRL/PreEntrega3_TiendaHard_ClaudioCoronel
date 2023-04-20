// ----- Cambiar a tema oscuro-------

const btnCambiarTema = document.querySelector("#btnDark");
const body = document.body;
const card = document.querySelector("#tarjeta1");


btnCambiarTema.addEventListener("click", cambiarTema);

function cambiarTema() {
    body.classList.toggle("temaOscuro");
    card.classList.toggle("backCard");
    if (body.classList.contains("temaOscuro"))
        btnCambiarTema.innerText = ("Tema Claro");
    else {
        btnCambiarTema.innerText = ("Tema Oscuro");
    }


}

// --------- Ingresar Usuario-----------

const formulario = document.querySelector('form');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre= document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const bienvenido = document.querySelector('h2');
    
const agregarUsuario = {
        nombre,
        email,
    };

    let usuarios = [];

    if (localStorage.getItem('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }

    usuarios.push(agregarUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    bienvenido.textContent = "Bienvenid@ " + nombre; 

    console.log('Usuario agregado correctamente');

    formulario.reset();
});
