import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'Batman',
    'Capitain America',
  ];

  public deletedHero: string = '';

  constructor() {
    console.log("Constructor");
  }

  deleteHero() {
    const deletedHero = this.heroes.pop();
    this.deletedHero = deletedHero ?? '';
    console.log(deletedHero);
  }

}
