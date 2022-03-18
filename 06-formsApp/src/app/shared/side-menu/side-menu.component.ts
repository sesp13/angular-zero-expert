import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [],
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: 'template/basics',
    },
    {
      text: 'Dynamics',
      route: 'template/dynamics',
    },
    {
      text: 'Switches',
      route: 'template/switches',
    },
  ];
  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: 'reactive/basics',
    },
    {
      text: 'Dynamics',
      route: 'reactive/dynamics',
    },
    {
      text: 'Switches',
      route: 'reactive/switches',
    },
  ];
}