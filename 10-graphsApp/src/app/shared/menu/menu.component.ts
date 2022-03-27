import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.inetrface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      route: '/graphs/bars',
      text: 'Bars',
    },
    {
      route: '/graphs/double-bar',
      text: 'Double bars',
    },
    {
      route: '/graphs/donut',
      text: 'Donut',
    },
    {
      route: '/graphs/donut-http',
      text: 'Donut Http',
    },
  ];
}
