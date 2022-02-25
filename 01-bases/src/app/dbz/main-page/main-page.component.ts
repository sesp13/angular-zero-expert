import { Component } from '@angular/core';

interface Character {
  name: string,
  power: number,
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: "Goku",
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    },
    {
      name: 'Trunks',
      power: 9000
    }
  ];

  newHero: Character = {
    name: '',
    power: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if (this.newHero.name.trim().length === 0) {
      return;
    }
    this.characters.push(this.newHero);
    // Reset character
    this.newHero = {
      name: '',
      power: 0
    }
  }

}
