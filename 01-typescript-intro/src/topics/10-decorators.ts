/**
 * Decoradores
 * Los decoradores son un tipo especial de declaración que se puede adjuntar a una clase, método, accesor, propiedad o parámetro.
 * Los decoradores se pueden usar para modificar el comportamiento de la clase, método, accesor, propiedad o parámetro.
 * Los decoradores son una propuesta de etapa 2 para JavaScript y están disponibles en TypeScript.
 * Los decoradores son una forma de agregar metadatos a clases, métodos, accesores, propiedades o parámetros.
 * Los decoradores son una forma de modificar el comportamiento de clases, métodos, accesores, propiedades o parámetros.
 * Los decoradores son una forma de agregar funcionalidad a clases, métodos, accesores, propiedades o parámetros.
 */

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProp = "newProp";
    hello = "override";
  };
}

@classDecorator
class SuperClass {
  public myProp: string = "myProp";

  method() {
    console.log("SuperClass method");
  }
}

console.log(SuperClass); //Definición de la clase

const superClass: SuperClass = new SuperClass();
console.log(superClass); //Instancia de la clase

export { SuperClass };
