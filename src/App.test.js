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

describe("La direccion debe ser correcta", () => {
    it("Debe girar a la izq correctamente", () => {
        expect(girarIzq("N")).toEqual("O");
    });
    it("Debe girar a la izq correctamente", () => {
        expect(girarIzq("O")).toEqual("S");
    });
    it("Debe girar a la izq correctamente", () => {
        expect(girarIzq("S")).toEqual("E");
    });
    it("Debe girar a la izq correctamente", () => {
        expect(girarIzq("E")).toEqual("N");
    });
});

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

describe("La direccion debe ser correcta", () => {
    it("Debe girar a la der correctamente", () => {
        expect(girarDer("N")).toEqual("E");
    });
    it("Debe girar a la der correctamente", () => {
        expect(girarDer("O")).toEqual("N");
    });
    it("Debe girar a la der correctamente", () => {
        expect(girarDer("S")).toEqual("O");
    });
    it("Debe girar a la der correctamente", () => {
        expect(girarDer("E")).toEqual("S");
    });
});

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
describe("Avanzar debe funcionar correctamente", () => {
    var posicionInicial = [3, 3];
    var posicionInicialExtrema = [0, 0];
    var posicionInicialExtrema2 = [5, 5];
    var mapa = [5, 5];
    var posicionNorte = [3, 4];
    it("Debe avanzar correctamente al norte", () => {
        expect(avanzar(posicionInicial, 'N', mapa)).toEqual(posicionNorte);
    });
    var posicionSur = [3, 2];
    it("Debe avanzar correctamente al sur", () => {
        expect(avanzar(posicionInicial, 'S', mapa)).toEqual(posicionSur);
    });
    var posicionEste = [4, 3];
    it("Debe avanzar correctamente al este", () => {
        expect(avanzar(posicionInicial, 'E', mapa)).toEqual(posicionEste);
    });
    var posicionOeste = [2, 3];
    it("Debe avanzar correctamente al oeste", () => {
        expect(avanzar(posicionInicial, 'O', mapa)).toEqual(posicionOeste);
    });
    //----------------------------------------------------------------------
    it("Debe avanzar correctamente al norte sin salir del borde", () => {
        expect(avanzar(posicionInicialExtrema2, 'N', mapa)).toEqual(mapa);
    });
    it("Debe avanzar correctamente al sur sin salir del borde", () => {
        expect(avanzar(posicionInicialExtrema, 'S', mapa)).toEqual(posicionInicialExtrema);
    });
    it("Debe avanzar correctamente al este sin salir del borde", () => {
        expect(avanzar(posicionInicialExtrema2, 'E', mapa)).toEqual(mapa);
    });
    it("Debe avanzar correctamente al oeste sin salir del borde", () => {
        expect(avanzar(posicionInicialExtrema, 'O', mapa)).toEqual(posicionInicialExtrema);
    });

});

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
describe("El punto final del coche debe ser correcta", () => {
    var posicion1 = [0, 0];
    var posicion2 = [2, 2];
    var posicion3 = [5, 5];
    var posicion4 = [7, 7];
    var resultado1 = [0, 3];
    var resultado2 = [3, 3];
    var resultado3 = [7, 6];
    var resultado4 = [0, 0];
    it("Debe llegar a su destino correcto", () => {
        expect(moverAuto(posicion1, 'N', posicion3, 'AAA')).toEqual(resultado1);
    });
    it("Debe llegar a su destino correcto", () => {
        expect(moverAuto(posicion2, 'S', posicion3, 'IAIA')).toEqual(resultado2);
    });
    it("Debe llegar a su destino correcto", () => {
        expect(moverAuto(posicion3, 'E', posicion4, 'AAAAAIA')).toEqual(resultado3);
    });
    it("Debe llegar a su destino correcto", () => {
        expect(moverAuto(posicion1, 'O', posicion4, 'AAAAAAA')).toEqual(resultado4);
    });
});