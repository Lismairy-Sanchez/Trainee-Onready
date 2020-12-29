//Import
const Auto = require("./Diagrama_Clases/Autos");
const Moto = require("./Diagrama_Clases/Motos");

//Líneas que separan los campos
const separador = "=============================";

//Array de objetos
const newVehiculos = [
    new Auto("Peugeot", "206", 4, 200000),
    new Moto("Honda", "Titan", "125cc", 60000),
    new Auto("Peugeot", "208", 5, 250000),
    new Moto("Yamaha", "YBR", "160cc", 80500.5),
];

const Todo = (newVehiculos) => {
    //Defino un array vacio
    const Todos_Vehiculos = [];
    newVehiculos.forEach((Vehiculo) => {
        if (Vehiculo.Puertas) {
            //Si el Vehículo tiene puertas, lo pusheo al nuevo Array como Auto
            Todos_Vehiculos.push(
                new Auto(
                    Vehiculo.Marca,
                    Vehiculo.Modelo,
                    Vehiculo.Puertas,
                    Vehiculo.Precio
                )
            );
        } else {
            Todos_Vehiculos.push(
                //Si el Vehículo no tiene puertas, lo agrego al Array como Moto
                new Moto(
                    Vehiculo.Marca,
                    Vehiculo.Modelo,
                    Vehiculo.Cilindrada,
                    Vehiculo.Precio
                )
            );
        }
    });
    Todos_Vehiculos.forEach((Vehiculo) => {
        //Si el vehículo tiene puertas, muestro por consola el Auto =(Marca, Modelo, Puertas y Precio)
        if (Vehiculo.Puertas) {
            console.log(
                `Marca: ${Vehiculo.Marca} // Modelo: ${Vehiculo.Modelo} // Puertas: ${
          Vehiculo.Puertas
        } // Precio: ${Vehiculo.precio()}`
            );
        } else {
            //Sino tiene puertas, muestro por consola la Moto =(Marca, Modelo, Cilindradas y Precio)
            console.log(
                `Marca: ${Vehiculo.Marca} // Modelo: ${
          Vehiculo.Modelo
        } // Cilindrada: ${Vehiculo.Cilindrada} // Precio: ${Vehiculo.precio()}`
            );
        }
    });
    console.log(separador);

    //Defino el vehículo más caro, con sort comparo vehiculo_a con vehiculo_b y ordenado el array de modo ascendente.
    const masCaro = Todos_Vehiculos.sort(
        (vehiculo_a, vehiculo_b) => vehiculo_b.Precio - vehiculo_a.Precio
    );
    //Muestro por consola
    console.log(`Vehículo más caro: ${masCaro[0].Marca} ${masCaro[0].Modelo}`);

    //Defino el vehículo más barato, tomando la última posición del array previamente organizado de forma ascendente.
    console.log(
        `Vehículo más barato: ${masCaro[masCaro.length - 1].Marca} ${
      masCaro[masCaro.length - 1].Modelo
    }`
    );

    //Defino los vehículos que incuyen la letra 'Y' en su modelo
    //con filter creo un nuevo array con todos los elementos que incluyen (includes) la letra 'Y'
    const contieneY = Todos_Vehiculos.filter((Vehiculo) => {
        return Vehiculo.Modelo.includes("Y");
    });
    //Muestro por consola
    console.log(
        `Vehículo que contiene en el modelo la letra 'Y': ${contieneY[0].Marca} ${
      contieneY[0].Modelo
    } ${contieneY[0].precio()}`
    );

    console.log(separador);

    //Organizo los vehículos de mayor a menor precio.
    console.log("Vehículos ordenados por precio de mayor a menor:");
    masCaro.forEach((Vehiculo) => {
        console.log(`${Vehiculo.Marca} ${Vehiculo.Modelo}`);
    });
};
Todo(newVehiculos);