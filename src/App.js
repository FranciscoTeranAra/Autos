const cantidad = document.querySelector("#main-input");
const form = document.querySelector("#auto-form");


function myFunction() {
    var text = document.getElementById("main-input").value;
    var res = separarSlash(text, "/");
    var tamGrid = separarSlash(res[0], ",");
    var posicionInicial = separarSlash(res[1], ",")
    var direcciones = res[2];
    var orientacion = getOrientacion(posicionInicial[1]);
    posicionInicial[1] = fixOrientacion(posicionInicial);
    tamGrid[0] = parseInt(tamGrid[0]);
    tamGrid[1] = parseInt(tamGrid[1]);

    posicionInicial[0] = parseInt(posicionInicial[0]);
    posicionInicial[1] = parseInt(posicionInicial[1]);

    alert(moverAuto(posicionInicial, orientacion, tamGrid, direcciones));
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

function girarIzq(orientacionInicial) {
    if (orientacionInicial == "N")
        return "O";
    else if (orientacionInicial == "O")
        return "S";
    else if (orientacionInicial == "S")
        return "E";
    else if (orientacionInicial == "E")
        return "N";

}

function girarDer(orientacionInicial) {
    if (orientacionInicial == "N")
        return "E";
    else if (orientacionInicial == "O")
        return "N";
    else if (orientacionInicial == "S")
        return "O";
    else if (orientacionInicial == "E")
        return "S";

}

function avanzar(posicionInicial, orientacion, mapa) {
    var mov;
    var res;
    if (orientacion == "N")
        mov = [0, 1];
    else if (orientacion == "O")
        mov = [-1, 0];
    else if (orientacion == "S")
        mov = [0, -1];
    else if (orientacion == "E")
        mov = [1, 0];
    res = [posicionInicial[0] + mov[0], posicionInicial[1] + mov[1]];
    if (res[0] < 0)
        res[0] = 0;
    if (res[0] > mapa[0])
        res[0] = mapa[0];

    if (res[1] < 0)
        res[1] = 0;
    if (res[1] > mapa[1])
        res[1] = mapa[1];

    return res;
}

function moverAuto(posicionInicial, orientacion, mapa, movimientos) {
    for (var x = 0; x < movimientos.length; x++) {
        if (movimientos.charAt(x) == "D")
            orientacion = girarDer(orientacion);
        if (movimientos.charAt(x) == "I")
            orientacion = girarIzq(orientacion);
        if (movimientos.charAt(x) == "A")
            posicionInicial = avanzar(posicionInicial, orientacion, mapa);

    }
    return posicionInicial;
}
//export default myFunction;