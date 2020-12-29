// Import
const Vehiculos = require("./Vehiculos");

//Clase Auto extiende de la clase Vehiculos
class Auto extends Vehiculos {
    constructor(Marca, Modelo, Precio, Puertas) {
        super(Marca, Modelo, Precio); //Llamo funciones del objeto padre
        this.Puertas = Puertas;
    }
}
module.exports = Autos;