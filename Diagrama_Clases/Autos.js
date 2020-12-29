// Import
const Vehiculo = require("./Vehiculos");

//Clase Auto extiende de la clase Vehiculos
class Auto extends Vehiculo {
    constructor(Marca, Modelo, Precio, Puertas) {
        super(Marca, Modelo, Precio); //Llamo funciones del objeto padre
        this.Puertas = Puertas;
    }
}
module.exports = Auto;