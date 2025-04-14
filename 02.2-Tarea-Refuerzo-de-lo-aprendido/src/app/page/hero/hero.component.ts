import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  nombre: WritableSignal<string> = signal('Ironman');
  edad: WritableSignal<number> = signal(45);

  getHeroDescription(): string {
    return `Nombre: ${this.nombre()} | Edad: ${this.edad()} años`;
  }

  capitalizado(): string {
    return this.nombre().toUpperCase();
  }

  changeHero(): void {
    this.nombre.set('Spiderman');
    this.edad.set(25);
  }

  resetForm(): void {
    this.nombre.set('Ironman');
    this.edad.set(45);
  }

  changeAge() {
    this.edad.set(60);
  }
}
