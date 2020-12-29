// Import
const Vehiculos = require("./Vehiculos");

//Clase Auto extiende de la clase Vehiculos
class Autos extends Vehiculos {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio); //Llamo funciones del objeto padre
        this.puertas = puertas;
    }
}
module.exports = Autos;