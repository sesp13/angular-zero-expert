import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es <strong>{{ base }}</strong></h3>
    <button (click)="acumular(base)"> + {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)"> - {{ base }}</button>
  `
})
export class ContadorComponent {
  title: string = 'Contador App';

  base = 555;

  numero: number = 0;

  acumular(valor: number) {
    this.numero += valor;
  }
}