import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  useUpperCase: boolean = true;

  heroes: Hero[] = [
    {
      name: 'SuperMan',
      flies: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      flies: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      flies: false,
      color: Color.green,
    },
    {
      name: 'DareDevil',
      flies: false,
      color: Color.red,
    },
    {
      name: 'GreenLantern',
      flies: true,
      color: Color.green,
    },
  ];

  orderBy: string = '';

  changeUpperCase() {
    this.useUpperCase = !this.useUpperCase;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }
}
