const Vehiculos = require("./Vehiculos");

class Autos extends Vehiculos {
    //Clase Auto se extiende de la clase Vehiculos
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio); //Llamo funciones del objeto padre
        this.puertas = puertas;
    }
}
module.exports = Autos;