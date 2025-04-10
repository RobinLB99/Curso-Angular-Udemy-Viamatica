/**
 * Generics me ayuda a crear funciones, clases o interfaces que pueden trabajar
 * con diferentes tipos de datos sin perder la información del tipo.
 * En este caso, la función `whatsMyType` recibe un argumento de tipo genérico `T`
 * y devuelve el mismo tipo `T`. Esto significa que la función puede aceptar
 * cualquier tipo de dato y devolverlo sin modificarlo.
 */
function whatsMyType<T>(arg: T): T {
  return arg;
}

let amIString: string = whatsMyType<string>("Hello world!");
let amINumber: number = whatsMyType<number>(42);
let amIArrayNumber: number[] = whatsMyType<number[]>([1, 2, 3]);

console.log(amIString.split(" ")); // Hello world!
console.log(amINumber.toFixed(2)); // 42.00
console.log(amIArrayNumber.map((n) => n * 2)); // [2, 4, 6]

export { whatsMyType };
