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
    });

    botonContinuarPagina2.addEventListener("click", function(event) {
        event.preventDefault();
        seccion2.style.display = "none";
        seccion3.style.display = "flex";
    });

    const checkboxes = document.querySelectorAll(".restricciones");
    const botones = document.querySelectorAll(".boton-01");

    botones.forEach((boton, index) => {
        boton.addEventListener("click", function () {
            checkboxes[index].checked = !checkboxes[index].checked;
            if (checkboxes[index].checked) {
                boton.classList.add("clicked");
            } else {
                boton.classList.remove("clicked");
            }
        });
    });
});
