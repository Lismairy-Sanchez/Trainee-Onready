// Import
const Vehiculos = require("./Vehiculos");

//Clase Motos extiende de la clase Vehiculos
class Motos extends Vehiculos {
    constructor(Marca, Modelo, Precio, Cilindrada) {
        super(Marca, Modelo, Precio); //Llamo funciones del objeto padre
        this.Cilindrada = Cilindrada;
    }
}
module.exports = Motos;