import { Component, signal, WritableSignal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';

@Component({
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super-pages.component.html',
  styleUrl: './dragonball-super-pages.component.css',
})
export class DragonballSuperPagesComponent {
  name: WritableSignal<string> = signal('');
  power: WritableSignal<number> = signal(0);

  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9001 }]);

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
}
