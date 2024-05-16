document.addEventListener("DOMContentLoaded", function() {
    const botonContinuarPagina1 = document.getElementById("boton-continuar-pagina1");
    const botonContinuarPagina2 = document.getElementById("boton-continuar-pagina2");
    const seccion1 = document.getElementById("form_pag_1");
    const seccion2 = document.getElementById("form_pag_2");
    const seccion3 = document.getElementById("form_pag_3");

    botonContinuarPagina1.addEventListener("click", function(event) {
        event.preventDefault();
        seccion1.style.display = "none";
        seccion2.style.display = "flex";
        seccion3.style.display = "none";
        seccion2.scrollIntoView({ behavior: "smooth" });
    });

    botonContinuarPagina2.addEventListener("click", function(event) {
        event.preventDefault();
        seccion1.style.display = "none";
        seccion2.style.display = "none";
        seccion3.style.display = "flex";
        seccion3.scrollIntoView({ behavior: "smooth" });
    });
});

botonRegistrar.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'flex';
});

document.getElementById('Iniciar').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
});
