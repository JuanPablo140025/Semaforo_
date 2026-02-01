const rojo = document.getElementById("rojo");
const amarillo = document.getElementById("amarillo");
const verde = document.getElementById("verde");

const btnRojo = document.getElementById("btn-rojo");
const btnAmarillo = document.getElementById("btn-amarillo");
const btnVerde = document.getElementById("btn-verde");
const btnApagar = document.getElementById("btn-apagar");

const estado = document.getElementById("estado");

// Estado único del semáforo
let estadoActual = "apagado";

// Función central que controla el semáforo
function cambiarEstado(nuevoEstado) {
    // Apagar todas las luces
    rojo.style.background = "gray";
    amarillo.style.background = "gray";
    verde.style.background = "gray";

    estadoActual = nuevoEstado;

    if (nuevoEstado === "rojo") {
        rojo.style.background = "red";
        estado.textContent = "Estado: Alto";
    } 
    else if (nuevoEstado === "amarillo") {
        amarillo.style.background = "yellow";
        estado.textContent = "Estado: Precaución";
    } 
    else if (nuevoEstado === "verde") {
        verde.style.background = "green";
        estado.textContent = "Estado: Avanza";
    } 
    else {
        estado.textContent = "Estado: Apagado";
    }
}

// Estado inicial
cambiarEstado("apagado");

// Eventos de los botones
btnRojo.addEventListener("click", () => cambiarEstado("rojo"));
btnAmarillo.addEventListener("click", () => cambiarEstado("amarillo"));
btnVerde.addEventListener("click", () => cambiarEstado("verde"));
btnApagar.addEventListener("click", () => cambiarEstado("apagado"));
