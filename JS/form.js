
/*let cantidadEntradas;
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
    descuento = parseFloat(document.getElementById("tipo").value);
    return descuento;
}

function precioFinal(cantidadEntradas, descuento){
    resultado = (PRECIO *cantidadEntradas) - (PRECIO * cantidadEntradas * descuento);
    return resultado;
}

function mostrarPrecioFinal(){
    precioFinal(cantidadEntradas, descuento);
    return totalPago.innerHTML = `${precioFinal(cantidadEntradas, descuento)}`
}

function borrarDatos(cantidadEntradas, descuento){
    cantidadEntradas = "";
    descuento = ""
    totalPago.innerHTML = ""
    return console.log(cantidadEntradas, descuento);
}


cantidadEntradas = document.getElementById("cantidadEntradas").addEventListener("change", obtenerCantidad);
descuento = document.getElementById("tipo").addEventListener("change", obtenerDescuento);
precioFinal(cantidadEntradas, descuento);
resumen.onclick = mostrarPrecioFinal;
borrar.onclick = borrarDatos*/

function calcularTotal() {
            let valorUnitario = 200;
            let cantidad = parseInt(document.getElementById("cantidad").value);
            let categoria = document.getElementById("categoria").value;
            let descuento = 0;
            
            if (categoria === "estudiante") {
                descuento = 0.80;
            } else if (categoria === "traineer") {
                descuento = 0.50;
            } else if (categoria === "junior") {
                descuento = 0.15;
            }
            
            var total = valorUnitario * cantidad * (1 - descuento);
            
            document.getElementById("total").value = total;
        }
        
        function borrarTotal() {
            document.getElementById("total").value = "";
        }
    