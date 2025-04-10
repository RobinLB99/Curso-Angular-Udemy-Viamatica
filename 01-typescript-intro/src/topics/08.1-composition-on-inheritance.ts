import { Person } from "./08-classes";

class Hero {
  // Inyección de dependencia (priorización de composición sobre herencia)
  private person: Person;

  constructor(
    person: Person,
    private alterEgo: string,
    private superPower: string,
    private ege: number,
    private realName: string = "undefined"
  ) {
    this.person = person;
    this.alterEgo = alterEgo;
    this.superPower = superPower;
    this.ege = ege;
    this.realName =
      realName.trim() === "undefined"
        ? `${this.person.getFirstName()} ${this.person.getLastName()}`
        : realName;
  }

  // Getter and Setter for alterEgo
  getAlterEgo(): string {
    return this.alterEgo;
  }

  setAlterEgo(alterEgo: string): void {
    this.alterEgo = alterEgo;
  }

  // Getter and Setter for superPower
  getSuperPower(): string {
    return this.superPower;
  }

  setSuperPower(superPower: string): void {
    this.superPower = superPower;
  }

  // Getter and Setter for ege
  getEge(): number {
    return this.ege;
  }

  setEge(ege: number): void {
    this.ege = ege;
  }

  // Getter and Setter for realName
  getRealName(): string {
    return this.realName;
  }

  setRealName(realName: string): void {
    this.realName = realName;
  }
}

const clark: Person = new Person("Clark", "Kent", "Metropolis");
const superman: Hero = new Hero(clark, "Superman", "Fly", 30);
console.log(superman);
