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