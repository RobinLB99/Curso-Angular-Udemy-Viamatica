// Optional Chaining
/**
 * El Optional Chaining es una forma de acceder a propiedades de un objeto que pueden
 * no existir.
 * Si la propiedad no existe, no se lanza un error, sino que se devuelve undefined.
 * Si la propiedad existe, se devuelve su valor.
 * Si la constante o variable no existe, tiene un tipo de dato especifico (como number),
 * el operator OR (||) se puede usar para asignar un valor por defecto según el tipo
 * de dato del objeto que se almacena.
 */

interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Robin",
};

const passenger2: Passenger = {
  name: "Maria",
  children: ["Robin"],
};

const printPassenger = (passenger: Passenger) => {
  const { name, children } = passenger;
  const howManyChildren: number = passenger.children?.length || 0; // optional chaining
  console.log("Passenger: ", name);
  console.log("Children: ", howManyChildren);
  if (howManyChildren > 0) console.log("Names Children: ", children);
};

printPassenger(passenger1);
printPassenger(passenger2);
