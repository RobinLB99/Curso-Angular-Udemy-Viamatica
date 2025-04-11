import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;

  // Señales
  counterSignal = signal(0); // Señal que se puede escribir.

  increaseBy(value: number): void {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value); // Actualiza la señal. (no recomendado)
    this.counterSignal.update((current) => current + value); // Actualiza la señal. (recomendado)
  }

  decreaseBy(value: number): void {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
