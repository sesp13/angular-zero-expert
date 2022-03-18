import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorite, Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent implements OnInit {
  @ViewChild('myForm') myform?: NgForm;

  person: Person = {
    name: 'Santiago',
    favorites: [
      {
        id: 1,
        name: 'The last of us',
      },
      {
        id: 2,
        name: 'God of war',
      },
    ],
  };

  newGame: string = '';

  constructor() {}

  ngOnInit(): void {}

  invalidName(): boolean {
    return (
      (this.myform?.controls?.name?.invalid &&
        this.myform?.controls?.name?.touched) ??
      true
    );
  }

  save() {
    console.log('Form posted');
  }

  deleteFavorite(i: number) {
    this.person.favorites.splice(i, 1);
  }

  addFavorite() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length,
      name: this.newGame,
    };
    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }
}
