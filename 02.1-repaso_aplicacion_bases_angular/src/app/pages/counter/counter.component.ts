import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  // Usando Angular Signals
  // counterSignal es una señal que almacena el valor del contador
  // y se inicializa en 0.
  // La señal es una forma de manejar el estado reactivo en Angular.
  // Se puede pensar en ella como una variable que notifica a los componentes
  // cuando su valor cambia, lo que permite que los componentes se actualicen
  // automáticamente cuando el valor de la señal cambia.
  // En este caso, la señal se utiliza para almacenar el valor del contador
  // y se actualiza cada vez que se incrementa o decrementa el contador.
  // La señal se puede utilizar en la plantilla HTML para mostrar el valor
  // del contador y se actualiza automáticamente cuando el valor de la señal cambia.
  counterSignal = signal(0);

  incrementIn(value: number): void {
    this.counterSignal.update((current) => current + value);
  }

  decrementIn(value: number): void {
    this.counterSignal.update((current) => current - value);
  }

  resetCounter(): void {
    this.counterSignal.update(() => 0);
  }
}
