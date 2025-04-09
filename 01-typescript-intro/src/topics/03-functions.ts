//Funciones
function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}

//Funciones flecha
const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

//Resultados
/* const result: number = addNumbers(7, 8);
const result2: string = addNumbersArrow(8, 9);

console.log(
  { funcion: addNumbers, tipoFuncion: "normal", resultado: result },
  {
    funcion: addNumbersArrow,
    tipoFuncion: "flecha",
    resultado: result2,
  },
); */

//Interfaz de definición de un objeto
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) =>
  (character.hp += amount);

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida: ${this.hp}`);
  },
};

strider.showHp(); //Con 50 puntos de vida.

healCharacter(strider, 20); //Restaura 20 puntos de vida a strider.

strider.showHp(); //Con 70 puntos de vida.
