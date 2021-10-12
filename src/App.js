const cantidad = document.querySelector("#main-input");
const form = document.querySelector("#auto-form");


function myFunction() {
    var text = document.getElementById("main-input").value;
    var res = separarSlash(text, "/");
    var direcciones = separarSlash(res[0], ",");
    var posicionInicial = separarSlash(res[1], ",")
    var tamGrid = res[2];
    var orientacion = getOrientacion(posicionInicial[1]);
    posicionInicial[1] = fixOrientacion(posicionInicial);
    alert(posicionInicial);
    //+ " " + posicionInicial + " " + tamGrid
}

function fixOrientacion(posicionInicial) {
    return posicionInicial[1].slice(0, -1);
}

function separarSlash(str, separador) {
    var res = [];
    /*var rest = str.substring(0, str.lastIndexOf("/"));
    var last = str.substring(str.lastIndexOf("/") + 1, str.length);
    res.push(last);
    rest = rest.substring(0, rest.lastIndexOf("/"));
    last = rest.substring(rest.lastIndexOf("/") + 1, rest.length);
    res.push(last);
    res.push(rest);*/
    res = str.split(separador);
    return res;
}

function getOrientacion(variable) {
    return variable.substr(variable.length - 1);
}
//export default myFunction;