const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  homedown?: string; //El simbolo ? indica que es opcional.
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.homedown = "Rivendel";

console.table(strider);
