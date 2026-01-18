const rojo = document.getElementById("rojo");
const amarillo = document.getElementById("amarillo");
const verde = document.getElementById("verde");

const btnRojo = document.getElementById("btn-rojo");
const btnAmarillo = document.getElementById("btn-amarillo");
const btnVerde = document.getElementById("btn-verde");

// Al cargar la página: todos apagados
rojo.style.background = "gray";
amarillo.style.background = "gray";
verde.style.background = "gray";

btnRojo.addEventListener("click", () => {
    rojo.style.background = "red";
    amarillo.style.background = "gray";
    verde.style.background = "gray";
});

btnAmarillo.addEventListener("click", () => {
    rojo.style.background = "gray";
    amarillo.style.background = "yellow";
    verde.style.background = "gray";
});

btnVerde.addEventListener("click", () => {
    rojo.style.background = "gray";
    amarillo.style.background = "gray";
    verde.style.background = "green";
});