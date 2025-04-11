import { Component } from '@angular/core';

const templateHTML: string = `
  <h1>Counter</h1>
  <hr />
  <h2>{{ counter }}</h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
`;

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  // template: templateHTML,
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
