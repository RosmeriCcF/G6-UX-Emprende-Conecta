// Obtener el botón "Siguiente" y "Registrar"
const botonSiguiente = document.getElementById("Siguiente");
const botonRegistrar = document.getElementById("Registrar");

// Obtener el formulario 1 y el formulario 2
const form1 = document.getElementsByClassName("form__pag-1")[0];
const form2 = document.getElementsByClassName("form__pag-2")[0];

// Agregar un evento de clic al botón "Siguiente"
botonSiguiente.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Ocultar el formulario 1
    form1.style.display = "none";
    
    // Mostrar el formulario 2
    form2.style.display = "block";
});

botonRegistrar.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'flex'; // Muestra el popup
});

document.getElementById('Iniciar').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none'; // Oculta el popup
});