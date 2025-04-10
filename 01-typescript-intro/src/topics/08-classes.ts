class Person {
  // private name: string;
  // private address: string;

  /* constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  } */

  // Constructor con valores por defecto y definición de propiedades. Forma corta de definir propiedades y constructor.
  constructor(
    private firstName: string,
    private lastName: string,
    private address: string = "No address"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }
}

class Hero extends Person {
  private superPower: string;
  private alterEgo: string;
  private age: number;
  private realName: string;

  constructor(
    name: string,
    address: string,
    superPower: string = "None super power",
    alterEgo: string,
    age: number = 0,
    realName: string
  ) {
    super(realName, address);
    this.superPower = superPower;
    this.alterEgo = alterEgo;
    this.age = age;
    this.realName = realName;
  }

  public getSuperPower(): string {
    return this.superPower;
  }

  public setSuperPower(superPower: string): void {
    this.superPower = superPower;
  }

  public getAlterEgo(): string {
    return this.alterEgo;
  }

  public setAlterEgo(alterEgo: string): void {
    this.alterEgo = alterEgo;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getRealName(): string {
    return this.realName;
  }

  public setRealName(realName: string): void {
    this.realName = realName;
  }
}

/* const ironMan = new Hero(
  "Tony",
  "New York",
  undefined,
  "Iron Man",
  50,
  "Tony Stark"
);
const batman = new Hero(
  "Bruce",
  "Gotham",
  undefined,
  "Batman",
  35,
  "Bruce Wayne"
); */

// console.log(ironMan, batman);

// Las propiedades son igualmente accesible en el navegador debido a que javascript, internamente, no define una propiedad como publica, privada o protogida. Al transpilar a JavaScript, todas las propiedades son accesibles.
// console.log(ironMan.name, ironMan.address);
// console.log(batman.name, batman.address);

// console.log(ironMan.getName(), ironMan.getAddress(), ironMan.getSuperPower());
// console.log(batman.getName(), batman.getAddress(), batman.getSuperPower());

// Clase hija Hero.
// const superMan = new Hero(
//   "Clark Kent",
//   "Metropolis",
//   "Fly",
//   "Superman",
//   30,
//   "Clark Kent"
// );

/* console.log(
  superMan.getName(),
  superMan.getAddress(),
  superMan.getSuperPower()
); */

export { Person, Hero };
