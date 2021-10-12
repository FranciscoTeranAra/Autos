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