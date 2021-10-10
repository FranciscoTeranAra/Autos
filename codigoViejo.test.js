//import calcularTotal from "./App.js";
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
    if (cantidad * precio * (1 + impuesto) < 0) {
        cantidad = 0;
        precio = 0;
        impuesto = 0;
    }
    return cantidad * precio * (1 + impuesto)
}

function verificarEstado(estado) {
    if (estado == "UT") {
        return true;
    } else {
        if (estado == "NV") {
            return true;
        } else {
            if (estado == "TX") {
                return true;
            } else {
                if (estado == "AL") {
                    return true;
                } else {
                    if (estado == "CA") {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
}

describe("Resultado debe ser exacto", () => {
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(20, 20, 'UT')).toEqual(426.6);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(5, 5, 'AL')).toEqual(26);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(10, 10, 'TX')).toEqual(106.25);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(20, 2, 'NV')).toEqual(43.2);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(5, 5, 'CA')).toEqual(27.0625);
    });
});

describe("No debe haber cantidades negativos", () => {
    it("No hay cantidades negativas", () => {
        expect(calcularTotal(-20, 20, 'UT')).toEqual(0);
    });
});

describe("No debe haber precios negativos", () => {
    it("No hay precios negativos", () => {
        expect(calcularTotal(20, -20, 'NV')).toEqual(0);
    });
});

describe("No debe estados fuera de la lista aceptada", () => {
    it("EL estado de Nueva York(NY) no esta en la lista", () => {
        expect(verificarEstado('NY')).toEqual(false);
    });
    it("Texas deberia esta en la lista", () => {
        expect(verificarEstado('TX')).toEqual(true);
    });
});