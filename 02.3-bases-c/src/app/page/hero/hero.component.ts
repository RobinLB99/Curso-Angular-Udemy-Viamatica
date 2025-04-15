import { UpperCasePipe } from '@angular/common';
import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  nombre: WritableSignal<string> = signal('Ironman');
  edad: WritableSignal<number> = signal(45);

  // Señal computada. Cambia automáticamente cuando cambia el nombre o la edad
  heroDescription: Signal<string> = computed(() => {
    return `${this.nombre()} | Edad: ${this.edad()} años`;
  });

  capitalizedName: Signal<string> = computed(() => {
    return this.nombre().toUpperCase();
  });

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
