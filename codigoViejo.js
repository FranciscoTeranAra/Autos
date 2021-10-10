const cantidad = document.querySelector("#Cantidad-input");
const form = document.querySelector("#totalizador-form");
const precio = document.querySelector("#Precio-input");
const estado = document.querySelector("#estado-input");
/*const direccion = document.querySelector("#direccion-input");
const telefono = document.querySelector("#telefono-input");
const ciudad = document.querySelector("#ciudad-input");
const regalo = document.querySelector("#regalo-input");*/

function calcularTotal(cantidad, precio, estado) {
    if (estado == "UT") {
        impuesto = 0.0665;
    } else {
        if (estado == "NV") {
            impuesto = 0.08;
        } else {
            if (estado == "TX") {
                impuesto = 0.0625;
            } else {
                if (estado == "AL") {
                    impuesto = 0.04;
                } else {
                    if (estado == "CA") {
                        impuesto = 0.0825;
                    } else {
                        impuesto = 0;
                    }
                }
            }
        }
    }
    return cantidad * precio * (1 + impuesto)
}

//export default sumar;
export default calcularTotal;

form.addEventListener("submit", (event) => {

    var total = cantidad.value * precio.value;
    var envoltorio = 0;

    alert("La cantidad indicada: " + cantidad.value);
    alert("El precio indicado: " + precio.value);
    alert("El total es: " + total);
    alert("El estado indicado: " + estado.value);
    /*alert("La direccion indicada: " + direccion.value);
    alert("El telefono indicado: " + telefono.value);
    alert("La ciudad indicada: " + ciudad.value);*/


    var impuesto = 0;

    if (estado.value == "UT") {
        impuesto = 0.0665 * total;
    } else {
        if (estado.value == "NV") {
            impuesto = 0.08 * total;
        } else {
            if (estado.value == "TX") {
                impuesto = 0.0625 * total;
            } else {
                if (estado.value == "AL") {
                    impuesto = 0.04 * total;
                } else {
                    if (estado.value == "CA") {
                        impuesto = 0.0825 * total;
                    } else {
                        impuesto = 0;
                    }
                }
            }
        }
    }

    /* var descuento = 0;


    if (total >= 30000) {
        descuento = 0.15 * total;
    } else {
        if (total >= 10000) {
            descuento = 0.1 * total;
        } else {
            if (total >= 7000) {
                descuento = 0.07 * total;
            } else {
                if (total >= 3000) {
                    descuento = 0.05 * total;
                } else {
                    if (total >= 1000) {
                        descuento = 0.03 * total;
                    }
                }
            }
        }
    }

    if (regalo.value == 'S') {
        envoltorio = 5;
        alert("El envio es un regalo, se agregara el precio del envoltorio");
    } else {
        alert("El envio no es un regalo, no se aumentara el precio del envoltorio ");
    }
*/
    alert("El total mas el impuesto es: " + (total + impuesto));
    //alert("El total mas el impuesto y menos el descuento es:  " + (total + impuesto - descuento + envoltorio));



});