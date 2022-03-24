import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item.interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      route: 'maps/full-screen',
      name: 'Full Screen',
    },
    {
      route: 'maps/zoom-range',
      name: 'Zoom Range',
    },
    {
      route: 'maps/markers',
      name: 'Markers',
    },
    {
      route: 'maps/properties',
      name: 'Properties',
    },
  ];
}
