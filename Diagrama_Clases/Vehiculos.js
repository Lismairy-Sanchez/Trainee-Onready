class Vehiculo {
    constructor(Marca, Modelo, Precio) {
            this.Marca = Marca;
            this.Modelo = Modelo;
            this.Precio = Precio;
        }
        //Se formatea el Precio a Valor moneda
    precio() {
        //Defino el idioma (es) y el pais (AR)
        const formato_Peso = new Intl.NumberFormat("es-AR", {
            // style: "currency", // formato moneda
            // currency: "ARS", //tipo de divisa
            //Defino el número mínimo de dígitos fraccionarios que se utilizarán y el número máximo de dígitos fraccionarios que se utilizarán.
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(this.Precio);
        return `$${formato_Peso}`;
    }
}
module.exports = Vehiculo;