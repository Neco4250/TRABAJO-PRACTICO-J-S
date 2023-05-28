let cantidadEntradas;
let descuento;
let resultado;
let totalPago = document.getElementById("totalPago");
let resumen = document.getElementById("resumen");
let borrar = document.getElementById("reset");
const PRECIO = 200;


function obtenerCantidadEntradas(){
    cantidadEntradas = parseFloat(document.getElementById("cantidadEntradas").value);
    return cantidadEntradas;
}

function obtenerDescuento(){
    descuento = parseFloat(document.getElementById("categoria").value);
    return descuento;
}

function precioFinal(cantidadEntradas, descuento){
    resultado = (PRECIO *cantidadEntradas) - (PRECIO * cantidadEntradas * descuento);
    return resultado;
}

function mostrarPrecioFinal(){
    precioFinal(cantidadEntradas, descuento);
    return total.innerHTML = `${ precioFinal(cantidadEntradas, descuento)}`
}

function borrarDatos(cantidadEntradas, descuento){
    cantidadEntradas = ""
    descuento = ""
    totalPago.innerHTML = ""
    return console.log(cantidadEntradas, descuento);
}


cantidadEntradas = document.getElementById("cantidadEntradas").addEventListener("change", obtenerCantidad);
descuento = document.getElementById("categoria").addEventListener("change", obtenerDescuento);
precioFinal(cantidadEntradas, descuento);
resumen.onclick = mostrarPrecioFinal
borrar.onclick = borrarDatos

