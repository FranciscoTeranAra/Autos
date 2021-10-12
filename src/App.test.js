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
    return res;
}
describe("Avanzar debe funcionar correctamente", () => {
    var posicionInicial = [3, 3];
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
});