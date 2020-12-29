// Import
const Vehiculo = require("./Vehiculos");

//Clase Motos extiende de la clase Vehiculos
class Moto extends Vehiculo {
    constructor(Marca, Modelo, Precio, Cilindrada) {
        super(Marca, Modelo, Precio); //Llamo funciones del objeto padre
        this.Cilindrada = Cilindrada;
    }
}
module.exports = Moto;