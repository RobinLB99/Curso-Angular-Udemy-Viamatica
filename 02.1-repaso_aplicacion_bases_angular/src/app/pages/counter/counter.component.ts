import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
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
