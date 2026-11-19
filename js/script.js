// Seleccionar el botón de la página
const boton = document.getElementById("botonMensaje");

// Seleccionar el elemento donde aparecerá el mensaje
const mensaje = document.getElementById("mensaje");

// Evento de clic
boton.addEventListener("click", function () {

    // Mostrar un mensaje cuando el usuario hace clic
    mensaje.textContent =
        "¡Trabajo Colaborativo! Estamos aprendiendo Git y GitHub.";

});