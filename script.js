const rojo = document.getElementById("rojo");
const amarillo = document.getElementById("amarillo");
const verde = document.getElementById("verde");

const btnRojo = document.getElementById("btn-rojo");
const btnAmarillo = document.getElementById("btn-amarillo");
const btnVerde = document.getElementById("btn-verde");
const btnApagar = document.getElementById("btn-apagar");

const estado = document.getElementById("estado");

// Al cargar la página: todos apagados
rojo.style.background = "gray";
amarillo.style.background = "gray";
verde.style.background = "gray";

btnRojo.addEventListener("click", () => {
    rojo.style.background = "red";
    amarillo.style.background = "gray";
    verde.style.background = "gray";
    estado.textContent = "Estado: Encendido";
});

btnAmarillo.addEventListener("click", () => {
    rojo.style.background = "gray";
    amarillo.style.background = "yellow";
    verde.style.background = "gray";
    estado.textContent = "Estado: Encendido";
});

btnVerde.addEventListener("click", () => {
    rojo.style.background = "gray";
    amarillo.style.background = "gray";
    verde.style.background = "green";
    estado.textContent = "Estado: Encendido";
});

btnApagar.addEventListener("click", () => {
    rojo.style.background = "gray";
    amarillo.style.background = "gray";
    verde.style.background = "gray";
    estado.textContent = "Estado: Apagado";
});