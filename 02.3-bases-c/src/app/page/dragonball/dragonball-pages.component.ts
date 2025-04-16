import { NgClass } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-pages',
  imports: [
    //NgClass
  ],
  templateUrl: './dragonball-pages.component.html',
  styleUrl: './dragonball-pages.component.css',
})
export class DragonballPagesComponent {
  name: WritableSignal<string> = signal('');
  power: WritableSignal<number> = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Krillin', power: 900 },
    { id: 4, name: 'Gohan', power: 7000 },
    { id: 5, name: 'Piccolo', power: 5000 },
    { id: 6, name: 'Yamcha', power: 500 },
  ]);

  addCharacter() {
    if (this.power() < 1000) {
      alert('Poder insignificante. No se agrega a la lista');
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    console.log(`Character: ${this.name()} | Power: ${this.power()}`);
    this.characters.update((currentList) => [...currentList, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': this.characters()[0].power > 9000,
  //   };
  // });
}
